import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone } from 'lucide-react';

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

      {/* Alternative Contact Options */}
      <section className="bg-ebox-light py-16 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-ebox-dark mb-8">Prefer to talk to someone first?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="bg-ebox-forest/20 p-3 rounded-full mb-4">
                <Mail className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="text-gray-500 mb-4 text-sm">We usually respond within 2 hours.</p>
              <a href="mailto:ProductSales@eboxsoftware.com" className="text-ebox-dark font-bold hover:text-ebox-lime transition-colors">ProductSales@eboxsoftware.com</a>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
               <div className="bg-ebox-lime/20 p-3 rounded-full mb-4">
                <Phone className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Call Sales</h3>
              <p className="text-gray-500 mb-4 text-sm">Mon-Fri, 9am - 5pm EST</p>
              <a href="tel:+15551234567" className="text-ebox-dark font-bold hover:text-ebox-lime transition-colors">+1 (555) 123-4567</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDemo;