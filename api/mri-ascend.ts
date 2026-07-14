import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { ascendTeamHtml, ascendAutoReplyHtml } from './_emails.js';

const RECIPIENTS = [
  'sales@eboxsoftware.com',
  'marketing@growthexperts.co',
];
const FROM = 'sales@updates.eboxsoftware.com';
const FROM_NAME = 'eBox';
const REPLY_TO = 'sales@eboxsoftware.com';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('[mri-ascend] Function invoked, method:', req.method);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, email, phone, website } = req.body ?? {};

  // Honeypot: bots fill hidden fields. Pretend success and drop silently.
  if (website) {
    console.warn('[mri-ascend] Honeypot triggered, dropping submission.');
    return res.status(200).json({ success: true });
  }

  console.log('[mri-ascend] Fields received:', {
    name: !!name,
    company: !!company,
    email: !!email,
    phone: !!phone,
  });

  if (!name || !company || !email) {
    return res.status(400).json({ error: 'Name, company and email are required.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  console.log('[mri-ascend] RESEND_API_KEY present:', !!apiKey, '| length:', apiKey?.length ?? 0);

  if (!apiKey) {
    console.error('[mri-ascend] RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  const resend = new Resend(apiKey);

  try {
    const [teamResult, autoReplyResult] = await Promise.all([
      resend.emails.send({
        from: `${FROM_NAME} <${FROM}>`,
        to: RECIPIENTS,
        replyTo: [email, REPLY_TO],
        subject: `New MRI Ascend lead: ${name} (${company})`,
        html: ascendTeamHtml({ name, company, email, phone }),
      }),
      resend.emails.send({
        from: `${FROM_NAME} <${FROM}>`,
        to: [email],
        replyTo: REPLY_TO,
        subject: `Thanks for stopping by the eBox stand | MRI Ascend`,
        html: ascendAutoReplyHtml({ name }),
      }),
    ]);

    console.log('[mri-ascend] Team email result:', JSON.stringify(teamResult));
    console.log('[mri-ascend] Auto-reply result:', JSON.stringify(autoReplyResult));

    if (teamResult.error || autoReplyResult.error) {
      console.error('[mri-ascend] Resend returned errors:', {
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
    console.error('[mri-ascend] Unexpected error:', message);
    return res.status(500).json({ error: 'Failed to send email.', details: message });
  }
}
