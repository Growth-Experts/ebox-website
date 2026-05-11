<?php
/**
 * Repeatable content importer for the Local WordPress build.
 *
 * @package ebox
 */

if (!defined('ABSPATH')) {
    exit;
}

function ebox_import_source_images_dir(): string
{
    if (defined('EBOX_IMPORT_IMAGE_SOURCE')) {
        return (string) EBOX_IMPORT_IMAGE_SOURCE;
    }

    return '/Users/jason/Code/eBox/public/images';
}

function ebox_import_upload_dir(): string
{
    $uploads = wp_upload_dir();
    return trailingslashit($uploads['basedir']) . 'ebox-imported';
}

function ebox_import_media(): void
{
    $source = ebox_import_source_images_dir();
    $target = ebox_import_upload_dir();

    if (!is_dir($source)) {
        return;
    }

    if (!is_dir($target)) {
        wp_mkdir_p($target);
    }

    foreach (glob($source . '/*') ?: [] as $file) {
        if (!is_file($file)) {
            continue;
        }

        $name = basename($file);
        $dest = trailingslashit($target) . $name;
        if (!file_exists($dest) || filemtime($file) > filemtime($dest)) {
            copy($file, $dest);
        }
    }
}

function ebox_find_or_create_page(string $slug, string $title, string $template): int
{
    $parent_id = 0;
    $parts = array_values(array_filter(explode('/', trim($slug, '/'))));
    $leaf = $parts ? array_pop($parts) : 'home';

    foreach ($parts as $part) {
        $parent = get_page_by_path($part);
        if (!$parent instanceof WP_Post) {
            $parent_id = wp_insert_post([
                'post_title' => ucwords(str_replace('-', ' ', $part)),
                'post_name' => $part,
                'post_status' => 'publish',
                'post_type' => 'page',
                'post_parent' => $parent_id,
            ]);
        } else {
            $parent_id = $parent->ID;
        }
    }

    $path = trim($slug, '/') ?: 'home';
    $existing = $slug === '' ? get_page_by_path('home') : get_page_by_path($path);
    if ($existing instanceof WP_Post) {
        $page_id = $existing->ID;
        wp_update_post([
            'ID' => $page_id,
            'post_title' => $title,
            'post_status' => 'publish',
            'post_parent' => $parent_id,
        ]);
    } else {
        $page_id = wp_insert_post([
            'post_title' => $title,
            'post_name' => $leaf,
            'post_status' => 'publish',
            'post_type' => 'page',
            'post_parent' => $parent_id,
            'post_content' => '',
        ]);
    }

    if (!is_wp_error($page_id) && $page_id) {
        update_post_meta((int) $page_id, '_wp_page_template', $template);
    }

    return is_wp_error($page_id) ? 0 : (int) $page_id;
}

function ebox_update_fields(int $page_id, array $fields, bool $preserve_existing = false): void
{
    foreach ($fields as $name => $value) {
        if (in_array($name, ['title', 'slug', 'template'], true)) {
            continue;
        }
        if ($preserve_existing && get_post_meta($page_id, $name, true) !== '') {
            continue;
        }
        if (function_exists('update_field')) {
            update_field($name, $value, $page_id);
        } else {
            update_post_meta($page_id, $name, $value);
        }
    }
}

function ebox_update_rank_math_meta(int $page_id, array $fields): void
{
    $settings = ebox_get_site_defaults();
    $meta = [
        'rank_math_title' => $fields['seo_title'] ?? '',
        'rank_math_description' => $fields['seo_description'] ?? '',
        'rank_math_canonical_url' => $fields['canonical'] ?? '',
        'rank_math_facebook_title' => $fields['seo_title'] ?? '',
        'rank_math_facebook_description' => $fields['seo_description'] ?? '',
        'rank_math_facebook_image' => $fields['seo_image'] ?? $settings['default_og_image'],
        'rank_math_twitter_title' => $fields['seo_title'] ?? '',
        'rank_math_twitter_description' => $fields['seo_description'] ?? '',
        'rank_math_twitter_image' => $fields['seo_image'] ?? $settings['default_og_image'],
    ];

    if (!empty($fields['robots'])) {
        $meta['rank_math_robots'] = [$fields['robots']];
    }

    foreach ($meta as $key => $value) {
        if ($value !== '') {
            update_post_meta($page_id, $key, $value);
        }
    }
}

