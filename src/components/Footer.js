import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">Startrit</h3>
            <p className="footer-tagline">
              Connecting deep-tech talent with innovative projects worldwide.
            </p>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">For Clients</h4>
            <ul className="footer-links">
              <li><a href="#hire">Hire Developers</a></li>
              <li><a href="#post">Post a Project</a></li>
              <li><a href="#how">How It Works</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">For Developers</h4>
            <ul className="footer-links">
              <li><a href="#work">Find Work</a></li>
              <li><a href="#profile">Create Profile</a></li>
              <li><a href="#stories">Success Stories</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Startrit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
