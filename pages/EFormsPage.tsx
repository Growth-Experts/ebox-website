import React from 'react';
import Button from '../components/Button';
import { EFormsLogo } from '../components/Logos';
import { Check, Shield, Lock, FileText, Settings, RefreshCw, AlertCircle, Database } from 'lucide-react';
import { PageRoute } from '../types';

interface EFormsPageProps {
  onNavigate: (page: PageRoute) => void;
}

const EFormsPage: React.FC<EFormsPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Product Hero */}
      <section className="bg-ebox-dark text-white pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <EFormsLogo className="h-16 mb-8 [&_text]:fill-white [&_path]:stroke-white" />
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Built to extend MRI
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Give MRI the forms and workflows it doesn't have. Structured data entry. Approval routing. Real-time validation.
              </p>
              <div className="flex gap-4">
                <Button variant="primary" size="lg" onClick={() => onNavigate('book-demo')}>Book a Demo</Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-ebox-dark">Watch Overview</Button>
              </div>
            </div>
            <div className="relative">
               <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700 aspect-video flex items-center justify-center">
                  <img src="https://picsum.photos/800/600?grayscale" alt="eForms Dashboard" className="opacity-80 object-cover w-full h-full" />
               </div>
               {/* Floating Badge */}
               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full"><Check className="text-green-600 w-5 h-5" /></div>
                  <div className="text-gray-900 font-bold">MRI Compatible</div>
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
        </div>
      </section>

      {/* Audit Trail Section */}
      <section className="py-24 bg-ebox-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             <div>
               <h2 className="text-ebox-lime font-bold uppercase tracking-wider text-sm mb-3">Audit Trail</h2>
               <h3 className="text-4xl font-bold mb-6">Built-in compliance.</h3>
               <p className="text-xl text-gray-400 mb-8">Every submission. Every change. Logged. Answer auditor questions in seconds, not hours.</p>
               
               <ul className="space-y-6">
                 {[
                   "Who submitted (name, timestamp)",
                   "What they entered (all field values)",
                   "Who approved (approval chain)",
                   "When it imported (MRI reference)"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-4">
                     <div className="w-6 h-6 rounded-full bg-ebox-lime/20 flex items-center justify-center text-ebox-lime text-xs">✓</div>
                     <span className="text-lg">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>
             
             <div className="relative">
                <div className="absolute inset-0 bg-ebox-lime/10 transform rotate-3 rounded-3xl"></div>
                <div className="relative bg-gray-800 p-8 rounded-3xl border border-gray-700 shadow-2xl">
                   <div className="space-y-4">
                      <div className="flex justify-between text-sm text-gray-400 border-b border-gray-700 pb-2">
                        <span>User</span>
                        <span>Action</span>
                        <span>Time</span>
                      </div>
                      <div className="flex justify-between text-sm items-center">
                        <div className="flex items-center gap-2"><div className="w-6 h-6 bg-gray-600 rounded-full"></div> S. Johnson</div>
                        <span className="text-green-400">Approved</span>
                        <span>10:42 AM</span>
                      </div>
                      <div className="flex justify-between text-sm items-center">
                        <div className="flex items-center gap-2"><div className="w-6 h-6 bg-gray-600 rounded-full"></div> M. Davis</div>
                        <span className="text-blue-400">Edited Row 4</span>
                        <span>09:15 AM</span>
                      </div>
                      <div className="flex justify-between text-sm items-center">
                        <div className="flex items-center gap-2"><div className="w-6 h-6 bg-gray-600 rounded-full"></div> M. Davis</div>
                        <span className="text-gray-300">Submitted</span>
                        <span>09:10 AM</span>
                      </div>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#FEFCF0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <EFormsLogo className="h-12 mx-auto mb-8" />
          <h2 className="text-4xl font-extrabold text-ebox-dark mb-6">Faster than training a new hire.</h2>
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
        </div>
      </section>
    </div>
  );
};

export default EFormsPage;