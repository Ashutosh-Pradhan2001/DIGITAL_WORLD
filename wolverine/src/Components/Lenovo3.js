import React from "react";
import "./Lenovo3.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Lenovo3 = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="Lenovo3">
        <img src="https://m.media-amazon.com/images/I/51jLW8T47US._SX569_.jpg" />
      </div>

      <div className="Lenovo3">
        <img src="https://m.media-amazon.com/images/I/61yt4Me80ES._SX355_.jpg" />
      </div>

      <div className="Lenovo3">
        <img src="https://m.media-amazon.com/images/I/61kmYibZFAS._SX355_.jpg" />
      </div>

      <div className="Lenovo3">
        <img src="https://m.media-amazon.com/images/I/31TxlhDHoDS._SY355_.jpg" />
      </div>
    </Carousel>
  );
};

export default Lenovo3;
