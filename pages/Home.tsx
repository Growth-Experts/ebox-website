import React from 'react';
import Button from '../components/Button';
import { PageRoute } from '../types';
import { ArrowRight, CheckCircle, Upload, Shield, Users, Layers, FileText, Layout, PlayCircle } from 'lucide-react';
import { EFormsLogo } from '../components/Logos';

interface HomeProps {
  onNavigate: (page: PageRoute) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-[#FEFCF0] pt-20 pb-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block py-1 px-3 rounded-full bg-ebox-lime/20 text-green-800 font-semibold text-sm mb-6">
              For real estate teams using MRI
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-ebox-dark leading-[1.1] mb-6">
              MRI data imports, <span className="text-transparent bg-clip-text bg-gradient-to-r from-ebox-lime to-green-600">made easy.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Give your team structured forms for importing data into MRI. Stop relying on manual processes and spreadsheets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" onClick={() => onNavigate('book-demo')}>Book a Demo</Button>
              <Button variant="outline" size="lg" className="group" onClick={() => onNavigate('eforms')}>
                See How It Works <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="mt-8 text-sm text-gray-500 font-medium">
               Used by leading real estate companies managing <span className="text-ebox-dark font-bold">10M+ sq ft</span> of properties
            </div>
          </div>
        </div>
        {/* Abstract shape decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-ebox-lime/10 rounded-full blur-3xl -z-0"></div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-wide uppercase text-gray-400 mb-2">The Problem</h2>
            <h3 className="text-4xl font-bold text-ebox-dark mb-4">Stop relying on manual processes.</h3>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Your team shouldn't spend hours copying data from Excel into MRI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Before */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-4 left-4 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">BEFORE</div>
              <div className="mt-8 space-y-3 opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500">
                 <div className="h-8 bg-gray-200 rounded w-full animate-pulse"></div>
                 <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                 <div className="flex gap-2">
                    <div className="h-8 bg-red-200 rounded w-1/4"></div>
                    <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                 </div>
                 <div className="h-8 bg-gray-200 rounded w-full"></div>
                 <p className="text-red-500 text-sm mt-4 font-mono">Error: Row 42 invalid format...</p>
              </div>
              <p className="mt-8 text-center font-bold text-gray-400">Messy CSVs & Manual Entry</p>
            </div>

            {/* After */}
            <div className="bg-white rounded-2xl p-8 border-2 border-ebox-lime/30 shadow-xl relative overflow-hidden">
               <div className="absolute top-4 left-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">AFTER</div>
               <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                    <CheckCircle className="text-ebox-lime w-5 h-5" />
                    <span className="text-gray-700 font-medium">Journal Entry #4920 Validated</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                    <CheckCircle className="text-ebox-lime w-5 h-5" />
                    <span className="text-gray-700 font-medium">Lease Terms matched to MRI</span>
                  </div>
                  <Button variant="primary" size="sm" className="w-full">Import to MRI</Button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-wide uppercase text-ebox-teal mb-2">What You Get</h2>
            <h3 className="text-4xl font-bold text-ebox-dark mb-4">Forms that feed directly into MRI.</h3>
            <p className="text-xl text-gray-600 max-w-3xl">
              eForms gives you user-friendly forms that feed data directly into MRI, just like ordering online, but for your property data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Layout className="w-8 h-8 text-ebox-lime" />, 
                title: "Smart Forms", 
                desc: "Pre-built templates for common tasks. Or build custom forms in minutes." 
              },
              { 
                icon: <Shield className="w-8 h-8 text-ebox-lime" />, 
                title: "Real-Time Validation", 
                desc: "Data gets checked as it's entered. Catch errors before they hit MRI." 
              },
              { 
                icon: <Upload className="w-8 h-8 text-ebox-lime" />, 
                title: "Direct Integration", 
                desc: "Approved data flows straight into MRI. No exports, no imports, no copy-paste." 
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-ebox-dark p-3 rounded-xl inline-block mb-6">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16">Three steps. That's it.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-0"></div>

            {[
              { step: "1", title: "Create", desc: "Build a form or use a template. Takes minutes." },
              { step: "2", title: "Validate & Approve", desc: "Data gets verified against your rules. Routes to the right approver." },
              { step: "3", title: "Import", desc: "Approved data flows into MRI automatically." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 bg-white border-4 border-ebox-teal rounded-full flex items-center justify-center text-3xl font-bold text-ebox-teal mb-6 shadow-sm">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <button className="inline-flex items-center text-ebox-teal font-bold hover:underline" onClick={() => onNavigate('book-demo')}>
              <PlayCircle className="w-6 h-6 mr-2" /> See it in action
            </button>
          </div>
        </div>
      </section>

      {/* Workflows Bento-ish */}
      <section className="py-24 bg-ebox-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
             <h2 className="text-ebox-lime font-bold uppercase tracking-wider text-sm mb-3">Built for your workflows</h2>
             <h3 className="text-4xl font-bold">Turn 6-hour tasks into 20-minute tasks.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Monthly Journals", desc: "Stop manually entering adjustments. Build approval workflows." },
              { title: "Lease Data", desc: "New leases, renewals, and amendments. Capture accurately." },
              { title: "AP & Invoices", desc: "Structured forms for invoice data. Route for approval." },
              { title: "Property Data", desc: "Unit details, tenant info, maintenance records. Keep everything current." }
            ].map((card, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <h4 className="text-xl font-bold text-ebox-lime mb-2">{card.title}</h4>
                <p className="text-gray-400 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-24 bg-[#FEFCF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Your complete MRI toolkit</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-8 border-ebox-lime flex flex-col items-start">
               <EFormsLogo className="h-10 mb-6" />
               <p className="text-lg text-gray-600 mb-8 flex-grow">Structured forms for MRI imports. Built for finance teams to eliminate errors and speed up processing.</p>
               <Button variant="primary" onClick={() => onNavigate('eforms')}>Learn more about eForms</Button>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-8 border-ebox-teal flex flex-col items-start opacity-90">
               <div className="h-10 mb-6 flex items-center">
                 <span className="text-3xl font-bold font-sans">eConnect</span>
               </div>
               <p className="text-lg text-gray-600 mb-8 flex-grow">Email hundreds of tenants. Track every delivery. Handle correspondence directly from your data.</p>
               <Button variant="outline">Learn more</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-400 font-bold uppercase tracking-widest mb-12">Trusted By Industry Leaders</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale mb-16">
             {/* Placeholder Logos */}
             <div className="h-8 w-32 bg-gray-800 mask-logo"></div>
             <div className="h-8 w-32 bg-gray-800 mask-logo"></div>
             <div className="h-8 w-32 bg-gray-800 mask-logo"></div>
             <div className="h-8 w-32 bg-gray-800 mask-logo"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl font-medium text-ebox-dark mb-6">"Cut journal entry time from 6 hours to 20 minutes. The approval workflows alone saved us countless email chains."</p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div className="text-left">
                <div className="font-bold">Controller</div>
                <div className="text-sm text-gray-500">Commercial Real Estate Portfolio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-ebox-lime text-ebox-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to see it in action?</h2>
          <p className="text-xl mb-10 font-medium opacity-80">Schedule a 20-minute demo. See how eForms works for your specific workflows.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" className="bg-white text-ebox-dark hover:bg-gray-100" onClick={() => onNavigate('book-demo')}>Book a Demo</Button>
            <Button variant="outline" size="lg" className="border-ebox-dark hover:bg-ebox-dark hover:text-ebox-lime" onClick={() => onNavigate('eforms')}>Find out more</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;