import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Hero, PropertyGrid, About, Contact, Footer, EnquiryPopup, Developments } from './components/RealEstate';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative w-full overflow-hidden rounded-[32px] md:rounded-[48px] shadow-lg">
            <img 
              src="/banner.jpg" 
              alt="Invest in Mumbai 3.0 - Plotting Opportunities" 
              className="w-full h-auto block"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight">INVEST IN MUMBAI 3.0</h2>
                <p className="text-xl md:text-2xl font-medium opacity-90">The Future of Smart Land Investment</p>
              </div>
            </div>
          </div>
        </div>
        <Hero />
        <Developments />
        <PropertyGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <EnquiryPopup />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}
