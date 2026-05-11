<?php
/**
 * Template Name: eBox eConnect Page
 *
 * @package ebox
 */

get_header();
$data = ebox_get_page_defaults('econnect');
$hero_title = ebox_field('hero_title', $data['hero_title']);
$hero_highlight = ebox_field('hero_highlight', $data['hero_highlight']);
$hero_title_html = esc_html($hero_title);
if ($hero_highlight && str_contains($hero_title, $hero_highlight)) {
    $hero_title_html = str_replace(esc_html($hero_highlight), '<span class="hero-highlight">' . esc_html($hero_highlight) . '</span>', $hero_title_html);
}
?>
<section class="product-hero product-hero-dark">
    <div class="container content-narrow center">
        <img class="product-logo-img" src="<?php echo esc_url(home_url('/wp-content/uploads/ebox-imported/econnect-logo-white.svg')); ?>" alt="eConnect">
        <h1><?php echo wp_kses($hero_title_html, ['span' => ['class' => true]]); ?></h1>
        <p><?php echo esc_html(ebox_field('hero_body', $data['hero_body'])); ?></p>
        <div class="button-row center-row">
            <?php echo ebox_button(ebox_field('primary_cta_text', $data['primary_cta_text']), ebox_field('primary_cta_url', $data['primary_cta_url']), 'primary', 'button-large'); ?>
            <?php echo ebox_button(ebox_field('secondary_cta_text', $data['secondary_cta_text']), ebox_field('secondary_cta_url', $data['secondary_cta_url']), 'outline', 'button-large'); ?>
        </div>
    </div>
</section>
<?php
get_template_part('template-parts/marketing-page', null, ['page_key' => 'econnect', 'skip_hero' => true]);
get_footer();
