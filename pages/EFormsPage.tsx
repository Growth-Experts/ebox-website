import React from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import { EFormsLogo } from '../components/Logos';
import { Check, Shield, Lock, FileText, Settings, RefreshCw, AlertCircle, Database, Upload, Users, Layers, ArrowRight, ChevronRight, CheckCircle, Layout, Star } from 'lucide-react';

const EFormsPage: React.FC = () => {
  const useCases = [
    { gradient: "from-blue-600 to-blue-700", color: "blue", iconBg: "bg-blue-100", iconText: "text-blue-600", borderColor: "border-blue-500", statBg: "bg-blue-50", statText: "text-blue-300", dotColor: "bg-blue-400", icon: <Database className="text-white w-6 h-6" />, title: "Month-End Close", desc: "Process 200+ journal entries with approval workflows", stat: "80% faster close" },
    { gradient: "from-emerald-600 to-emerald-700", color: "emerald", iconBg: "bg-emerald-100", iconText: "text-emerald-600", borderColor: "border-emerald-500", statBg: "bg-emerald-50", statText: "text-emerald-300", dotColor: "bg-emerald-400", icon: <FileText className="text-white w-6 h-6" />, title: "Lease Administration", desc: "Property managers enter leases, finance approves before posting", stat: "No MRI access needed" },
    { gradient: "from-purple-600 to-purple-700", color: "purple", iconBg: "bg-purple-100", iconText: "text-purple-600", borderColor: "border-purple-500", statBg: "bg-purple-50", statText: "text-purple-300", dotColor: "bg-purple-400", icon: <Settings className="text-white w-6 h-6" />, title: "Accounts Payable", desc: "Structured invoice entry with auto-routing by amount or vendor", stat: "Every action logged" },
    { gradient: "from-amber-500 to-orange-600", color: "amber", iconBg: "bg-amber-100", iconText: "text-amber-600", borderColor: "border-amber-500", statBg: "bg-amber-50", statText: "text-amber-300", dotColor: "bg-amber-400", icon: <RefreshCw className="text-white w-6 h-6" />, title: "Recurring Processes", desc: "Configure once, apply to hundreds of units with validation", stat: "Set up once, reuse monthly" },
    { gradient: "from-rose-500 to-pink-600", color: "rose", iconBg: "bg-rose-100", iconText: "text-rose-600", borderColor: "border-rose-500", statBg: "bg-rose-50", statText: "text-rose-300", dotColor: "bg-rose-400", icon: <Database className="text-white w-6 h-6" />, title: "Master Data Management", desc: "Regional teams create buildings and units with approval layer", stat: "Consistent data, every time" },
    { gradient: "from-teal-500 to-cyan-600", color: "teal", iconBg: "bg-teal-100", iconText: "text-teal-600", borderColor: "border-teal-500", statBg: "bg-teal-50", statText: "text-teal-300", dotColor: "bg-teal-400", icon: <Check className="text-white w-6 h-6" />, title: "Tenant Payments", desc: "Validate account, lease status, and charge codes before posting", stat: "Zero misapplied payments" },
  ];

  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>eForms | Structured MRI Data Imports &amp; Approval Workflows | eBox</title>
        <meta name="description" content="eForms provides structured forms for MRI imports with real-time validation, approval routing, and complete audit trails. Built for real estate finance teams." />
        <link rel="canonical" href="https://eboxsoftware.com/eforms" />
      </Helmet>
      {/* Product Hero — Light, product-centric (distinct from Home2 dark hero) */}
      <section className="bg-white pt-20 pb-0 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EFormsLogo className="h-12 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-ebox-dark">
            The forms and workflows MRI doesn't have
          </h1>
          <p className="text-xl text-gray-500 mb-8 leading-relaxed max-w-2xl mx-auto">
            Structured data entry. Approval routing. Real-time validation. All feeding directly into your MRI database.
          </p>
          <div className="flex gap-4 justify-center mb-16">
            <Button variant="primary" size="lg" to="/book-demo">Book a Demo</Button>
          </div>
        </div>

        {/* Wide product mockup — lime accent border */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-t-md border border-b-0 border-gray-200 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-3 bg-gray-100 border-b border-gray-200">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white rounded-md px-4 py-1 text-xs text-gray-400 border border-gray-200 w-64 text-center">app.eboxsoftware.com</div>
              </div>
              <div className="w-14"></div>
            </div>

            <img
              src="/images/eforms-screenshot.png"
              alt="eForms new lease creation screen showing form statuses, approval workflows, and data upload tracking"
              className="w-full block"
            />
          </div>
        </div>
      </section>

      {/* Bento — ebox-deep/5 */}
      <section className="py-24 bg-ebox-deep/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What eForms adds to MRI</h2>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-12 flex flex-col justify-center">
                <div className="h-10 w-10 bg-blue-100 rounded-md flex items-center justify-center mb-5">
                  <FileText className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Structured Forms</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">MRI gives you bulk import tools. eForms gives you forms anyone can fill out — no training required.</p>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-center text-gray-700"><CheckCircle className="w-5 h-5 text-ebox-forest flex-shrink-0" /> Guided fields with dropdowns and date pickers</li>
                  <li className="flex gap-3 items-center text-gray-700"><CheckCircle className="w-5 h-5 text-ebox-forest flex-shrink-0" /> Tabs for multi-section entries like leases</li>
                  <li className="flex gap-3 items-center text-gray-700"><CheckCircle className="w-5 h-5 text-ebox-forest flex-shrink-0" /> Required fields enforced before submission</li>
                </ul>
              </div>
              <div className="bg-gray-50 flex items-end justify-center px-8 pt-8 lg:px-10 lg:pt-10">
                <div className="w-full max-w-md rounded-t-lg shadow-lg border border-b-0 border-gray-200 overflow-hidden">
                  <div className="flex items-center gap-2.5 px-4 py-2.5 bg-gray-100 border-b border-gray-200">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="bg-white rounded-md px-3 py-0.5 text-[10px] text-gray-400 border border-gray-200 text-center">app.eboxsoftware.com</div>
                    </div>
                    <div className="w-10"></div>
                  </div>
                  <img
                    src="/images/eforms-form.png"
                    alt="eForms new lease creation form with structured fields for property details, occupant info, and lease dates"
                    className="w-full block"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-purple-100 rounded-md flex items-center justify-center mb-4">
                <Shield className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Approval Layers</h3>
              <p className="text-gray-500 mb-4">Add approval workflows before data hits MRI.</p>
              <div className="space-y-2">
                 <div className="flex items-center gap-2 text-sm"><div className="w-2 h-2 rounded-full bg-green-500"></div> Submit</div>
                 <div className="flex items-center gap-2 text-sm"><div className="w-2 h-2 rounded-full bg-green-500"></div> Review</div>
                 <div className="flex items-center gap-2 text-sm"><div className="w-2 h-2 rounded-full bg-green-500"></div> Approve</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-orange-100 rounded-md flex items-center justify-center mb-4">
                <Lock className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Granular Access</h3>
              <p className="text-gray-500">Let people enter data without full MRI access.</p>
            </div>

            <div className="bg-ebox-forest/10 p-8 rounded-lg border border-ebox-forest/20">
              <h3 className="text-xl font-bold mb-2 text-ebox-dark">Catch errors at the source</h3>
              <ul className="space-y-3 mt-4">
                <li className="flex gap-2 items-center text-gray-800"><AlertCircle className="w-5 h-5 text-ebox-forest" /> GL account checked instantly</li>
                <li className="flex gap-2 items-center text-gray-800"><AlertCircle className="w-5 h-5 text-ebox-forest" /> Journals balanced before submit</li>
                <li className="flex gap-2 items-center text-gray-800"><AlertCircle className="w-5 h-5 text-ebox-forest" /> Clean data flows to MRI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Validation — white */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-wide uppercase text-ebox-forest mb-2">Real-Time Validation</p>
            <h2 className="text-3xl font-bold text-gray-900">Catch errors at the source</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-ebox-forest/30"></div>
            {[
              { num: '1', title: 'As you type', desc: 'GL account gets checked against your MRI database immediately.', img: '/images/validation-step1-as-you-type.png', alt: 'eForms real-time GL account validation as you type' },
              { num: '2', title: 'Before submit', desc: 'All fields verified. Journals balanced. Format checked.', img: '/images/validation-step2-before-submit.png', alt: 'eForms pre-submission validation showing errors to fix' },
              { num: '3', title: 'Import with confidence', desc: 'Clean data flows to MRI. No cryptic error logs.', img: '/images/validation-step3-import-ready.png', alt: 'eForms all rows validated and ready to import to MRI' },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white border-4 border-ebox-forest rounded-full flex items-center justify-center text-3xl font-bold text-ebox-forest mb-6 shadow-sm relative z-10">
                  {step.num}
                </div>
                <div className="rounded-lg w-full mb-4 overflow-hidden shadow-md border border-gray-200">
                  <img src={step.img} alt={step.alt} className="w-full block" />
                </div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates — gray-50 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-wide uppercase text-ebox-forest mb-2">Start importing in minutes</p>
            <h2 className="text-3xl font-bold text-gray-900">100+ pre-built templates for every MRI workflow</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-blue-100 rounded-md flex items-center justify-center mb-4">
                <Layers className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Journal Entries</h3>
              <p className="text-gray-500">Single batch, multi-batch, auto-split by entity/period</p>
              <div className="mt-6 bg-gray-50 h-48 rounded-md w-full border border-gray-100 flex items-center justify-center text-gray-400">
                Journal form preview
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-green-100 rounded-md flex items-center justify-center mb-4">
                <FileText className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lease Entry</h3>
              <p className="text-gray-500">New leases, renewals, and amendments with full validation.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-purple-100 rounded-md flex items-center justify-center mb-4">
                <FileText className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">AP Invoices</h3>
              <p className="text-gray-500">Structured invoice data with approval routing by amount or vendor.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-orange-100 rounded-md flex items-center justify-center mb-4">
                <RefreshCw className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Recurring Charges</h3>
              <p className="text-gray-500">Configure once, apply across hundreds of units.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-emerald-100 rounded-md flex items-center justify-center mb-4">
                <Database className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Building Creation</h3>
              <p className="text-gray-500">Property setup with all required fields and approval layers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases — Dark background for higher contrast */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-ebox-lime font-bold uppercase tracking-wider text-sm mb-3">Built for real estate finance</p>
            <h2 className="text-4xl font-bold text-white">Where finance teams use eForms</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc, i) => (
              <div key={`c-${i}`} className="bg-white/10 rounded-xl overflow-hidden border border-white/10 hover:bg-white/15 transition-all duration-200">
                <div className={`h-1.5 bg-gradient-to-r ${uc.gradient}`}></div>
                <div className="p-7">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-11 h-11 ${uc.iconBg} rounded-lg flex items-center justify-center`}>
                      {React.cloneElement(uc.icon, { className: `${uc.iconText} w-5 h-5` })}
                    </div>
                    <h3 className="text-lg font-bold text-white">{uc.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">{uc.desc}</p>
                  <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                    <div className={`w-2 h-2 rounded-full ${uc.dotColor}`}></div>
                    <span className={`${uc.statText} font-semibold text-sm`}>{uc.stat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pt-10">
            <span className="text-lg font-bold text-gray-500">+100 more workflows available</span>
          </div>
        </div>
      </section>

      {/* Import Methods — gray-50 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Two ways to work</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col">
              <div className="p-4 bg-blue-100 rounded-lg w-fit mb-6">
                <FileText className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Structured forms</h3>
              <p className="text-gray-500 mb-6">For one-at-a-time entry by team members</p>
              <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md">
                <div className="flex items-center gap-2.5 px-4 py-2.5 bg-gray-100 border-b border-gray-200">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-white rounded-md px-3 py-0.5 text-[10px] text-gray-400 border border-gray-200 text-center">app.eboxsoftware.com</div>
                  </div>
                  <div className="w-10"></div>
                </div>
                <div className="h-72 overflow-hidden">
                  <img src="/images/eforms-single-entry.png" alt="eForms structured form for creating new buildings in MRI with guided fields and dropdowns" className="w-full block" />
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col">
              <div className="p-4 bg-green-100 rounded-lg w-fit mb-6">
                <Upload className="text-green-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">File upload</h3>
              <p className="text-gray-500 mb-6">For bulk imports from your existing spreadsheets</p>
              <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md">
                <div className="flex items-center gap-2.5 px-4 py-2.5 bg-gray-100 border-b border-gray-200">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-white rounded-md px-3 py-0.5 text-[10px] text-gray-400 border border-gray-200 text-center">app.eboxsoftware.com</div>
                  </div>
                  <div className="w-10"></div>
                </div>
                <div className="h-72 overflow-hidden">
                  <img src="/images/eforms-file-import.png" alt="eForms file upload interface for bulk spreadsheet imports into MRI" className="w-full block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approval Workflows — ebox-deep/5 */}
      <section className="py-24 bg-ebox-deep/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-bold tracking-wide uppercase text-ebox-forest mb-3">Add what MRI doesn't have</p>
              <h2 className="text-4xl font-bold mb-8">Route data to the right approver automatically</h2>
              <p className="text-lg font-semibold mb-4">Conditional logic:</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Invoice > $25K → CFO approval',
                  'Property in Region 2 → Regional Director',
                  'Vendor type = Capital → Asset Management',
                ].map((rule, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <ArrowRight className="w-5 h-5 text-ebox-forest flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold mb-4">Multi-step approvals:</p>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {['Submit', 'Review', 'Approve', 'Import'].map((step, i) => (
                  <React.Fragment key={i}>
                    <span className="px-4 py-2 bg-ebox-lime/10 rounded-full text-sm font-bold text-ebox-dark">{step}</span>
                    {i < 3 && <ChevronRight className="w-4 h-4 text-gray-400" />}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-gray-500"><span className="font-semibold text-gray-700">Status tracking:</span> Everyone sees where submissions are in the process.</p>
            </div>
            <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center text-gray-400">
              Workflow builder screenshot
            </div>
          </div>
        </div>
      </section>

      {/* Access Control — ebox-dark */}
      <section className="py-24 bg-ebox-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-ebox-lime font-bold uppercase tracking-wider text-sm mb-3">Extend MRI's security</p>
              <h2 className="text-4xl font-bold mb-6">Give people forms, not full system access</h2>
              <p className="text-xl text-gray-400">They enter data. You control what gets approved. What goes to MRI.</p>
            </div>
            <div className="space-y-4">
              {[
                { icon: <Users className="text-ebox-lime w-6 h-6" />, text: 'Property managers get lease forms for their buildings' },
                { icon: <FileText className="text-ebox-lime w-6 h-6" />, text: 'AP clerks get invoice forms' },
                { icon: <Lock className="text-ebox-lime w-6 h-6" />, text: 'External admins get specific forms only' },
              ].map((card, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-md border border-white/10 flex items-center gap-4">
                  {card.icon}
                  <span className="text-lg">{card.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audit Trail — white */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-ebox-forest font-bold uppercase tracking-wider text-sm mb-3">Audit Trail</p>
              <h3 className="text-4xl font-bold mb-6 text-gray-900">Built-in compliance.</h3>
              <p className="text-xl text-gray-500 mb-8">Every submission. Every change. Logged. Answer auditor questions in seconds, not hours.</p>
              <ul className="space-y-6">
                {[
                  'Who submitted (name, timestamp)',
                  'What they entered (all field values)',
                  'Who edited (change history)',
                  'Who approved (approval chain)',
                  'When it imported (MRI reference)',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-ebox-forest/20 flex items-center justify-center text-ebox-forest text-xs">✓</div>
                    <span className="text-lg text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-ebox-forest/10 transform rotate-3 rounded-lg"></div>
              <div className="relative bg-white p-8 rounded-lg border border-gray-200 shadow-xl">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-400 border-b border-gray-200 pb-2">
                    <span>User</span>
                    <span>Action</span>
                    <span>Time</span>
                  </div>
                  <div className="flex justify-between text-sm items-center">
                    <div className="flex items-center gap-2"><div className="w-6 h-6 bg-gray-200 rounded-full"></div> S. Johnson</div>
                    <span className="text-green-600">Approved</span>
                    <span className="text-gray-500">10:42 AM</span>
                  </div>
                  <div className="flex justify-between text-sm items-center">
                    <div className="flex items-center gap-2"><div className="w-6 h-6 bg-gray-200 rounded-full"></div> M. Davis</div>
                    <span className="text-blue-600">Edited Row 4</span>
                    <span className="text-gray-500">09:15 AM</span>
                  </div>
                  <div className="flex justify-between text-sm items-center">
                    <div className="flex items-center gap-2"><div className="w-6 h-6 bg-gray-200 rounded-full"></div> M. Davis</div>
                    <span className="text-gray-600">Submitted</span>
                    <span className="text-gray-500">09:10 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials — gray-50 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Teams using eForms</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'We went from 6 hours to 70 minutes on month-end journal entries. The approval workflows alone saved us countless email chains.',
                role: 'Controller',
                company: 'Commercial Real Estate Portfolio',
              },
              {
                quote: "Property managers can finally enter lease data themselves. Finance approves before it hits MRI. Game changer.",
                role: 'VP Operations',
                company: 'Multi-Family Property Group',
              },
              {
                quote: 'The audit trail is worth it alone. Our external auditors were impressed with the documentation.',
                role: 'CFO',
                company: 'Mixed-Use Property Fund',
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-500">
                    {testimonial.role[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Error Handling — white */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Clear errors, not cryptic codes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm opacity-60">
              <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold mb-6">MRI Error Log</span>
              <div className="bg-white p-6 rounded-md font-mono text-sm space-y-3">
                <div className="text-red-500">Import failed - batch processing error</div>
                <div className="text-gray-400">See log file...</div>
                <div className="text-gray-300">Error code: MRI-4521-BATCH</div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border-2 border-ebox-lime/30 shadow-xl">
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-6">eForms Validation</span>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-red-500 text-sm font-mono p-3 bg-red-50 rounded-md">
                  <span>❌ Row 23: GL Account "5200" not found</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 text-sm font-mono p-3 bg-green-50 rounded-md">
                  <span>✓ 197 rows validated successfully</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization — ebox-deep/5 */}
      <section className="py-24 bg-ebox-deep/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold tracking-wide uppercase text-ebox-forest mb-3">Beyond templates</p>
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Build forms that match your exact workflow</h2>
              <ul className="space-y-4">
                {[
                  'Hide fields you don\'t use',
                  'Make fields mandatory that MRI doesn\'t require',
                  'Add custom fields that don\'t go to MRI (internal notes, file attachments)',
                  'Rearrange sections and tabs',
                  'Create field dependencies',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle className="text-ebox-lime w-6 h-6 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center text-gray-400">
              Form builder screenshot
            </div>
          </div>
        </div>
      </section>

      {/* Recurring Workflows — ebox-forest/8 */}
      <section className="py-24 bg-ebox-forest/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold tracking-wide uppercase text-ebox-forest mb-2">For monthly imports</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Duplicate last month. Update. Submit.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monthly accruals? Duplicate the previous month's journal. Change the amounts. Submit through the same approval flow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold mb-4">Before</span>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((row) => (
                  <div key={row} className="flex items-center gap-3">
                    <div className={`h-3 rounded-full flex-1 ${row === 3 ? 'bg-red-200' : 'bg-gray-200'}`}></div>
                    {row === 3 && <span className="text-red-400 text-xs">✕</span>}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">Re-key every line. Every month.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-ebox-lime/30">
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-4">With eForms</span>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <RefreshCw className="w-5 h-5 text-ebox-forest flex-shrink-0" />
                  <span className="text-sm">Duplicate December journal</span>
                </div>
                <div className="flex justify-center"><ArrowRight className="w-4 h-4 text-gray-300" /></div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Layout className="w-5 h-5 text-ebox-forest flex-shrink-0" />
                  <span className="text-sm">Update 3 amounts</span>
                </div>
                <div className="flex justify-center"><ArrowRight className="w-4 h-4 text-gray-300" /></div>
                <div className="flex items-center gap-3 text-green-600">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-bold">Done in 2 minutes</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-500 mt-8 text-center">Works for any recurring import.</p>
        </div>
      </section>

      {/* Integration — ebox-dark */}
      <section className="py-24 bg-ebox-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ebox-lime font-bold uppercase tracking-wider text-sm mb-3">Works with your MRI database</p>
          <h2 className="text-4xl font-bold mb-4">Pulls your data. Respects your permissions.</h2>
          <p className="text-xl text-gray-400 mb-16">Data flows through standard MRI channels.</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <EFormsLogo variant="white" className="h-10 mx-auto" />
            </div>
            <div className="flex flex-col items-center">
              <div className="h-0.5 w-16 bg-ebox-lime hidden md:block"></div>
              <div className="h-16 w-0.5 bg-ebox-lime md:hidden"></div>
              <span className="text-xs text-gray-400 mt-1">Sync</span>
            </div>
            <div className="bg-white/10 p-6 rounded-lg border border-white/20 text-center">
              <Database className="text-ebox-lime w-10 h-10 mx-auto" />
              <p className="text-lg font-bold mt-2">Your MRI Instance</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              'Your GL accounts',
              'Your entities and properties',
              'Your vendors',
              'Your user permissions',
              'Your data hierarchy',
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <CheckCircle className="text-ebox-lime w-5 h-5" />
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA — dark gradient with lime accent */}
      <section className="py-24 bg-gradient-to-r from-ebox-dark to-ebox-deep text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <EFormsLogo variant="white" className="h-12 mx-auto mb-8" />
          <h2 className="text-4xl font-extrabold mb-4">See how eForms extends your MRI system</h2>
          <p className="text-xl text-gray-300 mb-8">20-minute demo. Your workflows. Your use cases.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="text-left">
              <span className="block text-sm font-bold text-gray-400 uppercase">Week 1</span>
              <span className="text-lg font-bold">Connect to MRI + configure forms</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-500 hidden md:block"></div>
            <div className="text-left">
              <span className="block text-sm font-bold text-gray-400 uppercase">Week 2</span>
              <span className="text-lg font-bold">Train team + go live</span>
            </div>
          </div>
          <Button variant="primary" size="lg" to="/book-demo">Schedule a Demo</Button>
          <p className="mt-6 text-gray-400">
            Questions? <a href="mailto:productsales@openboxsoftware.com" className="text-ebox-lime hover:underline font-medium">productsales@openboxsoftware.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default EFormsPage;
