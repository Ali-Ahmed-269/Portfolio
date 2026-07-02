import { useState, useEffect } from 'react';
import { CompileIntro } from './components/CompileIntro';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { SelectedWork } from './components/SelectedWork';
import { Capabilities } from './components/Capabilities';
import { Testimonials } from './components/Testimonials';
import { Background } from './components/Background';
import { Contact } from './components/Contact';
import './App.css';

function App() {
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    // Check if mobile (max-width: 768px)
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mobileQuery.matches);
    const handleMobileChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mobileQuery.addEventListener('change', handleMobileChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      mobileQuery.removeEventListener('change', handleMobileChange);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isMobile) return;

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const maxScroll = viewportHeight; // scroll distance of 100vh

      const currentProgress = Math.min(1, Math.max(0, scrollTop / maxScroll));
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prefersReducedMotion, isMobile]);

  const showIntro = !prefersReducedMotion && !isMobile;

  return (
    <>
      <Navbar />
      <main className="container">
        {showIntro && progress < 0.97 && (
          <CompileIntro progress={progress} />
        )}
        
        {showIntro && (
          <div className="compile-intro-spacer" style={{ height: '100vh', width: '100%' }} />
        )}

        <Hero />
        <TechStack />
        <SelectedWork />
        <Capabilities />
        <Testimonials />
        <Background />
        <Contact />
      </main>
    </>
  );
}

export default App;
