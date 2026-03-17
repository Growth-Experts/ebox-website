import React from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import { EFormsLogo } from '../components/Logos';
import { Check, Shield, Lock, FileText, Settings, RefreshCw, AlertCircle, Database, Upload, Users, Layers, ArrowRight, ChevronRight, CheckCircle, Layout, Building, Receipt, PlusCircle, ShieldCheck } from 'lucide-react';

const EFormsPage: React.FC = () => {
  const useCases = [
    { gradient: "from-blue-600 to-blue-700", color: "blue", iconBg: "bg-blue-100", iconText: "text-blue-600", borderColor: "border-blue-500", statBg: "bg-blue-50", statText: "text-blue-300", dotColor: "bg-blue-400", icon: <Database className="text-white w-6 h-6" />, title: "Month-End Close", desc: "Process and schedule 1000s of journal entries with approval workflows.", stat: "No more late nights" },
    { gradient: "from-emerald-600 to-emerald-700", color: "emerald", iconBg: "bg-emerald-100", iconText: "text-emerald-600", borderColor: "border-emerald-500", statBg: "bg-emerald-50", statText: "text-emerald-300", dotColor: "bg-emerald-400", icon: <FileText className="text-white w-6 h-6" />, title: "Lease Administration", desc: "Property administrators enter leases, finance captures charges, property managers approve into MRI.", stat: "Real-time email notifications" },
    { gradient: "from-purple-600 to-purple-700", color: "purple", iconBg: "bg-purple-100", iconText: "text-purple-600", borderColor: "border-purple-500", statBg: "bg-purple-50", statText: "text-purple-300", dotColor: "bg-purple-400", icon: <Settings className="text-white w-6 h-6" />, title: "Accounts Payable", desc: "Structured invoice entry with auto-routing by amount or vendor.", stat: "Every action logged" },
    { gradient: "from-amber-500 to-orange-600", color: "amber", iconBg: "bg-amber-100", iconText: "text-amber-600", borderColor: "border-amber-500", statBg: "bg-amber-50", statText: "text-amber-300", dotColor: "bg-amber-400", icon: <RefreshCw className="text-white w-6 h-6" />, title: "Recurring Processes", desc: "Configure once, apply to hundreds of units with validation.", stat: "Set up once, reuse monthly" },
    { gradient: "from-rose-500 to-pink-600", color: "rose", iconBg: "bg-rose-100", iconText: "text-rose-600", borderColor: "border-rose-500", statBg: "bg-rose-50", statText: "text-rose-300", dotColor: "bg-rose-400", icon: <Database className="text-white w-6 h-6" />, title: "Master Data Management", desc: "Regional teams create buildings and units with approval layer.", stat: "Consistent data, every time" },
    { gradient: "from-teal-500 to-cyan-600", color: "teal", iconBg: "bg-teal-100", iconText: "text-teal-600", borderColor: "border-teal-500", statBg: "bg-teal-50", statText: "text-teal-300", dotColor: "bg-teal-400", icon: <Check className="text-white w-6 h-6" />, title: "Tenant Charges", desc: "Validate accounts, tenant details and charge codes before posting.", stat: "Reduce tenant queries" },
  ];

  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>eForms | Structured MRI Data Imports &amp; Approval Workflows | eBox</title>
        <meta name="description" content="eForms provides structured forms for MRI imports with real-time validation, approval routing, and complete audit trails. Built for real estate finance teams." />
        <link rel="canonical" href="https://www.eboxsoftware.com/eforms" />
        <meta property="og:title" content="eForms | Structured MRI Data Imports & Approval Workflows | eBox" />
        <meta property="og:description" content="eForms provides structured forms for MRI imports with real-time validation, approval routing, and complete audit trails. Built for real estate finance teams." />
        <meta property="og:url" content="https://www.eboxsoftware.com/eforms" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.eboxsoftware.com/images/og-eforms.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="eForms | Structured MRI Data Imports & Approval Workflows | eBox" />
        <meta name="twitter:description" content="eForms provides structured forms for MRI imports with real-time validation, approval routing, and complete audit trails. Built for real estate finance teams." />
        <meta name="twitter:image" content="https://www.eboxsoftware.com/images/og-eforms.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "eForms",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "url": "https://www.eboxsoftware.com/eforms",
          "description": "eForms provides structured forms for MRI imports with real-time validation, approval routing, and complete audit trails. Built for real estate finance teams.",
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
      {/* Product Hero — Light, product-centric (distinct from Home2 dark hero) */}
      <section className="bg-white pt-20 pb-0 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EFormsLogo className="h-12 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-ebox-dark">
            Data imports for MRI, made&nbsp;easy
          </h1>
          <p className="text-xl text-gray-500 mb-8 leading-relaxed max-w-2xl mx-auto">
            Structured data entry. Approval routing. Real-time validation.<br />All feeding directly into your MRI database.
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
              src="/images/eforms-new-lease-creation.png"
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

          {/* Import Flow — hero card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
            {/* Copy header */}
            <div className="p-8 lg:p-10 pb-0 lg:pb-0 text-center">
              <div className="h-10 w-10 bg-green-100 rounded-md flex items-center justify-center mb-4 mx-auto">
                <Upload className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Import from Excel</h3>
              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
                Your team already works in spreadsheets. eForms lets you import journals, vendors, invoices, charges, and leases directly into MRI, validated and approved before anything touches your database.
              </p>
            </div>

            {/* Full-width flow diagram */}
            <div className="p-8 lg:px-12 lg:py-10">
              {/* Desktop: horizontal flow */}
              <div className="hidden md:flex items-start gap-5 lg:gap-8">
                {/* Excel node */}
                <div className="flex-[2] min-w-0">
                  <div className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
                    <div className="bg-[#217346] px-4 py-2 flex items-center gap-2">
                      <svg viewBox="0 0 16 16" className="w-4 h-4 text-white fill-current"><path d="M1.5 0A1.5 1.5 0 000 1.5v13A1.5 1.5 0 001.5 16h13a1.5 1.5 0 001.5-1.5V5l-5-5H1.5zM10 0v5h5L10 0zM3 7h2.5v1.25H4.25v.5H5.5V10H3V8.75h1.25v-.5H3V7zm4 0h1.5c.28 0 .5.22.5.5v2c0 .28-.22.5-.5.5H7V7zm1 .75v1.5h.25v-1.5H8zm2-0.75h1.5c.28 0 .5.22.5.5v.75l-.75.75.75.75V10h-1l-.5-.75V10H10V7z" /></svg>
                      <span className="text-xs font-semibold text-white/90 truncate">journal_entries.xlsx</span>
                    </div>
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="bg-gray-50 text-gray-500">
                          <th className="border-r border-b border-gray-200 px-3 py-2 text-left font-medium">Entity</th>
                          <th className="border-r border-b border-gray-200 px-3 py-2 text-left font-medium">GL Acct</th>
                          <th className="border-r border-b border-gray-200 px-3 py-2 text-left font-medium">Description</th>
                          <th className="border-b border-gray-200 px-3 py-2 text-right font-medium">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr><td className="border-r border-b border-gray-100 px-3 py-1.5">PROP-001</td><td className="border-r border-b border-gray-100 px-3 py-1.5">4200</td><td className="border-r border-b border-gray-100 px-3 py-1.5">Rent accrual</td><td className="border-b border-gray-100 px-3 py-1.5 text-right">12,500</td></tr>
                        <tr><td className="border-r border-b border-gray-100 px-3 py-1.5">PROP-002</td><td className="border-r border-b border-gray-100 px-3 py-1.5">5100</td><td className="border-r border-b border-gray-100 px-3 py-1.5">Service charge</td><td className="border-b border-gray-100 px-3 py-1.5 text-right">8,750</td></tr>
                        <tr><td className="border-r border-b border-gray-100 px-3 py-1.5">PROP-003</td><td className="border-r border-b border-gray-100 px-3 py-1.5">4200</td><td className="border-r border-b border-gray-100 px-3 py-1.5">Insurance</td><td className="border-b border-gray-100 px-3 py-1.5 text-right">3,200</td></tr>
                        <tr><td className="border-r border-gray-100 px-3 py-1.5 text-gray-400">PROP-004</td><td className="border-r border-gray-100 px-3 py-1.5 text-gray-400">6300</td><td className="border-r border-gray-100 px-3 py-1.5 text-gray-400">Maintenance</td><td className="px-3 py-1.5 text-right text-gray-400">5,100</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-500 text-center mt-3 font-medium">Your spreadsheet</p>
                </div>

                {/* Arrow 1 */}
                <div className="flex flex-col items-center flex-shrink-0 pt-14">
                  <svg width="48" height="20" viewBox="0 0 48 20" className="text-ebox-forest">
                    <line x1="0" y1="10" x2="38" y2="10" stroke="currentColor" strokeWidth="2" />
                    <polygon points="38,4 48,10 38,16" fill="currentColor" />
                  </svg>
                  <span className="text-xs text-gray-400 font-medium mt-1.5">Upload</span>
                </div>

                {/* eForms node */}
                <div className="flex-[2] min-w-0">
                  <div className="rounded-lg border border-gray-200 shadow-md overflow-hidden">
                    <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 border-b border-gray-200">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="bg-white rounded-md px-2.5 py-0.5 text-[10px] text-gray-400 border border-gray-200 text-center">app.eboxsoftware.com</div>
                      </div>
                      <div className="w-8"></div>
                    </div>
                    <img src="/images/eforms-file-import.png" alt="eForms file upload and validation interface" className="w-full block" />
                  </div>
                  <p className="text-sm text-gray-500 text-center mt-3 font-medium">Validate &amp; approve</p>
                </div>

                {/* Arrow 2 */}
                <div className="flex flex-col items-center flex-shrink-0 pt-14">
                  <svg width="48" height="20" viewBox="0 0 48 20" className="text-ebox-forest">
                    <line x1="0" y1="10" x2="38" y2="10" stroke="currentColor" strokeWidth="2" />
                    <polygon points="38,4 48,10 38,16" fill="currentColor" />
                  </svg>
                  <span className="text-xs text-gray-400 font-medium mt-1.5">Import</span>
                </div>

                {/* MRI node */}
                <div className="flex-1 min-w-0">
                  <div className="bg-white rounded-lg border border-gray-200 shadow-md p-6 flex flex-col items-center gap-3 h-full justify-center">
                    <div className="relative">
                      <Database className="w-12 h-12 text-gray-700" />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <span className="text-sm font-bold text-gray-800">MRI</span>
                  </div>
                  <p className="text-sm text-gray-500 text-center mt-3 font-medium">Clean data in MRI</p>
                </div>
              </div>

              {/* Mobile: vertical flow */}
              <div className="flex md:hidden flex-col items-center gap-4 w-full max-w-sm mx-auto">
                {/* Excel node */}
                <div className="w-full">
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <div className="bg-[#217346] px-3 py-2 flex items-center gap-2">
                      <svg viewBox="0 0 16 16" className="w-4 h-4 text-white fill-current"><path d="M1.5 0A1.5 1.5 0 000 1.5v13A1.5 1.5 0 001.5 16h13a1.5 1.5 0 001.5-1.5V5l-5-5H1.5zM10 0v5h5L10 0zM3 7h2.5v1.25H4.25v.5H5.5V10H3V8.75h1.25v-.5H3V7zm4 0h1.5c.28 0 .5.22.5.5v2c0 .28-.22.5-.5.5H7V7zm1 .75v1.5h.25v-1.5H8zm2-0.75h1.5c.28 0 .5.22.5.5v.75l-.75.75.75.75V10h-1l-.5-.75V10H10V7z" /></svg>
                      <span className="text-xs font-semibold text-white/90">journal_entries.xlsx</span>
                    </div>
                    <table className="w-full text-[11px] border-collapse">
                      <thead>
                        <tr className="bg-gray-50 text-gray-500">
                          <th className="border-r border-b border-gray-200 px-2.5 py-1.5 text-left font-medium">Entity</th>
                          <th className="border-r border-b border-gray-200 px-2.5 py-1.5 text-left font-medium">GL Acct</th>
                          <th className="border-b border-gray-200 px-2.5 py-1.5 text-right font-medium">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr><td className="border-r border-b border-gray-100 px-2.5 py-1.5">PROP-001</td><td className="border-r border-b border-gray-100 px-2.5 py-1.5">4200</td><td className="border-b border-gray-100 px-2.5 py-1.5 text-right">12,500</td></tr>
                        <tr><td className="border-r border-b border-gray-100 px-2.5 py-1.5">PROP-002</td><td className="border-r border-b border-gray-100 px-2.5 py-1.5">5100</td><td className="border-b border-gray-100 px-2.5 py-1.5 text-right">8,750</td></tr>
                        <tr><td className="border-r border-gray-100 px-2.5 py-1.5">PROP-003</td><td className="border-r border-gray-100 px-2.5 py-1.5">4200</td><td className="px-2.5 py-1.5 text-right">3,200</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-2 font-medium">Your spreadsheet</p>
                </div>

                {/* Arrow down */}
                <div className="flex flex-col items-center">
                  <div className="w-px h-4 bg-ebox-forest/30"></div>
                  <svg viewBox="0 0 12 8" className="w-3 h-2 text-ebox-forest fill-current"><polygon points="6,8 0,0 12,0" /></svg>
                  <span className="text-[10px] text-gray-400 font-medium mt-0.5">Upload</span>
                </div>

                {/* eForms node */}
                <div className="w-full">
                  <div className="rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 border-b border-gray-200">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="bg-white rounded px-2 py-0.5 text-[9px] text-gray-400 border border-gray-200 text-center">app.eboxsoftware.com</div>
                      </div>
                    </div>
                    <img src="/images/eforms-file-import.png" alt="eForms file upload and validation interface" className="w-full block" />
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-2 font-medium">Validate &amp; approve</p>
                </div>

                {/* Arrow down */}
                <div className="flex flex-col items-center">
                  <div className="w-px h-4 bg-ebox-forest/30"></div>
                  <svg viewBox="0 0 12 8" className="w-3 h-2 text-ebox-forest fill-current"><polygon points="6,8 0,0 12,0" /></svg>
                  <span className="text-[10px] text-gray-400 font-medium mt-0.5">Import</span>
                </div>

                {/* MRI node */}
                <div className="w-full">
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 flex flex-col items-center gap-2">
                    <div className="relative">
                      <Database className="w-10 h-10 text-gray-700" />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <span className="text-sm font-bold text-gray-800">MRI</span>
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-2 font-medium">Clean data in MRI</p>
                </div>
              </div>
            </div>

            {/* Bottom row — quick steps */}
            <div className="border-t border-gray-100 bg-gray-50/50 px-8 lg:px-12 py-5">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                <span className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-ebox-forest" /> Download a template</span>
                <span className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-ebox-forest" /> Fill it in Excel</span>
                <span className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-ebox-forest" /> Upload to eForms</span>
                <span className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-ebox-forest" /> Data imports to MRI</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-12 flex flex-col justify-center">
                <div className="h-10 w-10 bg-blue-100 rounded-md flex items-center justify-center mb-5">
                  <FileText className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Structured Forms</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">MRI gives you bulk import tools. eForms gives you forms anyone can fill out, no training required.</p>
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
                    src="/images/eforms-form-zoomed-in.png"
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
                <div className="flex items-center gap-2 text-sm"><div className="w-2 h-2 rounded-full bg-green-500"></div> Notify</div>
                 <div className="flex items-center gap-2 text-sm"><div className="w-2 h-2 rounded-full bg-green-500"></div> Review</div>
                 <div className="flex items-center gap-2 text-sm"><div className="w-2 h-2 rounded-full bg-green-500"></div> Approve</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-orange-100 rounded-md flex items-center justify-center mb-4">
                <Lock className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Granular Access</h3>
              <p className="text-gray-500">
                Enable external users to import, submit, and approve data.
              </p>
              <p className="text-gray-500 mt-3">
                Give them the access they need and nothing more.
              </p>
            </div>

            <div className="bg-ebox-forest/10 p-8 rounded-lg border border-ebox-forest/20">
              <h3 className="text-xl font-bold mb-2 text-ebox-dark">Catch errors at the source</h3>
              <ul className="space-y-3 mt-4">
                <li className="flex gap-2 items-center text-gray-800"><AlertCircle className="w-5 h-5 shrink-0 text-ebox-forest" /> Avoid human error</li>
                <li className="flex gap-2 items-center text-gray-800"><AlertCircle className="w-5 h-5 shrink-0 text-ebox-forest" /> Enforce business rules</li>
                <li className="flex gap-2 items-center text-gray-800"><AlertCircle className="w-5 h-5 shrink-0 text-ebox-forest" /> Respect your organisation's data security hierarchy</li>
                <li className="flex gap-2 items-center text-gray-800"><AlertCircle className="w-5 h-5 shrink-0 text-ebox-forest" /> Clean data flows to MRI</li>
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
            <p className="text-xs text-gray-500 mb-2">Transactional data example.</p>
            <h2 className="text-3xl font-bold text-gray-900">Catch errors at the source</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-ebox-forest/30"></div>
            {[
              { num: '1', title: 'As you type', desc: 'GL account gets checked against your MRI database immediately.', img: '/images/validation-step1-as-you-type.png', alt: 'eForms real-time GL account validation as you type' },
              { num: '2', title: 'Before submit', desc: 'All fields verified. Journals balanced. Format checked.', img: '/images/validation-step2-before-submit.png', alt: 'eForms pre-submission validation showing errors to fix' },
              { num: '3', title: 'Import with confidence', desc: 'Clean data flows to MRI. No complicated error logs.', img: '/images/validation-step3-import-ready.png', alt: 'eForms all rows validated and ready to import to MRI' },
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
            <h2 className="text-3xl font-bold text-gray-900">Pre-built templates for every MRI workflow</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-green-100 rounded-md flex items-center justify-center mb-4">
                <FileText className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Lease Entry</h3>
              <p className="text-gray-500">Lease creation, renewals, and amendments with full validation workflows.</p>
              {/* Lease entry flow diagram */}
              {(() => {
                const steps = [
                  { icon: <Building className="w-5 h-5" />, label: 'Create Unit', bg: 'bg-ebox-forest/10', text: 'text-ebox-forest' },
                  { icon: <FileText className="w-5 h-5" />, label: 'Create Lease', bg: 'bg-ebox-forest/10', text: 'text-ebox-forest' },
                  { icon: <Receipt className="w-5 h-5" />, label: 'Create Charges', bg: 'bg-ebox-forest/10', text: 'text-ebox-forest' },
                  { icon: <PlusCircle className="w-5 h-5" />, label: 'Add Space', bg: 'bg-ebox-forest/10', text: 'text-ebox-forest' },
                  { icon: <ShieldCheck className="w-5 h-5" />, label: 'Approval', bg: 'bg-amber-50', text: 'text-amber-600', ring: 'ring-1 ring-amber-200' },
                  { icon: <Database className="w-5 h-5" />, label: 'Import to MRI', bg: 'bg-ebox-forest/10', text: 'text-ebox-forest', badge: true },
                ];
                return (
                  <>
                    {/* Desktop: horizontal flow */}
                    <div className="mt-6 hidden md:flex items-start justify-between gap-1">
                      {steps.map((step, i) => (
                        <React.Fragment key={i}>
                          <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
                            <div className={`relative w-12 h-12 rounded-full ${step.bg} ${step.text} ${step.ring || ''} flex items-center justify-center`}>
                              {step.icon}
                              {step.badge && (
                                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                  <Check className="w-2.5 h-2.5 text-white" />
                                </div>
                              )}
                            </div>
                            <span className="text-xs font-semibold text-gray-700 text-center leading-tight">{step.label}</span>
                          </div>
                          {i < steps.length - 1 && (
                            <div className="flex items-center pt-3.5 flex-shrink-0">
                              <ChevronRight className="w-4 h-4 text-ebox-forest/30" />
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Mobile: 3-column grid with connector */}
                    <div className="mt-6 md:hidden">
                      <div className="grid grid-cols-3 gap-y-2 gap-x-1">
                        {steps.slice(0, 3).map((step, i) => (
                          <React.Fragment key={i}>
                            <div className="flex flex-col items-center gap-1.5">
                              <div className={`relative w-10 h-10 rounded-full ${step.bg} ${step.text} ${step.ring || ''} flex items-center justify-center`}>
                                {React.cloneElement(step.icon, { className: 'w-4 h-4' })}
                              </div>
                              <span className="text-[10px] font-semibold text-gray-700 text-center leading-tight">{step.label}</span>
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                      <div className="flex justify-center py-1.5">
                        <svg width="120" height="20" viewBox="0 0 120 20" className="text-ebox-forest/30">
                          <path d="M100 2 L60 10 L20 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                          <polygon points="20,14 14,20 22,20" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="grid grid-cols-3 gap-y-2 gap-x-1">
                        {steps.slice(3).map((step, i) => (
                          <React.Fragment key={i}>
                            <div className="flex flex-col items-center gap-1.5">
                              <div className={`relative w-10 h-10 rounded-full ${step.bg} ${step.text} ${step.ring || ''} flex items-center justify-center`}>
                                {React.cloneElement(step.icon, { className: 'w-4 h-4' })}
                                {step.badge && (
                                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full flex items-center justify-center">
                                    <Check className="w-2 h-2 text-white" />
                                  </div>
                                )}
                              </div>
                              <span className="text-[10px] font-semibold text-gray-700 text-center leading-tight">{step.label}</span>
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-blue-100 rounded-md flex items-center justify-center mb-4">
                <Layers className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Journal Entries</h3>
              <p className="text-gray-500">Single or multiple auto posting batches.</p>
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
              <p className="text-gray-500">Create any part of your property hierarchy: portfolios, entities, buildings, suites, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases — Dark background for higher contrast */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-ebox-lime font-bold uppercase tracking-wider text-sm mb-3">Built for real estate finance</p>
            <h2 className="text-4xl font-bold text-white">Where property teams use eForms</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc, i) => (
              <div key={`c-${i}`} className="bg-white/10 rounded-xl overflow-hidden border border-white/10 hover:bg-white/15 transition-all duration-200 flex flex-col">
                <div className={`h-1.5 bg-gradient-to-r ${uc.gradient}`}></div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-11 h-11 ${uc.iconBg} rounded-lg flex items-center justify-center`}>
                      {React.cloneElement(uc.icon, { className: `${uc.iconText} w-5 h-5` })}
                    </div>
                    <h3 className="text-lg font-bold text-white">{uc.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5 flex-1">{uc.desc}</p>
                  <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                    <div className={`w-2 h-2 rounded-full ${uc.dotColor}`}></div>
                    <span className={`${uc.statText} font-semibold text-sm`}>{uc.stat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pt-10">
            <span className="text-xl font-bold text-white/80">+100 more potential business workflows available.</span>
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
              <p className="text-gray-500 mb-6">For one-at-a-time entry by team members.</p>
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
              <p className="text-gray-500 mb-6">For bulk imports from your existing spreadsheets.</p>
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
              <p className="text-sm font-bold tracking-wide uppercase text-ebox-forest mb-3">add flexibility to your business workflows</p>
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
              <p className="text-gray-500"><span className="font-semibold text-gray-700">Status tracking:</span> See where submissions are in the process.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col items-center gap-0">
              {/* Form Submitted */}
              <div className="bg-ebox-forest text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-sm">
                Form Submitted
              </div>
              <div className="w-px h-6 bg-gray-300"></div>

              {/* Condition */}
              <div className="relative">
                <div className="bg-amber-50 border-2 border-amber-400 px-5 py-3 rounded-lg text-sm font-semibold text-amber-800 rotate-0">
                  Invoice &gt; $25K?
                </div>
              </div>

              {/* Split connectors */}
              <svg width="280" height="40" className="flex-shrink-0" viewBox="0 0 280 40">
                <line x1="140" y1="0" x2="70" y2="40" stroke="#D1D5DB" strokeWidth="2" />
                <line x1="140" y1="0" x2="210" y2="40" stroke="#D1D5DB" strokeWidth="2" />
              </svg>

              {/* Two paths */}
              <div className="flex gap-12 w-full justify-center">
                {/* Yes path */}
                <div className="flex flex-col items-center gap-0">
                  <span className="text-xs font-bold text-emerald-600 mb-2 uppercase tracking-wide">Yes</span>
                  <div className="bg-emerald-50 border border-emerald-200 px-5 py-2.5 rounded-lg text-sm font-medium text-emerald-800">
                    CFO Review
                  </div>
                  <div className="w-px h-5 bg-gray-300"></div>
                  <div className="bg-emerald-100 border border-emerald-300 px-5 py-2.5 rounded-lg text-sm font-semibold text-emerald-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Approved
                  </div>
                </div>

                {/* No path */}
                <div className="flex flex-col items-center gap-0">
                  <span className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">No</span>
                  <div className="bg-blue-50 border border-blue-200 px-5 py-2.5 rounded-lg text-sm font-medium text-blue-800">
                    Manager Review
                  </div>
                  <div className="w-px h-5 bg-gray-300"></div>
                  <div className="bg-blue-100 border border-blue-300 px-5 py-2.5 rounded-lg text-sm font-semibold text-blue-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Approved
                  </div>
                </div>
              </div>

              {/* Merge connectors */}
              <svg width="280" height="40" className="flex-shrink-0" viewBox="0 0 280 40">
                <line x1="70" y1="0" x2="140" y2="40" stroke="#D1D5DB" strokeWidth="2" />
                <line x1="210" y1="0" x2="140" y2="40" stroke="#D1D5DB" strokeWidth="2" />
              </svg>

              {/* Import to MRI */}
              <div className="bg-ebox-lime text-ebox-dark px-6 py-3 rounded-lg text-sm font-bold shadow-sm flex items-center gap-2">
                <Database className="w-4 h-4" /> Import to MRI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Control — ebox-dark */}
      <section className="py-24 bg-ebox-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-ebox-lime font-bold uppercase tracking-wider text-sm mb-3">Security done your way</p>
              <h2 className="text-4xl font-bold mb-6">Give people forms, not full system access</h2>
              <p className="text-xl text-gray-400">They enter data. You control what gets approved and goes into MRI.</p>
            </div>
            <div className="space-y-4">
              {[
                { icon: <Users className="text-ebox-lime w-6 h-6" />, text: 'Property managers get lease forms for their buildings' },
                { icon: <FileText className="text-ebox-lime w-6 h-6" />, text: 'AP clerks get invoice forms' },
                { icon: <Lock className="text-ebox-lime w-6 h-6" />, text: 'Admins get full access to their region' },
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
              <h3 className="text-4xl font-bold mb-6 text-gray-900">Built-in tracking</h3>
              <p className="text-xl text-gray-500 mb-8">Every submission. Every change. Logged. Answer questions in seconds, not hours.</p>
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

      {/* Testimonial — gray-50 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 md:p-14 rounded-xl shadow-lg border border-gray-100 relative">
              <svg className="absolute top-6 left-8 w-12 h-12 text-ebox-lime/20" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" /></svg>
              <div className="relative z-10">
                <img src="/images/savills.svg" alt="Savills" className="h-8 object-contain mb-8" />
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4">
                  "Although still relatively new to Savills, eForms is already proving invaluable for teams managing repetitive, manual processes. We implemented the system smoothly and launched our first form in just under three months."
                </p>
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
                  "eForms represents a significant growth area for Savills Property Management, with plans for a wider rollout across EMEA. We're enthusiastic about the opportunities it brings and the resource savings it will undoubtedly deliver."
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <img src="/images/rachel-rule.jpeg" alt="Rachel Rule" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Rachel Rule</div>
                    <div className="text-gray-500">Director, Systems Accountant, Property Management</div>
                    <div className="text-sm text-gray-400">Savills UK</div>
                  </div>
                </div>
              </div>
            </div>
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
            <div className="bg-gray-200 p-8 rounded-lg border border-gray-300 shadow-sm">
                <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold mb-6">Typical Error Log</span>
              <div className="bg-white p-6 rounded-md font-mono text-sm space-y-3">
                  <div className="text-red-500">Import failed</div>
                <div className="text-gray-400">See log file...</div>
                  <div className="text-gray-300">Error code: 4521-BATCH</div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
            <p className="text-sm text-gray-500 text-center">Vague messages. No row numbers. No way to pinpoint the problem.</p>
            <p className="text-sm text-gray-500 text-center">Exact row, exact field, exact issue. Fix it and resubmit.</p>
          </div>
        </div>
      </section>

      {/* Customization — ebox-deep/5 */}
      <section className="py-24 bg-ebox-deep/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold tracking-wide uppercase text-ebox-forest mb-3">Beyond templates</p>
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Build forms that match your business needs</h2>
              <ul className="space-y-4">
                {[
                  'No fields you don\'t use',
                  'Mandatory fields on business conditions',
                  'Add custom fields (internal notes, file attachments)',
                  'Design sections and tabs',
                  'Create field dependencies',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle className="text-ebox-lime w-6 h-6 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
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
                src="/images/eforms-form-designer.png"
                alt="eForms form designer showing custom field configuration, sections, and field dependencies"
                className="w-full block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recurring Workflows — ebox-forest/8 */}
      <section className="py-24 bg-ebox-forest/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold tracking-wide uppercase text-ebox-forest mb-2">For monthly imports</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Automate each month. Update. Submit.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monthly accruals? Schedule each month's journal. Update amounts. Submit through the same approval flow.
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
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-gray-700 bg-gray-50 rounded-md px-3 py-2">
                  <RefreshCw className="w-5 h-5 text-ebox-forest flex-shrink-0" />
                  <span className="text-sm">Duplicate December journal</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 bg-gray-50 rounded-md px-3 py-2">
                  <Layout className="w-5 h-5 text-ebox-forest flex-shrink-0" />
                  <span className="text-sm">Update 3 amounts</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 bg-gray-50 rounded-md px-3 py-2">
                  <Upload className="w-5 h-5 text-ebox-forest flex-shrink-0" />
                  <span className="text-sm">Schedule posting date</span>
                </div>
                <div className="flex items-center gap-3 text-green-700 bg-green-50 rounded-md px-3 py-2 mt-3 border border-green-100">
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
          <h2 className="text-4xl font-extrabold mb-4">See how eForms transforms your data journey</h2>
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
            Questions? <a href="mailto:sales@eboxsoftware.com" className="text-ebox-lime hover:underline font-medium">sales@eboxsoftware.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default EFormsPage;
