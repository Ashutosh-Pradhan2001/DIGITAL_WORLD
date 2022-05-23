import React from "react";
import "./Acer3.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Acer3 = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="Acer3">
        <img src="https://m.media-amazon.com/images/I/61TWFbueNiL._SX425_.jpg" />
      </div>
      <div className="Acer3">
        <img src="https://m.media-amazon.com/images/I/81J808QriTL._SX425_.jpg" />
      </div>
      <div className="Acer3">
        <img src="https://m.media-amazon.com/images/I/81astuP8HsL._SX425_.jpg" />
      </div>

      <div className="Acer3">
        <img src="https://m.media-amazon.com/images/I/61VQftEnd6L._SX425_.jpg" />
      </div>

      <div className="Acer3">
        <img src="https://m.media-amazon.com/images/I/812SoiCT+nL._SX425_.jpg" />
      </div>

      <div className="Acer3">
        <img src="https://m.media-amazon.com/images/I/91bguHnx77L._SX425_.jpg" />
      </div>
      <div className="Acer3">
        <img src="https://m.media-amazon.com/images/I/81GMbb31DUL._SX425_.jpg" />
      </div>
    </Carousel>
  );
};

export default Acer3;
