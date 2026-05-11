<?php
/**
 * Template Name: eBox Book Demo Page
 *
 * @package ebox
 */

$data = ebox_get_page_defaults('book-demo');
$settings = ebox_get_site_defaults();
$calendly_url = ebox_field('calendly_url', ebox_field('calendly_url', $settings['calendly_url'], 'option'));

get_header();
?>
<section class="section section-white hero-centered">
    <div class="container content-narrow center">
        <h1><?php echo esc_html(ebox_field('hero_title', $data['hero_title'])); ?></h1>
        <p><?php echo esc_html(ebox_field('hero_body', $data['hero_body'])); ?></p>
    </div>
</section>

<section class="calendly-section">
    <div class="container">
        <div class="calendly-inline-widget" data-url="<?php echo esc_url($calendly_url); ?>" style="min-width:320px;height:700px;overflow:hidden"></div>
    </div>
</section>

<section class="section section-gray">
    <div class="container content-narrow">
        <?php ebox_render_lead_form('demo', ebox_field('form_heading', $data['form_heading']), ebox_field('form_intro', $data['form_intro'])); ?>
    </div>
</section>
<?php
get_footer();