function ebox_import_about_page(bool $overwrite = false): int
{
    $page_id = ebox_find_or_create_page('about', 'About Us', 'page-about.php');
    if (!$page_id) {
        return 0;
    }

    ebox_update_fields($page_id, ebox_get_about_defaults(), !$overwrite);
    ebox_update_rank_math_meta($page_id, ebox_get_about_defaults());

    return $page_id;
}

function ebox_import_navigation(array $page_ids): void
{
    $menus = [
        'Primary Navigation' => [
            'location' => 'primary',
            'items' => [
                'Home' => $page_ids['home'] ?? 0,
                'About Us' => $page_ids['about'] ?? 0,
                'eForms' => $page_ids['eforms'] ?? 0,
                'eConnect' => $page_ids['econnect'] ?? 0,
                'Contact Us' => $page_ids['contact'] ?? 0,
            ],
        ],
        'Footer Products' => [
            'location' => 'footer_products',
            'items' => [
                'eForms' => $page_ids['eforms'] ?? 0,
                'eConnect' => $page_ids['econnect'] ?? 0,
            ],
        ],
        'Footer Company' => [
            'location' => 'footer_company',
            'items' => [
                'About Us' => $page_ids['about'] ?? 0,
                'Contact' => $page_ids['contact'] ?? 0,
                'Privacy Policy' => $page_ids['privacy'] ?? 0,
            ],
        ],
    ];

    $locations = get_theme_mod('nav_menu_locations', []);

    foreach ($menus as $menu_name => $menu_config) {
        $menu = wp_get_nav_menu_object($menu_name);
        $menu_id = $menu ? (int) $menu->term_id : wp_create_nav_menu($menu_name);

        foreach (wp_get_nav_menu_items($menu_id) ?: [] as $item) {
            wp_delete_post($item->ID, true);
        }

        foreach ($menu_config['items'] as $label => $page_id) {
            if (!$page_id) {
                continue;
            }
            wp_update_nav_menu_item($menu_id, 0, [
                'menu-item-title' => $label,
                'menu-item-object' => 'page',
                'menu-item-object-id' => $page_id,
                'menu-item-type' => 'post_type',
                'menu-item-status' => 'publish',
            ]);
        }

        $locations[$menu_config['location']] = $menu_id;
    }

    set_theme_mod('nav_menu_locations', $locations);
}

function ebox_legacy_import_navigation(array $page_ids): void
{
    $primary_items = [
        'Home' => $page_ids['home'] ?? 0,
        'About Us' => $page_ids['about'] ?? 0,
        'eForms' => $page_ids['eforms'] ?? 0,
        'eConnect' => $page_ids['econnect'] ?? 0,
        'Contact Us' => $page_ids['contact'] ?? 0,
    ];
    $menu = wp_get_nav_menu_object('Primary Navigation');
    $menu_id = $menu ? (int) $menu->term_id : wp_create_nav_menu('Primary Navigation');

    foreach ($primary_items as $label => $page_id) {
        if (!$page_id) {
            continue;
        }
        wp_update_nav_menu_item($menu_id, 0, [
            'menu-item-title' => $label,
            'menu-item-object' => 'page',
            'menu-item-object-id' => $page_id,
            'menu-item-type' => 'post_type',
            'menu-item-status' => 'publish',
        ]);
    }

    $locations = get_theme_mod('nav_menu_locations', []);
    $locations['primary'] = $menu_id;
    set_theme_mod('nav_menu_locations', $locations);
}

