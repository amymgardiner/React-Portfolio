import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './index.css';

import Homepage from './components/Homepage';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Header />
        <main>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
