import React from 'react';

function Nav() {
  return (
    <nav className="navbar">
      <ul className="flex-row">
        <li className="mx-2">
          <a href="/about">About Me</a>
        </li>
        <li className="mx-2">
          <a href="/projects">Projects</a>
        </li>
        <li className="mx-2">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
