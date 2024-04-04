import React from "react";
import NavBar from "../../utility/NavBar/NavBar";
import Hero from "../../utility/Hero/Hero";
import Watch from "../../assets/watch.png";
import Ear1 from "../../assets/image9.png";
import Ear2 from "../../assets/image8.png";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <NavBar />
      <Hero />

      <div className="ear-container">
        <div className="ear-left">
          <img src={Ear1} alt="" />
        </div>
        <div className="ear-mid">
          <h3>Rich sound always.</h3>
        </div>
        <div className="ear-right">
          <img src={Ear2} alt="" />
        </div>
      </div>

      <div className="watch-container">
        <div className="watch-left">
          <h3>
            Help by Google . <br />
            Health by Fitbit. <br />
            Made for you.
          </h3>
        </div>
        <div className="watch-right">
          <img src={Watch} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
