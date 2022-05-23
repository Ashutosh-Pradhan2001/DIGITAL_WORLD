import React from "react";
import "./HP2.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HP2 = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="HP2">
        <img
          src="https://m.media-amazon.com/images/I/81kf96c9T+L._SX569_.jpg"
          className="imGE1"
        />
      </div>
      <div className="HP2">
        <img src="https://m.media-amazon.com/images/I/811ZloIe2DL._SX425_.jpg" />
      </div>
      <div className="HP2">
        <img src="https://m.media-amazon.com/images/I/81k0lHcWYuL._SX425_.jpg" />
      </div>
      <div className="HP2">
        <img src="https://m.media-amazon.com/images/I/71dAXRglkgL._SX425_.jpg" />
      </div>

      <div className="HP2">
        <img src="https://m.media-amazon.com/images/I/71QFkGUt4QL._SX425_.jpg" />
      </div>
      <div className="HP2">
        <img src="https://m.media-amazon.com/images/I/61VJBNCPYRL._SX425_.jpg" />
      </div>
    </Carousel>
  );
};

export default HP2;
