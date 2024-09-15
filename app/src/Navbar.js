import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left side: Logo and menu items */}
      <div className="navbar-left">
        <img src={require('./Logo.png')} alt="logo" className="logo" />
        <a href="/" className="navbar-item">Home</a>

        <div className="dropdown navbar-item">
          <button className="dropbtn">
            Product <i className="fas fa-chevron-down"></i>
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

      {/* Right side: Login Image */}
      <div className="navbar-right">
        <img src={require('./PHOTO.jpg')} alt="login" className="login-logo" />
      </div>
    </nav>
  );
}

export default Navbar;
