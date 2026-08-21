import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('selected-work');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-line-1">
          © 2026 Ali Ahmed Khan — built with care.
        </p>
        <div className="footer-links">
          <a href="#selected-work" onClick={handleScrollToWork} className="footer-link">
            Work
          </a>
          <span className="footer-divider">•</span>
          <a 
            href="https://github.com/Ali-Ahmed-269" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            GitHub
          </a>
          <span className="footer-divider">•</span>
          <a 
            href="https://linkedin.com/in/ali-ahmed-489692328" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
