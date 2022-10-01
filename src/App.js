import React from 'react';
import { Route } from 'react-router-dom';
import './index.css';

import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
