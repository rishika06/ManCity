import React from "react";
import { Tag } from "../../ui/misc";
import Blocks from "./blocks.matches";

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag bck="#0e1731" size="50px" color="#fff">
          Matches
        </Tag>
        <Blocks /> <br />
        <Tag
          bck="#fff"
          size="20px"
          color="#0e1731"
          link={true}
          linkTo="/the_team"
        >
          See more matches
        </Tag>
      </div>
    </div>
  );
};

export default MatchesHome;
