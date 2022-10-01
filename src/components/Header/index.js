import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Navigation';

function Header() {
  return (
    <header className="flex-row px-1">
      <div>
        <h1>
          <Link to="/">Amy Gardiner</Link>
        </h1>
        <Nav></Nav>
      </div>
    </header>
  );
}

export default Header;
