import React from 'react';
import { SectionIndex } from './SectionIndex';
import './Background.css';

interface TimelineNodeData {
  tag: string;
  heading: string;
  description: string;
  date: string;
}

export const Background: React.FC = () => {
  const nodes: TimelineNodeData[] = [
    {
      tag: 'edu/bscs',
      heading: 'BSCS @ Bahria University',
      description: 'Studying core computer science theory, full-stack systems engineering, and database systems. Maintaining solid academic standing.',
      date: '2023 - Present',
    },
    {
      tag: 'community/lead',
      heading: 'Developer Lead & Peer Mentor',
      description: 'Conducting peer coding sessions, explaining database normalization, React hook architectures, and web vitals to fellow students.',
      date: '2024',
    },
    {
      tag: 'event/contest',
      heading: 'BUIC Speed Programming Contest',
      description: 'Competed in algorithmic coding events solving complex data structures and efficiency challenges under tight deadlines.',
      date: '2024',
    },
    {
      tag: 'edu/hssc',
      heading: 'HSSC — Computer Science',
      description: 'Army Public College, PMA',
      date: '2023',
    },
    {
      tag: 'edu/ssc',
      heading: 'Science (SSC)',
      description: 'Completed Secondary School Certificate with distinction, initiating interest in computer automation and coding languages.',
      date: '2019 - 2021',
    },
  ];

  return (
    <section className="section" id="background">
      <div className="container">
        <SectionIndex number="06" label="The Journey" />
        <h2 className="section-title">How I Got Here</h2>

        <div className="timeline-container">
          <div className="timeline-track">
            {/* Vertical Trunk Line */}
            <div className="timeline-trunk" />
            
            {/* Milestone Nodes */}
            {nodes.map((node, nodeIdx) => (
              <div key={nodeIdx} className="timeline-node">
                {/* Node branch indicator dot */}
                <div className="timeline-dot" />
                
                <div className="timeline-meta">
                  <span className="timeline-tag">{node.tag}</span>
                  <span className="timeline-date">{node.date}</span>
                </div>
                
                <h4 className="timeline-heading">{node.heading}</h4>
                <p className="timeline-description">{node.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
