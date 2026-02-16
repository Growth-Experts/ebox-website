import React from 'react';
import { Link } from 'react-router-dom';
import { EBoxLogo, OpenBoxLogo } from './Logos';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <EBoxLogo className="h-8 mb-6" />
            <p className="text-gray-500 text-sm leading-relaxed">
              Software built specifically for MRI users. Solving the real, day-to-day operational problems that MRI users experience.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Products</h4>
            <ul className="space-y-3">
              <li><Link to="/eforms" className="text-gray-600 hover:text-ebox-lime transition-colors">eForms</Link></li>
              <li><Link to="/econnect" className="text-gray-600 hover:text-ebox-lime transition-colors">eConnect</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-ebox-lime transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-ebox-lime transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-ebox-lime transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-gray-900 mb-4">An Open Box Company</h4>
             <OpenBoxLogo className="h-8 opacity-70 grayscale hover:grayscale-0 transition-all" />
             <p className="text-xs text-gray-400 mt-2">Powering real estate software solutions globally.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} eBox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
