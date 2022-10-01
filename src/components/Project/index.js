import React from 'react';

import MovieJuice from '../../assets/images/jakob-owens-CiUR8zISX60-unsplash.jpg';
import YouLou from '../../assets/images/brittney-butler-uZnoD1xuL9A-unsplash.jpg';
import PlaceHolder from '../../assets/images/huma-kabakci-oRk4Ep65tRc-unsplash.jpg';
import CodingQuiz from '../../assets/images/nguyen-dang-hoang-nhu-qDgTQOYk6B8-unsplash.jpg';
import WorkSchedule from '../../assets/images/eden-constantino-bTukYI4DjOs-unsplash.jpg';
import NoteTaker from '../../assets/images/david-travis-5bYxXawHOQg-unsplash.jpg';

function Portfolio() {
  return (
    <section class="portfolio">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img src={MovieJuice} alt="movieJuice" class="card-img-top" />
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
            <img src={PlaceHolder} alt="Final Project" class="card-img-top" />
            <div class="card-body">
              <a
                href="https://github.com/amymgardiner"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
              <a
                href="https://github.com/amymgardiner"
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
}

export default Portfolio;
