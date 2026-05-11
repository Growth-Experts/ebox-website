<?php
/**
 * Shared marketing page renderer.
 *
 * @package ebox
 */

if (!defined('ABSPATH')) {
    exit;
}

$page_key = $args['page_key'] ?? ebox_current_page_key();
$data = ebox_get_page_defaults((string) $page_key);
$skip_hero = (bool) ($args['skip_hero'] ?? false);

$hero_theme = ebox_field('hero_theme', $data['hero_theme'] ?? 'light');
$hero_title = ebox_field('hero_title', $data['hero_title'] ?? '');
$hero_body = ebox_field('hero_body', $data['hero_body'] ?? '');
$hero_eyebrow = ebox_field('hero_eyebrow', $data['hero_eyebrow'] ?? '');
$primary_text = ebox_field('primary_cta_text', $data['primary_cta_text'] ?? '');
$primary_url = ebox_field('primary_cta_url', $data['primary_cta_url'] ?? '');
$secondary_text = ebox_field('secondary_cta_text', $data['secondary_cta_text'] ?? '');
$secondary_url = ebox_field('secondary_cta_url', $data['secondary_cta_url'] ?? '');
$hero_image = ebox_field('hero_image', $data['hero_image'] ?? '');
$hero_highlight = ebox_field('hero_highlight', $data['hero_highlight'] ?? '');
$hero_title_html = esc_html($hero_title);
if ($hero_highlight && str_contains($hero_title, $hero_highlight)) {
    $hero_title_html = str_replace(
        esc_html($hero_highlight),
        '<span class="hero-highlight">' . esc_html($hero_highlight) . '</span>',
        $hero_title_html
    );
}
?>

<?php if (!$skip_hero) : ?>
<section class="hero hero-<?php echo esc_attr($hero_theme); ?>">
    <div class="container hero-grid">
        <div class="hero-copy">
            <?php if ($hero_eyebrow) : ?><p class="eyebrow"><?php echo esc_html($hero_eyebrow); ?></p><?php endif; ?>
            <h1><?php echo wp_kses($hero_title_html, ['span' => ['class' => true]]); ?></h1>
            <?php if ($hero_body) : ?><p><?php echo esc_html($hero_body); ?></p><?php endif; ?>
            <?php if ($primary_text || $secondary_text) : ?>
                <div class="button-row">
                    <?php if ($primary_text && $primary_url) : echo ebox_button($primary_text, $primary_url, 'primary', 'button-large'); endif; ?>
                    <?php if ($secondary_text && $secondary_url) : echo ebox_button($secondary_text, $secondary_url, 'outline', 'button-large'); endif; ?>
                </div>
            <?php endif; ?>
            <?php if ($page_key === 'home') : ?>
                <p class="hero-proof">Used by leading real estate companies worldwide</p>
            <?php endif; ?>
        </div>
        <?php if ($hero_image) : ?>
            <div class="hero-media">
                <img src="<?php echo esc_url(home_url('/wp-content/uploads/ebox-imported/' . $hero_image)); ?>" alt="">
            </div>
        <?php else : ?>
            <div class="app-card" aria-hidden="true">
                <div class="app-card-top"><span></span><span></span><span></span><em class="app-card-label">eForms</em></div>
                <div class="app-card-body">
                    <div class="app-card-head">
                        <div>
                            <strong>Journal Entry #4920</strong>
                            <small>Period: Dec 2025 &middot; Created by S. Mitchell</small>
                        </div>
                        <span class="app-pill">Pending Approval</span>
                    </div>
                    <div class="app-field">
                        <label>Account Code</label>
                        <div class="app-input-row"><div class="app-row">4100-001-00</div><span class="app-check">✓</span></div>
                    </div>
                    <div class="app-field">
                        <label>Description</label>
                        <div class="app-input-row"><div class="app-row">Monthly rent adjustment, Lvl 4</div><span class="app-check">✓</span></div>
                    </div>
                    <div class="app-grid">
                        <div class="app-field">
                            <label>Debit</label>
                            <div class="app-input-row"><div class="app-row">$12,450.00</div><span class="app-check">✓</span></div>
                        </div>
                        <div class="app-field">
                            <label>Credit</label>
                            <div class="app-input-row"><div class="app-row">$12,450.00</div><span class="app-check">✓</span></div>
                        </div>
                    </div>
                    <div class="app-status"><span>✓</span> All fields validated, ready for approval</div>
                    <div class="app-action">Approve &amp; Import to MRI</div>
                </div>
            </div>
        <?php endif; ?>
    </div>
