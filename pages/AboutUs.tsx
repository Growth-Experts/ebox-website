import React from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import { OpenBoxLogo } from '../components/Logos';
import { Users, Globe, Award, Heart } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>About Us | eBox — Built from 25 Years in Real Estate Tech</title>
        <meta name="description" content="eBox is part of the Open Box Group, a global software consultancy serving real estate for over two decades. We build tools that make MRI work harder for you." />
        <link rel="canonical" href="https://eboxsoftware.com/about" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-ebox-light pt-20 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-ebox-dark mb-6">
              <span className="block">Making your</span>
              <span className="block">property systems</span>
              <span className="block text-ebox-lime">work harder for&nbsp;you</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              eBox was founded to solve the specific, messy data problems that real estate teams face every day. We believe enterprise software doesn't have to be&nbsp;complicated.
            </p>
          </div>
        </div>
        {/* Background Element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-ebox-forest/20 rounded-full blur-3xl -z-0"></div>
      </section>

      {/* The Open Box Connection */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
               <div className="mb-6">
                 <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Our Heritage</span>
               </div>
               <h2 className="text-3xl font-bold text-ebox-dark mb-6">Backed by global expertise.</h2>
               <p className="text-lg text-gray-600 mb-6">
                 eBox is proud to be part of the <span className="font-bold text-gray-900">Open Box Group</span>, a global software consultancy that has been serving the Real Estate industry for over two decades.
               </p>
               <p className="text-lg text-gray-600 mb-8">
                 While eBox focuses on specific product solutions like eForms, we leverage the deep technical knowledge, security standards, and industry experience of the wider Open Box organization.
               </p>
               <div className="inline-flex items-center gap-3">
                 <span className="text-lg text-gray-500">An</span>
                 <OpenBoxLogo className="h-12" />
                 <span className="text-lg text-gray-500">Company</span>
               </div>
            </div>
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200"></div>

              <div className="space-y-10">
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-6 h-6 bg-ebox-lime rounded-full border-4 border-white shadow"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-ebox-lime">2001</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1">Open Box Founded</h3>
                  <p className="text-sm text-gray-500 mt-1">Launched as a real estate software consultancy, specialising in MRI implementations.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-8 top-1 w-6 h-6 bg-ebox-forest rounded-full border-4 border-white shadow"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-ebox-forest">2010</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1">Global Expansion</h3>
                  <p className="text-sm text-gray-500 mt-1">Grew to serve clients across multiple continents with deep MRI expertise.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-8 top-1 w-6 h-6 bg-ebox-dark rounded-full border-4 border-white shadow"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">2023</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1">eBox Is Born</h3>
                  <p className="text-sm text-gray-500 mt-1">Spun out as a dedicated product company to solve MRI's data import challenges.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-8 top-1 w-6 h-6 bg-ebox-lime rounded-full border-4 border-white shadow ring-4 ring-ebox-lime/20"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-ebox-lime">Today</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1">eForms & eConnect</h3>
                  <p className="text-sm text-gray-500 mt-1">Two products, one mission: zero friction in your business processes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-ebox-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Our Philosophy</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">We build specifically for the real estate industry and MRI software.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <div className="bg-ebox-lime/20 w-12 h-12 rounded-md flex items-center justify-center mb-6">
                <Award className="text-ebox-lime w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Industry Expertise</h3>
              <p className="text-gray-400 leading-relaxed">Decades of property and software experience. We speak your language.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <div className="bg-purple-500/20 w-12 h-12 rounded-md flex items-center justify-center mb-6">
                <Heart className="text-purple-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Success</h3>
              <p className="text-gray-400 leading-relaxed">We don't just sell you software. We help you map your workflows, train your team, and ensure you get value from day one.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <div className="bg-ebox-forest/20 w-12 h-12 rounded-md flex items-center justify-center mb-6">
                <Users className="text-ebox-forest w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">User Experience</h3>
              <p className="text-gray-400 leading-relaxed">Enterprise software shouldn't require a manual. We design our interfaces to be intuitive for the user.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-24 bg-[#FEFCF0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-ebox-dark mb-6">Want to learn more?</h2>
          <p className="text-xl text-gray-600 mb-10">See how we can help your team work smarter.</p>
          <Button variant="primary" size="lg" to="/contact">Contact Us</Button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;