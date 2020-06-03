import React from "react";
import EnrollPromotion from "./enroll.promotion";
import AnimationPromotion from "./animation.promotion";

const Promotion = () => (
  <div className="promotion_wrapper" style={{ background: "#fff" }}>
    <div className="container">
      <AnimationPromotion />
      <EnrollPromotion />
    </div>
  </div>
);

export default Promotion;
