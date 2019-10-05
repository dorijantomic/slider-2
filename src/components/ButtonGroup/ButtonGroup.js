import React from "react";
import "./ButtonGroup.scss";
const ButtonGroup = () => {
  return (
    <div className="button-group-container">
      <div className="gray">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            className="button-group-img"
            src={require("../../images/icons/arrow-gray-left.png")}
            alt=""
            srcset=""
          />
        </a>
      </div>

      <div className="blue">
        <a href="#">
          <img
            className="button-group-img"
            src={require("../../images/icons/arrow-blue-right.png")}
            alt=""
            srcset=""
          />
        </a>
      </div>
    </div>
  );
};

export default ButtonGroup;
