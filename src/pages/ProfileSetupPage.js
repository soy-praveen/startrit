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
    description: '',
    
    // Step 4 - Skills
    skills: [],
    
    // Step 5 - Education
    education: [],
    
    // Step 6 - Experience
    experience: [],
    
    // Step 7 - Portfolio
    portfolio: []
  });

  const [skillInput, setSkillInput] = useState('');
  const [suggestedSkills] = useState([
    'JavaScript', 'Python', 'React', 'Node.js', 'Machine Learning', 'Data Science',
    'Artificial Intelligence', 'Blockchain', 'Cloud Computing', 'DevOps', 'UI/UX Design',
    'Mobile Development', 'Cybersecurity', 'Database Management', 'API Development'
  ]);

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < 7) {
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

  const addSkill = (skill) => {
    if (skill && !profileData.skills.includes(skill)) {
      setProfileData(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }));
      setSkillInput('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setProfileData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const addEducation = () => {
    setProfileData(prev => ({
      ...prev,
      education: [...prev.education, {
        school: '',
        degree: '',
        field: '',
        startYear: '',
        endYear: '',
        description: ''
      }]
    }));
  };

  const updateEducation = (index, field, value) => {
    setProfileData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const addExperience = () => {
    setProfileData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
      }]
    }));
  };

  const updateExperience = (index, field, value) => {
    setProfileData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const addPortfolioItem = () => {
    setProfileData(prev => ({
      ...prev,
      portfolio: [...prev.portfolio, {
        title: '',
        description: '',
        url: '',
        image: null
      }]
    }));
  };

  const updatePortfolioItem = (index, field, value) => {
    setProfileData(prev => ({
      ...prev,
      portfolio: prev.portfolio.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
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
          placeholder="I'm a passionate deep-tech developer with expertise in artificial intelligence and machine learning..."
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

  const renderStep4 = () => (
    <div className="setup-step">
      <h1 className="setup-title">What skills do you have?</h1>
      <p className="setup-subtitle">Add skills that showcase your expertise and help clients find you</p>
      
      <div className="skills-section">
        <div className="skill-input-section">
          <div className="skill-input-wrapper">
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              className="form-input"
              placeholder="Type a skill (e.g., JavaScript, Python, Machine Learning)"
              onKeyPress={(e) => e.key === 'Enter' && addSkill(skillInput)}
            />
            <button 
              onClick={() => addSkill(skillInput)}
              className="add-skill-btn"
              disabled={!skillInput.trim()}
            >
              Add
            </button>
          </div>
        </div>

        {profileData.skills.length > 0 && (
          <div className="selected-skills">
            <h4 className="skills-title">Your Skills:</h4>
            <div className="skills-list">
              {profileData.skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  <span>{skill}</span>
                  <button onClick={() => removeSkill(skill)} className="remove-skill">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="suggested-skills">
          <h4 className="skills-title">Suggested Skills:</h4>
          <div className="skills-grid">
            {suggestedSkills.filter(skill => !profileData.skills.includes(skill)).map((skill, index) => (
              <button
                key={index}
                onClick={() => addSkill(skill)}
                className="suggested-skill-btn"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="setup-step">
      <h1 className="setup-title">Education</h1>
      <p className="setup-subtitle">Add your educational background</p>
      
      <div className="education-section">
        {profileData.education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">School/University</label>
                <input
                  type="text"
                  value={edu.school}
                  onChange={(e) => updateEducation(index, 'school', e.target.value)}
                  className="form-input"
                  placeholder="Harvard University"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Degree</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                  className="form-input"
                  placeholder="Bachelor's Degree"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Field of Study</label>
              <input
                type="text"
                value={edu.field}
                onChange={(e) => updateEducation(index, 'field', e.target.value)}
                className="form-input"
                placeholder="Computer Science"
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Start Year</label>
                <input
                  type="number"
                  value={edu.startYear}
                  onChange={(e) => updateEducation(index, 'startYear', e.target.value)}
                  className="form-input"
                  placeholder="2018"
                />
              </div>
              <div className="form-group">
                <label className="form-label">End Year</label>
                <input
                  type="number"
                  value={edu.endYear}
                  onChange={(e) => updateEducation(index, 'endYear', e.target.value)}
                  className="form-input"
                  placeholder="2022"
                />
              </div>
            </div>
          </div>
        ))}
        
        <button onClick={addEducation} className="add-item-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2"/>
          </svg>
          Add Education
        </button>
      </div>
    </div>
  );

  const renderStep6 = () => (
    <div className="setup-step">
      <h1 className="setup-title">Work Experience</h1>
      <p className="setup-subtitle">Tell us about your work experience</p>
      
      <div className="experience-section">
        {profileData.experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Job Title</label>
                <input
                  type="text"
                  value={exp.title}
                  onChange={(e) => updateExperience(index, 'title', e.target.value)}
                  className="form-input"
                  placeholder="Senior Software Engineer"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => updateExperience(index, 'company', e.target.value)}
                  className="form-input"
                  placeholder="Google Inc."
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Location</label>
              <input
                type="text"
                value={exp.location}
                onChange={(e) => updateExperience(index, 'location', e.target.value)}
                className="form-input"
                placeholder="San Francisco, CA"
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Start Date</label>
                <input
                  type="month"
                  value={exp.startDate}
                  onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">End Date</label>
                <input
                  type="month"
                  value={exp.endDate}
                  onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                  className="form-input"
                  disabled={exp.current}
                />
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={exp.current}
                    onChange={(e) => updateExperience(index, 'current', e.target.checked)}
                    className="checkbox-input"
                  />
                  <span className="checkbox-custom"></span>
                  Currently working here
                </label>
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                value={exp.description}
                onChange={(e) => updateExperience(index, 'description', e.target.value)}
                className="form-textarea"
                placeholder="Describe your role and achievements..."
                rows="4"
              />
            </div>
          </div>
        ))}
        
        <button onClick={addExperience} className="add-item-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2"/>
          </svg>
          Add Experience
        </button>
      </div>
    </div>
  );

  const renderStep7 = () => (
    <div className="setup-step">
      <h1 className="setup-title">Portfolio</h1>
      <p className="setup-subtitle">Showcase your best work</p>
      
      <div className="portfolio-section">
        {profileData.portfolio.map((item, index) => (
          <div key={index} className="portfolio-item">
            <div className="form-group">
              <label className="form-label">Project Title</label>
              <input
                type="text"
                value={item.title}
                onChange={(e) => updatePortfolioItem(index, 'title', e.target.value)}
                className="form-input"
                placeholder="AI-Powered Chatbot"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Project URL</label>
              <input
                type="url"
                value={item.url}
                onChange={(e) => updatePortfolioItem(index, 'url', e.target.value)}
                className="form-input"
                placeholder="https://github.com/username/project"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                value={item.description}
                onChange={(e) => updatePortfolioItem(index, 'description', e.target.value)}
                className="form-textarea"
                placeholder="Describe your project and the technologies used..."
                rows="4"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Project Image</label>
              <div className="image-upload-area">
                <div className="upload-placeholder">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="21,15 16,10 5,21" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Upload project image</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <button onClick={addPortfolioItem} className="add-item-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2"/>
          </svg>
          Add Project
        </button>
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
          {currentStep === 4 && renderStep4()}
          {currentStep === 5 && renderStep5()}
          {currentStep === 6 && renderStep6()}
          {currentStep === 7 && renderStep7()}

          <div className="setup-actions">
            {currentStep > 1 && (
              <button onClick={handlePrevious} className="btn-secondary">
                Previous
              </button>
            )}
            <button onClick={handleNext} className="btn-primary">
              {currentStep === 7 ? 'Complete Setup' : 'Next'}
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
