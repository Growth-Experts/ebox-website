import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';

const CALENDLY_URL = 'https://calendly.com/bjornpeterson-eboxsoftware/30min';

const BookDemo: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

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
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-ebox-lime focus:border-transparent outline-none transition-all"
                    placeholder="Sam"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-ebox-lime focus:border-transparent outline-none transition-all"
                    placeholder="Property"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-ebox-lime focus:border-transparent outline-none transition-all"
                  placeholder="sam@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-ebox-lime focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              <Button variant="primary" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDemo;