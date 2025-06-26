import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBrowseDropdown, setShowBrowseDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBrowseHover = () => {
    setShowBrowseDropdown(true);
  };

  const handleBrowseLeave = () => {
    setShowBrowseDropdown(false);
  };

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
            <span className="logo-secondary">DeepTech</span>
          </span>
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
          <div 
            className="nav-link-wrapper"
            onMouseEnter={handleBrowseHover}
            onMouseLeave={handleBrowseLeave}
          >
            <a href="#browse" className="nav-link">
              <span className="nav-link-text">Browse</span>
              <div className="nav-link-underline"></div>
            </a>
            
            {/* Browse Dropdown */}
            <div className={`browse-dropdown ${showBrowseDropdown ? 'dropdown-visible' : ''}`}>
              <div className="dropdown-content">
                <div className="dropdown-section">
                  <h3 className="dropdown-title">Search</h3>
                  <div className="dropdown-items">
                    <a href="#projects" className="dropdown-item">
                      <div className="dropdown-icon projects-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                          <rect x="7" y="7" width="3" height="9" fill="currentColor"/>
                          <rect x="14" y="7" width="3" height="5" fill="currentColor"/>
                        </svg>
                      </div>
                      <div className="dropdown-item-content">
                        <h4>Projects</h4>
                        <p>Explore exciting new project opportunities now!</p>
                      </div>
                    </a>
                    
                    <a href="#contests" className="dropdown-item">
                      <div className="dropdown-icon contests-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C6 4 6 6 6 9zM18 9h1.5a2.5 2.5 0 0 0 0-5C18 4 18 6 18 9z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M6 9h12v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="dropdown-item-content">
                        <h4>Contests</h4>
                        <p>Unleash your talent and win Freelancer contests!</p>
                      </div>
                    </a>
                    
                    <a href="#freelancers" className="dropdown-item">
                      <div className="dropdown-icon freelancers-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="dropdown-item-content">
                        <h4>Freelancers</h4>
                        <p>Find top-rated freelancers for your project</p>
                      </div>
                    </a>
                    
                    <a href="#freemarket" className="dropdown-item">
                      <div className="dropdown-icon freemarket-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M7 13v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4m-9 4h.01M18 17h.01" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="dropdown-item-content">
                        <h4>Freemarket</h4>
                        <p>Handpicked services from our best freelancers</p>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="dropdown-section">
                  <h3 className="dropdown-title">Freelancing Tools</h3>
                  <div className="dropdown-items">
                    <a href="#verified" className="dropdown-item">
                      <div className="dropdown-icon verified-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" stroke="currentColor" strokeWidth="2"/>
                          <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="dropdown-item-content">
                        <h4>Verified by Freelancer</h4>
                        <p>Increase your chances of winning projects</p>
                      </div>
                    </a>
                    
                    <a href="#preferred" className="dropdown-item">
                      <div className="dropdown-icon preferred-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="dropdown-item-content">
                        <h4>Preferred Freelancer</h4>
                        <p>Access exclusive projects and stand out</p>
                      </div>
                    </a>
                    
                    <a href="#memberships" className="dropdown-item">
                      <div className="dropdown-icon memberships-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="12" cy="16" r="1" stroke="currentColor" strokeWidth="2"/>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="dropdown-item-content">
                        <h4>Memberships</h4>
                        <p>Get earning opportunities and savings</p>
                      </div>
                    </a>
                    
                    <a href="#exams" className="dropdown-item">
                      <div className="dropdown-icon exams-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                          <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                          <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
                          <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="dropdown-item-content">
                        <h4>Exams</h4>
                        <p>Prove your skills to win more work</p>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="dropdown-section">
                  <h3 className="dropdown-title">Client Tools</h3>
                  <div className="dropdown-items">
                    <a href="#recruiter" className="dropdown-item">
                      <div className="dropdown-icon recruiter-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                          <path d="M20 8v6M23 11l-3 3-3-3" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="dropdown-item-content">
                        <h4>Recruiter</h4>
                        <p>Get assistance finding the perfect freelancer</p>
                      </div>
                    </a>
                    
                    <a href="#technical" className="dropdown-item">
                      <div className="dropdown-icon technical-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="2"/>
                          <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="dropdown-item-content">
                        <h4>Technical Co-pilot</h4>
                        <p>Our staff will ensure your project is a success</p>
                      </div>
                    </a>
                    
                    <a href="#enterprise" className="dropdown-item">
                      <div className="dropdown-icon enterprise-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M3 21h18M5 21V7l8-4v18M19 21V10l-6-3" stroke="currentColor" strokeWidth="2"/>
                          <path d="M9 9v.01M9 12v.01M9 15v.01M13 9v.01M13 12v.01M13 15v.01" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="dropdown-item-content">
                        <h4>Enterprise</h4>
                        <p>Turn your organization's ideas into reality</p>
                      </div>
                    </a>
                    
                    <a href="#local" className="dropdown-item">
                      <div className="dropdown-icon local-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="dropdown-item-content">
                        <h4>Local Jobs</h4>
                        <p>Get help in any location, anywhere in the world</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <a href="#work" className="nav-link">
            <span className="nav-link-text">Find Work</span>
            <div className="nav-link-underline"></div>
          </a>
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
