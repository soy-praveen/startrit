import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">StartRit</span>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
          <a href="#hire" className="nav-link">Hire Developers</a>
          <a href="#work" className="nav-link">Find Work</a>
          <a href="#faqs" className="nav-link">FAQs</a>
          <a href="#about" className="nav-link">About</a>
        </div>

        <div className="nav-search">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search projects or developers"
              className="search-input"
            />
            <button className="search-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L16.514 16.506M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="nav-actions">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
