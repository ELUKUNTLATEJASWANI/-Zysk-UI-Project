import React, { useState } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa'; 

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left side: Logo */}
      <div className="navbar-left">
        <img src={require('../src/assets/images/Logo.png')} alt="logo" className="logo" />
        <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="/" className="navbar-item">Home</a>

          <div className="dropdown navbar-item">
            <button className="dropbtn">
              Products <i className="fas fa-chevron-down"></i>
            </button>
            <div className="dropdown-content">
              <p>Blog</p>
              <p>Docs</p>
            </div>
          </div>

          <div className="dropdown navbar-item">
            <button className="dropbtn">
              Resources <i className="fas fa-chevron-down"></i>
            </button>
            <div className="dropdown-content">
              <p>Blog</p>
              <p>Docs</p>
            </div>
          </div>

          <a href="/" className="navbar-item">Pricing</a>
        </div>
      </div>

   
      <div className="navbar-right">
       
        <img src={require('../src/assets/images/PHOTO.jpg')} alt="login" className="profile-image" />

        <button className="hamburger" onClick={toggleMobileMenu}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
