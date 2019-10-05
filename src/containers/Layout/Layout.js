import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import "./Layout.scss";
import Slider from "../../components/Slider/Slider";
import TextContent from "../../components/TextContent/TextContent";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";

export default class Layout extends Component {
  state = {
    images: [
      { id: 1, src: require("../../images/gallery/slider-image-1.jpg") },
      { id: 2, src: require("../../images/gallery/slider-image-2.jpg") },
      { id: 3, src: require("../../images/gallery/slider-image-3.jpg") },
      { id: 4, src: require("../../images/gallery/slider-image-4.jpg") },
      { id: 5, src: require("../../images/gallery/slider-image-5.jpg") },
      { id: 6, src: require("../../images/gallery/slider-image-6.jpg") },
      { id: 7, src: require("../../images/gallery/slider-image-7.jpg") },
      { id: 8, src: require("../../images/gallery/slider-image-8.jpg") },
      { id: 9, src: require("../../images/gallery/slider-image-9.jpg") }
    ]
  };
  render() {
    return (
      <div className="layout-container">
         <Navigation className="navigation-top" />
         <div className="layout-main-container">
          <Slider images={this.state.images}/>
          <TextContent />
         </div>
         <ButtonGroup />
        <Navigation className="navigation-bottom" />
      </div>
    );
  }
}