</section>
<?php endif; ?>

<?php if (!empty($data['stats']) || !empty($data['logos'])) : ?>
    <section class="section section-white">
        <div class="container">
            <?php if (!empty($data['intro_title'])) : ?>
                <div class="section-heading">
                    <?php if (!empty($data['intro_eyebrow'])) : ?><p class="eyebrow muted"><?php echo esc_html($data['intro_eyebrow']); ?></p><?php endif; ?>
                    <h2><?php echo esc_html($data['intro_title']); ?></h2>
                    <?php if (!empty($data['intro_body'])) : ?><p><?php echo esc_html($data['intro_body']); ?></p><?php endif; ?>
                </div>
            <?php endif; ?>
            <?php if (!empty($data['stats'])) : ?>
                <div class="stats-grid">
                    <?php foreach ($data['stats'] as $stat) : ?>
                        <div class="stat-card">
                            <div class="icon-badge"><?php echo ebox_icon($stat['icon']); ?></div>
                            <strong><?php echo esc_html($stat['value']); ?></strong>
                            <span><?php echo esc_html($stat['label']); ?></span>
                        </div>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
            <?php if (!empty($data['logos'])) : ?>
                <div class="logo-strip">
                    <h3>Trusted by industry leaders</h3>
                    <div>
                        <?php foreach ($data['logos'] as $logo) : ?>
                            <img src="<?php echo esc_url(home_url('/wp-content/uploads/ebox-imported/' . $logo['image'])); ?>" alt="<?php echo esc_attr($logo['name']); ?>">
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </section>
<?php endif; ?>

<?php
$cards = ebox_field('cards', $data['cards'] ?? []);
if ($cards) :
?>
    <section class="section section-gray">
        <div class="container">
            <?php if (empty($data['stats'])) : ?>
                <div class="section-heading">
                    <?php if (!empty($data['intro_eyebrow'])) : ?><p class="eyebrow muted"><?php echo esc_html($data['intro_eyebrow']); ?></p><?php endif; ?>
                    <?php if (!empty($data['intro_title'])) : ?><h2><?php echo esc_html($data['intro_title']); ?></h2><?php endif; ?>
                    <?php if (!empty($data['intro_body'])) : ?><p><?php echo esc_html($data['intro_body']); ?></p><?php endif; ?>
                </div>
            <?php endif; ?>
            <?php ebox_render_cards((array) $cards); ?>
        </div>
    </section>
<?php endif; ?>

<?php
$bullets = ebox_field('bullets', $data['bullets'] ?? []);
if ($bullets) :
?>
    <section class="section section-dark">
        <div class="container split-grid">
            <div>
                <p class="eyebrow">Built for real workflows</p>
                <h2><?php echo esc_html($data['intro_title'] ?? 'Everything your team needs.'); ?></h2>
            </div>
            <ul class="check-list">
                <?php foreach ((array) $bullets as $bullet) : ?>
                    <li><?php echo esc_html(is_array($bullet) ? ($bullet['text'] ?? '') : $bullet); ?></li>
                <?php endforeach; ?>
            </ul>
        </div>
    </section>
<?php endif; ?>

<?php if (!empty($data['testimonial_quote'])) : ?>
    <section class="section section-white">
        <div class="container content-narrow center">
            <blockquote class="testimonial">
                <p><?php echo esc_html($data['testimonial_quote']); ?></p>
                <cite><?php echo esc_html($data['testimonial_name']); ?> <span><?php echo esc_html($data['testimonial_role']); ?></span></cite>
            </blockquote>
        </div>
    </section>
<?php endif; ?>

<?php
$cta_headline = ebox_field('cta_headline', $data['cta_headline'] ?? '');
$cta_description = ebox_field('cta_description', $data['cta_description'] ?? '');
$cta_button_text = ebox_field('cta_button_text', $data['cta_button_text'] ?? '');
$cta_button_url = ebox_field('cta_button_url', $data['cta_button_url'] ?? '');
if ($cta_headline) :
?>
    <section class="section cta-section">
        <div class="container content-narrow center">
            <h2><?php echo esc_html($cta_headline); ?></h2>
            <?php if ($cta_description) : ?><p><?php echo esc_html($cta_description); ?></p><?php endif; ?>
            <?php if ($cta_button_text && $cta_button_url) : echo ebox_button($cta_button_text, $cta_button_url, 'primary', 'button-large'); endif; ?>
        </div>
    </section>
<?php endif; ?>
