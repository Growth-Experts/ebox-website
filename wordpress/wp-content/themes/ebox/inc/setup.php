<?php
/**
 * Theme setup and assets.
 *
 * @package ebox
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('after_setup_theme', function (): void {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);

    register_nav_menus([
        'primary' => __('Primary Navigation', 'ebox'),
        'footer_products' => __('Footer Products', 'ebox'),
        'footer_company' => __('Footer Company', 'ebox'),
    ]);
});

add_action('wp_enqueue_scripts', function (): void {
    wp_enqueue_style(
        'ebox-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
        [],
        null
    );

    wp_enqueue_style(
        'ebox-theme',
        ebox_asset('css/main.css'),
        ['ebox-fonts'],
        EBOX_THEME_VERSION
    );

    wp_enqueue_script(
        'ebox-theme',
        ebox_asset('js/theme.js'),
        [],
        EBOX_THEME_VERSION,
        true
    );
});

add_action('wp_head', function (): void {
    $settings = ebox_get_site_defaults();
    $gtm_id = ebox_field('gtm_id', $settings['gtm_id'], 'option');

    if (!$gtm_id) {
        return;
    }
    ?>
    <script>
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','<?php echo esc_js($gtm_id); ?>');
    </script>
    <?php
}, 1);

add_action('wp_body_open', function (): void {
    $settings = ebox_get_site_defaults();
    $gtm_id = ebox_field('gtm_id', $settings['gtm_id'], 'option');

    if (!$gtm_id) {
        return;
    }
    ?>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<?php echo esc_attr($gtm_id); ?>" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <?php
}, 1);
