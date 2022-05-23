import React from "react";
import "./Lenovo1.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Lenovo1 = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="Lenovo1">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/I/41NvMZxjbKL._SX300_SY300_QL70_FMwebp_.jpg"
          className="imGE1"
        />
      </div>
      <div className="Lenovo1">
        <img src="https://m.media-amazon.com/images/I/61rdZMRkm3L._SX569_.jpg" />
      </div>
      <div className="Lenovo1">
        <img src="https://m.media-amazon.com/images/I/51H8TbQv8CL._SX425_.jpg" />
      </div>
      <div className="Lenovo1">
        <img src="https://m.media-amazon.com/images/I/610XeNJXxhL._SX425_.jpg" />
      </div>

      <div className="Lenovo1">
        <img src="https://m.media-amazon.com/images/I/51tncWCdtXL._SX425_.jpg" />
      </div>

      <div className="Lenovo1">
        <img src="https://m.media-amazon.com/images/I/61ol+1eJOkL._SX425_.jpg" />
      </div>
    </Carousel>
  );
};

export default Lenovo1;
