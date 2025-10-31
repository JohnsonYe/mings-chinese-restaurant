import React from 'react';
import '../styles/AboutUs.css';
import aboutUs1 from '../assets/images/about-us-1.jpg';
import aboutUs2 from '../assets/images/about-us-2.jpg';
import aboutUs3 from '../assets/images/about-us-3.png';
import aboutUs4 from '../assets/images/about-us-4.jpg';

const AboutUs: React.FC = () => {
  return (
    <div className="about-page">
      <h1 className="about-page-title">About Us</h1>
      <div className="about-page-content">
        <section className="about-section">
          <div className="about-section-image">
            <img src={aboutUs1} alt="Our Story" />
          </div>
          <div className="about-section-text">
            <h2>Our Story</h2>
            <p>
              Mings has been serving the Pleasant Hill community with authentic Chinese
              cuisine for many years. Our family-owned restaurant takes pride in creating
              dishes that blend traditional recipes with modern culinary techniques.
            </p>
          </div>
        </section>

        <section className="about-section about-section-reverse">
          <div className="about-section-image">
            <img src={aboutUs2} alt="Our Philosophy" />
          </div>
          <div className="about-section-text">
            <h2>Our Philosophy</h2>
            <p>
              We believe in using only the freshest ingredients to craft creative Chinese
              dishes that delight our guests. Every dish is prepared with care and attention
              to detail, ensuring an exceptional dining experience every time you visit.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-section-image">
            <img src={aboutUs3} alt="Our Team" />
          </div>
          <div className="about-section-text">
            <h2>Our Team</h2>
            <p>
              Our chefs bring decades of combined experience, having trained in authentic
              Chinese cooking techniques. They work tirelessly to ensure each dish meets
              our high standards of quality and flavor.
            </p>
          </div>
        </section>

        <section className="about-section about-section-reverse">
          <div className="about-section-image">
            <img src={aboutUs4} alt="Visit Us" />
          </div>
          <div className="about-section-text">
            <h2>Visit Us</h2>
            <p>
              We are located in the heart of Pleasant Hill and welcome you to dine with us.
              Whether you're joining us for lunch or dinner, we promise a memorable culinary
              experience that will keep you coming back.
            </p>
            <div className="contact-info">
              <p><strong>Address:</strong> 2653 Pleasant Hill Rd, Pleasant Hill, CA 94523</p>
              <p><strong>Phone:</strong> (925) 934-9393</p>
            </div>
          </div>
        </section>

        <section className="map-section">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093694!2d-122.06240708468188!3d37.94798597972539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857e9c8c8c8c8d%3A0x8c8c8c8c8c8c8c8c!2s2653%20Pleasant%20Hill%20Rd%2C%20Pleasant%20Hill%2C%20CA%2094523!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mings Restaurant Location"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
