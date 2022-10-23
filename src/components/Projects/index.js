import React from 'react';

import MovieJuice from '../../assets/images/jakob-owens-CiUR8zISX60-unsplash.jpg';
import YouLou from '../../assets/images/intricate-explorer-Gt6D-s4M-04-unsplash.jpg';
import GitHubLite from '../../assets/images/roman-synkevych-wX2L8L-fGeA-unsplash.jpg';
import CodingQuiz from '../../assets/images/nguyen-dang-hoang-nhu-qDgTQOYk6B8-unsplash.jpg';
import WorkSchedule from '../../assets/images/eden-constantino-bTukYI4DjOs-unsplash.jpg';
import NoteTaker from '../../assets/images/david-travis-5bYxXawHOQg-unsplash.jpg';

const Projects = () => {
  return (
    <section className="portfolio">
      <div>
        <h1 className="projects">My Projects</h1>
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={MovieJuice} alt="movieJuice" className="card-img-top" />
              movieJuice
              <div className="card-body">
                <a
                  href="https://github.com/amymgardiner/movieJuice"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://amymgardiner.github.io/movieJuice/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Website</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={YouLou} alt="You in the Lou" className="card-img-top" />
              You in the Lou
              <div className="card-body">
                <a
                  href="https://github.com/olliedirker/You-in-the-Lou"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://gp-2.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Website</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={GitHubLite} alt="GitHubLite" className="card-img-top" />
              GitHub Lite
              <div className="card-body">
                <a
                  href="https://github.com/amymgardiner/GitHub-Lite"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://radiant-basin-16315.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Website</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src={CodingQuiz}
                alt="Coding Quiz Game"
                className="card-img-top"
              />
              Coding Quiz Game
              <div className="card-body">
                <a
                  href="https://github.com/amymgardiner/Coding-Quiz-Game"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://amymgardiner.github.io/Coding-Quiz-Game/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Website</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src={WorkSchedule}
                alt="Work Day Scheduler"
                className="card-img-top"
              />
              Day Scheduler
              <div className="card-body">
                <a
                  href="https://github.com/amymgardiner/Work-Day-Scheduler"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://amymgardiner.github.io/Work-Day-Scheduler/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Website</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={NoteTaker} alt="Note Taker" className="card-img-top" />
              Note Taker
              <div className="card-body">
                <a
                  href="https://github.com/amymgardiner/Note-Taker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://sleepy-caverns-23548.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Website</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
