import React from 'react';
import { SectionIndex } from './SectionIndex';
import './Capabilities.css';

interface Capability {
  index: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Capabilities: React.FC = () => {
  const capabilitiesList: Capability[] = [
    {
      index: 'A01',
      title: 'System Architecture',
      description: 'Designing scalable, multi-tenant infrastructure; data migrations (e.g. CRA → Next.js).',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <path d="M10 6.5h4" />
          <path d="M7 10v4" />
          <path d="M14 17.5H10" />
          <circle cx="7" cy="17" r="3" />
        </svg>
      ),
    },
    {
      index: 'A02',
      title: 'Full-Stack Engineering',
      description: 'Performant, secure enterprise apps, database layer to UI.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5Z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      index: 'A03',
      title: 'Database & Auth Architecture',
      description: 'Designing Supabase schemas, Row Level Security policies, and admin routes using service-role clients for secure data access.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          <rect x="14" y="14" width="7" height="6" rx="1" />
          <path d="M16 14v-2a1.5 1.5 0 0 1 3 0v2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section" id="capabilities">
      <div className="container">
        <SectionIndex number="03" label="Capabilities" />
        <h2 className="section-title">Core Development Offerings</h2>
        
        <div className="capabilities-grid">
          {capabilitiesList.map((item) => (
            <div key={item.index} className="capability-card">
              <div className="capability-index">{item.index}</div>
              <div className="capability-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="capability-title">{item.title}</h3>
              <p className="capability-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
