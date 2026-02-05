import React from 'react';
import Button from '../components/Button';
import { EFormsLogo } from '../components/Logos';
import { Check, Shield, Lock, FileText, Settings, RefreshCw, AlertCircle, Database, Upload, Users, Layers, ArrowRight, ChevronRight, CheckCircle, PlayCircle, Mail, Globe, Layout, Star } from 'lucide-react';
import { PageRoute } from '../types';

interface EFormsPageProps {
  onNavigate: (page: PageRoute) => void;
}

const EFormsPage: React.FC<EFormsPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Product Hero */}
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
            <Button variant="primary" size="lg" onClick={() => onNavigate('book-demo')}>Book a Demo</Button>
            <Button variant="outline" size="lg" className="group">
              Watch Overview <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Wide product mockup */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-t-2xl border border-b-0 border-gray-200 shadow-2xl overflow-hidden">
            {/* Browser bar */}
            <div className="flex items-center gap-3 px-5 py-3 bg-gray-100 border-b border-gray-200">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white rounded-md px-4 py-1 text-xs text-gray-400 border border-gray-200 w-64 text-center">app.eboxplatform.com</div>
              </div>
              <div className="w-14"></div>
            </div>

            {/* App content */}
            <div className="flex min-h-[340px]">
              {/* Sidebar */}
              <div className="w-52 bg-ebox-dark p-4 hidden md:flex flex-col flex-shrink-0">
                <div className="mb-6">
                  <EFormsLogo variant="white" className="h-7" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/10 text-white text-xs font-medium">
                    <FileText className="w-3.5 h-3.5" /> <span>Journal Entry</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-gray-400 text-xs hover:text-gray-300">
                    <FileText className="w-3.5 h-3.5" /> <span>Lease Entry</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-gray-400 text-xs hover:text-gray-300">
                    <FileText className="w-3.5 h-3.5" /> <span>AP Invoice</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-gray-400 text-xs hover:text-gray-300">
                    <RefreshCw className="w-3.5 h-3.5" /> <span>Recurring Charges</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-gray-400 text-xs hover:text-gray-300">
                    <Database className="w-3.5 h-3.5" /> <span>Building Creation</span>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-white/10">
                  <span className="text-[10px] text-gray-500">100+ templates</span>
                </div>
              </div>

              {/* Main area */}
              <div className="flex-1 p-6 bg-white">
                {/* Header row */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-sm font-bold text-ebox-dark">Journal Entry — December 2025</div>
                    <div className="text-[11px] text-gray-400 mt-0.5">Batch #JE-4920 &middot; 12 rows &middot; Created by S. Mitchell</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">Pending Approval</span>
                  </div>
                </div>

                {/* Spreadsheet-style table */}
                <div className="border border-gray-200 rounded-xl overflow-hidden text-[11px]">
                  {/* Table header */}
                  <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                    <div className="col-span-1 px-3 py-2">#</div>
                    <div className="col-span-2 px-3 py-2">Entity</div>
                    <div className="col-span-3 px-3 py-2">GL Account</div>
                    <div className="col-span-3 px-3 py-2">Description</div>
                    <div className="col-span-1 px-3 py-2 text-right">Debit</div>
                    <div className="col-span-1 px-3 py-2 text-right">Credit</div>
                    <div className="col-span-1 px-3 py-2 text-center">Status</div>
                  </div>
                  {/* Row 1 */}
                  <div className="grid grid-cols-12 border-b border-gray-100 items-center">
                    <div className="col-span-1 px-3 py-2.5 text-gray-400">1</div>
                    <div className="col-span-2 px-3 py-2.5 font-mono text-gray-700">ENT-001</div>
                    <div className="col-span-3 px-3 py-2.5 font-mono text-gray-700">4100-001-00</div>
                    <div className="col-span-3 px-3 py-2.5 text-gray-600">Rent adjustment — Lvl 4</div>
                    <div className="col-span-1 px-3 py-2.5 text-right font-mono text-gray-700">12,450</div>
                    <div className="col-span-1 px-3 py-2.5 text-right font-mono text-gray-300">—</div>
                    <div className="col-span-1 px-3 py-2.5 text-center"><CheckCircle className="w-3.5 h-3.5 text-green-500 inline-block" /></div>
                  </div>
                  {/* Row 2 */}
                  <div className="grid grid-cols-12 border-b border-gray-100 items-center">
                    <div className="col-span-1 px-3 py-2.5 text-gray-400">2</div>
                    <div className="col-span-2 px-3 py-2.5 font-mono text-gray-700">ENT-001</div>
                    <div className="col-span-3 px-3 py-2.5 font-mono text-gray-700">5200-003-00</div>
                    <div className="col-span-3 px-3 py-2.5 text-gray-600">Maintenance accrual</div>
                    <div className="col-span-1 px-3 py-2.5 text-right font-mono text-gray-300">—</div>
                    <div className="col-span-1 px-3 py-2.5 text-right font-mono text-gray-700">8,200</div>
                    <div className="col-span-1 px-3 py-2.5 text-center"><CheckCircle className="w-3.5 h-3.5 text-green-500 inline-block" /></div>
                  </div>
                  {/* Row 3 — error */}
                  <div className="grid grid-cols-12 border-b border-gray-100 items-center bg-red-50/50">
                    <div className="col-span-1 px-3 py-2.5 text-gray-400">3</div>
                    <div className="col-span-2 px-3 py-2.5 font-mono text-gray-700">ENT-002</div>
                    <div className="col-span-3 px-3 py-2.5 font-mono text-red-600">5200<span className="text-red-400 ml-1 font-sans text-[10px]">not found</span></div>
                    <div className="col-span-3 px-3 py-2.5 text-gray-600">Insurance prepayment</div>
                    <div className="col-span-1 px-3 py-2.5 text-right font-mono text-gray-700">4,250</div>
                    <div className="col-span-1 px-3 py-2.5 text-right font-mono text-gray-300">—</div>
                    <div className="col-span-1 px-3 py-2.5 text-center"><AlertCircle className="w-3.5 h-3.5 text-red-500 inline-block" /></div>
                  </div>
                  {/* Row 4 */}
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-1 px-3 py-2.5 text-gray-400">4</div>
                    <div className="col-span-2 px-3 py-2.5 font-mono text-gray-700">ENT-002</div>
                    <div className="col-span-3 px-3 py-2.5 font-mono text-gray-700">4100-002-00</div>
                    <div className="col-span-3 px-3 py-2.5 text-gray-600">Rent straight-lining</div>
                    <div className="col-span-1 px-3 py-2.5 text-right font-mono text-gray-300">—</div>
                    <div className="col-span-1 px-3 py-2.5 text-right font-mono text-gray-700">8,500</div>
                    <div className="col-span-1 px-3 py-2.5 text-center"><CheckCircle className="w-3.5 h-3.5 text-green-500 inline-block" /></div>
                  </div>
                </div>

                {/* Validation summary */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-[11px] text-green-600 font-medium">
                      <CheckCircle className="w-3.5 h-3.5" /> 11 rows valid
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-red-500 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> 1 error — fix to continue
                    </div>
                  </div>
                  <div className="px-4 py-1.5 bg-gray-100 rounded-full text-[11px] font-bold text-gray-400">
                    Submit for Approval
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid - The Extension */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What eForms adds to MRI</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Structured Forms</h3>
              <p className="text-gray-500">MRI gives you bulk import tools. eForms gives you forms anyone can fill out—no training required.</p>
              <div className="mt-6 bg-gray-50 h-48 rounded-xl w-full border border-gray-100 flex items-center justify-center text-gray-400">
                Form Interface Preview
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
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

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Granular Access</h3>
              <p className="text-gray-500">Let people enter data without full MRI access.</p>
            </div>

            <div className="md:col-span-2 bg-ebox-teal/10 p-8 rounded-2xl border border-ebox-teal/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-teal-900">Catch errors at the source</h3>
                  <ul className="space-y-3 mt-4">
                    <li className="flex gap-2 items-center text-teal-800"><AlertCircle className="w-5 h-5" /> GL account checked instantly</li>
                    <li className="flex gap-2 items-center text-teal-800"><AlertCircle className="w-5 h-5" /> Journals balanced before submit</li>
                    <li className="flex gap-2 items-center text-teal-800"><AlertCircle className="w-5 h-5" /> Clean data flows to MRI</li>
                  </ul>
                </div>
                <div className="flex-1 bg-white p-4 rounded-xl shadow-sm w-full">
                   <div className="flex items-center gap-2 text-red-500 mb-2 text-sm font-mono p-2 bg-red-50 rounded">
                      <span>❌ GL Account "5200" not found</span>
                   </div>
                   <div className="flex items-center gap-2 text-green-600 text-sm font-mono p-2 bg-green-50 rounded">
                      <span>✓ 197 rows validated</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Validation - How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-wide uppercase text-ebox-teal mb-2">Real-Time Validation</p>
            <h2 className="text-3xl font-bold text-gray-900">Catch errors at the source</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-ebox-teal/30"></div>
            {[
              { num: '1', title: 'As you type', desc: 'GL account gets checked against your MRI database immediately.' },
              { num: '2', title: 'Before submit', desc: 'All fields verified. Journals balanced. Format checked.' },
              { num: '3', title: 'Import with confidence', desc: 'Clean data flows to MRI. No cryptic error logs.' },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white border-4 border-ebox-teal rounded-full flex items-center justify-center text-3xl font-bold text-ebox-teal mb-6 shadow-sm relative z-10">
                  {step.num}
                </div>
                <div className="bg-gray-100 h-40 rounded-xl w-full mb-4 flex items-center justify-center text-gray-400 text-sm">
                  Screenshot placeholder
                </div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Templates Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-wide uppercase text-ebox-teal mb-2">Start importing in minutes</p>
            <h2 className="text-3xl font-bold text-gray-900">100+ pre-built templates for every MRI workflow</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Layers className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Journal Entries</h3>
              <p className="text-gray-500">Single batch, multi-batch, auto-split by entity/period</p>
              <div className="mt-6 bg-gray-50 h-48 rounded-xl w-full border border-gray-100 flex items-center justify-center text-gray-400">
                Journal form preview
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lease Entry</h3>
              <p className="text-gray-500">New leases, renewals, and amendments with full validation.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">AP Invoices</h3>
              <p className="text-gray-500">Structured invoice data with approval routing by amount or vendor.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Recurring Charges</h3>
              <p className="text-gray-500">Configure once, apply across hundreds of units.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Building Creation</h3>
              <p className="text-gray-500">Property setup with all required fields and approval layers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases - Colored Rows */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
           <h2 className="text-3xl font-bold">Where finance teams use eForms</h2>
        </div>
        
        <div className="w-full">
           {[
             { 
               color: "bg-blue-50", 
               border: "border-blue-100",
               icon: <Database className="text-blue-600" />,
               title: "Month-End Close", 
               desc: "Process 200+ journal entries with approval workflows",
               stat: "From 6 hours to 70 minutes"
             },
             { 
               color: "bg-green-50", 
               border: "border-green-100",
               icon: <FileText className="text-green-600" />,
               title: "Lease Administration", 
               desc: "Property managers enter leases, finance approves before posting",
               stat: "No more bottlenecks"
             },
             { 
               color: "bg-purple-50", 
               border: "border-purple-100",
               icon: <Settings className="text-purple-600" />,
               title: "Accounts Payable", 
               desc: "Structured invoice entry with auto-routing by amount/vendor",
               stat: "Know who approved what, instantly"
             },
             {
               color: "bg-orange-50",
               border: "border-orange-100",
               icon: <RefreshCw className="text-orange-600" />,
               title: "Recurring Processes",
               desc: "Configure once, apply to hundreds of units with validation",
               stat: "10 minutes to set up 50 units"
             },
             {
               color: "bg-pink-50",
               border: "border-pink-100",
               icon: <Database className="text-pink-600" />,
               title: "Master Data Management",
               desc: "Regional teams create buildings/units with approval layer",
               stat: "Maintain data standards"
             },
             {
               color: "bg-teal-50",
               border: "border-teal-100",
               icon: <Check className="text-teal-600" />,
               title: "Tenant Payments",
               desc: "Validate account, lease status, and charge codes before posting",
               stat: "Zero misapplied payments"
             }
           ].map((row, i) => (
             <div key={i} className={`${row.color} border-y ${row.border} py-12`}>
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-white rounded-full shadow-sm">{row.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{row.title}</h3>
                      <p className="text-gray-600">{row.desc}</p>
                    </div>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 font-bold text-gray-800 whitespace-nowrap">
                    {row.stat}
                  </div>
               </div>
             </div>
           ))}
           <div className="text-center py-8">
             <span className="text-lg font-bold text-gray-400">+100 more workflows</span>
           </div>
        </div>
      </section>

      {/* Section 6: Import Methods */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Two ways to work</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="p-4 bg-blue-100 rounded-full w-fit mb-6">
                <FileText className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Structured forms</h3>
              <p className="text-gray-500 mb-6">For one-at-a-time entry by team members</p>
              <div className="bg-gray-50 h-56 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400">
                Form interface preview
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="p-4 bg-green-100 rounded-full w-fit mb-6">
                <Upload className="text-green-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">File upload</h3>
              <p className="text-gray-500 mb-6">For bulk imports from your existing spreadsheets</p>
              <div className="bg-gray-50 h-56 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400">
                Spreadsheet upload preview
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Approval Workflows */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-bold tracking-wide uppercase text-ebox-teal mb-3">Add what MRI doesn't have</p>
              <h2 className="text-4xl font-bold mb-8">Route data to the right approver automatically</h2>
              <p className="text-lg font-semibold mb-4">Conditional logic:</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Invoice > $25K → CFO approval',
                  'Property in Region 2 → Regional Director',
                  'Vendor type = Capital → Asset Management',
                ].map((rule, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <ArrowRight className="w-5 h-5 text-ebox-teal flex-shrink-0" />
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
            <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center text-gray-400">
              Workflow builder screenshot
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Access Control */}
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
                <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 flex items-center gap-4">
                  {card.icon}
                  <span className="text-lg">{card.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Audit Trail (light bg) */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-ebox-teal font-bold uppercase tracking-wider text-sm mb-3">Audit Trail</p>
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
                    <div className="w-6 h-6 rounded-full bg-ebox-teal/20 flex items-center justify-center text-ebox-teal text-xs">✓</div>
                    <span className="text-lg text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-ebox-teal/10 transform rotate-3 rounded-3xl"></div>
              <div className="relative bg-white p-8 rounded-3xl border border-gray-200 shadow-xl">
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

      {/* Section 10: Testimonials */}
      <section className="py-24 bg-white">
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
              <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
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

      {/* Section 11: Error Handling Comparison */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Clear errors, not cryptic codes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm opacity-60">
              <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold mb-6">MRI Error Log</span>
              <div className="bg-gray-50 p-6 rounded-xl font-mono text-sm space-y-3">
                <div className="text-red-500">Import failed - batch processing error</div>
                <div className="text-gray-400">See log file...</div>
                <div className="text-gray-300">Error code: MRI-4521-BATCH</div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-ebox-lime/30 shadow-xl">
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-6">eForms Validation</span>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-red-500 text-sm font-mono p-3 bg-red-50 rounded-lg">
                  <span>❌ Row 23: GL Account "5200" not found</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 text-sm font-mono p-3 bg-green-50 rounded-lg">
                  <span>✓ 197 rows validated successfully</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Customization */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold tracking-wide uppercase text-ebox-teal mb-3">Beyond templates</p>
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
            <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center text-gray-400">
              Form builder screenshot
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: Recurring Workflows */}
      <section className="py-24 bg-[#FEFCF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold tracking-wide uppercase text-gray-400 mb-2">For monthly imports</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Duplicate last month. Update. Submit.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monthly accruals? Duplicate the previous month's journal. Change the amounts. Submit through the same approval flow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
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
            <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-ebox-lime/30">
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-4">With eForms</span>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <RefreshCw className="w-5 h-5 text-ebox-teal flex-shrink-0" />
                  <span className="text-sm">Duplicate December journal</span>
                </div>
                <div className="flex justify-center"><ArrowRight className="w-4 h-4 text-gray-300" /></div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Layout className="w-5 h-5 text-ebox-teal flex-shrink-0" />
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

      {/* Section 14: Integration */}
      <section className="py-24 bg-ebox-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ebox-lime font-bold uppercase tracking-wider text-sm mb-3">Works with your MRI database</p>
          <h2 className="text-4xl font-bold mb-4">Pulls your data. Respects your permissions.</h2>
          <p className="text-xl text-gray-400 mb-16">Data flows through standard MRI channels.</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <EFormsLogo variant="white" className="h-10 mx-auto" />
            </div>
            <div className="flex flex-col items-center">
              <div className="h-0.5 w-16 bg-ebox-lime hidden md:block"></div>
              <div className="h-16 w-0.5 bg-ebox-lime md:hidden"></div>
              <span className="text-xs text-gray-400 mt-1">Sync</span>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 text-center">
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

      {/* Section 15: Watch the Full Demo */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">See a complete import workflow</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-2xl aspect-video flex flex-col items-center justify-center mb-12">
              <PlayCircle className="w-20 h-20 text-white/80" />
              <span className="text-white text-lg font-bold mt-4">12-Minute Demo</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { time: '0:00', title: 'Introduction' },
                { time: '2:00', title: 'Template selection' },
                { time: '4:30', title: 'File upload & validation' },
                { time: '7:00', title: 'Approval routing' },
                { time: '9:30', title: 'MRI import' },
                { time: '11:00', title: 'Audit trail' },
              ].map((chapter, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 text-left">
                  <span className="text-ebox-teal font-mono text-sm font-bold">{chapter.time}</span>
                  <p className="text-sm font-medium text-gray-700">{chapter.title}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="primary" size="lg">Watch Full Demo</Button>
              <Button variant="outline" size="lg" onClick={() => onNavigate('book-demo')}>Book Live Demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 16: Final CTA */}
      <section className="py-24 bg-[#FEFCF0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <EFormsLogo className="h-12 mx-auto mb-8" />
          <h2 className="text-4xl font-extrabold text-ebox-dark mb-4">See how eForms extends your MRI system</h2>
          <p className="text-xl text-gray-600 mb-8">20-minute demo. Your workflows. Your use cases.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="text-left">
              <span className="block text-sm font-bold text-gray-400 uppercase">Week 1</span>
              <span className="text-lg font-bold">Connect to MRI + configure forms</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300 hidden md:block"></div>
            <div className="text-left">
              <span className="block text-sm font-bold text-gray-400 uppercase">Week 2</span>
              <span className="text-lg font-bold">Train team + go live</span>
            </div>
          </div>
          <Button variant="primary" size="lg" onClick={() => onNavigate('book-demo')}>Schedule a Demo</Button>
          <p className="mt-6 text-gray-500">
            Questions? <a href="mailto:productsales@openboxsoftware.com" className="text-ebox-teal hover:underline font-medium">productsales@openboxsoftware.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default EFormsPage;