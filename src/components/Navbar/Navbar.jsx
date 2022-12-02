import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Navbar = () => (
  <nav className="top-navbar">
    <ul className="top-navbar__ul">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
