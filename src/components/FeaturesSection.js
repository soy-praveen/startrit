import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const clientsRef = useRef(null);
  const developersRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (clientsRef.current) observer.observe(clientsRef.current);
    if (developersRef.current) observer.observe(developersRef.current);

    return () => observer.disconnect();
  }, []);

  const clientFeatures = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 8v6M23 11l-3 3-3-3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Top Talent Access',
      description: 'Connect with pre-vetted deep-tech developers who have proven expertise in cutting-edge technologies and complex problem-solving.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="16" r="1" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Secure Platform',
      description: 'Built-in payment protection, milestone tracking, and dispute resolution to ensure your projects are completed successfully and safely.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Fast Hiring',
      description: 'Post your project and start receiving proposals within hours. Our streamlined process gets you connected with the right talent quickly.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <polygon points="10,8 16,12 10,16" fill="currentColor"/>
        </svg>
      ),
      title: 'Global Network',
      description: 'Access developers from around the world, bringing diverse perspectives and expertise to your deep-tech projects and innovations.'
    }
  ];

  const developerFeatures = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="2"/>
          <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Premium Projects',
      description: 'Work on cutting-edge deep-tech projects that challenge your skills and advance your career in emerging technologies.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1v6m0 6v6" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 12H9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Flexible Work',
      description: 'Choose projects that fit your schedule and expertise. Work remotely with top companies and startups worldwide.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="1" y="3" width="15" height="13" stroke="currentColor" strokeWidth="2"/>
          <polygon points="16,3 21,8 21,21 16,21" stroke="currentColor" strokeWidth="2"/>
          <polygon points="1,16 6,16 6,21 1,21" fill="currentColor"/>
        </svg>
      ),
      title: 'Guaranteed Payments',
      description: 'Secure payment system ensures you get paid for your work with milestone-based payments and built-in protection.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 8v6M23 11l-3 3-3-3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Professional Growth',
      description: 'Build your reputation, expand your network, and advance your career by working with innovative companies and fellow experts.'
    }
  ];

  return (
    <section ref={sectionRef} className="features-section">
      <div className="features-container">
        <div className="features-grid">
          {/* For Clients */}
          <div ref={clientsRef} className="feature-column clients-column">
            <h2 className="column-title">For Clients</h2>
            <p className="column-description">
              Find exceptional deep-tech developers who can bring your most ambitious projects to life. 
              From AI and machine learning to blockchain and quantum computing, connect with experts 
              who understand complex technologies.
            </p>
            
            <div className="feature-list">
              {clientFeatures.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon-wrapper">
                    {feature.icon}
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/signup" className="cta-button client-button">
              Become a Client
            </Link>
          </div>

          {/* For Developers */}
          <div ref={developersRef} className="feature-column developers-column">
            <h2 className="column-title">For Developers</h2>
            <p className="column-description">
              Showcase your expertise in deep technologies and connect with companies working on the 
              future. From startups to enterprises, find projects that match your skills and passion for 
              innovation.
            </p>
            
            <div className="feature-list">
              {developerFeatures.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon-wrapper">
                    {feature.icon}
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/signup" className="cta-button developer-button">
              Become a Developer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
