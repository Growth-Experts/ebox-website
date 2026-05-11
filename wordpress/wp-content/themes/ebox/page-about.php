<?php
/**
 * Template Name: eBox About Page
 *
 * @package ebox
 */

$defaults = ebox_get_about_defaults();
$timeline_items = ebox_field('timeline_items', $defaults['timeline_items']);
$values = ebox_field('values', $defaults['values']);
$hero_line_1 = ebox_field('hero_line_1', $defaults['hero_line_1']);
$hero_line_2 = ebox_field('hero_line_2', $defaults['hero_line_2']);
$hero_highlight = ebox_field('hero_highlight', $defaults['hero_highlight']);

get_header();
?>
<section class="about-hero">
    <div class="container">
        <div class="hero-copy">
            <h1 aria-label="<?php echo esc_attr(trim($hero_line_1 . ' ' . $hero_line_2 . ' ' . $hero_highlight)); ?>">
                <span><?php echo esc_html($hero_line_1); ?></span>
                <span><?php echo esc_html($hero_line_2); ?></span>
                <span class="text-lime"><?php echo esc_html($hero_highlight); ?></span>
            </h1>
            <p><?php echo esc_html(ebox_field('hero_subhead', $defaults['hero_subhead'])); ?></p>
        </div>
    </div>
    <div class="hero-orb" aria-hidden="true"></div>
</section>

<section class="section heritage-section">
    <div class="container split-grid">
        <div>
            <p class="eyebrow muted"><?php echo esc_html(ebox_field('heritage_eyebrow', $defaults['heritage_eyebrow'])); ?></p>
            <h2><?php echo esc_html(ebox_field('heritage_title', $defaults['heritage_title'])); ?></h2>
            <p class="lead"><?php echo wp_kses_post(ebox_field('heritage_body_1', $defaults['heritage_body_1'])); ?></p>
            <p class="lead"><?php echo esc_html(ebox_field('heritage_body_2', $defaults['heritage_body_2'])); ?></p>
            <div class="open-box-line">
                <span>An</span>
                <img class="open-box-inline-logo" src="<?php echo esc_url(ebox_asset('images/openbox-logo.svg')); ?>" alt="Open Box">
                <span>Company</span>
            </div>
        </div>
        <div class="timeline">
            <?php foreach ((array) $timeline_items as $item) : ?>
                <div class="timeline-item timeline-<?php echo esc_attr(sanitize_html_class($item['accent'] ?? 'lime')); ?>">
                    <span class="timeline-date"><?php echo esc_html($item['date'] ?? ''); ?></span>
                    <h3><?php echo esc_html($item['title'] ?? ''); ?></h3>
                    <p><?php echo esc_html($item['description'] ?? ''); ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="section philosophy-section">
    <div class="container">
        <div class="section-heading">
            <h2><?php echo esc_html(ebox_field('philosophy_title', $defaults['philosophy_title'])); ?></h2>
            <p><?php echo esc_html(ebox_field('philosophy_description', $defaults['philosophy_description'])); ?></p>
        </div>
        <?php ebox_render_cards((array) $values, 'value-grid'); ?>
    </div>
</section>

<section class="section cta-section">
    <div class="container content-narrow center">
        <h2><?php echo esc_html(ebox_field('cta_headline', $defaults['cta_headline'])); ?></h2>
        <p><?php echo esc_html(ebox_field('cta_description', $defaults['cta_description'])); ?></p>
        <?php echo ebox_button(ebox_field('cta_button_text', $defaults['cta_button_text']), ebox_field('cta_button_url', $defaults['cta_button_url']), 'primary', 'button-large'); ?>
    </div>
</section>
<?php
get_footer();
