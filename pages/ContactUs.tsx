import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { Mail, MapPin, Loader2 } from 'lucide-react';

const ContactUs: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const contentType = res.headers.get('content-type') ?? '';
      if (!contentType.includes('application/json')) {
        console.error('API returned non-JSON response:', { status: res.status, contentType });
        throw new Error('The form endpoint is not responding. Please try again or email us directly.');
      }

      const data = await res.json();

      if (!res.ok) {
        console.error('API error response:', data);
        throw new Error(data.error || 'Something went wrong.');
      }

      navigate('/contact/thank-you', { state: { firstName: form.firstName } });
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>Contact Us | eBox: Get in Touch</title>
        <meta name="description" content="Have questions about eForms or eConnect? Need a custom solution? Contact the eBox team, with offices in New York, London, and Cape Town." />
        <link rel="canonical" href="https://www.eboxsoftware.com/contact" />
        <meta property="og:title" content="Contact Us | eBox: Get in Touch" />
        <meta property="og:description" content="Have questions about eForms or eConnect? Need a custom solution? Contact the eBox team, with offices in New York, London, and Cape Town." />
        <meta property="og:url" content="https://www.eboxsoftware.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.eboxsoftware.com/images/og-ebox.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | eBox: Get in Touch" />
        <meta name="twitter:description" content="Have questions about eForms or eConnect? Need a custom solution? Contact the eBox team, with offices in New York, London, and Cape Town." />
        <meta name="twitter:image" content="https://www.eboxsoftware.com/images/og-ebox.png" />
      </Helmet>
      {/* Header */}
      <section className="bg-ebox-dark text-white pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Get in touch</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions about eBox? Need a custom solution?<br />We're here to help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Contact Info (Left Side) */}
            <div className="bg-ebox-forest/10 p-10 md:w-2/5 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-ebox-dark mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-md shadow-sm text-ebox-forest">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Email Us</h3>
                      <a href="mailto:sales@eboxsoftware.com" className="text-ebox-forest font-semibold mt-1 block hover:underline transition-colors">sales@eboxsoftware.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-md shadow-sm text-ebox-forest">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Global Offices</h3>
                      <p className="text-gray-600 mt-1">
                        Part of the Open Box Group<br />
                        Offices in New York, London, and Cape Town.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-sm text-gray-500">
                  Looking for technical support? Visit our <a href="#" className="text-ebox-forest underline font-medium">Help Center</a>.
                </p>
              </div>
            </div>

            {/* Contact Form (Right Side) */}
            <div className="p-10 md:w-3/5 bg-white">
              <h2 className="text-2xl font-bold text-ebox-dark mb-6">Send us a message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      required
                      value={form.firstName}
                      onChange={update('firstName')}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-ebox-lime focus:border-transparent outline-none transition-all"
                      placeholder="Sam"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      required
                      value={form.lastName}
                      onChange={update('lastName')}
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
                    required
                    value={form.email}
                    onChange={update('email')}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-ebox-lime focus:border-transparent outline-none transition-all"
                    placeholder="sam@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                  <textarea 
                    id="message" 
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
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ebox-dark text-center mb-4">Our Offices</h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">Part of the Open Box Group, with teams across three continents.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* New York */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-ebox-dark mb-1">New York</h3>
              <p className="text-ebox-forest font-semibold mb-4">
                <a href="tel:+13322454315" className="hover:text-ebox-dark transition-colors">+1 332 245 4315</a>
              </p>
              <div className="text-gray-600 space-y-0.5">
                <p>1120 Avenue of the Americas</p>
                <p>Suite 4153, 4th Floor</p>
                <p>New York NY 10036-6700</p>
                <p>United States</p>
              </div>
            </div>

            {/* London */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-ebox-dark mb-1">London</h3>
              <p className="text-ebox-forest font-semibold mb-4">
                <a href="tel:+442045511386" className="hover:text-ebox-dark transition-colors">+44 20 4551 1386</a>
              </p>
              <div className="text-gray-600 space-y-0.5">
                <p>298 Regents Park Road</p>
                <p>Marlborough House, London</p>
                <p>N3 2SZ</p>
                <p>United Kingdom</p>
              </div>
            </div>

            {/* Cape Town */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-ebox-dark mb-1">Cape Town</h3>
              <p className="text-ebox-forest font-semibold mb-4">
                <a href="tel:+27217139300" className="hover:text-ebox-dark transition-colors">+27 21 713 9300</a>
              </p>
              <div className="text-gray-600 space-y-0.5">
                <p>240 Main Road</p>
                <p>Tokai 7945</p>
                <p>Cape Town</p>
                <p>South Africa</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
