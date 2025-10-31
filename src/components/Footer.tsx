import React from 'react';
import '../styles/Footer.css';
import indoorImage from '../assets/images/mings_indoor_overview.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${indoorImage})` }}>
      <div className="footer-overlay">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Hours</h3>
            <p>Wednesday – Sunday</p>
            <p>11:30am – 3:00pm, 4pm – 9:00pm</p>
            <p className="closed">Closed Mondays, Tuesdays, Thanksgiving and Christmas</p>
          </div>
          <div className="footer-section">
            <h3>Location</h3>
            <p>2653 Pleasant Hill Rd</p>
            <p>Pleasant Hill, CA 94523</p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Phone: (925) 934-9393</p>
          </div>
        </div>
        <div className="footer-notices">
          <p>Allergy statement: Please let us know if you are allergic to any ingredients</p>
          <p>Kitchen Last Call is 15 minutes before closed.</p>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mings Chinese Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
