import React from 'react';
import Nav from '../Navigation';

function Header(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <header className="flex-row px-1">
      <div>
        <h1>
          <a href="/">Amy Gardiner</a>
        </h1>
        <Nav>
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        </Nav>
      </div>
    </header>
  );
}

export default Header;
