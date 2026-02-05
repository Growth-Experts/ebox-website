import React, { useState } from 'react';
import { EBoxLogo } from './Logos';
import Button from './Button';
import { PageRoute } from '../types';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: PageRoute) => void;
  currentPage: PageRoute;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex-shrink-0 cursor-pointer" 
            onClick={() => handleNav('home')}
          >
            <EBoxLogo className="h-10" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNav('home')}
              className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-ebox-dark' : 'text-gray-500 hover:text-ebox-dark'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('about')}
              className={`text-sm font-medium transition-colors ${currentPage === 'about' ? 'text-ebox-dark' : 'text-gray-500 hover:text-ebox-dark'}`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNav('eforms')}
              className={`text-sm font-medium transition-colors ${currentPage === 'eforms' ? 'text-ebox-dark' : 'text-gray-500 hover:text-ebox-dark'}`}
            >
              eForms
            </button>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-ebox-dark">eConnect</a>
            <Button variant="primary" size="sm" onClick={() => handleNav('book-demo')}>Book a Demo</Button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button
              onClick={() => handleNav('home')}
              className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('about')}
              className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              About Us
            </button>
            <button
              onClick={() => handleNav('eforms')}
              className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              eForms
            </button>
            <a href="#" className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">eConnect</a>
            <div className="pt-4">
              <Button variant="primary" className="w-full" onClick={() => handleNav('book-demo')}>Book a Demo</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;