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
        <div className="w-full overflow-hidden">
          <img 
            src="/assets/images/shivkiran.png" 
            alt="Invest in Mumbai 3.0 - Plotting Opportunities" 
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Authority Logos Section */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-stone-100">
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
        <Developments />
        <About />
        <PlotLocations />
        <Hero />
        {/* <PropertyGrid /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean | undefined>(undefined);
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
