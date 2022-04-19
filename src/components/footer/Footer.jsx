import React from 'react';
import './Footer.css'

// Assets
import appLogo from '../../assets/logos/logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo-section">
          <div className="logo-container">
            <img src={appLogo} alt="logo" className="app-logo" />
          </div>
        </div>

        <div className="footer-info">
          TodayWeGo is being developed by Alberto Oteíza, Front-end developer. This app uses the 
          Yelp Fusion public API to retrieve the requested data.
        </div>
      </div>
    </footer>
  );
};

export default Footer;