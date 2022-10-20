import React from 'react';

import MovieJuice from '../../assets/images/jakob-owens-CiUR8zISX60-unsplash.jpg';
import YouLou from '../../assets/images/intricate-explorer-Gt6D-s4M-04-unsplash.jpg';
import GitHubLite from '../../assets/images/roman-synkevych-wX2L8L-fGeA-unsplash.jpg';
import CodingQuiz from '../../assets/images/nguyen-dang-hoang-nhu-qDgTQOYk6B8-unsplash.jpg';
import WorkSchedule from '../../assets/images/eden-constantino-bTukYI4DjOs-unsplash.jpg';
import NoteTaker from '../../assets/images/david-travis-5bYxXawHOQg-unsplash.jpg';

const Projects = () => {
  return (
    <section class="portfolio">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img src={MovieJuice} alt="movieJuice" class="card-img-top" />
            movieJuice
            <div class="card-body">
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

        <div class="col">
          <div class="card">
            <img src={YouLou} alt="You in the Lou" class="card-img-top" />
            You in the Lou
            <div class="card-body">
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

        <div class="col">
          <div class="card">
            <img src={GitHubLite} alt="GitHubLite" class="card-img-top" />
            GitHubLite
            <div class="card-body">
              <a
                href="https://github.com/amymgardiner/Deep-Thoughts"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
              <a
                href="https://mighty-temple-98827.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={CodingQuiz} alt="Coding Quiz Game" class="card-img-top" />
            Coding Quiz Game
            <div class="card-body">
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

        <div class="col">
          <div class="card">
            <img
              src={WorkSchedule}
              alt="Work Day Scheduler"
              class="card-img-top"
            />
            Day Scheduler
            <div class="card-body">
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

        <div class="col">
          <div class="card">
            <img src={NoteTaker} alt="Note Taker" class="card-img-top" />
            Note Taker
            <div class="card-body">
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
    </section>
  );
};

export default Projects;
