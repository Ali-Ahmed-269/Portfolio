import React from 'react';
import { SectionIndex } from './SectionIndex';
import './Testimonials.css';

export const Testimonials: React.FC = () => {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <SectionIndex number="04" label="What Collaborators Say" />
        <h2 className="section-title">Testimonials & Endorsements</h2>
        
        <div className="testimonials-featured-container">
          <div className="testimonial-featured-card">
            <p className="testimonial-quote">
              "The website looks clean and professional. The hero section is visually appealing, and the booking buttons are easy to find. The navigation is simple, and the overall design gives a welcoming hotel vibe."
            </p>
            <div className="testimonial-divider">—</div>
            <div className="testimonial-author">Shayan</div>
            <div className="testimonial-role">Client, Tulip Guest Rooms</div>
          </div>
        </div>
      </div>
    </section>
  );
};
