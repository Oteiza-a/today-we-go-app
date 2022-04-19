import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Header.css';

// Components
import { Button } from 'react-bootstrap';

// Assets
import appLogo from '../../assets/logos/logo.png'

const Header = () => {
  let navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route)
  }

  return (
    <>
      <div className="header-spacer" />
      <header>
        <div className="header-content">
          <div className="logo-container">
            <img src={appLogo} alt="logo" className="app-logo" onClick={() => handleClick("/")} />
          </div>

          <div className="header-options-container" onClick={() => handleClick("/explore")}>
            <Button variant="custom-primary" className="search-btn"></Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;