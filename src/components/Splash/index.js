import React from "react";

import Nav from "./Nav";
import MainInfo from "./MainInfo";
import ParticlesComponent from "../../config/particles";

const Splash = () => {
  return (
    <ParticlesComponent>
      <Nav />
      <MainInfo />
    </ParticlesComponent>
  );
};

export default Splash;
