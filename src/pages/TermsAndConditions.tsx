import { Navbar, Footer } from '../components/RealEstate';
import { motion } from 'framer-motion';
import { FileText, Shield, Info, Globe, MessageSquare, Scale, RefreshCw } from 'lucide-react';

export default function TermsAndConditions() {
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
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Terms & Conditions</h1>
              <p className="text-stone-500 text-lg">Welcome to Shiv Kiran Properties. By accessing or using our website, you agree to comply with the following Terms and Conditions.</p>
            </div>

            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-stone-100 space-y-12">
              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <Globe className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Use of Website</h2>
                </div>
                <ul className="list-disc pl-6 text-stone-600 space-y-2">
                  <li>The content is for general information purposes only.</li>
                  <li>Unauthorized use may result in legal action.</li>
                  <li>You agree not to misuse or attempt to disrupt website functionality.</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <Info className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Property Information</h2>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  All property details, images, pricing, and availability are indicative and subject to change without notice. Shiv Kiran Properties does not guarantee accuracy or completeness.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <Shield className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Intellectual Property</h2>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  All website content including logos, text, images, and designs are the property of Shiv Kiran Properties and may not be reproduced without permission.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <Scale className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Limitation of Liability</h2>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  Shiv Kiran Properties shall not be liable for any loss, damage, or inconvenience arising from the use of this website or reliance on its content.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <FileText className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Third-Party Links</h2>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  Links to external websites are provided for convenience only. We are not responsible for their content or policies.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <MessageSquare className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Communication Consent</h2>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  By submitting your contact details, you authorize Shiv Kiran Properties to contact you via call, SMS, WhatsApp, RCS, or email for property-related communication.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <RefreshCw className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Changes to Terms</h2>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  Shiv Kiran Properties reserves the right to modify these Terms & Conditions at any time without prior notice.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <Scale className="text-emerald-600 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Governing Law</h2>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  These terms shall be governed by the laws of India.
                </p>
              </section>

              <div className="pt-10 border-t border-stone-100">
                <p className="text-stone-500 text-sm text-center">
                  For any questions regarding these terms, please contact us via the details provided on our website.
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
