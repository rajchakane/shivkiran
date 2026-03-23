import { Home, Search, Phone, Mail, MapPin, Menu, X, ChevronRight, Star, Bed, Bath, Square, ArrowRight, ShieldCheck, Target, Eye, Heart, Award, Trees, Factory, Briefcase } from 'lucide-react';
import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Types
export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  type: 'Residential' | 'Commercial';
  category: 'Buy' | 'Rent';
  bhk?: number;
  bathrooms?: number;
  area: string;
  image: string;
  featured?: boolean;
}

// Mock Data
export const properties: Property[] = [
  {
    id: '1',
    title: 'Premium Residential Plot',
    price: '₹45 L',
    location: 'Uran, Navi Mumbai (3rd Mumbai)',
    type: 'Residential',
    category: 'Buy',
    area: '1200 sqft',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    id: '2',
    title: 'Commercial Plot near Airport',
    price: '₹1.2 Cr',
    location: 'Ranjanpada, Navi Mumbai',
    type: 'Commercial',
    category: 'Buy',
    area: '2500 sqft',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    id: '3',
    title: 'Investment Land near Highway',
    price: '₹85 L',
    location: 'Pen, Raigad (3rd Mumbai)',
    type: 'Residential',
    category: 'Buy',
    area: '5000 sqft',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Industrial Plot near IT Hub',
    price: '₹2.5 Cr',
    location: 'Uran, Navi Mumbai',
    type: 'Commercial',
    category: 'Buy',
    area: '10000 sqft',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    title: 'Residential Plot near Station',
    price: '₹35 L',
    location: 'Ranjanpada, Navi Mumbai',
    type: 'Residential',
    category: 'Buy',
    area: '1000 sqft',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    title: 'Farmhouse Land',
    price: '₹1.5 Cr',
    location: 'Pen, Raigad',
    type: 'Residential',
    category: 'Buy',
    area: '1 Acre',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800'
  }
];

