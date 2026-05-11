<?php
/**
 * Default content imported from the current React site.
 *
 * @package ebox
 */

if (!defined('ABSPATH')) {
    exit;
}

function ebox_get_site_defaults(): array
{
    return [
        'company_email' => 'sales@eboxsoftware.com',
        'calendly_url' => 'https://calendly.com/bjornpeterson-eboxsoftware/30min',
        'gtm_id' => 'GTM-MC9F9BHQ',
        'default_og_image' => 'https://www.eboxsoftware.com/images/og-ebox.png',
        'form_recipients' => ['sales@eboxsoftware.com', 'marketing@growthexperts.co'],
        'form_from' => 'sales@updates.eboxsoftware.com',
        'form_from_name' => 'eBox',
        'form_reply_to' => 'sales@eboxsoftware.com',
    ];
}

function ebox_get_about_defaults(): array
{
    return [
        'seo_title' => 'About Us | eBox: Built from 25 Years in Real Estate Tech',
        'seo_description' => "eBox is part of the Open Box Group, a global software consultancy serving real estate for over two decades. We build tools that make MRI work harder for you.",
        'hero_line_1' => '25 years in',
        'hero_line_2' => 'real estate',
        'hero_highlight' => 'technology',
        'hero_subhead' => "eBox was founded to solve the specific, data and communication pain points that real estate teams face every day. We believe enterprise software doesn't have to be complicated.",
        'heritage_eyebrow' => 'Our Heritage',
        'heritage_title' => 'Backed by global expertise.',
        'heritage_body_1' => 'eBox is proud to be part of the Open Box Group, a global software consultancy that has been serving the Real Estate industry for over two decades.',
        'heritage_body_2' => 'While eBox focuses on specific product solutions like eForms, we leverage the deep technical knowledge, security standards, and industry experience of the wider Open Box organization.',
        'timeline_items' => [
            ['date' => '2001', 'title' => 'Open Box Founded', 'description' => 'Launched as a real estate software consultancy.', 'accent' => 'lime'],
            ['date' => '2008', 'title' => 'First MRI Support & Consulting Projects', 'description' => 'Grew to serve clients across multiple continents with deep MRI expertise, winning MRI Partner of the Year for many years.', 'accent' => 'forest'],
            ['date' => '2023', 'title' => 'eBox Is Born', 'description' => 'eBox is a dedicated product company that builds tools to solve common real estate challenges.', 'accent' => 'dark'],
            ['date' => 'Today', 'title' => 'eForms & eConnect', 'description' => 'Two products, one mission: zero friction in your business processes.', 'accent' => 'lime'],
        ],
        'philosophy_title' => 'Our Philosophy',
        'philosophy_description' => 'We build specifically for the real estate industry and MRI software.',
        'values' => [
            ['icon' => 'award', 'title' => 'Industry Expertise', 'description' => 'Decades of property and software experience. We speak your language.'],
            ['icon' => 'heart', 'title' => 'Customer Success', 'description' => "We don't just sell you software. We help you map your workflows, train your team, and ensure you get value from day one."],
            ['icon' => 'users', 'title' => 'User Experience', 'description' => "Enterprise software shouldn't require a manual. We design our interfaces to be intuitive for the user."],
        ],
        'cta_headline' => 'Want to learn more?',
        'cta_description' => 'See how we can help your team work smarter.',
        'cta_button_text' => 'Contact Us',
        'cta_button_url' => '/contact',
    ];
}

