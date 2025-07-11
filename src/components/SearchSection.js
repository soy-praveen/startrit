import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchSection.css';

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="search-section">
      <div className="search-container">
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-input-wrapper">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What project are you looking for?"
              className="main-search-input"
            />
            <button type="submit" className="main-search-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L16.514 16.506M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </form>

        <div className="action-buttons">
          <Link to="/signup" className="btn-primary">
            <span className="btn-text">Hire Developers</span>
            <div className="btn-glow"></div>
          </Link>
          <Link to="/signup" className="btn-secondary">
            <span className="btn-content">
              <span className="btn-text">Become Developer</span>
            </span>
            <div className="btn-border"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
