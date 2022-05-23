import React from "react";
import "./Lenovo2.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Lenovo2 = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="Lenovo2">
        <img src="https://m.media-amazon.com/images/I/51+yclVBCRL._SX569_.jpg" />
      </div>
      <div className="Lenovo2">
        <img
          src="https://m.media-amazon.com/images/I/61GAlWE9JsL._SX569_.jpg"
          className="imGE1"
        />
      </div>
      <div className="Lenovo2">
        <img src="https://m.media-amazon.com/images/I/61fIBa-d3GS._SX425_.jpg" />
      </div>
      <div className="Lenovo2">
        <img src="https://m.media-amazon.com/images/I/61X4Bfk7xyS._SX425_.jpg" />
      </div>
      <div className="Lenovo2">
        <img src="https://m.media-amazon.com/images/I/61pmF4xEj2S._SX425_.jpg" />
      </div>

      <div className="Lenovo2">
        <img src="https://m.media-amazon.com/images/I/61+7-S1jF9L._SX425_.jpg" />
      </div>
    </Carousel>
  );
};

export default Lenovo2;
