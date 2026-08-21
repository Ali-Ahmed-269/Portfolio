import React from 'react';
import { motion } from 'motion/react';
import { Button } from './Button';
import avatarImg from '../assets/avatar.jpg';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" id="hero">
      {/* Red ambient glow background element */}
      <div className="hero-glow-container">
        <div className="hero-glow-orb" />
      </div>

      <div className="hero-content">
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero-badge-dot" />
          <span className="hero-badge-label">Ali Ahmed Khan</span>
          <span className="hero-badge-separator">•</span>
          <span className="hero-badge-status">Open to Internships & Freelance</span>
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30, filter: 'blur(15px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Engineering robust <br />
          <span className="hero-accent-text">web architectures.</span>
        </motion.h1>

        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          I am a Computer Science student at Bahria University building high-performance web systems. 
          With hands-on experience architecting and deploying a production-grade booking engine for Tulip Guest Rooms, 
          I bridge the gap between clean database design and responsive user interfaces.
        </motion.p>

        <motion.div 
          className="hero-cta-wrapper"
          initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <Button href="#selected-work" className="hero-cta-btn">
            <img src={avatarImg} alt="" className="hero-cta-avatar" />
            <span>View selected work</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
