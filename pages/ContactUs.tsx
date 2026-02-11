import React from 'react';
import Button from '../components/Button';
import { Mail, MapPin } from 'lucide-react';

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-ebox-dark text-white pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Get in touch</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions about eForms? Need a custom solution?<br />We're here to help.
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
                      <a href="mailto:productsales@openboxsoftware.com" className="text-gray-600 mt-1 block hover:text-ebox-dark transition-colors">productsales@openboxsoftware.com</a>
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