import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { EBoxLogo } from './Logos';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0" onClick={closeMobileMenu}>
            <EBoxLogo className="h-10" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${pathname === '/about' ? 'text-ebox-dark' : 'text-gray-500 hover:text-ebox-dark'}`}
            >
              About Us
            </Link>
            <Link
              to="/eforms"
              className={`text-sm font-medium transition-colors ${pathname === '/eforms' ? 'text-ebox-dark' : 'text-gray-500 hover:text-ebox-dark'}`}
            >
              eForms
            </Link>
            <Link
              to="/econnect"
              className={`text-sm font-medium transition-colors ${pathname === '/econnect' ? 'text-ebox-dark' : 'text-gray-500 hover:text-ebox-dark'}`}
            >
              eConnect
            </Link>
            <Button variant="primary" size="sm" to="/book-demo">Book a Demo</Button>
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
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              About Us
            </Link>
            <Link
              to="/eforms"
              onClick={closeMobileMenu}
              className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              eForms
            </Link>
            <Link
              to="/econnect"
              onClick={closeMobileMenu}
              className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              eConnect
            </Link>
            <div className="pt-4">
              <Button variant="primary" className="w-full" to="/book-demo" onClick={closeMobileMenu}>Book a Demo</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
