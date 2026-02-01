import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, isHindi } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = {
    hindi: {
      home: 'होम',
      products: 'उत्पाद',
      about: 'हमारे बारे में',
      location: 'स्थान'
    },
    english: {
      home: 'Home',
      products: 'Products',
      about: 'About',
      location: 'Location'
    }
  };

  const currentMenu = menuItems[language];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/company-logo.jpg" alt="Bhojnamrit Logo" className="logo-image" />
          <span className="logo-text">Bhojnamrit</span>
        </Link>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              {currentMenu.home}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link" onClick={closeMenu}>
              {currentMenu.products}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              {currentMenu.about}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/location" className="nav-link" onClick={closeMenu}>
              {currentMenu.location}
            </Link>
          </li>
        </ul>

        <div className="nav-right">
          <button className="language-toggle" onClick={toggleLanguage}>
            <span className="toggle-icon">🌐</span>
            <span className="toggle-text">{isHindi ? 'English' : 'हिंदी'}</span>
          </button>

          <div className="menu-icon" onClick={toggleMenu}>
            <div className={isOpen ? 'hamburger active' : 'hamburger'}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
