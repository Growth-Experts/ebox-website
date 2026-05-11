<?php
/**
 * Template Name: eBox eForms Page
 *
 * @package ebox
 */

get_header();
$data = ebox_get_page_defaults('eforms');
?>
<section class="product-hero product-hero-light">
    <div class="container center">
        <div class="product-logo-text"><span>e</span>forms</div>
        <h1><?php echo esc_html(ebox_field('hero_title', $data['hero_title'])); ?></h1>
        <p><?php echo esc_html(ebox_field('hero_body', $data['hero_body'])); ?></p>
        <?php echo ebox_button(ebox_field('primary_cta_text', $data['primary_cta_text']), ebox_field('primary_cta_url', $data['primary_cta_url']), 'primary', 'button-large'); ?>
        <div class="product-shot">
            <img src="<?php echo esc_url(home_url('/wp-content/uploads/ebox-imported/' . ebox_field('hero_image', $data['hero_image']))); ?>" alt="eForms new lease creation screen">
        </div>
    </div>
</section>
<?php
get_template_part('template-parts/marketing-page', null, ['page_key' => 'eforms', 'skip_hero' => true]);
get_footer();
