<?php
/**
 * Template Name: eBox Contact Page
 *
 * @package ebox
 */

$data = ebox_get_page_defaults('contact');

get_header();
?>
<section class="hero hero-dark hero-centered">
    <div class="container content-narrow center">
        <h1><?php echo esc_html(ebox_field('hero_title', $data['hero_title'])); ?></h1>
        <p><?php echo esc_html(ebox_field('hero_body', $data['hero_body'])); ?></p>
    </div>
</section>

<section class="section section-gray">
    <div class="container contact-grid">
        <aside class="contact-aside">
            <h2>Contact Information</h2>
            <div class="contact-item">
                <div class="icon-badge"><?php echo ebox_icon('mail'); ?></div>
                <div>
                    <h3>Email Us</h3>
                    <a href="mailto:sales@eboxsoftware.com">sales@eboxsoftware.com</a>
                </div>
            </div>
            <div class="contact-item">
                <div class="icon-badge"><?php echo ebox_icon('building'); ?></div>
                <div>
                    <h3>Global Offices</h3>
                    <p>Part of the Open Box Group<br>Offices in New York, London, and Cape Town.</p>
                </div>
            </div>
        </aside>
        <?php ebox_render_lead_form('contact', ebox_field('form_heading', $data['form_heading']), ebox_field('form_intro', $data['form_intro'])); ?>
    </div>
</section>

<section class="section section-white">
    <div class="container">
        <div class="section-heading">
            <h2>Our Offices</h2>
            <p>Part of the Open Box Group, with teams across three continents.</p>
        </div>
        <div class="office-grid">
            <?php foreach ($data['offices'] as $office) : ?>
                <article class="office-card">
                    <h3><?php echo esc_html($office['city']); ?></h3>
                    <p><a href="tel:<?php echo esc_attr(preg_replace('/\D+/', '', $office['phone'])); ?>"><?php echo esc_html($office['phone']); ?></a></p>
                    <address><?php echo nl2br(esc_html($office['address'])); ?></address>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>
<?php
get_footer();
