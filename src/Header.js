// Header.js - Navigation Bar
import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><Link to="home" smooth={true}>Home</Link></li>
          <li><Link to="about" smooth={true}>About</Link></li>
          <li><Link to="experience" smooth={true}>Experience</Link></li>
          <li><Link to="contact" smooth={true}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
