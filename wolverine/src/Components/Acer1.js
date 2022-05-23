import React from "react";
import "./Acer1.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Acer1 = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="Acer1">
        <img src="https://m.media-amazon.com/images/I/71XrhZlgYML._SX425_.jpg" />
      </div>
      <div className="Acer1">
        <img src="https://m.media-amazon.com/images/I/91YD-5OAmUL._SX425_.jpg" />
      </div>
      <div className="Acer1">
        <img src="https://m.media-amazon.com/images/I/81Y-RIfuaIL._SX425_.jpg" />
      </div>

      <div className="Acer1">
        <img src="https://m.media-amazon.com/images/I/61KOF+FCIRL._SX425_.jpg" />
      </div>

      <div className="Acer1">
        <img src="https://m.media-amazon.com/images/I/61gePcNZ28L._SX425_.jpg" />
      </div>

      <div className="Acer1">
        <img src="https://m.media-amazon.com/images/I/91bguHnx77L._SX425_.jpg" />
      </div>
      <div className="Acer1">
        <img src="https://m.media-amazon.com/images/I/81GMbb31DUL._SX425_.jpg" />
      </div>
    </Carousel>
  );
};

export default Acer1;
