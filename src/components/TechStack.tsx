import React from 'react';
import { SectionIndex } from './SectionIndex';
import './TechStack.css';

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

export const TechStack: React.FC = () => {
  const techs: TechItem[] = [
    {
      name: 'React.js',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Next.js',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M16 16.2L9.8 8h-.8v8h1.2v-5.8L15.6 17h.4v-.8z" />
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8h4" />
          <path d="M8 8v8" />
          <path d="M16 8h-3a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3" />
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3h18v18H3V3z" />
          <path d="M12 17a2.5 2.5 0 0 0 2 0v-4.5" />
          <path d="M18 13.5a1.5 1.5 0 0 0-1.5-1.5h-1a1.5 1.5 0 0 0-1.5 1.5v2a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5" />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5V7L2 12v5z" />
          <path d="M12 12v10" />
          <path d="M22 12l-10 5" />
        </svg>
      ),
    },
    {
      name: 'SQL',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
        </svg>
      ),
    },
    {
      name: 'Python',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2H9a3 3 0 0 0-3 3v3h6V6h4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1" />
          <path d="M12 22h3a3 3 0 0 0 3-3v-3h-6v2h-4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h1" />
          <circle cx="9" cy="6" r="0.5" fill="currentColor" />
          <circle cx="15" cy="18" r="0.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Java',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
          <path d="M6 2v2M10 2v2M14 2v2" />
        </svg>
      ),
    },
    {
      name: 'C++',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 7H7a5 5 0 0 0 0 10h2" />
          <path d="M13 12h4M15 10v4M18 12h4M20 10v4" />
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3c-1.2 0-2.4.6-3 1.8C7.8 7.2 6 9 3 9c1.2 0 2.4-.6 3-1.8C7.2 4.8 9 3 12 3z" />
          <path d="M21 9c-1.2 0-2.4.6-3 1.8-1.2 2.4-3 4.2-6 4.2 1.2 0 2.4-.6 3-1.8 1.2-2.4 3-4.2 6-4.2z" />
          <path d="M12 15c-1.2 0-2.4.6-3 1.8-1.2 2.4-3 4.2-6 4.2 1.2 0 2.4-.6 3-1.8 1.2-2.4 3-4.2 6-4.2z" />
        </svg>
      ),
    },
    {
      name: 'Git / GitHub',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M6 9v6M9 9l6 6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="tech-stack-section" id="tech-stack">
      <SectionIndex number="01" label="Tech Stack" />
      <div className="tech-grid">
        {techs.map((tech, idx) => (
          <div key={idx} className="tech-card">
            <div className="tech-icon-wrapper">
              {tech.icon}
            </div>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
