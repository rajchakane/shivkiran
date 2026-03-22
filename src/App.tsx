import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

function HomePage({ onOpenPopup }: { onOpenPopup: (title: string) => void }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="relative w-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" 
            alt="Invest in Mumbai 3.0 - Plotting Opportunities" 
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">INVEST IN MUMBAI 3.0</h2>
              <p className="text-xl md:text-2xl font-medium">The Future of Smart Land Investment</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex flex-col sm:flex-row gap-4 z-10">
            <button 
              onClick={() => onOpenPopup("SITE VISIT")}
              className="bg-emerald-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg flex items-center justify-center gap-2 text-sm md:text-base"
            >
              BOOK FREE SITE VISIT
            </button>
            <button 
              onClick={() => onOpenPopup("DOWNLOAD BROCHUR")}
              className="bg-white text-stone-900 px-6 py-3.5 rounded-xl font-bold hover:bg-stone-50 transition-all shadow-lg flex items-center justify-center gap-2 text-sm md:text-base border border-stone-200"
            >
              DOWNLOAD BROCHUR
            </button>
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
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("Enquire Now");

  const handleOpenPopup = (title: string) => {
    setPopupTitle(title);
    setIsPopupOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <EnquiryPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        title={popupTitle}
        description={
          popupTitle === "DOWNLOAD BROCHUR" 
            ? "Enter your details to receive the full project brochure." 
            : popupTitle === "SITE VISIT"
            ? "Schedule a free guided tour of our premium plotting projects."
            : undefined
        }
      />
      <Routes>
        <Route path="/" element={<HomePage onOpenPopup={handleOpenPopup} />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}
