import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import EFormsPage from './pages/EFormsPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import BookDemo from './pages/BookDemo';
import { PageRoute } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  // Simple scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'eforms':
        return <EFormsPage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutUs onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactUs />;
      case 'book-demo':
        return <BookDemo />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;