import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { FeaturedShowcase } from './components/FeaturedShowcase';
import { SelectedWork } from './components/SelectedWork';
import { Capabilities } from './components/Capabilities';
import { Testimonials } from './components/Testimonials';
import { Background } from './components/Background';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <TechStack />
        <FeaturedShowcase />
        <SelectedWork />
        <Capabilities />
        <Testimonials />
        <Background />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;

