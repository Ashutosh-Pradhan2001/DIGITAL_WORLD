import React from "react";
import "./ASUS2.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ASUS2 = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="ASUS2">
        <img src="https://m.media-amazon.com/images/I/91aWfctUptL._SX569_.jpg" />
      </div>
      <div className="ASUS2">
        <img src=" https://m.media-amazon.com/images/I/71pGrQ-aCJL._SX425_.jpg" />
      </div>
      <div className="ASUS2">
        <img src="https://m.media-amazon.com/images/I/71m4sv+OTeL._SX425_.jpg" />
      </div>

      <div className="ASUS2">
        <img src="https://m.media-amazon.com/images/I/71wkI3-OTEL._SX425_.jpg" />
      </div>

      <div className="ASUS2">
        <img src="https://m.media-amazon.com/images/I/71PZlQgOdYL._SX425_.jpg" />
      </div>

      <div className="ASUS2">
        <img src="https://m.media-amazon.com/images/I/71oWDQljNML._SX425_.jpg" />
      </div>
    </Carousel>
  );
};

export default ASUS2;
