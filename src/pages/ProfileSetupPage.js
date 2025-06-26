import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BackgroundAnimation from '../components/BackgroundAnimation';
import './ProfileSetupPage.css';

const ProfileSetupPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [profileData, setProfileData] = useState({
    // Step 1 - Photo and Basic Info
    profilePhoto: null,
    firstName: 'Basavala',
    lastName: 'PRAIZY',
    
    // Step 2 - Languages and Personal Info
    languages: [
      { name: 'English', level: 'Native' },
      { name: 'French', level: 'Intermediate' },
      { name: 'German', level: 'Beginner' }
    ],
    dateOfBirth: '',
    gender: '',
    
    // Step 3 - Professional Info
    professionalTitle: '',
    description: ''
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete profile setup and go to dashboard
      navigate('/dashboard');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep1 = () => (
    <div className="setup-step">
      <h1 className="setup-title">Let's start with your photo</h1>
      
      <div className="photo-upload-section">
        <div className="photo-upload-area">
          <div className="upload-placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="camera-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
        <button className="upload-btn">Upload from Device</button>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">First Name (as per documents)</label>
          <input
            type="text"
            value={profileData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Last Name (as per documents)</label>
          <input
            type="text"
            value={profileData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="form-input"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="setup-step">
      <h1 className="setup-title">Languages & Personal Info</h1>
      
      <div className="languages-section">
        <label className="form-label">What languages do you speak?</label>
        <div className="language-search">
          <input
            type="text"
            placeholder="Search languages..."
            className="form-input"
          />
        </div>
        
        <div className="languages-list">
          {profileData.languages.map((lang, index) => (
            <div key={index} className="language-item">
              <span className="language-name">{lang.name}</span>
              <select className="level-select" value={lang.level}>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Native">Native</option>
              </select>
            </div>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Date of Birth (as per government documents)</label>
        <input
          type="date"
          value={profileData.dateOfBirth}
          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
          className="form-input date-input"
          placeholder="dd-mm-yyyy"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Gender</label>
        <div className="gender-options">
          <label className="radio-option">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={profileData.gender === 'Male'}
              onChange={(e) => handleInputChange('gender', e.target.value)}
            />
            <span className="radio-custom"></span>
            Male
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={profileData.gender === 'Female'}
              onChange={(e) => handleInputChange('gender', e.target.value)}
            />
            <span className="radio-custom"></span>
            Female
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="gender"
              value="Trans"
              checked={profileData.gender === 'Trans'}
              onChange={(e) => handleInputChange('gender', e.target.value)}
            />
            <span className="radio-custom"></span>
            Trans
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="gender"
              value="Others"
              checked={profileData.gender === 'Others'}
              onChange={(e) => handleInputChange('gender', e.target.value)}
            />
            <span className="radio-custom"></span>
            Others
          </label>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="setup-step">
      <h1 className="setup-title">Tell us about yourself</h1>
      
      <div className="form-group">
        <label className="form-label">What do you do?</label>
        <p className="form-description">Briefly describe your professional role or main expertise area.</p>
        <input
          type="text"
          value={profileData.professionalTitle}
          onChange={(e) => handleInputChange('professionalTitle', e.target.value)}
          className="form-input"
          placeholder="I'm a Data Scientist"
        />
        <div className="character-count">
          {profileData.professionalTitle.length < 3 && (
            <span className="warning">⚠ Minimum 3 characters</span>
          )}
          <span className="count">{profileData.professionalTitle.length}/100 characters</span>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Describe yourself</label>
        <p className="form-description">
          Share your professional background, interests, and what makes you unique. This helps others 
          understand who you are and what you bring to the table.
        </p>
        <textarea
          value={profileData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          className="form-textarea"
          placeholder="I'm a passionate deep-tech developer with expertise in artificial intelligence and machine learning. I have been working in the field for over 5 years, specializing in computer vision and natural language processing. I enjoy solving complex problems and creating innovative solutions that make a real impact. My experience includes working with Fortune 500 companies and startups, where I've led teams in developing cutting-edge AI applications..."
          rows="8"
        />
        <div className="textarea-info">
          <div className="word-count">
            Word count: {profileData.description.split(' ').filter(word => word.length > 0).length} (minimum 100 words, maximum 500 words)
          </div>
          <div className="character-count">
            <span className="count">{profileData.description.length}/2500 characters</span>
          </div>
        </div>
        {profileData.description.split(' ').filter(word => word.length > 0).length < 100 && (
          <div className="error-message">Please add at least 1 more words</div>
        )}
      </div>

      <div className="tips-section">
        <h4 className="tips-title">Tips for a great profile:</h4>
        <ul className="tips-list">
          <li>• Mention your key skills and expertise areas</li>
          <li>• Include your years of experience</li>
          <li>• Highlight notable projects or achievements</li>
          <li>• Show your passion for deep-tech</li>
          <li>• Keep it professional yet personable</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="profile-setup-page">
      <BackgroundAnimation />
      
      <div className="setup-container">
        <div className="setup-header">
          <Link to="/" className="setup-logo">
            <span className="logo-text">Startrit</span>
          </Link>
          
          <div className="progress-section">
            <span className="progress-text">Profile Setup</span>
            <div className="progress-indicator">
              <span className="step-text">Step {currentStep} of 8</span>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${(currentStep / 8) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="setup-card">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}

          <div className="setup-actions">
            {currentStep > 1 && (
              <button onClick={handlePrevious} className="btn-secondary">
                Previous
              </button>
            )}
            <button onClick={handleNext} className="btn-primary">
              {currentStep === 3 ? 'Continue' : 'Next'}
            </button>
          </div>
        </div>

        {currentStep === 1 && (
          <div className="account-created-notice">
            <h3>Account Created!</h3>
            <p>Please check your email to verify your account, then complete your profile setup.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSetupPage;
