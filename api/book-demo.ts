import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { teamNotificationHtml, autoReplyHtml } from './_emails.js';

const RECIPIENTS = [
  'ProductSales@eboxsoftware.com',
  'marketing@growthexperts.co',
];
const FROM = 'ProductSales@eboxsoftware.com';
const FROM_NAME = 'eBox';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, message } = req.body ?? {};

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await Promise.all([
      resend.emails.send({
        from: `${FROM_NAME} <${FROM}>`,
        to: RECIPIENTS,
        replyTo: email,
        subject: `New Demo Request from ${firstName} ${lastName}`,
        html: teamNotificationHtml({ firstName, lastName, email, message, formType: 'demo' }),
      }),
      resend.emails.send({
        from: `${FROM_NAME} <${FROM}>`,
        to: [email],
        subject: `Your demo request has been received | eBox`,
        html: autoReplyHtml({ firstName, formType: 'demo' }),
      }),
    ]);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Failed to send demo request emails:', err);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
}
