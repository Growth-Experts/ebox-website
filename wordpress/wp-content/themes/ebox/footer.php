<?php
/**
 * Site footer.
 *
 * @package ebox
 */

if (!defined('ABSPATH')) {
    exit;
}
?>
</main>
<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <div>
                <a class="brand footer-brand" href="<?php echo esc_url(home_url('/')); ?>" aria-label="<?php esc_attr_e('eBox home', 'ebox'); ?>">
                    <img class="footer-logo" src="<?php echo esc_url(ebox_asset('images/ebox-logo.svg')); ?>" alt="eBox">
                </a>
                <p class="footer-copy">Software built specifically for MRI users, making day-to-day operations so much easier.</p>
            </div>
            <div>
                <h2 class="footer-heading">Products</h2>
                <ul class="footer-links">
                    <li><a href="<?php echo esc_url(home_url('/eforms/')); ?>">eForms</a></li>
                    <li><a href="<?php echo esc_url(home_url('/econnect/')); ?>">eConnect</a></li>
                </ul>
            </div>
            <div>
                <h2 class="footer-heading">Company</h2>
                <ul class="footer-links">
                    <li><a href="<?php echo esc_url(home_url('/about/')); ?>">About Us</a></li>
                    <li><a href="<?php echo esc_url(home_url('/contact/')); ?>">Contact</a></li>
                    <li><a href="<?php echo esc_url(home_url('/privacy/')); ?>">Privacy Policy</a></li>
                </ul>
            </div>
            <div>
                <h2 class="footer-heading">An Open Box Company</h2>
                <img class="open-box-logo" src="<?php echo esc_url(ebox_asset('images/openbox-logo.svg')); ?>" alt="Open Box">
                <p class="footer-small">Powering real estate software solutions globally.</p>
                <a class="mri-badge-link" href="https://www.mrisoftware.com/partners/" target="_blank" rel="noopener noreferrer">
                    <img class="mri-badge" src="<?php echo esc_url(home_url('/wp-content/uploads/ebox-imported/mri-certified.png')); ?>" alt="MRI Software Certified Solutions Partner">
                </a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; <?php echo esc_html(date('Y')); ?> eBox. All rights reserved.</p>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