function ebox_get_page_defaults(string $page): array
{
    $pages = [
        'home' => [
            'title' => 'Home',
            'slug' => '',
            'template' => 'front-page.php',
            'seo_title' => 'eBox | MRI Data Imports & Tenant Communications for Real Estate Teams',
            'seo_description' => 'eBox gives your real estate team the tools to eliminate manual processes, reduce errors, and get more from MRI, starting with eForms for data imports and eConnect for communications.',
            'canonical' => 'https://www.eboxsoftware.com/',
            'hero_theme' => 'dark',
            'hero_eyebrow' => 'Built from 25 years in real estate technology',
            'hero_title' => 'Making your property systems work harder for you',
            'hero_highlight' => 'work harder for you',
            'hero_body' => 'eBox gives your real estate team the tools to eliminate manual processes, reduce errors, and get more from MRI, starting with eForms for data imports and eConnect for communications.',
            'primary_cta_text' => 'Book a Demo',
            'primary_cta_url' => '/book-demo/',
            'secondary_cta_text' => 'See How It Works',
            'secondary_cta_url' => '/eforms/',
            'stats' => [
                ['icon' => 'clock', 'value' => '25+', 'label' => 'Years in Real Estate Tech'],
                ['icon' => 'building', 'value' => '50+', 'label' => 'Clients Worldwide'],
                ['icon' => 'shield', 'value' => 'MRI', 'label' => 'Certified Solutions Partner'],
            ],
            'logos' => [
                ['name' => 'Brisbane Airport', 'image' => 'brisbane-airport.svg'],
                ['name' => 'Savills', 'image' => 'savills.svg'],
                ['name' => 'CLS', 'image' => 'cls.png'],
            ],
            'cards' => [
                ['icon' => 'file', 'title' => 'eForms', 'description' => 'Data imports for MRI. Built for property teams to eliminate errors and speed up processing.', 'url' => '/eforms/'],
                ['icon' => 'mail', 'title' => 'eConnect', 'description' => 'Tenant communications from MRI. Send, track, and archive communications without manual exports.', 'url' => '/econnect/'],
                ['icon' => 'upload', 'title' => 'Import from Excel', 'description' => 'Turn the spreadsheets your team already uses into structured, validated workflows before data reaches MRI.'],
                ['icon' => 'shield', 'title' => 'Validate before posting', 'description' => 'Catch errors earlier with required fields, approval steps, audit trails, and data checks.'],
                ['icon' => 'users', 'title' => 'Built for property teams', 'description' => 'Finance, property management, lease administration, and tenant communications all get cleaner workflows.'],
            ],
            'intro_eyebrow' => 'Our Story',
            'intro_title' => 'Through 25 years in real estate technology, we saw the same problems again and again.',
            'intro_body' => 'Manual processes, error-prone imports, and disconnected workflows kept slowing good teams down. eBox was built to fix them.',
            'testimonial_quote' => 'eForms gives our teams the structure they need without taking away the workflows they already understand.',
            'testimonial_name' => 'Rachel Rule',
            'testimonial_role' => 'Real estate technology leader',
            'cta_headline' => 'Ready to remove manual work from MRI?',
            'cta_description' => 'Book a short walkthrough and see how eBox can fit your workflows.',
            'cta_button_text' => 'Book a Demo',
            'cta_button_url' => '/book-demo/',
            'schema_type' => 'Organization',
        ],
        'eforms' => [
            'title' => 'eForms',
            'slug' => 'eforms',
            'template' => 'page-eforms.php',
            'seo_title' => 'eForms | Structured MRI Data Imports & Approval Workflows | eBox',
            'seo_description' => 'eForms provides structured forms for MRI imports with real-time validation, approval routing, and complete audit trails. Built for real estate finance teams.',
            'canonical' => 'https://www.eboxsoftware.com/eforms',
            'seo_image' => 'https://www.eboxsoftware.com/images/og-eforms.png',
            'hero_title' => 'Data imports for MRI, made easy',
            'hero_body' => 'Structured data entry. Approval routing. Real-time validation. All feeding directly into your MRI database.',
            'primary_cta_text' => 'Book a Demo',
            'primary_cta_url' => '/book-demo/',
            'hero_image' => 'eforms-new-lease-creation.png',
            'intro_eyebrow' => 'What eForms adds to MRI',
            'intro_title' => 'A cleaner path from spreadsheet to approved MRI import.',
            'intro_body' => 'Your team already works in spreadsheets. eForms lets you import journals, vendors, invoices, charges, and leases directly into MRI, validated and approved before anything touches your database.',
            'cards' => [
                ['icon' => 'database', 'title' => 'Month-End Close', 'description' => 'Process and schedule thousands of journal entries with approval workflows.'],
                ['icon' => 'file', 'title' => 'Lease Administration', 'description' => 'Property administrators enter leases, finance captures charges, and property managers approve into MRI.'],
                ['icon' => 'upload', 'title' => 'Accounts Payable', 'description' => 'Structured invoice entry with auto-routing by amount or vendor.'],
                ['icon' => 'clock', 'title' => 'Recurring Processes', 'description' => 'Configure once, apply to hundreds of units with validation.'],
                ['icon' => 'building', 'title' => 'Master Data Management', 'description' => 'Regional teams create buildings and units with an approval layer.'],
                ['icon' => 'check', 'title' => 'Tenant Charges', 'description' => 'Validate accounts, tenant details, and charge codes before posting.'],
            ],
            'bullets' => [
                'Import from Excel with structure and validation.',
                'Route entries through approval before posting.',
                'Keep a complete audit trail of every action.',
                'Reduce manual re-entry and late-stage errors.',
            ],
            'cta_headline' => 'See how eForms could work for your MRI workflows.',
            'cta_description' => 'Book a walkthrough and we will map it to your current processes.',
            'cta_button_text' => 'Book a Demo',
            'cta_button_url' => '/book-demo/',
            'schema_type' => 'SoftwareApplication',
        ],
        'econnect' => [
            'title' => 'eConnect',
            'slug' => 'econnect',
            'template' => 'page-econnect.php',
            'seo_title' => 'eConnect | Tenant Communications for MRI | eBox',
            'seo_description' => 'Email thousands of tenants directly from your MRI data. Track every delivery. Handle correspondence without leaving your workflow.',
            'canonical' => 'https://www.eboxsoftware.com/econnect',
            'hero_theme' => 'dark',
            'hero_title' => 'Communications for MRI, done right.',
            'hero_highlight' => 'done right.',
            'hero_body' => 'Email thousands of tenants directly from your MRI data. Track every delivery. Handle correspondence without leaving your workflow.',
            'primary_cta_text' => 'Book a Demo',
            'primary_cta_url' => '/book-demo/',
            'secondary_cta_text' => 'See eForms',
            'secondary_cta_url' => '/eforms/',
            'intro_eyebrow' => 'What eConnect does',
            'intro_title' => 'Tenant communications, powered by your MRI data.',
            'intro_body' => 'eConnect works alongside MRI PMX to turn your underlying data into polished, on-brand emails, sent from your own domain with every detail personalised to the recipient.',
            'hero_image' => 'econnect-email-after.png',
            'cards' => [
                ['icon' => 'mail', 'title' => 'Bulk Tenant Emails', 'description' => 'Send personalised emails to hundreds of tenants at once using names, lease details, and property info from MRI.'],
                ['icon' => 'bar-chart', 'title' => 'Delivery Tracking', 'description' => 'Know who opened what and when. Track bounces, deliveries, and engagement.'],
                ['icon' => 'upload', 'title' => 'Save to SharePoint', 'description' => 'Sync reports and documents sent from MRI directly to SharePoint.'],
                ['icon' => 'users', 'title' => 'Audience Segmentation', 'description' => 'Target tenants by property, region, lease type, or any MRI data field.'],
                ['icon' => 'shield', 'title' => 'Audit Trail', 'description' => 'Every email logged, with a full history of what was sent, to whom, and when.'],
                ['icon' => 'database', 'title' => 'MRI Integration', 'description' => 'Connects directly to your MRI database with no manual exports or CSV mismatches.'],
            ],
            'bullets' => [
                'Send from your own domain with brand-safe templates.',
                'Merge MRI fields into subject lines, body copy, and file names.',
                'Send encrypted, password-protected, digitally sealed PDFs.',
                'Auto-archive reports and documents to SharePoint.',
            ],
            'cta_headline' => 'Bring tenant communications into your MRI workflow.',
            'cta_description' => 'See how eConnect can help your team communicate at scale.',
            'cta_button_text' => 'Book a Demo',
            'cta_button_url' => '/book-demo/',
            'schema_type' => 'SoftwareApplication',
        ],
        'contact' => [
            'title' => 'Contact Us',
            'slug' => 'contact',
            'template' => 'page-contact.php',
            'seo_title' => 'Contact Us | eBox: Get in Touch',
            'seo_description' => 'Have questions about eForms or eConnect? Need a custom solution? Contact the eBox team, with offices in New York, London, and Cape Town.',
            'canonical' => 'https://www.eboxsoftware.com/contact',
            'hero_theme' => 'dark',
            'hero_title' => 'Get in touch',
            'hero_body' => "Have questions about eBox? Need a custom solution? We're here to help.",
            'form_type' => 'contact',
            'form_heading' => 'Send us a message',
            'form_intro' => '',
            'offices' => [
                ['city' => 'New York', 'phone' => '+1 332 245 4315', 'address' => "1120 Avenue of the Americas\nSuite 4153, 4th Floor\nNew York NY 10036-6700\nUnited States"],
                ['city' => 'London', 'phone' => '+44 20 4551 1386', 'address' => "298 Regents Park Road\nMarlborough House, London\nN3 2SZ\nUnited Kingdom"],
                ['city' => 'Cape Town', 'phone' => '+27 21 713 9300', 'address' => "240 Main Road\nTokai 7945\nCape Town\nSouth Africa"],
            ],
        ],
        'book-demo' => [
            'title' => 'Book a Demo',
            'slug' => 'book-demo',
            'template' => 'page-book-demo.php',
            'seo_title' => 'Book a Demo | eBox: See It in Action',
            'seo_description' => 'Schedule a 20-minute personalised walkthrough. See how eForms can streamline your specific MRI workflows.',
            'canonical' => 'https://www.eboxsoftware.com/book-demo',
            'hero_title' => 'See eBox in action',
            'hero_body' => "Schedule a 20-minute personalized walkthrough. We'll show you how eForms can streamline your specific MRI workflows.",
            'calendly_url' => 'https://calendly.com/bjornpeterson-eboxsoftware/30min',
            'form_type' => 'demo',
            'form_heading' => 'Prefer to send a message?',
            'form_intro' => "We'll get back to you as soon as possible.",
        ],
        'contact-thank-you' => [
            'title' => 'Contact Thank You',
            'slug' => 'contact/thank-you',
            'template' => 'page-thank-you.php',
            'seo_title' => 'Contact Us - Thank You | eBox',
            'canonical' => 'https://www.eboxsoftware.com/contact/thank-you',
            'robots' => 'noindex',
            'thank_you_variant' => 'contact',
            'hero_title' => 'Thanks for reaching out!',
            'hero_body' => "We've received your message and a member of the eBox team will get back to you shortly.",
            'cta_button_text' => 'Back to Homepage',
            'cta_button_url' => '/',
        ],
        'demo-thank-you' => [
            'title' => 'Demo Thank You',
            'slug' => 'book-demo/thank-you',
            'template' => 'page-thank-you.php',
            'seo_title' => 'Demo Request - Thank You | eBox',
            'canonical' => 'https://www.eboxsoftware.com/book-demo/thank-you',
            'robots' => 'noindex',
            'thank_you_variant' => 'demo',
            'hero_title' => 'Thanks for your interest!',
            'hero_body' => "We've received your demo request and our team will be in touch shortly to get it scheduled.",
            'cta_button_text' => 'Back to Homepage',
            'cta_button_url' => '/',
        ],
        'privacy' => [
            'title' => 'Privacy Policy',
            'slug' => 'privacy',
            'template' => 'page-privacy.php',
            'seo_title' => 'Privacy Policy | eBox Software',
            'seo_description' => 'eBox Software privacy policy. Learn how we collect, use, and protect your personal information when you use eBox products and our website.',
            'canonical' => 'https://www.eboxsoftware.com/privacy',
            'hero_theme' => 'dark',
            'hero_title' => 'Privacy Policy',
            'hero_body' => 'Last updated: 30/06/2025',
            'privacy_intro' => 'This policy applies when you use eBox Software (eboxsoftware.com), including our eForms and eConnect products. eBox is part of Open Box Software, and this policy governs how we handle your data across our websites and services.',
            'privacy_sections' => [
                ['title' => 'Our Commitment to Your Privacy', 'body' => "Welcome to eBox Software. We value our relationship with you, and protecting your personal information is a priority for us. This privacy policy explains how we collect, use, and protect your data and outlines your rights."],
                ['title' => 'Scope', 'body' => "This policy applies whenever you interact with Open Box Software, including eBox Software, through our website or other systems."],
                ['title' => 'Key Terms', 'body' => 'Personal information means details that can identify you, such as your name or contact information. Processing means actions related to your data, like storing, updating, merging, using, or deleting it.'],
                ['title' => 'How We Protect Your Information', 'body' => 'We protect personal information through transparency, accuracy, security, and lawful processing aligned with applicable privacy laws.'],
                ['title' => 'What We Collect and Why', 'body' => 'We may collect basic browsing details, contact information, service preferences, company details, and communications needed to respond to inquiries, manage services, or maintain business relationships.'],
                ['title' => 'How We Use Your Information', 'body' => 'We use your data to strengthen relationships, provide services, maintain trust, improve experiences, comply with legal obligations, and act with your consent where required.'],
                ['title' => 'Sharing and Transferring Data', 'body' => 'We only share personal information for business operations, legal requirements, trusted service delivery, and organisational protection. We do not sell your personal information.'],
                ['title' => 'Retention', 'body' => "We retain information for as long as it is needed to maintain our relationship, deliver services, comply with legal obligations, or defend legal claims."],
                ['title' => 'Our Cookie Policy', 'body' => 'We use cookies to make the website run smoothly and improve your experience. You can adjust cookie settings in your browser.'],
                ['title' => 'Contact Us', 'body' => 'If you have any questions about this policy, please email sales@eboxsoftware.com or use the contact page.'],
            ],
        ],
    ];

    return $pages[$page] ?? [];
}

function ebox_get_import_pages(): array
{
    return ['home', 'about', 'eforms', 'econnect', 'contact', 'book-demo', 'contact-thank-you', 'demo-thank-you', 'privacy'];
}
