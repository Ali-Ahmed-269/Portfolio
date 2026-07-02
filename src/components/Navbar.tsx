import React from 'react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('selected-work');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src="/avatar.jpg" alt="A.K" className="navbar-avatar" />
          <span className="navbar-logo">A.K</span>
        </div>
        <div className="navbar-right">
          <a href="#selected-work" onClick={handleScrollToWork} className="navbar-link">
            Work
          </a>
        </div>
      </div>
    </nav>
  );
};
