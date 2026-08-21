import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { SectionIndex } from './SectionIndex';
import './SelectedWork.css';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  image?: string;
}

export const SelectedWork: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Tulip Guest Rooms',
      category: 'Web Application',
      description: 'A guest house booking application featuring client flows, real-time availability calendars, admin booking management, and integrated services.',
      tags: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Ali-Ahmed-269/TULIP-Guest-Rooms',
      liveUrl: 'https://tulip-guest-rooms.vercel.app/',
      image: 'images/tulip-project.png',
    },
    {
      title: 'File Size Compressor',
      category: 'Desktop Tool',
      description: 'A utility application designed to compress file sizes using data structures and file processing algorithms.',
      tags: ['C++', 'Algorithms', 'File Handling'],
      githubUrl: 'https://github.com/Ali-Ahmed-269',
      liveUrl: '',
      image: 'images/file-compressor-project.png',
    },
    {
      title: 'Wordle Game (CLI)',
      category: 'Console Game',
      description: 'A command-line interface implementation of the popular Wordle game, featuring word lists and game state logic.',
      tags: ['C++', 'CLI', 'Game Design'],
      githubUrl: 'https://github.com/Ali-Ahmed-269',
      liveUrl: '',
      image: 'images/wordle-project.png',
    },
    {
      title: 'Prison Management System',
      category: 'Database System',
      description: 'A console database system utilizing file handling to manage, search, and update records for inmates and security staff.',
      tags: ['C++', 'Database Design', 'File Handling'],
      githubUrl: 'https://github.com/Ali-Ahmed-269',
      liveUrl: '',
      image: 'images/PMS- project.png',
    },
    {
      title: 'ISMA-IMS — Academic Management Portal',
      category: 'Web Application',
      description: 'A SvelteKit + TypeScript academic/institute management system migrated from a legacy .NET frontend. Built the Students, Student Portal, Fees, and Invoices modules within a feature-based vertical-slice architecture (mock-first API layer, full typing, responsive and accessible UI).',
      tags: ['SvelteKit', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/qasim-mehar/ISMA-IMS-svelte-Client',
      liveUrl: '',
      image: 'images/isma-ims-portal.png',
    },
    {
      title: 'Site Builder — Visual CMS Editor',
      category: 'Web Application',
      description: 'A WordPress/Elementor-style visual site builder with a drag-and-drop admin editor. Owned the Contact and Gallery block systems (6 variants each) plus the contact form backend (SQLite via Drizzle ORM), built in an Astro + React/TSX architecture.',
      tags: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'Drizzle ORM', 'SQLite'],
      githubUrl: 'https://github.com/dev-net-abdullah/bunxastro-site-builder',
      liveUrl: '',
      image: 'images/bun-x-astro.png',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
  };

  return (
    <section className="selected-work-section" id="selected-work">
      <SectionIndex number="03" label="Selected Work" />
      
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project, idx) => (
          <motion.div key={idx} variants={itemVariants} className="project-card">
            
            <div className="project-visual">
              {project.image ? (
                <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.title} className="project-image" />
              ) : (
                <div className="project-image-placeholder">
                  <div className="project-placeholder-pattern"></div>
                </div>
              )}
            </div>

            <div className="project-content">
              <div className="project-meta">
                <span className="project-category">{project.category}</span>
                <div className="project-links">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                      aria-label="GitHub Repository"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                      aria-label="Live Demo"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
