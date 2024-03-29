import React from 'react';
import Selfie from '../../assets/images/120844674_10158808628028328_8170920614770695289_n.jpg';

const Home = () => {
  return (
    <section className="home my-5">
      <div className="title">
        <h2>Hi, I'm Amy.</h2>
        <p>Welcome to my student web development portfolio!</p>
      </div>
      <div className="selfie portrait">
        <img src={Selfie} alt="self portrait" />
      </div>
    </section>
  );
};

export default Home;
