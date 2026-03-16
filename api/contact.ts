import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { teamNotificationHtml, autoReplyHtml } from './_emails.js';

const RECIPIENTS = [
  'sales@eboxsoftware.com',
  'marketing@growthexperts.co',
];
const FROM = 'sales@updates.eboxsoftware.com';
const FROM_NAME = 'eBox';
const REPLY_TO = 'sales@eboxsoftware.com';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('[contact] Function invoked, method:', req.method);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, message } = req.body ?? {};
  console.log('[contact] Fields received:', { firstName: !!firstName, lastName: !!lastName, email: !!email, message: !!message });

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  console.log('[contact] RESEND_API_KEY present:', !!apiKey, '| length:', apiKey?.length ?? 0);

  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  const resend = new Resend(apiKey);

  try {
    const [teamResult, autoReplyResult] = await Promise.all([
      resend.emails.send({
        from: `${FROM_NAME} <${FROM}>`,
        to: RECIPIENTS,
        replyTo: [email, REPLY_TO],
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: teamNotificationHtml({ firstName, lastName, email, message, formType: 'contact' }),
      }),
      resend.emails.send({
        from: `${FROM_NAME} <${FROM}>`,
        to: [email],
        replyTo: REPLY_TO,
        subject: `We've received your message | eBox`,
        html: autoReplyHtml({ firstName, formType: 'contact' }),
      }),
    ]);

    console.log('[contact] Team email result:', JSON.stringify(teamResult));
    console.log('[contact] Auto-reply result:', JSON.stringify(autoReplyResult));

    if (teamResult.error || autoReplyResult.error) {
      console.error('[contact] Resend returned errors:', {
        team: teamResult.error,
        autoReply: autoReplyResult.error,
      });
      return res.status(500).json({
        error: 'Email delivery failed.',
        details: {
          team: teamResult.error?.message ?? null,
          autoReply: autoReplyResult.error?.message ?? null,
        },
      });
    }

    return res.status(200).json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[contact] Unexpected error:', message);
    return res.status(500).json({ error: 'Failed to send email.', details: message });
  }
}