function ebox_import_site_options(): void
{
    $settings = ebox_get_site_defaults();
    foreach ($settings as $name => $value) {
        if (function_exists('update_field')) {
            update_field($name, $value, 'option');
        } else {
            update_option('options_' . $name, $value);
        }
    }
    if (function_exists('update_field')) {
        update_field('form_recipients_text', implode("\n", $settings['form_recipients']), 'option');
    }
}

function ebox_import_content(bool $overwrite_about = false): array
{
    ebox_import_media();
    ebox_import_site_options();

    $page_ids = [];
    foreach (ebox_get_import_pages() as $key) {
        if ($key === 'about') {
            $page_ids[$key] = ebox_import_about_page($overwrite_about);
            continue;
        }

        $data = ebox_get_page_defaults($key);
        if (!$data) {
            continue;
        }

        $page_ids[$key] = ebox_find_or_create_page($data['slug'], $data['title'], $data['template']);
        if ($page_ids[$key]) {
            ebox_update_fields($page_ids[$key], $data);
            ebox_update_rank_math_meta($page_ids[$key], $data);
        }
    }

    if (!empty($page_ids['home'])) {
        update_option('show_on_front', 'page');
        update_option('page_on_front', $page_ids['home']);
    }

    ebox_import_navigation($page_ids);
    flush_rewrite_rules();

    return $page_ids;
}

if (defined('WP_CLI') && WP_CLI) {
    WP_CLI::add_command('ebox import-about', function ($args, $assoc_args): void {
        $page_id = ebox_import_about_page((bool) ($assoc_args['overwrite'] ?? false));
        if (!$page_id) {
            WP_CLI::error('Could not import the About page.');
        }
        WP_CLI::success(sprintf('Imported About page. ID: %d', $page_id));
    });

    WP_CLI::add_command('ebox import-content', function ($args, $assoc_args): void {
        $page_ids = ebox_import_content((bool) ($assoc_args['overwrite-about'] ?? false));
        WP_CLI::success(sprintf('Imported %d eBox pages.', count(array_filter($page_ids))));
    });
}

add_action('admin_menu', function (): void {
    add_management_page(
        __('eBox Import', 'ebox'),
        __('eBox Import', 'ebox'),
        'manage_options',
        'ebox-import',
        'ebox_render_import_page'
    );
});

function ebox_render_import_page(): void
{
    if (!current_user_can('manage_options')) {
        return;
    }

    $message = '';
    if (isset($_POST['ebox_import_content']) && check_admin_referer('ebox_import_content')) {
        $page_ids = ebox_import_content(!empty($_POST['overwrite_about']));
        $message = sprintf('Imported %d eBox pages.', count(array_filter($page_ids)));
    }
    ?>
    <div class="wrap">
        <h1><?php esc_html_e('eBox Import', 'ebox'); ?></h1>
        <?php if ($message) : ?>
            <div class="notice notice-success"><p><?php echo esc_html($message); ?></p></div>
        <?php endif; ?>
        <p><?php esc_html_e('Create or update the eBox marketing pages, menus, ACF values, Rank Math metadata, and imported images.', 'ebox'); ?></p>
        <form method="post">
            <?php wp_nonce_field('ebox_import_content'); ?>
            <p><label><input type="checkbox" name="overwrite_about" value="1"> <?php esc_html_e('Overwrite existing About page ACF values', 'ebox'); ?></label></p>
            <p><button class="button button-primary" name="ebox_import_content" value="1"><?php esc_html_e('Import Full Site Content', 'ebox'); ?></button></p>
        </form>
    </div>
    <?php
}

add_action('init', function (): void {
    $host = sanitize_text_field($_SERVER['HTTP_HOST'] ?? '');
    $is_local = str_ends_with($host, '.local') || str_starts_with($host, 'localhost');

    if (!$is_local || ($_GET['ebox_import_token'] ?? '') !== 'local-import') {
        return;
    }

    $page_ids = ebox_import_content(false);
    wp_die(
        esc_html(sprintf('Imported %d eBox pages.', count(array_filter($page_ids)))),
        esc_html__('eBox Import Complete', 'ebox'),
        ['response' => 200]
    );
});
