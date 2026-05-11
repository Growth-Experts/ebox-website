<?php
/**
 * Rank Math integration and schema fallbacks.
 *
 * @package ebox
 */

if (!defined('ABSPATH')) {
    exit;
}

function ebox_current_page_key(): string
{
    if (is_front_page()) {
        return 'home';
    }

    $post = get_post();
    if (!$post instanceof WP_Post) {
        return '';
    }

    $path = trim(get_page_uri($post), '/');

    return match ($path) {
        'about' => 'about',
        'eforms' => 'eforms',
        'econnect' => 'econnect',
        'contact' => 'contact',
        'book-demo' => 'book-demo',
        'contact/thank-you' => 'contact-thank-you',
        'book-demo/thank-you' => 'demo-thank-you',
        'privacy' => 'privacy',
        default => '',
    };
}

add_filter('pre_get_document_title', function ($title): string {
    $key = ebox_current_page_key();
    $defaults = $key === 'about' ? ebox_get_about_defaults() : ebox_get_page_defaults($key);

    return (string) ebox_field('seo_title', $defaults['seo_title'] ?? $title);
});

add_action('wp_head', function (): void {
    $key = ebox_current_page_key();
    if (!$key) {
        return;
    }

    $settings = ebox_get_site_defaults();
    $defaults = $key === 'about' ? ebox_get_about_defaults() : ebox_get_page_defaults($key);
    $title = ebox_field('seo_title', $defaults['seo_title'] ?? '');
    $description = ebox_field('seo_description', $defaults['seo_description'] ?? '');
    $canonical = ebox_field('canonical', $defaults['canonical'] ?? get_permalink());
    $image = ebox_field('seo_image', $defaults['seo_image'] ?? $settings['default_og_image']);
    $robots = ebox_field('robots', $defaults['robots'] ?? '');

    if ($description) {
        printf('<meta name="description" content="%s">' . "\n", esc_attr($description));
        printf('<meta property="og:description" content="%s">' . "\n", esc_attr($description));
        printf('<meta name="twitter:description" content="%s">' . "\n", esc_attr($description));
    }
    if ($title) {
        printf('<meta property="og:title" content="%s">' . "\n", esc_attr($title));
        printf('<meta name="twitter:title" content="%s">' . "\n", esc_attr($title));
    }
    if ($canonical) {
        printf('<link rel="canonical" href="%s">' . "\n", esc_url($canonical));
        printf('<meta property="og:url" content="%s">' . "\n", esc_url($canonical));
    }
    if ($image) {
        printf('<meta property="og:image" content="%s">' . "\n", esc_url($image));
        printf('<meta name="twitter:image" content="%s">' . "\n", esc_url($image));
    }
    if ($robots) {
        printf('<meta name="robots" content="%s">' . "\n", esc_attr($robots));
    }

    echo '<meta property="og:type" content="website">' . "\n";
    echo '<meta name="twitter:card" content="summary_large_image">' . "\n";

    if (($defaults['schema_type'] ?? '') === 'Organization') {
        $schema = [
            '@context' => 'https://schema.org',
            '@type' => 'Organization',
            'name' => 'eBox Software',
            'url' => 'https://www.eboxsoftware.com',
            'logo' => 'https://www.eboxsoftware.com/images/ebox-logo.svg',
            'description' => $description,
            'contactPoint' => [
                '@type' => 'ContactPoint',
                'email' => 'sales@eboxsoftware.com',
                'contactType' => 'sales',
            ],
        ];
        printf('<script type="application/ld+json">%s</script>' . "\n", wp_json_encode($schema, JSON_UNESCAPED_SLASHES));
    }

    if (($defaults['schema_type'] ?? '') === 'SoftwareApplication') {
        $schema = [
            '@context' => 'https://schema.org',
            '@type' => 'SoftwareApplication',
            'name' => $defaults['title'] ?? get_the_title(),
            'applicationCategory' => 'BusinessApplication',
            'operatingSystem' => 'Web',
            'url' => $canonical,
            'description' => $description,
            'publisher' => [
                '@type' => 'Organization',
                'name' => 'eBox Software',
                'url' => 'https://www.eboxsoftware.com',
            ],
        ];
        printf('<script type="application/ld+json">%s</script>' . "\n", wp_json_encode($schema, JSON_UNESCAPED_SLASHES));
    }
}, 20);
