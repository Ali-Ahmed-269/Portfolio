import React from 'react';
import { Button } from './Button';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-status">
        <span className="hero-status-dot" />
        <span>Open to internships & freelance</span>
      </div>
      
      <h1 className="hero-title">
        Hi, I'm Ali Ahmed Khan.
      </h1>
      
      <h2 className="hero-subtitle">
        BSCS student building full-stack web systems — open to internships and freelance/contract work
      </h2>
      
      <p className="hero-description">
        Motivated CS student (Bahria University) with hands-on experience shipping a production booking platform end-to-end, from database design to deployment.
      </p>
      
      <div className="hero-cta">
        <Button href="#selected-work">
          View work
        </Button>
      </div>
    </section>
  );
};
