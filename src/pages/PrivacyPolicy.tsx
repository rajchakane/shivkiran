import { Navbar, Footer } from '../components/RealEstate';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Globe, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-stone-50 overflow-x-hidden">
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
              <p className="text-stone-500 text-lg">Effective Date: 1st April 2022</p>
            </div>

            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-stone-100 space-y-12">
              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <Eye className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Information We Collect</h2>
                </div>
                <ul className="list-disc pl-6 text-stone-600 space-y-2">
                  <li>Name, phone number, and email address.</li>
                  <li>Property preferences and enquiry details.</li>
                  <li>Location and demographic information.</li>
                  <li>Website usage data via cookies.</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <Mail className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                </div>
                <ul className="list-disc pl-6 text-stone-600 space-y-2">
                  <li>To respond to enquiries and provide property details.</li>
                  <li>To improve our services and website experience.</li>
                  <li>To send promotional updates via call, SMS, WhatsApp, RCS, or email.</li>
                  <li>For internal records and analytics.</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <Shield className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Data Protection</h2>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  We use appropriate security measures to protect your information from unauthorized access, disclosure, or misuse.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <Lock className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Cookies</h2>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  Our website uses cookies to enhance user experience and analyze website traffic. You may disable cookies through your browser settings.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <Globe className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Third-Party Links</h2>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <FileText className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Your Consent</h2>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  By using our website and submitting your details, you consent to our Privacy Policy and agree to be contacted, even if your number is registered under DND.
                </p>
              </section>

              <div className="pt-10 border-t border-stone-100">
                <p className="text-stone-500 text-sm text-center">
                  If you have any questions regarding this policy, please contact us via the details provided on our website.
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
