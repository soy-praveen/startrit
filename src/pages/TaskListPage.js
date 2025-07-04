import React, { useState } from 'react'; // Make sure useState is imported
import { Link } from 'react-router-dom';
import BackgroundAnimation from '../components/BackgroundAnimation';
import './TaskListPage.css';

const TaskListPage = () => {
  const [showBrowseDropdown, setShowBrowseDropdown] = useState(false); // This should be INSIDE the component function
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete Homepage Design',
      status: 'in-progress',
      priority: 'high',
      progress: 75,
      type: 'E-commerce Website',
      company: 'TechCorp Inc.',
      due: '2024-01-20'
    },
    {
      id: 2,
      title: 'API Integration',
      status: 'pending',
      priority: 'medium',
      progress: 0,
      type: 'Mobile App',
      company: 'StartupXYZ',
      due: '2024-01-25'
    },
    {
      id: 3,
      title: 'Bug Fixes',
      status: 'completed',
      priority: 'low',
      progress: 100,
      type: 'Web Application',
      company: 'Local Business',
      due: '2024-01-18'
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

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      'in-progress': { class: 'status-progress', text: 'in progress' },
      'pending': { class: 'status-pending', text: 'pending' },
      'completed': { class: 'status-completed', text: 'completed' }
    };
    return statusConfig[status] || statusConfig['pending'];
  };

  const getPriorityBadge = (priority) => {
    const priorityConfig = {
      'high': { class: 'priority-high', text: 'high' },
      'medium': { class: 'priority-medium', text: 'medium' },
      'low': { class: 'priority-low', text: 'low' }
    };
    return priorityConfig[priority] || priorityConfig['medium'];
  };

  return (
    <div className="task-list-page">
      <BackgroundAnimation />
      
      {/* Header */}
      <header className="task-header">
        <div className="header-container">
          <Link to="/" className="task-logo">
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
          
<div className="header-nav">
  <nav className="main-nav">
    <div 
      className="nav-item-wrapper"
      onMouseEnter={() => setShowBrowseDropdown(true)}
      onMouseLeave={() => setShowBrowseDropdown(false)}
    >
      <a href="#browse" className="nav-item">Browse</a>
      
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
              
              <a href="#enterprise" className="dropdown-item">
                <div className="dropdown-icon enterprise-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21h18M5 21V7l8-4v18M19 21V10l-6-3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="dropdown-item-content">
                  <h4>Enterprise</h4>
                  <p>Turn your organization's ideas into reality</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <a href="#manage" className="nav-item">Manage</a>
    <a href="#communities" className="nav-item">Communities</a>
    <a href="#blog" className="nav-item">Post Blog</a>
  </nav>
</div>

        </div>
      </header>

      <div className="task-layout">
        {/* Sidebar */}
        <aside className="task-sidebar">
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
            
            <a href="#tasklist" className="sidebar-item active">
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
        <main className="task-main">
          <div className="task-content">
            <div className="task-header-section">
              <h1 className="task-title">Task List</h1>
              <p className="task-subtitle">Manage and track your project tasks</p>
            </div>

            <div className="tasks-container">
              {tasks.map((task) => {
                const statusBadge = getStatusBadge(task.status);
                const priorityBadge = getPriorityBadge(task.priority);
                
                return (
                  <div key={task.id} className="task-card">
                    <div className="task-card-header">
                      <h3 className="task-name">{task.title}</h3>
                      <div className="task-badges">
                        <span className={`status-badge ${statusBadge.class}`}>
                          {statusBadge.text}
                        </span>
                        <span className={`priority-badge ${priorityBadge.class}`}>
                          {priorityBadge.text}
                        </span>
                      </div>
                      <button className="update-status-btn">
                        Update Status
                      </button>
                    </div>

                    <div className="task-details">
                      <div className="task-info">
                        <div className="info-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <span>{task.type}</span>
                        </div>
                        <div className="info-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                            <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                            <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                            <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <span>{task.company}</span>
                        </div>
                        <div className="info-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <span>Due: {task.due}</span>
                        </div>
                      </div>
                    </div>

                    <div className="task-progress">
                      <div className="progress-header">
                        <span className="progress-label">Progress</span>
                        <span className="progress-percentage">{task.progress}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
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

export default TaskListPage;
