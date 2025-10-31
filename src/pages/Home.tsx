import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import DiscoverMenuSection from '../components/DiscoverMenuSection';
import MenuPreview from '../components/MenuPreview';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <div className="hero-spacer"></div>
      <div className="content-section">
        <div className="divider"></div>
        <About />
        <div className="divider"></div>
        <DiscoverMenuSection />
      </div>
      <div className="content-overlay">
        <div className="divider"></div>
        <MenuPreview />
        <div className="accessibility-statement">
          <p>If you experience difficulties accessing our website, please call our number (925) 934-9393 and we will assist you in completing your order.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
