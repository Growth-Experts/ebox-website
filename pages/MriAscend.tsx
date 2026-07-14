import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Loader2, ArrowRight, ArrowDown, ShieldCheck } from 'lucide-react';
import Button from '../components/Button';

const FORM_ANCHOR_ID = 'enter-draw';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

/**
 * Landing page linked from the QR code on the eBox stand at MRI Ascend APAC 2026.
 * The visitor is already at the stand, so the copy assumes they have just said hello.
 *
 * Easy edits for the team:
 * OFFER_NOTE   is the line under the form heading. Update it once the prize is
 *              decided (for example, "Enter to win an iPad").
 * SUBMIT_LABEL is the button text.
 * The h1 headline below is plain text, so edit it directly if you like.
 */
const OFFER_NOTE =
  "Add your details below to go in the draw. We'll also be in touch after the show.";
const SUBMIT_LABEL = 'Enter now';

const MriAscend: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', website: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const scrollToForm = () =>
    document.getElementById(FORM_ANCHOR_ID)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.company || !form.email) {
      setErrorMsg('Please add your name, company and email.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/mri-ascend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const contentType = res.headers.get('content-type') ?? '';
      if (!contentType.includes('application/json')) {
        console.error('API returned non-JSON response:', { status: res.status, contentType });
        throw new Error('The form is not responding right now. Please try again in a moment.');
      }

      const data = await res.json();

      if (!res.ok) {
        console.error('API error response:', data);
        throw new Error(data.error || 'Something went wrong.');
      }

      if (
        typeof window !== 'undefined' &&
        Array.isArray((window as unknown as { dataLayer?: unknown[] }).dataLayer)
      ) {
        (window as unknown as { dataLayer: unknown[] }).dataLayer.push({ event: 'mriascend_lead' });
      }

      navigate('/mriascend/thank-you', { state: { firstName: form.name.trim().split(' ')[0] } });
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-ebox-lime focus:border-transparent outline-none transition-all';

  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>eBox at MRI Ascend 2026</title>
        <meta
          name="description"
          content="Visited the eBox stand at MRI Ascend APAC 2026 in Sydney? Leave your details to go in the draw and the team will be in touch."
        />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.eboxsoftware.com/mriascend" />
      </Helmet>

      {/* Hero: compact, so the form sits high on the page */}
      <section className="bg-ebox-dark bg-gradient-to-b from-ebox-deep to-ebox-dark text-white">
        <div className="max-w-xl mx-auto px-4 pt-12 pb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance">
            Great to meet you at the <span className="text-ebox-lime">eBox stand</span>
          </h1>

          <Button variant="primary" size="lg" className="mt-6" type="button" onClick={scrollToForm}>
            Enter competition
            <ArrowDown className="w-5 h-5 ml-2" />
          </Button>

          <figure className="mt-8">
            <img
              src="/images/mriascend-stand.jpg"
              alt="Dean and Bjorn from eBox at their stand at MRI Ascend APAC 2026 in Sydney"
              className="w-full rounded-2xl ring-1 ring-white/10 shadow-2xl"
            />
            <figcaption className="mt-4">
              <p className="text-gray-300">Thanks for stopping by.</p>
              <div className="mt-3 flex items-center justify-center gap-6 text-sm">
                <a
                  href="https://www.linkedin.com/in/dean-nixon-29356213/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dean Nixon on LinkedIn"
                  className="inline-flex items-center gap-1.5 text-white hover:text-ebox-lime transition-colors"
                >
                  Dean Nixon <LinkedInIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bjornspeterson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bjorn Peterson on LinkedIn"
                  className="inline-flex items-center gap-1.5 text-white hover:text-ebox-lime transition-colors"
                >
                  Bjorn Peterson <LinkedInIcon className="w-5 h-5" />
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* MRI Ascend event reference, given room on a clean background */}
      <section className="bg-white border-b border-gray-100 py-7">
        <div className="max-w-xl mx-auto px-4 flex flex-col items-center gap-2 text-center">
          <img
            src="/images/mriascend-logo.png"
            alt="MRI Ascend APAC 2026"
            className="h-14 w-auto"
          />
          <p className="text-sm text-gray-500">18 to 19 August 2026 &middot; Hilton Sydney</p>
        </div>
      </section>

      {/* Form: high up, no overlap */}
      <section id={FORM_ANCHOR_ID} className="bg-gray-50 py-10 sm:py-14 scroll-mt-20">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-ebox-dark">Enter the draw</h2>
            <p className="mt-2 text-gray-600 text-pretty">{OFFER_NOTE}</p>

            <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
              {/* Honeypot: hidden from real users */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={update('website')}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={form.name}
                  onChange={update('name')}
                  className={inputClass}
                  placeholder="Jane Smith"
                  autoComplete="name"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  value={form.company}
                  onChange={update('company')}
                  className={inputClass}
                  placeholder="Acme Property Group"
                  autoComplete="organization"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  className={inputClass}
                  placeholder="jane@company.com"
                  autoComplete="email"
                  inputMode="email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile <span className="font-normal text-gray-400">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={form.phone}
                  onChange={update('phone')}
                  className={inputClass}
                  placeholder="+61 400 000 000"
                  autoComplete="tel"
                  inputMode="tel"
                />
              </div>

              {status === 'error' && <p className="text-red-600 text-sm">{errorMsg}</p>}

              <Button
                variant="primary"
                size="lg"
                className="w-full"
                type="submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    {SUBMIT_LABEL}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>

              <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                We'll only use your details to follow up about eBox. No spam.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MriAscend;
