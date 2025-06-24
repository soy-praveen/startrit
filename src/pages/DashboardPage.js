import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackgroundAnimation from '../components/BackgroundAnimation';
import './DashboardPage.css';

const DashboardPage = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    userType: 'developer'
  });

  const [stats, setStats] = useState({
    projects: 12,
    earnings: 15420,
    rating: 4.8,
    completedJobs: 28
  });

  useEffect(() => {
    // Simulate loading user data
    console.log('Dashboard loaded for user:', user);
  }, []);

  const handleLogout = () => {
    // Clear user data and redirect to home
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <div className="dashboard-page">
      <BackgroundAnimation />
      
      {/* Dashboard Header */}
      <header className="dashboard-header">
        <div className="header-container">
          <Link to="/" className="dashboard-logo">
            <span className="logo-text">StartRit</span>
          </Link>
          
          <div className="header-actions">
            <div className="user-menu">
              <div className="user-avatar">
                <span>{user.name.charAt(0)}</span>
              </div>
              <div className="user-info">
                <span className="user-name">{user.name}</span>
                <span className="user-type">{user.userType}</span>
              </div>
              <button onClick={handleLogout} className="logout-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="dashboard-main">
        <div className="dashboard-container">
          {/* Welcome Section */}
          <div className="welcome-section">
            <h1 className="welcome-title">Welcome back, {user.name}! 👋</h1>
            <p className="welcome-subtitle">Here's what's happening with your projects today.</p>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon projects-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <rect x="7" y="7" width="3" height="9" fill="currentColor"/>
                  <rect x="14" y="7" width="3" height="5" fill="currentColor"/>
                </svg>
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{stats.projects}</h3>
                <p className="stat-label">Active Projects</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon earnings-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="stat-content">
                <h3 className="stat-number">${stats.earnings.toLocaleString()}</h3>
                <p className="stat-label">Total Earnings</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon rating-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="currentColor"/>
                </svg>
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{stats.rating}</h3>
                <p className="stat-label">Average Rating</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon completed-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="22,4 12,14.01 9,11.01" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{stats.completedJobs}</h3>
                <p className="stat-label">Completed Jobs</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <h2 className="section-title">Quick Actions</h2>
            <div className="actions-grid">
              <button className="action-card">
                <div className="action-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Browse Projects</h3>
                <p>Find new opportunities</p>
              </button>

              <button className="action-card">
                <div className="action-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Submit Proposal</h3>
                <p>Apply to projects</p>
              </button>

              <button className="action-card">
                <div className="action-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Update Profile</h3>
                <p>Enhance your profile</p>
              </button>

              <button className="action-card">
                <div className="action-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Messages</h3>
                <p>Check your inbox</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
