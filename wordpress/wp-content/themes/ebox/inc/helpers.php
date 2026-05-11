<?php
/**
 * Shared theme helpers.
 *
 * @package ebox
 */

if (!defined('ABSPATH')) {
    exit;
}

function ebox_field(string $name, mixed $default = '', int|string|null $post_id = null): mixed
{
    if (function_exists('get_field')) {
        $value = get_field($name, $post_id ?: false);
        if ($value !== null && $value !== false && $value !== '') {
            return $value;
        }
    }

    return $default;
}

function ebox_asset(string $path): string
{
    return EBOX_THEME_URI . '/assets/' . ltrim($path, '/');
}

function ebox_url(string $path): string
{
    if (str_starts_with($path, 'http://') || str_starts_with($path, 'https://') || str_starts_with($path, 'mailto:') || str_starts_with($path, 'tel:')) {
        return $path;
    }

    return home_url('/' . ltrim($path, '/'));
}

function ebox_button(string $text, string $url, string $variant = 'primary', string $extra_class = ''): string
{
    $class = trim('button button-' . sanitize_html_class($variant) . ' ' . $extra_class);

    return sprintf(
        '<a class="%s" href="%s">%s</a>',
        esc_attr($class),
        esc_url(ebox_url($url)),
        esc_html($text)
    );
}

function ebox_icon(string $icon): string
{
    $icons = [
        'award' => '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>',
        'bar-chart' => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3v18h18"></path><path d="M7 16V9"></path><path d="M12 16V5"></path><path d="M17 16v-3"></path></svg>',
        'building' => '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M16 10h.01"></path><path d="M8 14h.01"></path><path d="M16 14h.01"></path></svg>',
        'check' => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>',
        'clock' => '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>',
        'database' => '<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"></path></svg>',
        'file' => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path></svg>',
        'heart' => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>',
        'lock' => '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
        'mail' => '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 6L2 7"></path></svg>',
        'shield' => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3z"></path></svg>',
        'upload' => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m17 8-5-5-5 5"></path><path d="M12 3v12"></path></svg>',
        'users' => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    ];

    return $icons[$icon] ?? $icons['check'];
}

function ebox_render_cards(array $cards, string $class = 'card-grid'): void
{
    if (!$cards) {
        return;
    }
    ?>
    <div class="<?php echo esc_attr($class); ?>">
        <?php foreach ($cards as $card) : ?>
            <article class="feature-card">
                <div class="icon-badge"><?php echo ebox_icon((string) ($card['icon'] ?? 'check')); ?></div>
                <h3><?php echo esc_html($card['title'] ?? ''); ?></h3>
                <p><?php echo wp_kses_post($card['description'] ?? ''); ?></p>
            </article>
        <?php endforeach; ?>
    </div>
    <?php
}
