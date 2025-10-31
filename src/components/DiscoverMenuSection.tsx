import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DiscoverMenuSection.css';
import wokImage from '../assets/images/wok.jpg';

const DiscoverMenuSection: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="discover-menu-section" style={{ backgroundImage: `url(${wokImage})` }}>
      <div className="discover-menu-overlay">
        <Link to="/menu" className="discover-menu-link" onClick={handleClick}>
          <span className="discover-menu-text">Discover Our Menu</span>
        </Link>
      </div>
    </section>
  );
};

export default DiscoverMenuSection;
