import React from "react";
import "./HP4.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HP4 = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="HP4">
        <img src="https://m.media-amazon.com/images/I/51DmOWr3rnL._SX466_.jpg" />
      </div>
      <div className="HP4">
        <img
          src="https://m.media-amazon.com/images/I/51yK58ms0IL._SX425_.jpg"
          className="imGE1"
        />
      </div>
      <div className="HP4">
        <img src="https://m.media-amazon.com/images/I/61yzypPAPxL._SX466_.jpg" />
      </div>
      <div className="HP4">
        <img src="https://m.media-amazon.com/images/I/61QLgsXW1qL._SX425_.jpg" />
      </div>
      <div className="HP4">
        <img src="https://m.media-amazon.com/images/I/81E7c4v2-3L._SX425_.jpg" />
      </div>

      <div className="HP4">
        <img src="https://m.media-amazon.com/images/I/514Tpzmru1L._SX425_.jpg" />
      </div>
    </Carousel>
  );
};

export default HP4;
