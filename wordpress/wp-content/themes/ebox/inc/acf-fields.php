<?php
/**
 * ACF local field groups.
 *
 * @package ebox
 */

if (!defined('ABSPATH')) {
    exit;
}

function ebox_acf_text_field(string $key, string $label, string $name, string $type = 'text', array $extra = []): array
{
    return array_merge([
        'key' => $key,
        'label' => $label,
        'name' => $name,
        'type' => $type,
    ], $extra);
}

add_action('acf/init', function (): void {
    if (!function_exists('acf_add_local_field_group')) {
        return;
    }

    if (function_exists('acf_add_options_page')) {
        acf_add_options_page([
            'page_title' => __('eBox Site Settings', 'ebox'),
            'menu_title' => __('eBox Settings', 'ebox'),
            'menu_slug' => 'ebox-settings',
            'capability' => 'manage_options',
            'redirect' => false,
        ]);
    }

    acf_add_local_field_group([
        'key' => 'group_ebox_site_settings',
        'title' => 'eBox Site Settings',
        'fields' => [
            ebox_acf_text_field('field_ebox_site_company_email', 'Company Email', 'company_email', 'email'),
            ebox_acf_text_field('field_ebox_site_calendly_url', 'Calendly URL', 'calendly_url', 'url'),
            ebox_acf_text_field('field_ebox_site_gtm_id', 'Google Tag Manager ID', 'gtm_id'),
            ebox_acf_text_field('field_ebox_site_default_og_image', 'Default OG Image', 'default_og_image', 'url'),
            ebox_acf_text_field('field_ebox_site_form_recipients', 'Form Recipients', 'form_recipients_text', 'textarea', [
                'instructions' => 'One email address per line.',
                'rows' => 4,
            ]),
            ebox_acf_text_field('field_ebox_site_form_from', 'Resend From Email', 'form_from', 'email'),
            ebox_acf_text_field('field_ebox_site_form_from_name', 'Resend From Name', 'form_from_name'),
            ebox_acf_text_field('field_ebox_site_form_reply_to', 'Reply-To Email', 'form_reply_to', 'email'),
        ],
        'location' => [[[
            'param' => 'options_page',
            'operator' => '==',
            'value' => 'ebox-settings',
        ]]],
        'position' => 'acf_after_title',
        'active' => true,
    ]);

    acf_add_local_field_group([
        'key' => 'group_ebox_marketing_page',
        'title' => 'eBox Marketing Page',
        'fields' => [
            ['key' => 'field_ebox_seo_tab', 'label' => 'SEO', 'name' => '', 'type' => 'tab', 'placement' => 'top'],
            ebox_acf_text_field('field_ebox_seo_title', 'SEO Title', 'seo_title'),
            ebox_acf_text_field('field_ebox_seo_description', 'SEO Description', 'seo_description', 'textarea', ['rows' => 3]),
            ebox_acf_text_field('field_ebox_seo_image', 'SEO Image URL', 'seo_image', 'url'),
            ebox_acf_text_field('field_ebox_canonical', 'Canonical URL', 'canonical', 'url'),
            ebox_acf_text_field('field_ebox_robots', 'Robots', 'robots'),

            ['key' => 'field_ebox_hero_tab', 'label' => 'Hero', 'name' => '', 'type' => 'tab', 'placement' => 'top'],
            ebox_acf_text_field('field_ebox_hero_theme', 'Hero Theme', 'hero_theme', 'select', [
                'choices' => ['light' => 'Light', 'dark' => 'Dark'],
                'default_value' => 'light',
            ]),
            ebox_acf_text_field('field_ebox_hero_eyebrow', 'Eyebrow', 'hero_eyebrow'),
            ebox_acf_text_field('field_ebox_hero_title', 'Title', 'hero_title'),
            ebox_acf_text_field('field_ebox_hero_highlight', 'Highlighted Text', 'hero_highlight'),
            ebox_acf_text_field('field_ebox_hero_body', 'Body', 'hero_body', 'textarea', ['rows' => 4]),
            ebox_acf_text_field('field_ebox_hero_image', 'Hero Image Filename', 'hero_image'),
            ebox_acf_text_field('field_ebox_primary_cta_text', 'Primary CTA Text', 'primary_cta_text'),
            ebox_acf_text_field('field_ebox_primary_cta_url', 'Primary CTA URL', 'primary_cta_url'),
            ebox_acf_text_field('field_ebox_secondary_cta_text', 'Secondary CTA Text', 'secondary_cta_text'),
            ebox_acf_text_field('field_ebox_secondary_cta_url', 'Secondary CTA URL', 'secondary_cta_url'),

            ['key' => 'field_ebox_content_tab', 'label' => 'Content', 'name' => '', 'type' => 'tab', 'placement' => 'top'],
            ebox_acf_text_field('field_ebox_intro_eyebrow', 'Intro Eyebrow', 'intro_eyebrow'),
            ebox_acf_text_field('field_ebox_intro_title', 'Intro Title', 'intro_title'),
            ebox_acf_text_field('field_ebox_intro_body', 'Intro Body', 'intro_body', 'textarea', ['rows' => 5]),
            [
                'key' => 'field_ebox_cards',
                'label' => 'Cards',
                'name' => 'cards',
                'type' => 'repeater',
                'layout' => 'block',
                'button_label' => 'Add card',
                'sub_fields' => [
                    ebox_acf_text_field('field_ebox_card_icon', 'Icon', 'icon'),
                    ebox_acf_text_field('field_ebox_card_title', 'Title', 'title'),
                    ebox_acf_text_field('field_ebox_card_description', 'Description', 'description', 'textarea', ['rows' => 3]),
                    ebox_acf_text_field('field_ebox_card_url', 'URL', 'url'),
                ],
            ],
            [
                'key' => 'field_ebox_bullets',
                'label' => 'Bullets',
                'name' => 'bullets',
                'type' => 'repeater',
                'layout' => 'table',
                'button_label' => 'Add bullet',
                'sub_fields' => [
                    ebox_acf_text_field('field_ebox_bullet_text', 'Text', 'text'),
                ],
            ],
            [
                'key' => 'field_ebox_stats',
                'label' => 'Stats',
                'name' => 'stats',
                'type' => 'repeater',
                'layout' => 'table',
                'button_label' => 'Add stat',
                'sub_fields' => [
                    ebox_acf_text_field('field_ebox_stat_icon', 'Icon', 'icon'),
                    ebox_acf_text_field('field_ebox_stat_value', 'Value', 'value'),
                    ebox_acf_text_field('field_ebox_stat_label', 'Label', 'label'),
                ],
            ],
            ebox_acf_text_field('field_ebox_calendly_url', 'Calendly URL', 'calendly_url', 'url'),
            ebox_acf_text_field('field_ebox_form_heading', 'Form Heading', 'form_heading'),
            ebox_acf_text_field('field_ebox_form_intro', 'Form Intro', 'form_intro', 'textarea', ['rows' => 3]),

            ['key' => 'field_ebox_cta_tab', 'label' => 'CTA', 'name' => '', 'type' => 'tab', 'placement' => 'top'],
            ebox_acf_text_field('field_ebox_cta_headline', 'CTA Headline', 'cta_headline'),
            ebox_acf_text_field('field_ebox_cta_description', 'CTA Description', 'cta_description', 'textarea', ['rows' => 3]),
            ebox_acf_text_field('field_ebox_cta_button_text', 'CTA Button Text', 'cta_button_text'),
            ebox_acf_text_field('field_ebox_cta_button_url', 'CTA Button URL', 'cta_button_url'),
        ],
        'location' => [[[
            'param' => 'page_template',
            'operator' => '==',
            'value' => 'front-page.php',
        ]], [[
            'param' => 'page_template',
            'operator' => '==',
            'value' => 'page-eforms.php',
        ]], [[
            'param' => 'page_template',
            'operator' => '==',
            'value' => 'page-econnect.php',
        ]], [[
            'param' => 'page_template',
            'operator' => '==',
            'value' => 'page-contact.php',
        ]], [[
            'param' => 'page_template',
            'operator' => '==',
            'value' => 'page-book-demo.php',
        ]], [[
            'param' => 'page_template',
            'operator' => '==',
            'value' => 'page-thank-you.php',
        ]], [[
            'param' => 'page_template',
            'operator' => '==',
            'value' => 'page-privacy.php',
        ]]],
        'position' => 'acf_after_title',
        'active' => true,
    ]);

    acf_add_local_field_group([
        'key' => 'group_ebox_about_page',
        'title' => 'eBox About Page',
        'fields' => [
            ['key' => 'field_ebox_about_seo_tab', 'label' => 'SEO', 'name' => '', 'type' => 'tab', 'placement' => 'top'],
            ebox_acf_text_field('field_ebox_about_seo_title', 'SEO Title', 'seo_title'),
            ebox_acf_text_field('field_ebox_about_seo_description', 'SEO Description', 'seo_description', 'textarea', ['rows' => 3]),
            ['key' => 'field_ebox_about_hero_tab', 'label' => 'Hero', 'name' => '', 'type' => 'tab', 'placement' => 'top'],
            ebox_acf_text_field('field_ebox_about_hero_line_1', 'Headline Line 1', 'hero_line_1'),
            ebox_acf_text_field('field_ebox_about_hero_line_2', 'Headline Line 2', 'hero_line_2'),
            ebox_acf_text_field('field_ebox_about_hero_highlight', 'Highlighted Headline Text', 'hero_highlight'),
            ebox_acf_text_field('field_ebox_about_hero_subhead', 'Subhead', 'hero_subhead', 'textarea', ['rows' => 4]),
            ['key' => 'field_ebox_about_heritage_tab', 'label' => 'Heritage', 'name' => '', 'type' => 'tab', 'placement' => 'top'],
            ebox_acf_text_field('field_ebox_about_heritage_eyebrow', 'Eyebrow', 'heritage_eyebrow'),
            ebox_acf_text_field('field_ebox_about_heritage_title', 'Title', 'heritage_title'),
            ebox_acf_text_field('field_ebox_about_heritage_body_1', 'Body Paragraph 1', 'heritage_body_1', 'textarea', ['rows' => 4]),
            ebox_acf_text_field('field_ebox_about_heritage_body_2', 'Body Paragraph 2', 'heritage_body_2', 'textarea', ['rows' => 4]),
            [
                'key' => 'field_ebox_about_timeline_items',
                'label' => 'Timeline Items',
                'name' => 'timeline_items',
                'type' => 'repeater',
                'layout' => 'block',
                'button_label' => 'Add timeline item',
                'sub_fields' => [
                    ebox_acf_text_field('field_ebox_about_timeline_date', 'Date', 'date'),
                    ebox_acf_text_field('field_ebox_about_timeline_title', 'Title', 'title'),
                    ebox_acf_text_field('field_ebox_about_timeline_description', 'Description', 'description', 'textarea', ['rows' => 3]),
                    ebox_acf_text_field('field_ebox_about_timeline_accent', 'Accent', 'accent', 'select', [
                        'choices' => ['lime' => 'Lime', 'forest' => 'Forest', 'dark' => 'Dark'],
                        'default_value' => 'lime',
                    ]),
                ],
            ],
            ['key' => 'field_ebox_about_philosophy_tab', 'label' => 'Philosophy', 'name' => '', 'type' => 'tab', 'placement' => 'top'],
            ebox_acf_text_field('field_ebox_about_philosophy_title', 'Title', 'philosophy_title'),
            ebox_acf_text_field('field_ebox_about_philosophy_description', 'Description', 'philosophy_description', 'textarea', ['rows' => 3]),
            [
                'key' => 'field_ebox_about_values',
                'label' => 'Value Cards',
                'name' => 'values',
                'type' => 'repeater',
                'layout' => 'block',
                'button_label' => 'Add value card',
                'sub_fields' => [
                    ebox_acf_text_field('field_ebox_about_value_icon', 'Icon', 'icon', 'select', [
                        'choices' => ['award' => 'Award', 'heart' => 'Heart', 'users' => 'Users'],
                        'default_value' => 'award',
                    ]),
                    ebox_acf_text_field('field_ebox_about_value_title', 'Title', 'title'),
                    ebox_acf_text_field('field_ebox_about_value_description', 'Description', 'description', 'textarea', ['rows' => 4]),
                ],
            ],
            ['key' => 'field_ebox_about_cta_tab', 'label' => 'CTA', 'name' => '', 'type' => 'tab', 'placement' => 'top'],
            ebox_acf_text_field('field_ebox_about_cta_headline', 'Headline', 'cta_headline'),
            ebox_acf_text_field('field_ebox_about_cta_description', 'Description', 'cta_description', 'textarea', ['rows' => 3]),
            ebox_acf_text_field('field_ebox_about_cta_button_text', 'Button Text', 'cta_button_text'),
            ebox_acf_text_field('field_ebox_about_cta_button_url', 'Button URL', 'cta_button_url'),
        ],
        'location' => [[[
            'param' => 'page_template',
            'operator' => '==',
            'value' => 'page-about.php',
        ]], [[
            'param' => 'page',
            'operator' => '==',
            'value' => 'about',
        ]]],
        'position' => 'acf_after_title',
        'active' => true,
    ]);
});
