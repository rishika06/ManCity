import React from "react";
import Feature from "./feature/index.feature";
import MatchesHome from "./matches/index.matches";
import MeetPLayers from "./meetPlayers/index.meetplayers";
import Promotion from "./promotion/index.promotion";

const Home = () => {
  return (
    <div className="bck_blue">
      <Feature />
      <MatchesHome />
      <MeetPLayers />
      <Promotion />
    </div>
  );
};

export default Home;
