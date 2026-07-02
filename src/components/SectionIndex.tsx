import React from 'react';

interface SectionIndexProps {
  number: string;
  label: string;
}

export const SectionIndex: React.FC<SectionIndexProps> = ({ number, label }) => {
  return (
    <div className="section-index">
      <span className="section-index-number">{number}</span>
      <span className="section-index-dot"> . </span>
      <span className="section-index-label">{label}</span>
    </div>
  );
};
