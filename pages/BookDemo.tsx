import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { Loader2 } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/bjornpeterson-eboxsoftware/30min';

const BookDemo: React.FC = () => {
  const navigate = useNavigate();
  const widgetRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const handleMessage = (e: MessageEvent) => {
      if (e.data.event === 'calendly.page_height' && widgetRef.current) {
        widgetRef.current.style.height = e.data.payload.height;
      }
    };
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      setErrorMsg('Please fill in all fields.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong.');
      }

      navigate('/book-demo/thank-you', { state: { firstName: form.firstName } });
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col w-full bg-white">
      <Helmet>
        <title>Book a Demo | eBox: See It in Action</title>
        <meta name="description" content="Schedule a 20-minute personalised walkthrough. See how eForms can streamline your specific MRI workflows." />
        <link rel="canonical" href="https://eboxsoftware.com/book-demo" />
      </Helmet>
      {/* Header */}
      <section className="pt-16 pb-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-ebox-dark mb-4">See eBox in action</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Schedule a 20-minute personalized walkthrough. We'll show you how eForms can streamline your specific MRI workflows.
        </p>
      </section>

      {/* Calendly Inline Embed */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            ref={widgetRef}
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: '320px', height: '700px', overflow: 'hidden' }}
          />
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-ebox-light py-16 border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-ebox-dark mb-2 text-center">Prefer to send a message?</h2>
          <p className="text-gray-500 text-center mb-8">We'll get back to you as soon as possible.</p>

          <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="demoFirstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="demoFirstName"
                    required
                    value={form.firstName}
                    onChange={update('firstName')}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-ebox-lime focus:border-transparent outline-none transition-all"
                    placeholder="Sam"
                  />
                </div>
                <div>
                  <label htmlFor="demoLastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="demoLastName"
                    required
                    value={form.lastName}
                    onChange={update('lastName')}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-ebox-lime focus:border-transparent outline-none transition-all"
                    placeholder="Property"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="demoEmail" className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                <input 
                  type="email" 
                  id="demoEmail"
                  required
                  value={form.email}
                  onChange={update('email')}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-ebox-lime focus:border-transparent outline-none transition-all"
                  placeholder="sam@company.com"
                />
              </div>

              <div>
                <label htmlFor="demoMessage" className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                <textarea 
                  id="demoMessage" 
                  rows={4}
                  required
                  value={form.message}
                  onChange={update('message')}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-ebox-lime focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              {status === 'error' && (
                <p className="text-red-600 text-sm">{errorMsg}</p>
              )}

              <Button
                variant="primary"
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
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDemo;
