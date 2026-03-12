const BRAND = {
  lime: '#BCD632',
  dark: '#1A1A1A',
  forest: '#2D5016',
  gray: '#F3F4F6',
  light: '#FAFAF9',
};

export function teamNotificationHtml({
  firstName,
  lastName,
  email,
  message,
  formType,
}: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  formType: 'contact' | 'demo';
}) {
  const heading =
    formType === 'contact'
      ? 'New Contact Form Submission'
      : 'New Demo Request';

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:${BRAND.gray};font-family:Inter,system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.gray};padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="background:${BRAND.dark};padding:24px 32px;">
            <span style="color:${BRAND.lime};font-size:20px;font-weight:700;">eBox</span>
            <span style="color:#fff;font-size:14px;margin-left:12px;">${heading}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:8px 0;color:#666;font-size:13px;width:120px;vertical-align:top;">Name</td>
                <td style="padding:8px 0;color:${BRAND.dark};font-size:15px;font-weight:600;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#666;font-size:13px;vertical-align:top;">Email</td>
                <td style="padding:8px 0;color:${BRAND.dark};font-size:15px;">
                  <a href="mailto:${email}" style="color:${BRAND.forest};">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#666;font-size:13px;vertical-align:top;">Message</td>
                <td style="padding:8px 0;color:${BRAND.dark};font-size:15px;line-height:1.6;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 32px 24px;">
            <a href="mailto:${email}" style="display:inline-block;background:${BRAND.lime};color:${BRAND.dark};padding:10px 24px;border-radius:999px;font-size:14px;font-weight:600;text-decoration:none;">
              Reply to ${firstName}
            </a>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();
}

export function autoReplyHtml({
  firstName,
  formType,
}: {
  firstName: string;
  formType: 'contact' | 'demo';
}) {
  const heading =
    formType === 'contact'
      ? `Thanks for reaching out, ${firstName}!`
      : `Thanks for your interest, ${firstName}!`;

  const body =
    formType === 'contact'
      ? `We've received your message and a member of the eBox team will get back to you shortly.`
      : `We've received your demo request and our team will be in touch shortly to get it scheduled.`;

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:${BRAND.gray};font-family:Inter,system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.gray};padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="background:${BRAND.dark};padding:24px 32px;text-align:center;">
            <span style="color:${BRAND.lime};font-size:24px;font-weight:700;">eBox</span>
          </td>
        </tr>
        <tr>
          <td style="padding:40px 32px;text-align:center;">
            <h1 style="margin:0 0 16px;color:${BRAND.dark};font-size:24px;font-weight:700;">${heading}</h1>
            <p style="margin:0 0 24px;color:#555;font-size:16px;line-height:1.6;">${body}</p>
            <p style="margin:0 0 32px;color:#555;font-size:16px;line-height:1.6;">
              In the meantime, feel free to explore what eBox can do for your team.
            </p>
            <a href="https://eboxsoftware.com" style="display:inline-block;background:${BRAND.lime};color:${BRAND.dark};padding:12px 32px;border-radius:999px;font-size:15px;font-weight:600;text-decoration:none;">
              Visit eboxsoftware.com
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px;border-top:1px solid #eee;text-align:center;">
            <p style="margin:0;color:#999;font-size:13px;">
              eBox by Open Box Group &mdash; New York &bull; London &bull; Cape Town
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();
}
