import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackgroundAnimation from '../components/BackgroundAnimation';
import './MyProjectsPage.css';

const MyProjectsPage = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'AI Chatbot Development',
      description: 'Building an AI powered customer service chatbot with natural language processing capabilities.',
      status: 'active',
      client: 'TechCorp Inc.',
      deadline: '2024-02-15',
      budget: 2500,
      progress: 85
    },
    {
      id: 2,
      title: 'E-commerce Website',
      description: 'Full stack e-commerce platform with payment integration and admin dashboard.',
      status: 'completed',
      client: 'RetailMax',
      deadline: '2024-01-10',
      budget: 3200,
      progress: 100
    },
    {
      id: 3,
      title: 'Mobile App UI Design',
      description: 'Modern mobile app interface design for fitness tracking application.',
      status: 'pending',
      client: 'StartupXYZ',
      deadline: '2024-03-01',
      budget: 1800,
      progress: 0
    }
  ]);

  const [user] = useState({
    name: 'Basavala',
    avatar: 'B',
    earnings: 2450
  });

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      'active': { class: 'status-active', text: 'active' },
      'pending': { class: 'status-pending', text: 'pending' },
      'completed': { class: 'status-completed', text: 'completed' }
    };
    return statusConfig[status] || statusConfig['pending'];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit' 
    });
  };

  return (
    <div className="projects-page">
      <BackgroundAnimation />
      
      {/* Header */}
      <header className="projects-header">
        <div className="header-container">
          <Link to="/" className="projects-logo">
            <span className="logo-text">StartRit</span>
          </Link>
          
          <div className="header-nav">
            <nav className="main-nav">
                <a href="#hire" className="nav-link">
            <span className="nav-link-text">Hire Developers</span>
            <div className="nav-link-underline"></div>
          </a>
          <a href="#work" className="nav-link">
            <span className="nav-link-text">Find Work</span>
            <div className="nav-link-underline"></div>
          </a>
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
              <span className="earnings-amount">${user.earnings.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="projects-layout">
        {/* Sidebar */}
        <aside className="projects-sidebar">
          <div className="sidebar-user">
            <div className="user-avatar">
              <span>{user.avatar}</span>
            </div>
          </div>
          
          <nav className="sidebar-nav">
            <Link to="/dashboard" className="sidebar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="9" stroke="currentColor" strokeWidth="2"/>
                <rect x="14" y="3" width="7" height="5" stroke="currentColor" strokeWidth="2"/>
                <rect x="14" y="12" width="7" height="9" stroke="currentColor" strokeWidth="2"/>
                <rect x="3" y="16" width="7" height="5" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Dashboard
            </Link>
            
            <a href="#checklist" className="sidebar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Checklist
            </a>
            
            <a href="/tasklist" className="sidebar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Tasklist
            </a>
            
            <a href="#projects" className="sidebar-item active">
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
        <main className="projects-main">
          <div className="projects-content">
            <div className="projects-header-section">
              <h1 className="projects-title">My Projects</h1>
              <p className="projects-subtitle">Manage all your active, completed, and pending projects</p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => {
                const statusBadge = getStatusBadge(project.status);
                
                return (
                  <div key={project.id} className="project-card">
                    <div className="project-card-header">
                      <div className="project-title-section">
                        <h3 className="project-title">{project.title}</h3>
                        <span className={`project-status ${statusBadge.class}`}>
                          {statusBadge.text}
                        </span>
                      </div>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="project-details">
                      <div className="detail-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span>{project.client}</span>
                      </div>
                      
                      <div className="detail-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span>${project.budget.toLocaleString()}</span>
                      </div>
                      
                      <div className="detail-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                          <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                          <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                          <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span>Deadline: {formatDate(project.deadline)}</span>
                      </div>
                    </div>

                    <div className="project-progress">
                      <div className="progress-header">
                        <span className="progress-label">Progress: {project.progress}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="project-actions">
                      <button className="view-details-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        View Details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyProjectsPage;
