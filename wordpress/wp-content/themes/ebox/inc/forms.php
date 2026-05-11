<?php
/**
 * Lightweight Resend-backed form handling.
 *
 * @package ebox
 */

if (!defined('ABSPATH')) {
    exit;
}

function ebox_resend_api_key(): string
{
    if (defined('EBOX_RESEND_API_KEY')) {
        return (string) EBOX_RESEND_API_KEY;
    }

    return (string) getenv('RESEND_API_KEY');
}

function ebox_form_recipients(): array
{
    $settings = ebox_get_site_defaults();
    $text = ebox_field('form_recipients_text', '', 'option');

    if ($text) {
        return array_values(array_filter(array_map('trim', preg_split('/\r\n|\r|\n/', $text))));
    }

    return $settings['form_recipients'];
}

function ebox_form_email_html(array $payload, string $kind, bool $auto_reply = false): string
{
    $first = esc_html($payload['first_name']);
    $last = esc_html($payload['last_name']);
    $email = esc_html($payload['email']);
    $message = nl2br(esc_html($payload['message']));
    $heading = $kind === 'demo' ? 'New Demo Request' : 'New Contact Form Submission';

    if ($auto_reply) {
        $heading = $kind === 'demo' ? "Thanks for your interest, {$first}!" : "Thanks for reaching out, {$first}!";
        $body = $kind === 'demo'
            ? "We've received your demo request and our team will be in touch shortly to get it scheduled."
            : "We've received your message and a member of the eBox team will get back to you shortly.";

        return '<!doctype html><html><body style="margin:0;padding:0;background:#f3f4f6;font-family:Inter,Arial,sans-serif;"><table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;"><tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;"><tr><td style="background:#1a1a1a;padding:24px 32px;text-align:center;color:#bcd632;font-size:24px;font-weight:700;">eBox</td></tr><tr><td style="padding:40px 32px;text-align:center;"><h1 style="margin:0 0 16px;color:#1a1a1a;font-size:24px;">' . esc_html($heading) . '</h1><p style="margin:0 0 24px;color:#555;font-size:16px;line-height:1.6;">' . esc_html($body) . '</p><a href="https://eboxsoftware.com" style="display:inline-block;background:#bcd632;color:#1a1a1a;padding:12px 32px;border-radius:999px;font-weight:700;text-decoration:none;">Visit eboxsoftware.com</a></td></tr></table></td></tr></table></body></html>';
    }

    return '<!doctype html><html><body style="margin:0;padding:0;background:#f3f4f6;font-family:Inter,Arial,sans-serif;"><table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;"><tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;"><tr><td style="background:#1a1a1a;padding:24px 32px;"><span style="color:#bcd632;font-size:20px;font-weight:700;">eBox</span><span style="color:#fff;font-size:14px;margin-left:12px;">' . esc_html($heading) . '</span></td></tr><tr><td style="padding:32px;"><p><strong>Name:</strong> ' . $first . ' ' . $last . '</p><p><strong>Email:</strong> <a href="mailto:' . esc_attr($email) . '">' . $email . '</a></p><p><strong>Message:</strong><br>' . $message . '</p></td></tr></table></td></tr></table></body></html>';
}

function ebox_resend_send(array $args): bool|WP_Error
{
    $api_key = ebox_resend_api_key();
    if (!$api_key) {
        return new WP_Error('ebox_resend_missing_key', __('Resend API key is not configured.', 'ebox'));
    }

    $response = wp_remote_post('https://api.resend.com/emails', [
        'headers' => [
            'Authorization' => 'Bearer ' . $api_key,
            'Content-Type' => 'application/json',
        ],
        'body' => wp_json_encode($args),
        'timeout' => 15,
    ]);

    if (is_wp_error($response)) {
        return $response;
    }

    $code = wp_remote_retrieve_response_code($response);
    if ($code < 200 || $code >= 300) {
        return new WP_Error('ebox_resend_failed', wp_remote_retrieve_body($response));
    }

    return true;
}

