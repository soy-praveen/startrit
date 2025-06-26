import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import OtpVerificationPage from './pages/OtpVerificationPage';
import ProfileSetupPage from './pages/ProfileSetupPage';
import DashboardPage from './pages/DashboardPage';
import TaskListPage from './pages/TaskListPage';
import MyProjectsPage from './pages/MyProjectsPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verify-otp" element={<OtpVerificationPage />} />
          <Route path="/profile-setup" element={<ProfileSetupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/tasklist" element={<TaskListPage />} />
          <Route path="/my-projects" element={<MyProjectsPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
