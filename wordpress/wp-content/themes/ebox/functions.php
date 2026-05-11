<?php
/**
 * eBox theme bootstrap.
 *
 * @package ebox
 */

if (!defined('ABSPATH')) {
    exit;
}

define('EBOX_THEME_VERSION', '0.2.0');
define('EBOX_THEME_DIR', get_template_directory());
define('EBOX_THEME_URI', get_template_directory_uri());

$ebox_includes = [
    'inc/helpers.php',
    'inc/defaults.php',
    'inc/setup.php',
    'inc/acf-fields.php',
    'inc/seo.php',
    'inc/forms.php',
    'inc/importer.php',
];

foreach ($ebox_includes as $ebox_include) {
    require_once EBOX_THEME_DIR . '/' . $ebox_include;
}
