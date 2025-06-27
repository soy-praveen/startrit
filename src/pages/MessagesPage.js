import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackgroundAnimation from '../components/BackgroundAnimation';
import './MessagesPage.css';

const MessagesPage = () => {
  const [showBrowseDropdown, setShowBrowseDropdown] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messageText, setMessageText] = useState('');
  
  const [conversations] = useState([
    {
      id: 1,
      name: 'TechCorp Inc.',
      lastMessage: 'Thanks for the update!',
      time: '2 min ago',
      unread: 2,
      online: true,
      avatar: 'T'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      lastMessage: 'Can we schedule a call?',
      time: '1 hour ago',
      unread: 0,
      online: false,
      avatar: 'S'
    },
    {
      id: 3,
      name: 'Project Alpha Team',
      lastMessage: 'New requirements uploaded',
      time: '3 hours ago',
      unread: 1,
      online: true,
      avatar: 'P'
    }
  ]);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'TechCorp Inc.',
      text: 'Hi! I wanted to discuss the project timeline.',
      time: '10:30 AM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      text: 'Sure! I can deliver the first milestone by Friday.',
      time: '10:32 AM',
      isOwn: true
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

  const handleConversationSelect = (conversation) => {
    setSelectedConversation(conversation);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'You',
        text: messageText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true
      };
      setMessages([...messages, newMessage]);
      setMessageText('');
    }
  };

  return (
    <div className="messages-page">
      <BackgroundAnimation />
      
      {/* Header */}
      <header className="messages-header">
        <div className="header-container">
          <Link to="/" className="messages-logo">
            <span className="logo-text">StartRit</span>
          </Link>
          
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

      <div className="messages-layout">
        {/* Sidebar */}
        <aside className="messages-sidebar">
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
            
            <Link to="/tasklist" className="sidebar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Tasklist
            </Link>
            
            <Link to="/my-projects" className="sidebar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              My Projects
            </Link>
            
            <a href="#messages" className="sidebar-item active">
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
        <main className="messages-main">
          <div className="messages-content">
            <div className="messages-container">
              {/* Conversations List */}
              <div className="conversations-panel">
                <div className="conversations-header">
                  <h2>Messages</h2>
                  <p>Communicate with your clients and team members</p>
                </div>
                
                <div className="conversations-search">
                  <div className="search-wrapper">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M21 21L16.514 16.506M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <input type="text" placeholder="Search conversations..." />
                  </div>
                </div>
                
                <div className="conversations-list">
                  <h3 className="section-title">Conversations</h3>
                  {conversations.map((conversation) => (
                    <div 
                      key={conversation.id} 
                      className={`conversation-item ${selectedConversation?.id === conversation.id ? 'active' : ''}`}
                      onClick={() => handleConversationSelect(conversation)}
                    >
                      <div className="conversation-avatar">
                        <span>{conversation.avatar}</span>
                        {conversation.online && <div className="online-indicator"></div>}
                      </div>
                      <div className="conversation-content">
                        <div className="conversation-header">
                          <h4 className="conversation-name">{conversation.name}</h4>
                          <span className="conversation-time">{conversation.time}</span>
                        </div>
                        <div className="conversation-footer">
                          <p className="last-message">{conversation.lastMessage}</p>
                          {conversation.unread > 0 && (
                            <span className="unread-badge">{conversation.unread}</span>
                          )}
                        </div>
                      </div>
                      {conversation.unread > 0 && <div className="new-badge">new</div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Area */}
              <div className="chat-panel">
                {selectedConversation ? (
                  <>
                    <div className="chat-header">
                      <div className="chat-contact">
                        <div className="contact-avatar">
                          <span>{selectedConversation.avatar}</span>
                          {selectedConversation.online && <div className="online-indicator"></div>}
                        </div>
                        <div className="contact-info">
                          <h3>{selectedConversation.name}</h3>
                          <p>{selectedConversation.online ? 'Online now' : 'Last seen recently'}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="chat-messages">
                      {messages.map((message) => (
                        <div key={message.id} className={`message ${message.isOwn ? 'own-message' : 'other-message'}`}>
                          <div className="message-content">
                            <p>{message.text}</p>
                            <span className="message-time">{message.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="chat-input">
                      <form onSubmit={handleSendMessage} className="message-form">
                        <input
                          type="text"
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                          placeholder="Type your message..."
                          className="message-input"
                        />
                        <button type="submit" className="send-button">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </button>
                      </form>
                    </div>
                  </>
                ) : (
                  <div className="no-conversation">
                    <div className="no-conversation-content">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <h3>Select a conversation</h3>
                      <p>Choose a conversation from the list to start messaging</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MessagesPage;
