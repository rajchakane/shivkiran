import { Navbar, Footer } from '../components/RealEstate';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">Legal Information</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Privacy Policy</h1>
              <p className="text-stone-500 text-lg">Last updated: March 18, 2026</p>
            </div>

            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-stone-100 space-y-12">
              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <Shield className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">1. Information We Collect</h2>
                </div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  We collect information that you provide directly to us when you inquire about properties, register for our newsletter, or contact us for services. This includes:
                </p>
                <ul className="list-disc pl-6 text-stone-600 space-y-2">
                  <li><strong>Personal Identifiers:</strong> Name, email address, phone number, and mailing address.</li>
                  <li><strong>Property Preferences:</strong> Budget, preferred locations, property type (residential/commercial), and specific requirements.</li>
                  <li><strong>Financial Information:</strong> General information regarding your home loan requirements or investment capacity.</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <Lock className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
                </div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  The information we collect is used to provide you with a personalized real estate experience in the Mumbai market:
                </p>
                <ul className="list-disc pl-6 text-stone-600 space-y-2">
                  <li>To present property options that match your specific criteria.</li>
                  <li>To facilitate site visits and meetings with developers or sellers.</li>
                  <li>To send updates via WhatsApp, SMS, or Email regarding new launches and price drops.</li>
                  <li>To assist with documentation and the home loan process.</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <Eye className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">3. Information Sharing</h2>
                </div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  We do not sell your personal data. However, to fulfill your requests, we may share information with:
                </p>
                <ul className="list-disc pl-6 text-stone-600 space-y-2">
                  <li><strong>Real Estate Developers:</strong> When you express interest in a specific project.</li>
                  <li><strong>Financial Institutions:</strong> If you request assistance with home loans.</li>
                  <li><strong>Legal Consultants:</strong> To assist with property verification and registration.</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <FileText className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">4. Data Security & RERA Compliance</h2>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  Shiv Kiran Properties adheres to the guidelines set by the Maharashtra Real Estate Regulatory Authority (MahaRERA). We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <Lock className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">5. Cookies and Tracking</h2>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  Our website uses cookies to enhance your browsing experience and analyze site traffic. You can choose to disable cookies through your browser settings, though this may affect some functionality of the site.
                </p>
              </section>

              <div className="pt-10 border-t border-stone-100">
                <p className="text-stone-500 text-sm text-center">
                  For any privacy-related concerns or to request data deletion, please contact our Compliance Officer at <span className="text-emerald-600 font-semibold">info@shivkiranpropertiees.com</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
