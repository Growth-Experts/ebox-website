<?php
/**
 * Template Name: eBox Privacy Policy Page
 *
 * @package ebox
 */

$data = ebox_get_page_defaults('privacy');

get_header();
?>
<section class="hero hero-dark hero-centered">
    <div class="container content-narrow center">
        <h1><?php echo esc_html(ebox_field('hero_title', $data['hero_title'])); ?></h1>
        <p><?php echo esc_html(ebox_field('hero_body', $data['hero_body'])); ?></p>
    </div>
</section>

<section class="section section-white">
    <div class="container content-narrow legal-content">
        <p class="lead"><?php echo esc_html($data['privacy_intro']); ?></p>
        <?php foreach ($data['privacy_sections'] as $section) : ?>
            <h2><?php echo esc_html($section['title']); ?></h2>
            <p><?php echo esc_html($section['body']); ?></p>
        <?php endforeach; ?>
    </div>
</section>
<?php
get_footer();
