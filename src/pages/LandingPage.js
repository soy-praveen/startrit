import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SearchSection from '../components/SearchSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <BackgroundAnimation />
      <Navbar />
      <HeroSection />
      <SearchSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
