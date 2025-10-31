import React from 'react';
import '../styles/AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <div className="about-page">
      <h1 className="about-page-title">About Us</h1>
      <div className="about-page-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Mings has been serving the Pleasant Hill community with authentic Chinese
            cuisine for many years. Our family-owned restaurant takes pride in creating
            dishes that blend traditional recipes with modern culinary techniques.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Philosophy</h2>
          <p>
            We believe in using only the freshest ingredients to craft creative Chinese
            dishes that delight our guests. Every dish is prepared with care and attention
            to detail, ensuring an exceptional dining experience every time you visit.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Team</h2>
          <p>
            Our chefs bring decades of combined experience, having trained in authentic
            Chinese cooking techniques. They work tirelessly to ensure each dish meets
            our high standards of quality and flavor.
          </p>
        </section>

        <section className="about-section">
          <h2>Visit Us</h2>
          <p>
            We are located in the heart of Pleasant Hill and welcome you to dine with us.
            Whether you're joining us for lunch or dinner, we promise a memorable culinary
            experience that will keep you coming back.
          </p>
          <div className="contact-info">
            <p><strong>Address:</strong> 2653 Pleasant Hill Rd, Pleasant Hill, CA 94523</p>
            <p><strong>Phone:</strong> (925) 934-9393</p>
            <p><strong>Hours:</strong> Wednesday - Sunday, 11:30am - 3:00pm & 4pm - 9pm</p>
            <p><strong>Closed:</strong> Monday - Tuesday</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
