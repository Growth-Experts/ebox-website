import React from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import { Mail, FolderUp, BarChart3, Shield, Users, Database, ArrowRight, AtSign, Type, Palette, Lock, FileSignature, Files, Paperclip, CheckCircle } from 'lucide-react';
import { EConnectLogo } from '../components/Logos';

const EConnectPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>eConnect | Tenant Communications for MRI | eBox</title>
        <meta name="description" content="Email thousands of tenants directly from your MRI data. Track every delivery. Handle correspondence without leaving your workflow." />
        <link rel="canonical" href="https://www.eboxsoftware.com/econnect" />
        <meta property="og:title" content="eConnect | Tenant Communications for MRI | eBox" />
        <meta property="og:description" content="Email thousands of tenants directly from your MRI data. Track every delivery. Handle correspondence without leaving your workflow." />
        <meta property="og:url" content="https://www.eboxsoftware.com/econnect" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.eboxsoftware.com/images/og-ebox.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="eConnect | Tenant Communications for MRI | eBox" />
        <meta name="twitter:description" content="Email thousands of tenants directly from your MRI data. Track every delivery. Handle correspondence without leaving your workflow." />
        <meta name="twitter:image" content="https://www.eboxsoftware.com/images/og-ebox.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "eConnect",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "url": "https://www.eboxsoftware.com/econnect",
          "description": "eConnect enables property management teams to email thousands of tenants directly from MRI data, with full delivery tracking and correspondence management.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "0",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceType": "https://schema.org/InvoicePrice"
            }
          },
          "publisher": {
            "@type": "Organization",
            "name": "eBox Software",
            "url": "https://www.eboxsoftware.com"
          }
        })}</script>
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
            Email thousands of tenants directly from your MRI data. Track every delivery. Handle correspondence without leaving your workflow.
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
                desc: "Know exactly who opened what, when. Track bounces, deliveries, and engagement."
              },
              {
                icon: <FolderUp className="w-8 h-8 text-ebox-lime" />,
                title: "Save to SharePoint",
                desc: "Sync all reports and documents sent from MRI directly to SharePoint."
              },
              {
                icon: <Users className="w-8 h-8 text-ebox-lime" />,
                title: "Audience Segmentation",
                desc: "Target tenants by property, region, lease type, or any MRI data field. The right message to the right people."
              },
              {
                icon: <Shield className="w-8 h-8 text-ebox-lime" />,
                title: "Audit Trail",
                desc: "Every email logged. Full history of what was sent, to whom, and when. Answer compliance questions."
              },
              {
                icon: <Database className="w-8 h-8 text-ebox-lime" />,
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

      {/* What an eConnect email looks like */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold tracking-wide uppercase text-ebox-forest mb-3">See it in action</h2>
            <h3 className="text-4xl font-bold text-ebox-dark mb-5 text-balance">Professional, personalised emails for every tenant.</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              eConnect works alongside MRI PMX to turn your underlying data into polished, on-brand emails, sent from your own domain with every detail personalised to the recipient.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[65fr_35fr] gap-10 lg:gap-12 mb-20 items-center">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden p-4 sm:p-6">
              <img
                src="/images/econnect-email-after.png"
                alt="Branded TerraVista statement email with dynamic subject, descriptive file names, secured PDFs and company branding, powered by eConnect"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-ebox-dark mb-5">What every email includes</h4>
              <ul className="space-y-3.5 text-gray-700">
                <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-ebox-forest flex-shrink-0 mt-0.5" /><span>Sent from <span className="font-semibold">your own domain</span></span></li>
                <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-ebox-forest flex-shrink-0 mt-0.5" /><span>Dynamic subject with property, unit and invoice details</span></li>
                <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-ebox-forest flex-shrink-0 mt-0.5" /><span>Clear, descriptive filenames pulled from MRI</span></li>
                <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-ebox-forest flex-shrink-0 mt-0.5" /><span>Encrypted, password-protected and digitally sealed PDFs</span></li>
                <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-ebox-forest flex-shrink-0 mt-0.5" /><span>Personalised body with tenant name, balance and context</span></li>
                <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-ebox-forest flex-shrink-0 mt-0.5" /><span>Full company branding, logo and signature block</span></li>
              </ul>
            </div>
          </div>

          {/* Capabilities */}
          <div className="mb-10 text-center">
            <h4 className="text-2xl md:text-3xl font-bold text-ebox-dark mb-3">Everything your team needs to send emails from MRI</h4>
            <p className="text-gray-600 max-w-2xl mx-auto">A complete toolkit for branded, personalised, secure correspondence at scale.</p>
          </div>

          <div className="bg-ebox-dark rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              {[
                {
                  icon: <AtSign className="w-5 h-5 text-ebox-dark" />,
                  title: "Your domain, your brand",
                  desc: "Send from your own Microsoft 365 / Exchange so emails look native to your tenants and reinforce your brand with every send."
                },
                {
                  icon: <Type className="w-5 h-5 text-ebox-dark" />,
                  title: "Dynamic subject &amp; body",
                  desc: "Merge any PMX field into the subject, body and filenames: tenant name, property, unit, invoice number, balance, due date."
                },
                {
                  icon: <Palette className="w-5 h-5 text-ebox-dark" />,
                  title: "On-brand templates",
                  desc: "A WYSIWYG editor lets your team design branded templates with logos, colours and a professional signature block."
                },
                {
                  icon: <Lock className="w-5 h-5 text-ebox-dark" />,
                  title: "Encrypted &amp; password protected",
                  desc: "Statements and invoices leave your system as secured PDFs, so sensitive tenant and financial data stays private."
                },
                {
                  icon: <FileSignature className="w-5 h-5 text-ebox-dark" />,
                  title: "Digitally sealed PDFs",
                  desc: "Apply a trusted PDF electronic seal with certificate and timestamp so recipients can verify authenticity."
                },
                {
                  icon: <Files className="w-5 h-5 text-ebox-dark" />,
                  title: "Merged report packs",
                  desc: "Combine multiple MRI reports into a single document with a cover page and contents page, or send them separately."
                },
                {
                  icon: <Paperclip className="w-5 h-5 text-ebox-dark" />,
                  title: "Add supporting documents",
                  desc: "Attach files from outside MRI (utility bills, service charge breakdowns, certificates) to the same communication."
                },
                {
                  icon: <Mail className="w-5 h-5 text-ebox-dark" />,
                  title: "Custom reply-to mapping",
                  desc: "Replies and bounce-backs route to the right team, building or property manager, down to tenant level if needed."
                },
                {
                  icon: <FolderUp className="w-5 h-5 text-ebox-dark" />,
                  title: "Auto-archive to SharePoint",
                  desc: "Every report sent is automatically filed in SharePoint, organised by building, lease or report type."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="flex-shrink-0">
                    <div className="bg-ebox-lime rounded-full w-11 h-11 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h5 className="text-lg font-bold text-white mb-1.5" dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p className="text-gray-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-sm font-bold tracking-wide uppercase text-ebox-forest mb-3">What Our Clients Say</h2>
            <h3 className="text-3xl font-bold text-ebox-dark">Teams using eConnect</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col">
              <img src="/images/cls.png" alt="CLS" className="h-7 object-contain self-start mb-6" />
              <p className="text-lg text-gray-700 italic leading-relaxed flex-grow">"eConnect has sped up our invoice emailing process, allowing us to attach invoices and backup documents and seamlessly send them out to tenants. It saves us significant time and effort. It's a game changer."</p>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                <img src="/images/tommy-law.jpeg" alt="Tommy Law" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-gray-900">Tommy Law</div>
                  <div className="text-sm text-gray-500">UK Credit Control Manager, CLS</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col">
              <img src="/images/savills.svg" alt="Savills" className="h-7 object-contain self-start mb-6" />
              <p className="text-lg text-gray-700 italic leading-relaxed flex-grow">"We've used eConnect since 2013 for invoices, letters, and internal rent approvals from MRI. It's embedded and integral to our processes, helping us avoid costly re-sending by post or manual email. The significant time and resource savings have further reduced our operational risk."</p>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                <img src="/images/rachel-rule.jpeg" alt="Rachel Rule" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-gray-900">Rachel Rule</div>
                  <div className="text-sm text-gray-500">Director – Savills UK</div>
                </div>
              </div>
            </div>
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
