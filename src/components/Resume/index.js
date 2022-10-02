import React from 'react';
import Resume from '../../assets/images/Amy-Gardiner-Resume1024_1.png';

function AmyResume() {
  return (
    <section class="about">
      <h1 id="about">Resume</h1>
      <a href={require('../../assets/Amy-Gardiner-Resume.pdf')} download>
        <h4>Download my Resume</h4>
      </a>
      <img src={Resume} alt="Amy Gardiner Resume" />
      <p>
        <br></br>
        <br></br>
        <ul>
          <li>
            <h5>Skills:</h5>
          </li>
          <li>React</li>
          <li>MongoDB</li>
          <li>Handlebars.js</li>
          <li>MySQL</li>
          <li>Insomnia</li>
          <li>Heroku</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>REST APIs</li>
          <li>GitHub</li>
          <li>JavaScript</li>
          <li>Cascading Style Sheets (CSS)</li>
          <li>HTML</li>
        </ul>
      </p>
    </section>
  );
}

export default AmyResume;
