import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SearchSection from '../components/SearchSection';
import BackgroundAnimation from '../components/BackgroundAnimation';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <BackgroundAnimation />
      <Navbar />
      <HeroSection />
      <SearchSection />
    </div>
  );
};

export default LandingPage;
