import React from 'react';
import { SectionIndex } from './SectionIndex';
import { Button } from './Button';
import './Contact.css';

export const Contact: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <SectionIndex number="07" label="Get in Touch" />
        
        <h2 className="contact-headline">Let's build something.</h2>
        
        <p className="contact-availability">
          Currently a CS student open to internship opportunities, freelance work, and contract projects.
        </p>
        
        <div className="contact-cta-wrapper">
          <Button href="mailto:alikhanswati42574@gmail.com">
            Get in touch
          </Button>
        </div>
        
        <div className="contact-links-list">
          <a href="mailto:alikhanswati42574@gmail.com" className="contact-link-row">
            <div className="contact-link-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="contact-link-text">
              <span className="contact-link-label">EMAIL</span>
              <span className="contact-link-value">alikhanswati42574@gmail.com</span>
            </div>
          </a>

          <a href="https://linkedin.com/in/ali-ahmed-489692328" target="_blank" rel="noopener noreferrer" className="contact-link-row">
            <div className="contact-link-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <div className="contact-link-text">
              <span className="contact-link-label">LINKEDIN</span>
              <span className="contact-link-value">linkedin.com/in/ali-ahmed-489692328</span>
            </div>
          </a>

          <a href="https://github.com/Ali-Ahmed-269" target="_blank" rel="noopener noreferrer" className="contact-link-row">
            <div className="contact-link-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div className="contact-link-text">
              <span className="contact-link-label">CODE & REPOS</span>
              <span className="contact-link-value">github.com/Ali-Ahmed-269</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
