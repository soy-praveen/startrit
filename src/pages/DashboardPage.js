import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackgroundAnimation from '../components/BackgroundAnimation';
import './DashboardPage.css';

const DashboardPage = () => {
  const [user, setUser] = useState({
    name: 'Basavala',
    email: 'basavala@example.com',
    userType: 'developer',
    avatar: 'B'
  });

  const [stats, setStats] = useState({
    activeProjects: 12,
    rating: 4.9,
    completed: 156,
    earnings: 2450,
    availableBalance: 1200,
    pending: 1250
  });

  const [recentActivity] = useState([
    {
      id: 1,
      type: 'completed',
      title: 'Project completed',
      subtitle: 'AI Chatbot Development',
      time: '2 hours ago',
      color: 'green'
    },
    {
      id: 2,
      type: 'message',
      title: 'New message',
      subtitle: 'From TechCorp Inc.',
      time: '4 hours ago',
      color: 'blue'
    },
    {
      id: 3,
      type: 'payment',
      title: 'Payment received',
      subtitle: '$850 from WebApp Project',
      time: '1 day ago',
      color: 'orange'
    }
  ]);

  useEffect(() => {
    console.log('Dashboard loaded for user:', user);
  }, []);

  const handleLogout = () => {
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
          
          <div className="header-nav">
            <nav className="main-nav">
              <a href="#browse" className="nav-item">Browse</a>
              <a href="#manage" className="nav-item">Manage</a>
              <a href="#communities" className="nav-item">Communities</a>
              <a href="#blog" className="nav-item">Post Blog</a>
            </nav>
          </div>
          
          <div className="header-actions">
            <div className="notification-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <button className="post-project-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Post a Project
            </button>
            <div className="earnings-display">
              <span className="earnings-amount">${stats.earnings.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="dashboard-layout">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-user">
            <div className="user-avatar">
              <span>{user.avatar}</span>
            </div>
          </div>
          
          <nav className="sidebar-nav">
            <a href="#dashboard" className="sidebar-item active">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="9" stroke="currentColor" strokeWidth="2"/>
                <rect x="14" y="3" width="7" height="5" stroke="currentColor" strokeWidth="2"/>
                <rect x="14" y="12" width="7" height="9" stroke="currentColor" strokeWidth="2"/>
                <rect x="3" y="16" width="7" height="5" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Dashboard
            </a>
            
            <a href="#checklist" className="sidebar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Checklist
            </a>
            
            <a href="#tasklist" className="sidebar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Tasklist
            </a>
            
            <a href="#projects" className="sidebar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              My Projects
            </a>
            
            <a href="#messages" className="sidebar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Messages
            </a>
            
            <a href="#feedback" className="sidebar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Feedback
            </a>
            
            <a href="#credits" className="sidebar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <line x1="12" y1="6" x2="12" y2="10" stroke="currentColor" strokeWidth="2"/>
                <line x1="12" y1="14" x2="12" y2="18" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Credits
            </a>
            
            <a href="#updates" className="sidebar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M1 4v16l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Project Updates
            </a>
            
            <a href="#bookmarks" className="sidebar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Bookmarks
            </a>
            
            <a href="#doubts" className="sidebar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2"/>
                <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Ask Doubts
            </a>
            
            <a href="#pricing" className="sidebar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Pricing Tool
            </a>
          </nav>
          
          <div className="sidebar-footer">
            <button onClick={handleLogout} className="sign-out-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          <div className="main-content">
            {/* Welcome Section */}
            <div className="welcome-section">
              <h1 className="welcome-title">Welcome back, {user.name}!</h1>
              <p className="welcome-subtitle">SYSN</p>
            </div>

            <div className="dashboard-grid">
              {/* Left Column */}
              <div className="left-column">
                {/* Quick Actions */}
                <div className="quick-actions-card">
                  <h2 className="section-title">Quick Actions</h2>
                  <div className="actions-grid">
                    <button className="action-item">
                      <div className="action-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <span>Update Profile</span>
                    </button>

                    <button className="action-item">
                      <div className="action-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                          <rect x="7" y="7" width="3" height="9" fill="currentColor"/>
                          <rect x="14" y="7" width="3" height="5" fill="currentColor"/>
                        </svg>
                      </div>
                      <span>Update Portfolio</span>
                    </button>

                    <button className="action-item">
                      <div className="action-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <span>Client Messages</span>
                    </button>

                    <button className="action-item">
                      <div className="action-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                          <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <span>Create Invoice</span>
                    </button>
                  </div>
                </div>

                {/* Stats Section */}
                <div className="stats-section">
                  <div className="stats-row">
                    <div className="stat-item">
                      <h3 className="stat-number blue">{stats.activeProjects}</h3>
                      <p className="stat-label">Active Projects</p>
                    </div>
                    <div className="stat-item">
                      <h3 className="stat-number green">{stats.rating}</h3>
                      <p className="stat-label">Rating</p>
                    </div>
                    <div className="stat-item">
                      <h3 className="stat-number purple">{stats.completed}</h3>
                      <p className="stat-label">Completed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="right-column">
                {/* This Month's Earnings */}
                <div className="earnings-card">
                  <h3 className="card-title">This Month's Earnings</h3>
                  <div className="earnings-amount-large">${stats.earnings.toLocaleString()}</div>
                  <div className="earnings-change">+12% from last month</div>
                  
                  <div className="earnings-breakdown">
                    <div className="breakdown-item">
                      <span className="breakdown-label">Available Balance:</span>
                      <span className="breakdown-value">${stats.availableBalance.toLocaleString()}</span>
                    </div>
                    <div className="breakdown-item">
                      <span className="breakdown-label">Pending:</span>
                      <span className="breakdown-value">${stats.pending.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="activity-card">
                  <h3 className="card-title">Recent Activity</h3>
                  <div className="activity-list">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="activity-item">
                        <div className={`activity-dot ${activity.color}`}></div>
                        <div className="activity-content">
                          <h4 className="activity-title">{activity.title}</h4>
                          <p className="activity-subtitle">{activity.subtitle}</p>
                          <span className="activity-time">{activity.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="profile-setup">
                    <h4 className="setup-title">Profile Setup Complete!</h4>
                    <p className="setup-description">Your profile has been successfully created.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
