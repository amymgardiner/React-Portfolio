import React, { Component } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={Homepage} />
              <Route path="about" element={About} />
              <Route path="contact" element={Contact} />
              <Route path="portfolio" celement={Projects} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
