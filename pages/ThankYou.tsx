import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

interface ThankYouProps {
  variant: 'contact' | 'demo';
}

const CONTENT = {
  contact: {
    title: 'Contact Us - Thank You | eBox',
    canonical: 'https://www.eboxsoftware.com/contact/thank-you',
    heading: (name: string) =>
      name ? `Thanks for reaching out, ${name}!` : 'Thanks for reaching out!',
    message:
      "We've received your message and a member of the eBox team will get back to you shortly.",
    cta: 'Back to Homepage',
    ctaPath: '/',
  },
  demo: {
    title: 'Demo Request - Thank You | eBox',
    canonical: 'https://www.eboxsoftware.com/book-demo/thank-you',
    heading: (name: string) =>
      name ? `Thanks for your interest, ${name}!` : 'Thanks for your interest!',
    message:
      "We've received your demo request and our team will be in touch shortly to get it scheduled.",
    cta: 'Back to Homepage',
    ctaPath: '/',
  },
};

const ThankYou: React.FC<ThankYouProps> = ({ variant }) => {
  const location = useLocation();
  const firstName = (location.state as { firstName?: string })?.firstName ?? '';
  const c = CONTENT[variant];

  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>{c.title}</title>
        <meta name="robots" content="noindex" />
        <link rel="canonical" href={c.canonical} />
      </Helmet>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-ebox-lime/20 p-4 rounded-full">
              <CheckCircle className="w-12 h-12 text-ebox-forest" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-ebox-dark mb-4">
            {c.heading(firstName)}
          </h1>

          <p className="text-lg text-gray-600 mb-4 max-w-lg mx-auto">
            {c.message}
          </p>

          <p className="text-gray-500 mb-10">
            We've also sent a confirmation to your email.
          </p>

          <Button to={c.ctaPath} variant="primary" size="lg">
            {c.cta}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
