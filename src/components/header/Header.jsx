import React from 'react';
import './Header.css';

// Assets
import appLogo from '../../assets/logos/logo.png'

import PropTypes from 'prop-types';

const Header = props => {
  return (
    <>
      <div className="header-spacer" />
      <header>
        <div className="header-content">
          <div className="logo-container">
            <img src={appLogo} alt="logo" className="app-logo"/>
          </div>

          <div className="header-options-container">

          </div>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  
};

export default Header;