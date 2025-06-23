import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Find the Best Freelance
            <span className="title-highlight"> Developers</span>
          </h1>
          
          <p className="hero-description">
            Connect with top deep-tech talent, post your project, and get hired fast.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
