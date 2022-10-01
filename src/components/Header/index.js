import React from 'react';
import Nav from '../Navigation';

function Header() {
  return (
    <header className="flex-row px-1">
      <div>
        <h1>
          <a href="/">Amy Gardiner</a>
        </h1>
        <Nav></Nav>
      </div>
    </header>
  );
}

export default Header;