function ebox_handle_lead_form(): void
{
    $kind = sanitize_key($_POST['ebox_form_type'] ?? 'contact');
    $redirect = esc_url_raw($_POST['ebox_redirect'] ?? home_url('/'));
    $source = esc_url_raw($_POST['_wp_http_referer'] ?? home_url('/'));

    if (!in_array($kind, ['contact', 'demo'], true) || !wp_verify_nonce($_POST['ebox_form_nonce'] ?? '', 'ebox_' . $kind . '_form')) {
        wp_safe_redirect(add_query_arg('form_error', 'invalid', $source));
        exit;
    }

    if (!empty($_POST['website'])) {
        wp_safe_redirect($redirect);
        exit;
    }

    $payload = [
        'first_name' => sanitize_text_field($_POST['first_name'] ?? ''),
        'last_name' => sanitize_text_field($_POST['last_name'] ?? ''),
        'email' => sanitize_email($_POST['email'] ?? ''),
        'message' => sanitize_textarea_field($_POST['message'] ?? ''),
    ];

    if (!$payload['first_name'] || !$payload['last_name'] || !$payload['email'] || !$payload['message'] || !is_email($payload['email'])) {
        wp_safe_redirect(add_query_arg('form_error', 'required', $source));
        exit;
    }

    $settings = ebox_get_site_defaults();
    $from = ebox_field('form_from', $settings['form_from'], 'option');
    $from_name = ebox_field('form_from_name', $settings['form_from_name'], 'option');
    $reply_to = ebox_field('form_reply_to', $settings['form_reply_to'], 'option');
    $subject = $kind === 'demo'
        ? sprintf('New Demo Request from %s %s', $payload['first_name'], $payload['last_name'])
        : sprintf('New Contact Form Submission from %s %s', $payload['first_name'], $payload['last_name']);

    $team_result = ebox_resend_send([
        'from' => sprintf('%s <%s>', $from_name, $from),
        'to' => ebox_form_recipients(),
        'reply_to' => [$payload['email'], $reply_to],
        'subject' => $subject,
        'html' => ebox_form_email_html($payload, $kind),
    ]);

    $auto_result = ebox_resend_send([
        'from' => sprintf('%s <%s>', $from_name, $from),
        'to' => [$payload['email']],
        'reply_to' => $reply_to,
        'subject' => $kind === 'demo' ? 'Your demo request has been received | eBox' : "We've received your message | eBox",
        'html' => ebox_form_email_html($payload, $kind, true),
    ]);

    if (is_wp_error($team_result) || is_wp_error($auto_result)) {
        wp_safe_redirect(add_query_arg('form_error', 'email', $source));
        exit;
    }

    wp_safe_redirect(add_query_arg('first_name', rawurlencode($payload['first_name']), $redirect));
    exit;
}

add_action('admin_post_nopriv_ebox_lead_form', 'ebox_handle_lead_form');
add_action('admin_post_ebox_lead_form', 'ebox_handle_lead_form');

function ebox_render_lead_form(string $kind, string $heading = '', string $intro = ''): void
{
    $kind = $kind === 'demo' ? 'demo' : 'contact';
    $redirect = $kind === 'demo' ? home_url('/book-demo/thank-you/') : home_url('/contact/thank-you/');
    ?>
    <div class="form-card">
        <?php if ($heading) : ?><h2><?php echo esc_html($heading); ?></h2><?php endif; ?>
        <?php if ($intro) : ?><p class="form-intro"><?php echo esc_html($intro); ?></p><?php endif; ?>
        <?php if (isset($_GET['form_error'])) : ?>
            <p class="form-error"><?php esc_html_e('Sorry, something went wrong. Please check the form and try again, or email us directly.', 'ebox'); ?></p>
        <?php endif; ?>
        <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" class="lead-form">
            <input type="hidden" name="action" value="ebox_lead_form">
            <input type="hidden" name="ebox_form_type" value="<?php echo esc_attr($kind); ?>">
            <input type="hidden" name="ebox_redirect" value="<?php echo esc_url($redirect); ?>">
            <?php wp_nonce_field('ebox_' . $kind . '_form', 'ebox_form_nonce'); ?>
            <label class="hp-field">Website <input type="text" name="website" tabindex="-1" autocomplete="off"></label>
            <div class="form-grid">
                <label>First Name <input type="text" name="first_name" placeholder="Sam" required></label>
                <label>Last Name <input type="text" name="last_name" placeholder="Property" required></label>
            </div>
            <label>Work Email <input type="email" name="email" placeholder="sam@company.com" required></label>
            <label>How can we help? <textarea name="message" rows="4" placeholder="Tell us about your needs..." required></textarea></label>
            <button class="button button-primary button-full" type="submit"><?php esc_html_e('Send Message', 'ebox'); ?></button>
        </form>
    </div>
    <?php
}
