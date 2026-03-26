import { Navbar, Footer, About, Hero } from '../components/RealEstate';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/*<div className="bg-stone-900 py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              About ShivKiran Properties
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-stone-400 text-lg max-w-2xl mx-auto"
            >
              Building trust and delivering excellence in the heart of Mumbai 3.0.
            </motion.p>
          </div>
        </div> */}
        <About />
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
