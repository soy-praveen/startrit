import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-icon">
            <div className="logo-dot"></div>
            <div className="logo-ring"></div>
          </div>
          <span className="logo-text">
            <span className="logo-primary">StartRit</span>
          </span>
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
         
          <a href="#faqs" className="nav-link">
            <span className="nav-link-text">FAQs</span>
            <div className="nav-link-underline"></div>
          </a>
          <a href="#about" className="nav-link">
            <span className="nav-link-text">About</span>
            <div className="nav-link-underline"></div>
          </a>
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
          <Link to="/login" className="login-btn">
            <span className="btn-content">Login</span>
          </Link>
          <Link to="/signup" className="signup-btn">
            <span className="btn-content">Sign Up</span>
            <div className="btn-shine"></div>
          </Link>
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
