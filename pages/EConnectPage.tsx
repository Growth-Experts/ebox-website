import React from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import { Mail, Send, BarChart3, Shield, Users, ArrowRight } from 'lucide-react';
import { EConnectLogo } from '../components/Logos';

const EConnectPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>eConnect | Tenant Communications for MRI | eBox</title>
        <meta name="description" content="Email hundreds of tenants directly from your MRI data. Track every delivery. Handle correspondence without leaving your workflow." />
        <link rel="canonical" href="https://eboxplatform.com/econnect" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ebox-dark to-ebox-deep pt-20 pb-24 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <EConnectLogo variant="white" className="h-12 mb-6 mx-auto" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
            Communications for MRI,{' '}
            <span className="text-ebox-lime">done right.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Email hundreds of tenants directly from your MRI data. Track every delivery. Handle correspondence without leaving your workflow.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="primary" size="lg" to="/book-demo">Book a Demo</Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 group" to="/eforms">
              See eForms <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-ebox-forest/15 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-ebox-lime/5 rounded-full blur-3xl -z-0"></div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-wide uppercase text-ebox-forest mb-3">What eConnect does</h2>
            <h3 className="text-4xl font-bold text-ebox-dark">Tenant communications, powered by your MRI data.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-8 h-8 text-ebox-lime" />,
                title: "Bulk Tenant Emails",
                desc: "Send personalised emails to hundreds of tenants at once. Pull names, lease details, and property info directly from MRI."
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-ebox-lime" />,
                title: "Delivery Tracking",
                desc: "Know exactly who opened what, when. Track bounces, deliveries, and engagement — all in one dashboard."
              },
              {
                icon: <Send className="w-8 h-8 text-ebox-lime" />,
                title: "Automated Correspondence",
                desc: "Set up recurring communications that trigger based on lease events, payment reminders, or custom schedules."
              },
              {
                icon: <Users className="w-8 h-8 text-ebox-lime" />,
                title: "Audience Segmentation",
                desc: "Target tenants by property, region, lease type, or any MRI data field. The right message to the right people."
              },
              {
                icon: <Shield className="w-8 h-8 text-ebox-lime" />,
                title: "Audit Trail",
                desc: "Every email logged. Full history of what was sent, to whom, and when. Answer compliance questions in seconds."
              },
              {
                icon: <ArrowRight className="w-8 h-8 text-ebox-lime" />,
                title: "MRI Integration",
                desc: "Connects directly to your MRI database. No manual exports, no CSV files, no data mismatches."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-ebox-dark p-3 rounded-md inline-block mb-6">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-ebox-dark to-ebox-deep text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to streamline tenant <span className="text-ebox-lime">communications?</span></h2>
          <p className="text-xl mb-10 font-medium text-gray-300">Schedule a 20-minute demo. See how eConnect works with your MRI data.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg" to="/book-demo">Book a Demo</Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" to="/contact">Contact Us</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EConnectPage;
