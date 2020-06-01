import React from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
import FeaturedPlayer from "../../../assets/images/featured_player.png";

class TextFeature extends React.Component {
  animateNumber = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        rotate: 0,
      }}
      enter={{
        opacity: [1],
        rotate: [360],
        timing: { duration: 1000, ease: easePolyOut },
      }}
    >
      {(opacity) => {
        // console.log("opacity", opacity, "rotate", opacity.rotate);
        return (
          <div
            className="featured_number"
            style={{
              opacity,
              transform: `translate(260px, 20px) rotateY(${opacity.rotate}deg)`,
            }}
          >
            3
          </div>
        );
      }}
    </Animate>
  );

  animateFirst = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 503,
        y: 300,
      }}
      enter={{
        opacity: [1],
        x: [273],
        y: [300],
        timing: { duration: 500, ease: easePolyOut },
      }}
    >
      {(opacity, x, y) => {
        // console.log("opacity", opacity, "rotate", opacity.rotate);
        return (
          <div
            className="featured_first"
            style={{
              opacity,
              transform: `translate(${opacity.x}px, ${opacity.y}px)`,
            }}
          >
            League
          </div>
        );
      }}
    </Animate>
  );

  animateSecond = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 503,
        y: 420,
      }}
      enter={{
        opacity: [1],
        x: [273],
        y: [420],
        timing: { delay: 200, duration: 500, ease: easePolyOut },
      }}
    >
      {(opacity, x, y) => {
        return (
          <div
            className="featured_second"
            style={{
              opacity,
              transform: `translate(${opacity.x}px, ${opacity.y}px)`,
            }}
          >
            Championships
          </div>
        );
      }}
    </Animate>
  );

  animatePlayer = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
      }}
      enter={{
        opacity: [1],
        timing: { delay: 800, duration: 500, ease: easePolyOut },
      }}
    >
      {(opacity) => {
        return (
          <div
            className="featured_player"
            style={{
              opacity: { opacity },
              background: `url(${FeaturedPlayer})`,
              transform: `translate(600px, 65px)`,
            }}
          ></div>
        );
      }}
    </Animate>
  );

  render() {
    return (
      <div className="featured_text">
        {this.animatePlayer()}
        {this.animateNumber()}
        {this.animateFirst()}
        {this.animateSecond()}
      </div>
    );
  }
}

export default TextFeature;
