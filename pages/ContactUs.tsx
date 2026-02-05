import React from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-ebox-dark text-white pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Get in touch</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions about eForms? Need a custom solution? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Contact Info (Left Side) */}
            <div className="bg-ebox-teal/10 p-10 md:w-2/5 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-ebox-dark mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm text-ebox-teal">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Email Us</h3>
                      <p className="text-gray-600 mt-1">info@ebox.com</p>
                      <p className="text-gray-600">support@ebox.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm text-ebox-teal">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Call Us</h3>
                      <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri from 8am to 5pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm text-ebox-teal">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Locations</h3>
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
                  Looking for technical support? Visit our <a href="#" className="text-ebox-teal underline font-medium">Help Center</a>.
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ebox-lime focus:border-transparent outline-none transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ebox-lime focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ebox-lime focus:border-transparent outline-none transition-all"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ebox-lime focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>

                <Button variant="primary" className="w-full">Send Message</Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;