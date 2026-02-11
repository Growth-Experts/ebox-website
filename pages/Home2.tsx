import React from 'react';
import Button from '../components/Button';
import { PageRoute } from '../types';
import { ArrowRight, CheckCircle, Upload, Shield, Users, Layers, FileText, Layout, PlayCircle, Lock, Clock, Building2, TrendingUp } from 'lucide-react';
import { EFormsLogo } from '../components/Logos';

interface Home2Props {
  onNavigate: (page: PageRoute) => void;
}

const Home2: React.FC<Home2Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section — Dark, eBox-branded */}
      <section className="bg-gradient-to-br from-ebox-dark to-ebox-deep pt-20 pb-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <span className="inline-block py-1.5 px-4 rounded-full bg-ebox-lime/15 text-ebox-lime font-semibold text-sm mb-6 border border-ebox-lime/20">
                Built from 25 years in real estate technology
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                The smarter <span className="whitespace-nowrap">way to</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ebox-lime to-emerald-400">work with MRI.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                eBox gives your real estate team the tools to eliminate manual processes, reduce errors, and get more from MRI — starting with eForms for data imports and eConnect for communications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" onClick={() => onNavigate('book-demo')}>Book a Demo</Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 group" onClick={() => onNavigate('eforms')}>
                  See How It Works <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="mt-8 text-sm text-gray-400 font-medium">
                 Used by leading real estate companies managing <span className="text-white font-bold">10 Million+ sq ft</span> of properties
              </div>
            </div>

            {/* App illustration */}
            <div className="hidden lg:flex justify-center" style={{ perspective: '1200px' }}>
              <div
                className="w-[420px] bg-white rounded-lg shadow-2xl border border-white/20 overflow-hidden"
                style={{ transform: 'rotateY(-8deg) rotateX(2deg)' }}
              >
                {/* Title bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-300"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                    <div className="w-3 h-3 rounded-full bg-green-300"></div>
                  </div>
                  <span className="text-xs font-semibold text-gray-400 tracking-wide">eForms</span>
                  <div className="w-14"></div>
                </div>

                {/* Form header */}
                <div className="px-5 pt-5 pb-3 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-ebox-dark">Journal Entry #4920</span>
                    <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">Pending Approval</span>
                  </div>
                  <span className="text-[11px] text-gray-400">Period: Dec 2025 &middot; Created by S. Mitchell</span>
                </div>

                {/* Form fields */}
                <div className="px-5 py-4 space-y-3">
                  <div>
                    <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Account Code</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-8 bg-gray-50 rounded-md border border-gray-200 px-3 flex items-center">
                        <span className="text-xs text-gray-700 font-mono">4100-001-00</span>
                      </div>
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Description</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-8 bg-gray-50 rounded-md border border-gray-200 px-3 flex items-center">
                        <span className="text-xs text-gray-700">Monthly rent adjustment — Lvl 4</span>
                      </div>
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Debit</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-8 bg-gray-50 rounded-md border border-gray-200 px-3 flex items-center">
                          <span className="text-xs text-gray-700 font-mono">$12,450.00</span>
                        </div>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Credit</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-8 bg-gray-50 rounded-md border border-gray-200 px-3 flex items-center">
                          <span className="text-xs text-gray-700 font-mono">$12,450.00</span>
                        </div>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Validation bar */}
                <div className="mx-5 mb-3 flex items-center gap-2 bg-green-50 rounded-md px-3 py-2 border border-green-100">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-[11px] text-green-700 font-medium">All fields validated — ready for approval</span>
                </div>

                {/* Action buttons */}
                <div className="px-5 pb-5 flex gap-2">
                  <div className="flex-1 h-9 bg-ebox-lime rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-ebox-dark">Approve & Import to MRI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Abstract shape decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-ebox-lime/5 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-ebox-forest/20 rounded-full blur-3xl -z-0"></div>
      </section>

      {/* 25-Year Experience Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-sm font-bold tracking-wide uppercase text-ebox-forest mb-3">Our Story</h2>
            <p className="text-2xl md:text-3xl font-bold text-ebox-dark leading-snug">
              Through 25 years in real estate technology, Open Box Group saw the same problems again and again — manual processes, error-prone imports, disconnected workflows.
            </p>
            <p className="text-xl text-gray-500 mt-4">
              eBox was built to fix them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-ebox-deep/10 rounded-lg mb-4">
                <Clock className="w-7 h-7 text-ebox-forest" />
              </div>
              <div className="text-3xl font-extrabold text-ebox-dark">25+</div>
              <div className="text-sm text-gray-500 font-medium mt-1">Years in Real Estate Tech</div>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-ebox-deep/10 rounded-lg mb-4">
                <Building2 className="w-7 h-7 text-ebox-forest" />
              </div>
              <div className="text-3xl font-extrabold text-ebox-dark">10 Million+</div>
              <div className="text-sm text-gray-500 font-medium mt-1">Sq Ft Managed via eBox</div>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-ebox-deep/10 rounded-lg mb-4">
                <TrendingUp className="w-7 h-7 text-ebox-forest" />
              </div>
              <div className="text-3xl font-extrabold text-ebox-dark">95%</div>
              <div className="text-sm text-gray-500 font-medium mt-1">Reduction in Import Errors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards — Moved up to establish two-product structure early */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-sm font-bold tracking-wide uppercase text-ebox-forest mb-2">Your complete MRI toolkit</h2>
            <h3 className="text-4xl font-bold text-ebox-dark">Two products. One platform.</h3>
          </div>
          <p className="text-xl text-gray-500 text-center max-w-2xl mx-auto mb-16">
            eForms handles your data imports. eConnect handles your communications. More tools are coming.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 border-t-8 border-t-ebox-lime flex flex-col items-start hover:shadow-xl transition-shadow">
               <EFormsLogo className="h-10 mb-6" />
               <p className="text-lg text-gray-600 mb-8 flex-grow">Structured forms for MRI imports. Built for finance teams to eliminate errors and speed up processing.</p>
               <Button variant="primary" onClick={() => onNavigate('eforms')}>Learn more about eForms</Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 border-t-8 border-t-ebox-forest flex flex-col items-start hover:shadow-xl transition-shadow">
               <div className="h-10 mb-6 flex items-center">
                 <span className="text-3xl font-bold font-sans">eConnect</span>
               </div>
               <p className="text-lg text-gray-600 mb-8 flex-grow">Email hundreds of tenants. Track every delivery. Handle correspondence directly from your data.</p>
               <Button variant="outline">Coming Soon</Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution / What You Get */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-wide uppercase text-ebox-forest mb-2">What You Get</h2>
            <h3 className="text-4xl font-bold text-ebox-dark mb-4">Tools that work the way <span className="whitespace-nowrap">your team does.</span></h3>
            <p className="text-xl text-gray-600 max-w-3xl">
              eBox gives you user-friendly tools that connect directly to MRI. Build forms in minutes. Automate communications. No technical skills required.
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
              <div key={i} className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-ebox-dark p-3 rounded-md inline-block mb-6">{feature.icon}</div>
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
              { step: "1", title: "Create", desc: "Build a form or use a template. Takes minutes, not months." },
              { step: "2", title: "Validate & Approve", desc: "Data gets verified against your rules. Routes to the right approver. Keeps an audit trail." },
              { step: "3", title: "Import", desc: "Approved data flows into MRI automatically. Your team moves on to actual work." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 bg-white border-4 border-ebox-dark rounded-full flex items-center justify-center text-3xl font-bold text-ebox-dark mb-6 shadow-md">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <button className="inline-flex items-center text-ebox-forest font-bold hover:underline" onClick={() => onNavigate('book-demo')}>
              <PlayCircle className="w-6 h-6 mr-2" /> See it in action
            </button>
          </div>
        </div>
      </section>

      {/* Workflows Bento — Dark section, client liked this */}
      <section className="py-24 bg-ebox-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
             <h2 className="text-ebox-lime font-bold uppercase tracking-wider text-sm mb-3">Built for your workflows</h2>
             <h3 className="text-4xl font-bold">Turn 6-hour tasks into <span className="whitespace-nowrap">20-minute tasks.</span></h3>
             <p className="text-gray-400 mt-4 text-lg">If it's going into MRI, eBox makes it faster and safer.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Monthly Journals", desc: "Stop manually entering adjustments. Build approval workflows. Close faster." },
              { title: "Lease Data", desc: "New leases, renewals, and amendments. Capture everything accurately, the first time." },
              { title: "AP & Vendor Invoices", desc: "Structured forms for invoice data. Route for approval. Push to MRI when ready." },
              { title: "Property Data", desc: "Unit details, tenant info, maintenance records. Keep everything current." }
            ].map((card, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-md border border-white/10 hover:bg-white/10 transition-colors">
                <h4 className="text-xl font-bold text-ebox-lime mb-2">{card.title}</h4>
                <p className="text-gray-400 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sophisticated But Simple — Stronger background */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-wide uppercase text-ebox-forest mb-2">eBox makes MRI easier</h2>
            <h3 className="text-4xl font-bold text-ebox-dark">Route, approve, and track. All in one place.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Layers className="w-8 h-8 text-ebox-lime" />,
                title: "Approval Workflows",
                desc: "Route submissions to the right people. Set up conditional logic. Track everything."
              },
              {
                icon: <Users className="w-8 h-8 text-ebox-lime" />,
                title: "Role-Based Access",
                desc: "Give people exactly the access they need. Nothing more, nothing less."
              },
              {
                icon: <FileText className="w-8 h-8 text-ebox-lime" />,
                title: "Complete Audit Trail",
                desc: "See who changed what, when. Full history on every submission."
              },
              {
                icon: <Shield className="w-8 h-8 text-ebox-lime" />,
                title: "Error Prevention",
                desc: "Data gets validated before it touches MRI. Sleep better at night."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow flex gap-6">
                <div className="bg-ebox-dark p-3 rounded-md h-fit">{feature.icon}</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-wide uppercase text-gray-400 mb-2">Enterprise-Ready</h2>
            <h3 className="text-4xl font-bold text-ebox-dark mb-4">Answer any auditor question in 30 seconds.</h3>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Every entry has a complete history. Who submitted it. Who approved it. When it went into MRI. Someone questions a number? Pull up the trail. Show your work. Move on with your day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="w-8 h-8 text-ebox-lime" />,
                title: "Secure Hosting",
                desc: "Enterprise-grade infrastructure. Meets local compliance requirements."
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-ebox-lime" />,
                title: "Validated Inputs",
                desc: "Every field is checked before it reaches MRI. Errors caught at source."
              },
              {
                icon: <FileText className="w-8 h-8 text-ebox-lime" />,
                title: "Full Audit Trail",
                desc: "Complete history of who did what, when. Built-in, not bolted-on."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-100 p-8 rounded-lg border border-gray-200 text-center">
                <div className="bg-ebox-dark p-3 rounded-md inline-block mb-6">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-400 font-bold uppercase tracking-widest mb-12">Industry leaders rely on eBox</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 mb-16">
             {/* Fictional company logos */}
             <svg width="140" height="36" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect x="0" y="6" width="24" height="24" rx="4" fill="#1A1A1A"/>
               <rect x="4" y="10" width="7" height="7" rx="1" fill="white"/>
               <rect x="13" y="10" width="7" height="7" rx="1" fill="white"/>
               <rect x="4" y="19" width="16" height="7" rx="1" fill="white"/>
               <text x="30" y="24" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" fill="#1A1A1A">Meridian</text>
             </svg>
             <svg width="150" height="36" viewBox="0 0 150 36" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="14" cy="18" r="12" stroke="#1A1A1A" strokeWidth="3" fill="none"/>
               <path d="M14 10 L14 18 L22 18" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
               <text x="32" y="24" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" fill="#1A1A1A">Apex REIT</text>
             </svg>
             <svg width="160" height="36" viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg">
               <polygon points="14,4 26,30 2,30" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
               <line x1="8" y1="22" x2="20" y2="22" stroke="#1A1A1A" strokeWidth="2"/>
               <text x="32" y="24" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" fill="#1A1A1A">Vantage RE</text>
             </svg>
             <svg width="170" height="36" viewBox="0 0 170 36" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect x="2" y="16" width="10" height="16" rx="1" fill="#1A1A1A"/>
               <rect x="14" y="10" width="10" height="22" rx="1" fill="#1A1A1A"/>
               <rect x="26" y="4" width="10" height="28" rx="1" fill="#1A1A1A"/>
               <text x="42" y="24" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="700" fill="#1A1A1A">Cornerstone</text>
             </svg>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-md border border-gray-200">
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

      {/* CTA — Dark with lime accent, not full lime background */}
      <section className="py-24 bg-gradient-to-r from-ebox-dark to-ebox-deep text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to see it <span className="text-ebox-lime whitespace-nowrap">in action?</span></h2>
          <p className="text-xl mb-10 font-medium text-gray-300">Schedule a 20-minute demo. See how eBox works for your <span className="whitespace-nowrap">specific workflows.</span></p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg" onClick={() => onNavigate('book-demo')}>Book a Demo</Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" onClick={() => onNavigate('eforms')}>Learn about eForms</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home2;