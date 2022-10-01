import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <section className="home my-5">
      <div className="title">
        <h2>Hi, I'm Amy.</h2>
        <p>Welcome to my boot camp student portfolio!</p>
        <Link to="projects">
          <button>View My Projects</button>
        </Link>
      </div>
    </section>
  );
}

export default Homepage;
