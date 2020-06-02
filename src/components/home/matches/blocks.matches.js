import React from "react";
import { firebaseMatches } from "../../../firebase";
import { firebaseLooper } from "../../ui/misc";

import MatchBlock from "../../ui/matches-block";
import Slide from "react-reveal/Slide";

class Blocks extends React.Component {
  constructor() {
    super();
    this.state = {
      matches: [],
    };
  }

  componentDidMount() {
    firebaseMatches
      .limitToLast(6)
      .once("value")
      .then((snapshot) => {
        const matches = firebaseLooper(snapshot).reverse();
        this.setState({ matches });
      });
  }

  showMatches = (matches) =>
    matches
      ? matches.map((match) => (
          <Slide bottom key={match.id}>
            <div className="item">
              <div className="wrapper">
                <MatchBlock match={match} />
              </div>
            </div>
          </Slide>
        ))
      : null;

  render() {
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}

export default Blocks;
