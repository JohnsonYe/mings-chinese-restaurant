import React from 'react';
import '../styles/Hero.css';
import frontDoorImage from '../assets/images/mings_front_door.jpg';

const Hero: React.FC = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${frontDoorImage})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Mings</h1>
          <p className="hero-subtitle">
            Enjoy Our Food Experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
