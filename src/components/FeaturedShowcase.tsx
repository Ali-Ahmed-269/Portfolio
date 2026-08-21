import React, { useEffect, useRef, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { SectionIndex } from './SectionIndex';
import './FeaturedShowcase.css';

export const FeaturedShowcase: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger as soon as 10% is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Manage playing and pausing based on intersection view state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React muted bug workaround: set DOM property imperatively
    video.muted = true;

    if (isInView) {
      if (hasLoaded) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => {
            console.warn("Autoplay playing failed:", err);
          });
        }
      } else {
        setHasLoaded(true);
      }
    } else {
      video.pause();
    }
  }, [isInView, hasLoaded]);

  // Load and play the video when it first loads
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (hasLoaded) {
      video.muted = true;
      video.load();
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn("Autoplay loading play failed:", err);
        });
      }
    }
  }, [hasLoaded]);

  const showcaseVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const posterUrl = `${import.meta.env.BASE_URL}images/tulip-project.png`;
  const videoUrl = `${import.meta.env.BASE_URL}videos/tulip-demo.mp4`;

  return (
    <section className="featured-showcase-section" id="featured-showcase" ref={containerRef}>
      <SectionIndex number="02" label="Featured Showcase" />
      
      <motion.div 
        variants={showcaseVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="featured-showcase-container"
      >
        <div className="featured-video-wrapper">
          <video
            ref={videoRef}
            className="featured-video"
            poster={posterUrl}
            muted
            loop
            playsInline
            preload="metadata"
          >
            {hasLoaded && <source src={videoUrl} type="video/mp4" />}
          </video>
          <div className="video-glow-overlay" />
        </div>

        <div className="featured-details">
          <h3 className="featured-title">Tulip Guest Rooms</h3>
          <p className="featured-desc">
            A full-stack guest house booking platform, migrated from PHP/MySQL to Next.js + Supabase, and deployed on Vercel. Designed to provide client reservation flows, real-time availability checking, automated notifications, and an administrative panel for staff.
          </p>
          
          <div className="featured-badges">
            <span className="featured-badge">Next.js + Supabase</span>
            <span className="featured-badge">Real-Time Booking Engine</span>
            <span className="featured-badge">Automated Notifications</span>
            <span className="featured-badge">Admin Dashboard</span>
            <span className="featured-badge">Responsive Design</span>
          </div>

          <div className="featured-links">
            <a 
              href="https://github.com/Ali-Ahmed-269/TULIP-Guest-Rooms" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="featured-btn-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="link-icon">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <span>GitHub Repository</span>
            </a>
            <a 
              href="https://tulip-guest-rooms.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="featured-btn-link live"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="link-icon">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              <span>Live Site</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
