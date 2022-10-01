import React from 'react';
import { Route } from 'react-router-dom';

import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Route exact path="/about" component={About} />
      </main>
    </div>
  );
}

export default App;
