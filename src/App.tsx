import { Navbar, Hero, PropertyGrid, About, Contact, Footer } from './components/RealEstate';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PropertyGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