// Components
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center">
              <img 
                src="https://picsum.photos/seed/shivkiran-brand/400/100" 
                alt="ShivKiran Properties" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-stone-600 hover:text-emerald-600 font-medium transition-colors">Home</Link>
            <a href="/#developments" className="text-stone-600 hover:text-emerald-600 font-medium transition-colors">Developments</a>
            {/* <a href="/#properties" className="text-stone-600 hover:text-emerald-600 font-medium transition-colors">Plots</a> */}
            <a href="/#about" className="text-stone-600 hover:text-emerald-600 font-medium transition-colors">About</a>
            <a href="/#contact" className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg">Contact Us</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-stone-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-stone-100 p-4 space-y-4"
          >
            <Link to="/" className="block text-stone-600 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <a href="/#developments" className="block text-stone-600 font-medium" onClick={() => setIsOpen(false)}>Developments</a>
            {/* <a href="/#properties" className="block text-stone-600 font-medium" onClick={() => setIsOpen(false)}>Plots</a> */}
            <a href="/#about" className="block text-stone-600 font-medium" onClick={() => setIsOpen(false)}>About</a>
            <a href="/#contact" className="block bg-emerald-600 text-white px-6 py-3 rounded-xl text-center font-medium" onClick={() => setIsOpen(false)}>Contact Us</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 rounded-bl-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
              Real Estate Experts
            </span>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
              Invest in <span className="text-emerald-600">3rd Mumbai</span> Plotting Opportunities
            </h1>
            <p className="text-lg text-stone-600 mb-10 max-w-lg leading-relaxed">
              Discover premium plots in Uran, Ranjanpada, and Pen. Benefit from massive government developments like the Navi Mumbai International Airport, MTHL, and upcoming IT Hubs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search by location..." 
                  className="w-full pl-12 pr-4 py-4 bg-white border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-sm"
                />
              </div>
              <button className="bg-stone-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-stone-800 transition-all flex items-center justify-center gap-2">
                Search Plots
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold font-display">200+</div>
                <div className="text-stone-500 text-sm">Plots Sold</div>
              </div>
              <div className="w-px h-10 bg-stone-200" />
              <div>
                <div className="text-3xl font-bold font-display">500+</div>
                <div className="text-stone-500 text-sm">Happy Investors</div>
              </div>
              <div className="w-px h-10 bg-stone-200" />
              <div>
                <div className="text-3xl font-bold font-display">15+</div>
                <div className="text-stone-500 text-sm">Years in 3rd Mumbai</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Home" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 max-w-xs">
              <div className="bg-emerald-100 p-3 rounded-2xl">
                <Star className="text-emerald-600 fill-emerald-600 w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-stone-900">Top Rated Dealer</div>
                <div className="text-stone-500 text-sm">Trusted by thousands of families</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const PropertyCard = ({ property }: { property: Property; key?: string }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-[32px] overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-stone-900 text-xs font-bold rounded-full uppercase tracking-wider">
            {property.category}
          </span>
          {property.featured && (
            <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
              Featured
            </span>
          )}
        </div>
        <div className="absolute bottom-4 right-4">
          <div className="bg-stone-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-2xl font-bold">
            {property.price}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-1 text-stone-400 text-sm mb-2">
          <MapPin className="w-4 h-4" />
          {property.location}
        </div>
        <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-600 transition-colors">{property.title}</h3>
        
        <div className="flex items-center justify-between pt-4 border-t border-stone-50">
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5 text-stone-500 text-sm">
              <Square className="w-4 h-4" />
              {property.area}
            </div>
          </div>
          <button 
            onClick={async () => {
              // 1. Send Email via API
              try {
                await fetch('/api/send-email', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    name: 'Interested Visitor',
                    phone: 'N/A',
                    message: `Interested in property: ${property.title} at ${property.location}`,
                    source: 'Property Card'
                  }),
                });
                alert('Enquiry sent successfully! We will contact you soon.');
              } catch (error) {
                console.error('Error sending email:', error);
                alert('Failed to send enquiry. Please try again later.');
              }
            }}
            className="p-2 bg-stone-50 rounded-full text-stone-400 group-hover:bg-emerald-600 group-hover:text-white transition-all"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const PropertyGrid = () => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial'>('All');

  const filteredProperties = filter === 'All' 
    ? properties 
    : properties.filter(p => p.type === filter);

  return (
    <section id="properties" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold">Premium Plots in 3rd Mumbai</h2>
          </div>
          
          <div className="flex bg-white p-1.5 rounded-2xl border border-stone-200 shadow-sm">
            {['All', 'Residential', 'Commercial'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as any)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  filter === type 
                    ? 'bg-stone-900 text-white shadow-md' 
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-stone-900 font-bold hover:text-emerald-600 transition-colors group">
            View All Plots
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export const Developments = () => {
  const developments = [
    {
      title: "Navi Mumbai International Airport",
      description: "A world-class airport expected to drive massive economic growth and connectivity in the 3rd Mumbai region.",
      icon: "✈️"
    },
    {
      title: "MTHL (Atal Setu)",
      description: "India's longest sea bridge connecting Mumbai to Navi Mumbai, drastically reducing travel time.",
      icon: "🌉"
    },
    {
      title: "Upcoming IT Hubs & SEZs",
      description: "Strategic development of technology parks and special economic zones in Uran and surrounding areas.",
      icon: "🏢"
    },
    {
      title: "Highways & Infrastructure",
      description: "Expansion of major highways and local road networks to support the growing 3rd Mumbai ecosystem.",
      icon: "🛣️"
    }
  ];

  return (
    <section id="developments" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">Future Growth</span>
          <h2 className="text-4xl md:text-5xl font-bold">Government Developments in 3rd Mumbai</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">
            The 3rd Mumbai region is witnessing unprecedented infrastructure growth, making it the prime destination for land investment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {developments.map((dev, i) => (
            <div key={i} className="p-8 rounded-[32px] bg-stone-50 border border-stone-100 hover:shadow-lg transition-all">
              <div className="text-4xl mb-6">{dev.icon}</div>
              <h3 className="text-xl font-bold mb-4">{dev.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{dev.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl overflow-hidden shadow-lg h-64"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600" 
                    alt="Land Development" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="rounded-3xl overflow-hidden shadow-lg h-48 bg-emerald-600 flex items-center justify-center p-8 text-white text-center"
                >
                  <div>
                    <div className="text-4xl font-bold mb-2">15+</div>
                    <div className="text-sm font-medium opacity-90 uppercase tracking-wider">Years of Trust</div>
                  </div>
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="rounded-3xl overflow-hidden shadow-lg h-48 bg-stone-900 flex items-center justify-center p-8 text-white text-center"
                >
                  <div>
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-sm font-medium opacity-90 uppercase tracking-wider">Happy Families</div>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="rounded-3xl overflow-hidden shadow-lg h-64"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=600" 
                    alt="Commercial Plot" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-100 rounded-full -z-10 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-stone-100 rounded-full -z-10 blur-2xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-stone-900">
              Leading the Way in <span className="text-emerald-600">Mumbai 3.0</span> Real Estate
            </h2>
            <p className="text-stone-600 text-lg mb-6 leading-relaxed">
              At Shiv Kiran Properties, we believe that land is the most valuable asset one can own. We have dedicated ourselves to providing premium plotting solutions in the heart of Mumbai 3.0, focusing on the high-growth corridors of Uran, Ranjanpada, and Pen.
            </p>
            <p className="text-stone-600 text-lg mb-10 leading-relaxed">
              Our expertise lies in ensuring that every plot we offer is not just a piece of land, but a foundation for your future dreams. We prioritize legal clarity, NA/Collector approvals, and strategic locations near upcoming mega-projects like the Navi Mumbai International Airport and MTHL.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                { title: 'Legal Transparency', desc: 'Clear titles and NA/Collector approved plots.' },
                { title: 'Strategic Locations', desc: 'Plots near Airport, MTHL, and upcoming SEZs.' },
                { title: 'Customer First', desc: 'Personalized guidance from site visit to registration.' },
                { title: 'Future Growth', desc: 'High appreciation potential in 3rd Mumbai.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="text-emerald-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">{item.title}</h4>
                    <p className="text-stone-500 text-sm leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-stone-50 p-10 rounded-[40px] border border-stone-100 hover:shadow-xl transition-all group"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
              <Target className="text-emerald-600 w-8 h-8 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-4">Our Mission</h3>
            <p className="text-stone-600 leading-relaxed">
              To empower individuals and businesses with high-potential land investments in the Mumbai 3.0 region, ensuring absolute transparency, legal security, and sustainable growth for every stakeholder.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-stone-900 p-10 rounded-[40px] text-white hover:shadow-xl transition-all group"
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
              <Eye className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-stone-300 leading-relaxed">
              To be the most trusted name in real estate development in the 3rd Mumbai corridor, transforming landscapes into thriving communities and secure investment hubs for generations to come.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-stone-50 p-10 rounded-[40px] border border-stone-100 hover:shadow-xl transition-all group"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
              <Heart className="text-emerald-600 w-8 h-8 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-4">Our Values</h3>
            <div className="space-y-4">
              {[
                { label: 'Integrity', text: 'Unwavering commitment to legal clarity.' },
                { label: 'Innovation', text: 'Strategic insights for growth corridors.' },
                { label: 'Customer First', text: 'Putting your future at our heart.' }
              ].map((v, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-stone-900 block text-sm">{v.label}</span>
                    <span className="text-stone-500 text-xs">{v.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const PlotLocations = () => {
  return (
    <section id="locations" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Reach</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Plot Location & Categories</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Strategically located plots across the fastest-growing corridors of Maharashtra, designed to meet diverse residential, commercial, and industrial needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-stone-100">
              <h3 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3">
                <Award className="text-emerald-600 w-6 h-6" /> Available Categories
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'Residential', icon: <Home className="w-5 h-5" />, desc: 'Perfect for your dream home.' },
                  { name: 'Commercial', icon: <Briefcase className="w-5 h-5" />, desc: 'High-visibility business hubs.' },
                  { name: 'Agricultural', icon: <Trees className="w-5 h-5" />, desc: 'Fertile land for long-term value.' },
                  { name: 'MIDC', icon: <Factory className="w-5 h-5" />, desc: 'Industrial plots with connectivity.' }
                ].map((cat, i) => (
                  <div key={i} className="p-6 bg-stone-50 rounded-3xl border border-stone-100 hover:border-emerald-200 transition-colors">
                    <div className="text-emerald-600 mb-3">{cat.icon}</div>
                    <h4 className="font-bold text-stone-900 mb-1">{cat.name}</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">{cat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-stone-100">
              <h3 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3">
                <ShieldCheck className="text-emerald-600 w-6 h-6" /> Premium Features
              </h3>
              <div className="grid grid-cols-2 gap-y-4">
                {[
                  'Gated Community', 'Internal Roads', 'Water Supply', 
                  'Electricity', '24/7 Security', 'Plantation',
                  'Street Lights', 'Drainage System'
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-stone-900 p-10 rounded-[40px] text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-emerald-600/40 transition-all" />
              <h4 className="font-bold text-emerald-400 text-sm mb-6 uppercase tracking-widest flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Mumbai 3.0 Sites
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {['Uran', 'Ranjanpada', 'Pen', 'Chirner', 'Jasai', 'Dronagiri', 'Ulwe', 'Kharghar'].map((site, i) => (
                  <div key={i} className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors cursor-default">
                    <ChevronRight className="w-4 h-4 text-emerald-500" />
                    <span className="font-medium">{site}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-600 p-10 rounded-[40px] text-white relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16 blur-3xl group-hover:bg-white/20 transition-all" />
              <h4 className="font-bold text-white text-sm mb-6 uppercase tracking-widest flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Pune Region Sites
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {['Hinjewadi', 'Lonavala', 'Chakan', 'Talegaon', 'Wagholi', 'Pirangut', 'Hadapsar', 'Baner'].map((site, i) => (
                  <div key={i} className="flex items-center gap-2 text-emerald-50 hover:text-white transition-colors cursor-default">
                    <ChevronRight className="w-4 h-4 text-white/60" />
                    <span className="font-medium">{site}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-[40px] border border-stone-200 flex items-center justify-between group cursor-pointer hover:border-emerald-600 transition-all">
              <div>
                <h4 className="font-bold text-stone-900 mb-1">Looking for a specific location?</h4>
                <p className="text-stone-500 text-sm">Our experts can help you find the perfect plot.</p>
              </div>
              <div className="w-12 h-12 bg-stone-900 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 transition-all">
                <ArrowRight className="text-white w-6 h-6" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) return;
    
    // 1. Send Email via API
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Contact Form'
        }),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Find Your Next Property Together</h2>
            <p className="text-stone-400 text-lg mb-12">
              Have questions about a property or need expert advice? Our team is ready to help you navigate the real estate market.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-2xl">
                  <Phone className="text-emerald-400 w-6 h-6" />
                </div>
                <div>
                  <div className="text-stone-400 text-sm mb-1 uppercase tracking-wider">Call Us</div>
                  <div className="text-xl font-bold">+91 8411 96 9080</div>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-2xl">
                  <Mail className="text-emerald-400 w-6 h-6" />
                </div>
                <div>
                  <div className="text-stone-400 text-sm mb-1 uppercase tracking-wider">Email Us</div>
                  <div className="text-xl font-bold">info@shivkiranpropertiees.com</div>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-2xl">
                  <MapPin className="text-emerald-400 w-6 h-6" />
                </div>
                <div>
                  <div className="text-stone-400 text-sm mb-1 uppercase tracking-wider">Visit Us</div>
                  <div className="text-xl font-bold">B 308 Plot No. 13, Kukreja Center, Kokan Bhavan Rd, Sector 11, CBD Belapur, Navi Mumbai, Maharashtra 400614</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-8 md:p-12 text-stone-900">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
                  <Star className="text-emerald-600 w-10 h-10 fill-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-stone-500 text-lg">Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-emerald-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20" 
                      placeholder="+91 ..." 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20" 
                    placeholder="Tell us what you're looking for..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="terms-contact"
                    required
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-1.5 w-4 h-4 text-emerald-600 border-stone-300 rounded focus:ring-emerald-500"
                  />
                  <label htmlFor="terms-contact" className="text-sm text-stone-500 leading-relaxed">
                    I accept the <Link to="/terms" target="_blank" className="text-emerald-600 hover:underline">Terms and Conditions</Link> & <Link to="/privacy" target="_blank" className="text-emerald-600 hover:underline">Privacy Policy</Link>. I agree to receive all updates via SMS, WhatsApp, RCS, Email, and any other communication channel.
                  </label>
                </div>

                <button 
                  type="submit"
                  disabled={!acceptedTerms}
                  className={`w-full py-5 rounded-2xl font-bold text-lg transition-all shadow-lg ${
                    acceptedTerms 
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                      : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-stone-50 pt-20 pb-10 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/assets/images/logo.png" 
                alt="ShivKiran Properties" 
                className="w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-stone-500 leading-relaxed">
              Your trusted partner in finding the perfect property. We make real estate simple and transparent.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-stone-500">
              <li><Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link></li>
              <li><a href="/#properties" className="hover:text-emerald-600 transition-colors">Properties</a></li>
              <li><a href="/#about" className="hover:text-emerald-600 transition-colors">About Us</a></li>
              <li><Link to="/privacy" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-emerald-600 transition-colors">Terms & Conditions</Link></li>
              <li><a href="/#contact" className="hover:text-emerald-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Plot Types</h4>
            <ul className="space-y-4 text-stone-500">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Residential Plots</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Commercial Plots</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Industrial Land</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Farmhouse Plots</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-stone-500 mb-4">Subscribe to get the latest property updates.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="flex-1 px-4 py-2 bg-white border border-stone-200 rounded-xl focus:outline-none" />
              <button className="bg-stone-900 text-white p-2 rounded-xl hover:bg-emerald-600 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-stone-200 text-center text-stone-400 text-sm">
          <p>© {new Date().getFullYear()} Shiv Kiran Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export const EnquiryPopup = ({ 
  isOpen: propIsOpen, 
  onClose: propOnClose, 
  title: propTitle,
  description: propDescription
}: { 
  isOpen?: boolean; 
  onClose?: () => void; 
  title?: string;
  description?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosedManually, setIsClosedManually] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    if (propIsOpen !== undefined) {
      setIsVisible(propIsOpen);
    }
  }, [propIsOpen]);

  useEffect(() => {
    if (isClosedManually) return;
    
    const timer = setTimeout(() => {
      if (!isClosedManually && propIsOpen === undefined) {
        setIsVisible(true);
      }
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [isClosedManually, propIsOpen]);

  const handleClose = () => {
    setIsVisible(false);
    if (propIsOpen === undefined) {
      setIsClosedManually(true);
    }
    if (propOnClose) propOnClose();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) return;
    
    // 1. Send Email via API
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: propTitle || 'Enquiry Popup'
        }),
      });
      setIsSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send enquiry. Please try again later.');
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[40px] shadow-2xl overflow-hidden"
          >
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 bg-stone-100 rounded-full text-stone-500 hover:bg-stone-200 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
                    <Star className="text-emerald-600 w-10 h-10 fill-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-stone-900">Thank You!</h2>
                  <p className="text-stone-500 mt-4 text-lg">Your enquiry has been received. We will contact you shortly.</p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-4">
                      <Mail className="text-emerald-600 w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-stone-900">{propTitle || "Enquire Now"}</h2>
                    <p className="text-stone-500 mt-2">{propDescription || "Get personalized plot recommendations in 3rd Mumbai today!"}</p>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-bold mb-1.5 text-stone-700">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-3.5 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-1.5 text-stone-700">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-5 py-3.5 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20" 
                        placeholder="+91 ..." 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-1.5 text-stone-700">Message</label>
                      <textarea 
                        rows={3} 
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-5 py-3.5 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20" 
                        placeholder="I am interested in..."
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        id="terms-popup"
                        required
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                        className="mt-1 w-4 h-4 text-emerald-600 border-stone-300 rounded focus:ring-emerald-500"
                      />
                      <label htmlFor="terms-popup" className="text-xs text-stone-500 leading-relaxed">
                        I accept the <Link to="/terms" target="_blank" className="text-emerald-600 hover:underline">Terms and Conditions</Link> & <Link to="/privacy" target="_blank" className="text-emerald-600 hover:underline">Privacy Policy</Link>. I agree to receive all updates via SMS, WhatsApp, RCS, Email, and any other communication channel.
                      </label>
                    </div>

                    <button 
                      type="submit"
                      disabled={!acceptedTerms}
                      className={`w-full py-4 rounded-2xl font-bold text-lg transition-all shadow-lg mt-2 ${
                        acceptedTerms 
                          ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                          : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                      }`}
                    >
                      Submit Enquiry
                    </button>
                  </form>

                  <div className="mt-6 text-center flex justify-center gap-4">
                    <Link 
                      to="/privacy" 
                      onClick={() => {
                        setIsVisible(false);
                        setIsClosedManually(true);
                      }}
                      className="text-stone-400 text-xs hover:text-emerald-600 transition-colors underline underline-offset-4"
                    >
                      Privacy Policy
                    </Link>
                    <Link 
                      to="/terms" 
                      onClick={() => {
                        setIsVisible(false);
                        setIsClosedManually(true);
                      }}
                      className="text-stone-400 text-xs hover:text-emerald-600 transition-colors underline underline-offset-4"
                    >
                      Terms & Conditions
                    </Link>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
