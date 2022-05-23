import React from "react";
import "./HP1.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HP1 = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="HP1">
        <img src="https://m.media-amazon.com/images/I/81Ln6w1hqtL._SX569_.jpg" />
      </div>
      <div className="HP1">
        <img src="https://m.media-amazon.com/images/I/81wQH-xjWeL._SX425_.jpg" />
      </div>
      <div className="HP1">
        <img src="https://m.media-amazon.com/images/I/71h7pHd7XpL._SX425_.jpg" />
      </div>

      <div className="HP1">
        <img src="https://m.media-amazon.com/images/I/81N00pVJqwL._SX425_.jpg" />
      </div>

      <div className="HP1">
        <img src="https://m.media-amazon.com/images/I/71c9Wbx75TL._SX425_.jpg" />
      </div>

      <div className="HP1">
        <img src="https://m.media-amazon.com/images/I/61UGK1eD+DL._SX425_.jpg" />
      </div>
    </Carousel>
  );
};

export default HP1;
