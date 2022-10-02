import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import AmyResume from './components/Resume';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="app">
          <Header />
          <main>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={AmyResume} />
            <Route exact path="/contact" component={Contact} />
          </main>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
