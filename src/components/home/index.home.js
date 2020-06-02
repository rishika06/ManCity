import React from "react";
import Feature from "./feature/index.feature";
import MatchesHome from "./matches/index.matches";
import MeetPLayers from "./meetPlayers/index.meetplayers";

const Home = () => {
  return (
    <div className="bck_blue">
      <Feature />
      <MatchesHome />
      <MeetPLayers />
    </div>
  );
};

export default Home;
