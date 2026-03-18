import { Home, Search, Phone, Mail, MapPin, Menu, X, ChevronRight, Star, Bed, Bath, Square, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
    title: 'Modern Luxury Villa',
    price: '₹4.5 Cr',
    location: 'Banjara Hills, Hyderabad',
    type: 'Residential',
    category: 'Buy',
    bhk: 4,
    bathrooms: 5,
    area: '4500 sqft',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    id: '2',
    title: 'Premium Office Space',
    price: '₹1.2 L/mo',
    location: 'Hitech City, Hyderabad',
    type: 'Commercial',
    category: 'Rent',
    area: '2500 sqft',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    id: '3',
    title: 'Skyline Apartment',
    price: '₹2.8 Cr',
    location: 'Gachibowli, Hyderabad',
    type: 'Residential',
    category: 'Buy',
    bhk: 3,
    bathrooms: 3,
    area: '2200 sqft',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Retail Showroom',
    price: '₹8.5 Cr',
    location: 'Jubilee Hills, Hyderabad',
    type: 'Commercial',
    category: 'Buy',
    area: '3500 sqft',
    image: 'https://images.unsplash.com/photo-1555633514-abcee6ad93e1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    title: 'Cozy Studio Flat',
    price: '₹25,000/mo',
    location: 'Kukatpally, Hyderabad',
    type: 'Residential',
    category: 'Rent',
    bhk: 1,
    bathrooms: 1,
    area: '650 sqft',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    title: 'Independent House',
    price: '₹3.2 Cr',
    location: 'Manikonda, Hyderabad',
    type: 'Residential',
    category: 'Buy',
    bhk: 3,
    bathrooms: 3,
    area: '2800 sqft',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800'
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
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Home className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">ShivKiran<span className="text-emerald-600">Properties</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-stone-600 hover:text-emerald-600 font-medium transition-colors">Home</Link>
            <a href="/#properties" className="text-stone-600 hover:text-emerald-600 font-medium transition-colors">Properties</a>
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
            <a href="/#properties" className="block text-stone-600 font-medium" onClick={() => setIsOpen(false)}>Properties</a>
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
              Find Your <span className="text-emerald-600">Perfect</span> Space to Live & Work
            </h1>
            <p className="text-lg text-stone-600 mb-10 max-w-lg leading-relaxed">
              We provide premium residential and commercial properties tailored to your needs. Discover the best deals in the most sought-after locations.
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
                Search Properties
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold font-display">500+</div>
                <div className="text-stone-500 text-sm">Properties Sold</div>
              </div>
              <div className="w-px h-10 bg-stone-200" />
              <div>
                <div className="text-3xl font-bold font-display">1k+</div>
                <div className="text-stone-500 text-sm">Happy Clients</div>
              </div>
              <div className="w-px h-10 bg-stone-200" />
              <div>
                <div className="text-3xl font-bold font-display">15+</div>
                <div className="text-stone-500 text-sm">Years Experience</div>
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
            {property.bhk && (
              <div className="flex items-center gap-1.5 text-stone-500 text-sm">
                <Bed className="w-4 h-4" />
                {property.bhk} BHK
              </div>
            )}
            <div className="flex items-center gap-1.5 text-stone-500 text-sm">
              <Square className="w-4 h-4" />
              {property.area}
            </div>
          </div>
          <button className="p-2 bg-stone-50 rounded-full text-stone-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
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
            <h2 className="text-4xl md:text-5xl font-bold">Latest Properties</h2>
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
            View All Properties
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" 
                alt="Our Office" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-100 rounded-full -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-stone-200 rounded-[40px] -z-10" />
            
            <div className="absolute top-1/2 -right-12 -translate-y-1/2 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold text-emerald-600 mb-1">15+</div>
              <div className="text-stone-500 font-medium">Years of Excellence</div>
            </div>
          </div>

          <div>
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">We Are Your Trusted Real Estate Partner</h2>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              Shiv Kiran Properties has been a leader in the real estate market for over 15 years. We specialize in connecting people with their dream homes and ideal business locations. Our commitment to transparency, integrity, and customer satisfaction sets us apart.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                'Expert guidance for first-time buyers',
                'Exclusive commercial listings in prime hubs',
                'Transparent legal and documentation support',
                'Personalized property matching service'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-1 rounded-full">
                    <ChevronRight className="text-emerald-600 w-4 h-4" />
                  </div>
                  <span className="font-semibold text-stone-800">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-stone-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-lg">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
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
                  <div className="text-xl font-bold">+91 98765 43210</div>
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
                  <div className="text-xl font-bold">Plot 45, Road No. 10, Jubilee Hills, Hyderabad</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-8 md:p-12 text-stone-900">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20" placeholder="+91 ..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Email Address</label>
                <input type="email" className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Property Type</label>
                <select className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20">
                  <option>Residential - Buy</option>
                  <option>Residential - Rent</option>
                  <option>Commercial - Buy</option>
                  <option>Commercial - Rent</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea rows={4} className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20" placeholder="Tell us what you're looking for..."></textarea>
              </div>
              <button className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg">
                Send Message
              </button>
            </form>
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
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Home className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">ShivKiran<span className="text-emerald-600">Properties</span></span>
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
              <li><a href="/#contact" className="hover:text-emerald-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Property Types</h4>
            <ul className="space-y-4 text-stone-500">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Apartments</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Luxury Villas</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Office Spaces</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Retail Stores</a></li>
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
