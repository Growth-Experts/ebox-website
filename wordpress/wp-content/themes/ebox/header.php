<?php
/**
 * Site header.
 *
 * @package ebox
 */

if (!defined('ABSPATH')) {
    exit;
}
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="site-header">
    <div class="container header-inner">
        <a class="brand" href="<?php echo esc_url(home_url('/')); ?>" aria-label="<?php esc_attr_e('eBox home', 'ebox'); ?>">
            <img class="brand-logo" src="<?php echo esc_url(ebox_asset('images/ebox-logo.svg')); ?>" alt="eBox">
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">
            <span></span><span></span><span></span>
        </button>
        <nav id="primary-nav" class="primary-nav" aria-label="<?php esc_attr_e('Primary navigation', 'ebox'); ?>">
            <?php
            wp_nav_menu([
                'theme_location' => 'primary',
                'container' => false,
                'fallback_cb' => false,
                'menu_class' => 'primary-menu',
                'depth' => 1,
            ]);
            ?>
            <?php if (!has_nav_menu('primary')) : ?>
                <ul class="primary-menu">
                    <li><a href="<?php echo esc_url(home_url('/')); ?>">Home</a></li>
                    <li><a href="<?php echo esc_url(home_url('/about/')); ?>">About Us</a></li>
                    <li><a href="<?php echo esc_url(home_url('/eforms/')); ?>">eForms</a></li>
                    <li><a href="<?php echo esc_url(home_url('/econnect/')); ?>">eConnect</a></li>
                    <li><a href="<?php echo esc_url(home_url('/contact/')); ?>">Contact Us</a></li>
                </ul>
            <?php endif; ?>
            <?php echo ebox_button('Book a Demo', '/book-demo/', 'primary', 'button-small'); ?>
        </nav>
    </div>
</header>
<main id="main" class="site-main">
