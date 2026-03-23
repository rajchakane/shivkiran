import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Building2, Landmark, Map, ShieldCheck } from 'lucide-react';
import { Navbar, Hero, PropertyGrid, About, PlotLocations, Contact, Footer, EnquiryPopup, Developments } from './components/RealEstate';
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="relative w-full overflow-hidden rounded-[40px] shadow-2xl mb-8">
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" 
              alt="Invest in Mumbai 3.0 - Plotting Opportunities" 
              className="w-full h-[400px] md:h-[600px] object-cover block"
              referrerPolicy="no-referrer"
            />
            {/* 
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight">INVEST IN MUMBAI 3.0</h2>
                <p className="text-xl md:text-2xl font-medium opacity-90">The Future of Smart Land Investment</p>
              </div>
            </div>
            */}
          </div>
          
          {/* Action Buttons - Moved below image with proper spacing */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onOpenPopup("SITE VISIT")}
              className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg flex items-center justify-center gap-2 text-base md:text-lg"
            >
              BOOK FREE SITE VISIT
            </button>
            <button 
              onClick={() => onOpenPopup("DOWNLOAD BROCHUR")}
              className="bg-white text-stone-900 px-8 py-4 rounded-2xl font-bold hover:bg-stone-50 transition-all shadow-lg flex items-center justify-center gap-2 text-base md:text-lg border border-stone-200"
            >
              DOWNLOAD BROCHUR
            </button>
          </div>

          {/* Authority Logos Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-stone-100 pt-12">
            {[
              { name: 'Cidco', icon: <Building2 className="w-8 h-8" />, info: 'Planning & Development' },
              { name: 'MMRDA', icon: <Landmark className="w-8 h-8" />, info: 'Infrastructure Planning' },
              { name: 'NTDA', icon: <Map className="w-8 h-8" />, info: 'Strategic Development' },
              { name: 'NAINA', icon: <ShieldCheck className="w-8 h-8" />, info: 'Airport Influential Area' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-4 border border-emerald-100 group-hover:bg-emerald-600 transition-all duration-300 shadow-sm">
                  <div className="text-emerald-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h4 className="font-bold text-stone-900 mb-1 uppercase tracking-wider">{item.name}</h4>
                <p className="text-stone-500 text-xs leading-relaxed font-medium">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
        <About />
        <PlotLocations />
        <Hero />
        <Developments />
        {/* <PropertyGrid /> */}
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
