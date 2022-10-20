import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="flex-row">
        <Link to="/about">
          <li className="mx-2">About Me</li>
        </Link>
        <li className="mx-2">
          <Link to="/projects">Portfolio</Link>
        </li>
        <li className="mx-2">
          <Link to="/resume">Resume</Link>
        </li>
        <li className="mx-2">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
