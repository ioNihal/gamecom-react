
import React from 'react';
import '../styles/NavbarCon.css';

const Navbar = () => {
  return (
    <ul className="navbar">
      <li><a href="#home">HOME</a></li>
      <li><a href="#features">FEATURES</a></li>
      <li><a href="#about">ABOUT</a></li>
      <li><a href="#enquiry">ENQUIRY</a></li>
      <li><a href="#whitelist">WHITELIST</a></li>
    </ul>
  );
};

export default Navbar;
