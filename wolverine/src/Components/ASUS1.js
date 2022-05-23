import React from "react";
import "./ASUS1.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ASUS1 = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="ASUS1">
        <img src="https://m.media-amazon.com/images/I/71WuDXpTAlL._SY450_.jpg" />
      </div>
      <div className="ASUS1">
        <img src="https://m.media-amazon.com/images/I/71zZIqOvkeL._SY355_.jpg " />
      </div>
      <div className="ASUS1">
        <img src="https://m.media-amazon.com/images/I/81Pu6bwxFnL._SY355_.jpg" />
      </div>

      <div className="ASUS1">
        <img src="https://m.media-amazon.com/images/I/718Arp2c5gS._SY355_.jpg" />
      </div>

      <div className="ASUS1">
        <img src="https://m.media-amazon.com/images/I/81aXcizNWyS._SY355_.jpg" />
      </div>

      <div className="ASUS1">
        <img src="https://m.media-amazon.com/images/I/61QrgBXXb+S._SY355_.jpg" />
      </div>
    </Carousel>
  );
};

export default ASUS1;
