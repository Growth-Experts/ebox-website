<?php
/**
 * Template Name: eBox Thank You Page
 *
 * @package ebox
 */

$key = str_contains(trim(get_page_uri(get_post()), '/'), 'book-demo') ? 'demo-thank-you' : 'contact-thank-you';
$data = ebox_get_page_defaults($key);
$first_name = sanitize_text_field($_GET['first_name'] ?? '');
$heading = ebox_field('hero_title', $data['hero_title']);
if ($first_name) {
    $heading = str_replace('!', ', ' . $first_name . '!', $heading);
}

get_header();
?>
<section class="section section-white thank-you">
    <div class="container content-narrow center">
        <div class="thank-you-icon"><?php echo ebox_icon('check'); ?></div>
        <h1><?php echo esc_html($heading); ?></h1>
        <p><?php echo esc_html(ebox_field('hero_body', $data['hero_body'])); ?></p>
        <p class="muted">We've also sent a confirmation to your email.</p>
        <?php echo ebox_button(ebox_field('cta_button_text', $data['cta_button_text']), ebox_field('cta_button_url', $data['cta_button_url']), 'primary', 'button-large'); ?>
    </div>
</section>
<?php
get_footer();
