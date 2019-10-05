import React from "react";
import "./Slider.scss";

const Slider = ({ images }) => {
  return (
    <div id="slider">
      <div id="slider-wrapper">
        <div className="top">
          <img src={images[0].src} className="slide" />
          <img src={images[1].src} className="slide" />
          <img src={images[2].src} className="slide" />
          <img src={images[3].src} className="slide" />
          <img src={images[4].src} className="slide" />
        </div>

        <div className="bottom">
          <img src={images[5].src} className="slide" />
          <img src={images[6].src} className="slide" />
          <img src={images[7].src} className="slide" />
          <img src={images[8].src} className="slide" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
