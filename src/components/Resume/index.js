import React from 'react';
import Resume from '../../assets/images/d2a6f16c729540fb96618cf2c4f8d7d2-0001.jpg';

const AmyResume = () => {
  return (
    <section className="resume">
      <h1 id="resume-header">Resume</h1>
      <img src={Resume} className="resume--img" alt="Amy Gardiner Resume" />
    </section>
  );
};

export default AmyResume;
