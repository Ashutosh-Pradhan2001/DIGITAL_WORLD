import React from "react";
import "./Lenovo4.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Lenovo4 = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="Lenovo4">
        <img src="https://images-eu.ssl-images-amazon.com/images/I/5174QzS5xDL._SX300_SY300_QL70_FMwebp_.jpg" />
      </div>
      <div className="Lenovo4">
        <img src="https://m.media-amazon.com/images/I/71Bjq7lIWgL._SX425_.jpg" />
      </div>

      <div className="Lenovo4">
        <img src="https://m.media-amazon.com/images/I/61eWonJwXkL._SX425_.jpg" />
      </div>

      <div className="Lenovo4">
        <img src="https://m.media-amazon.com/images/I/61eTS7qj-SL._SX425_.jpg" />
      </div>

      <div className="Lenovo4">
        <img src="https://m.media-amazon.com/images/I/61U2Cgg4cGL._SX425_.jpg" />
      </div>

      <div className="Lenovo4">
        <img src="https://m.media-amazon.com/images/I/61kAkM5V-NL._SX425_.jpg" />
      </div>
    </Carousel>
  );
};

export default Lenovo4;
