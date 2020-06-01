import React from "react";
import Stripes from "./stripes.feature";
import TextFeature from "./text.feature";

const Feature = () => {
  return (
    <div className="featured_wrapper">
      <Stripes />
      <TextFeature />
    </div>
  );
};

export default Feature;
