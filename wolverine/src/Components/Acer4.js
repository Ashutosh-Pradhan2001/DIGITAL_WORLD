import React from "react";
import "./Acer4.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Acer4 = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="Acer4">
        <img src="https://m.media-amazon.com/images/I/71xUZ1ZxgQS._SX450_.jpg" />
      </div>
      <div className="Acer4">
        <img src="https://m.media-amazon.com/images/I/71D09-CwGYS._SX450_.jpg " />
      </div>
      <div className="Acer4">
        <img src="https://m.media-amazon.com/images/I/71SaiZQh+MS._SX450_.jpg" />
      </div>

      <div className="Acer4">
        <img src="https://m.media-amazon.com/images/I/61ndrl5qfDS._SX450_.jpg" />
      </div>

      <div className="Acer4">
        <img src="https://m.media-amazon.com/images/I/719lrpKmG5S._SX450_.jpg" />
      </div>

      <div className="Acer4">
        <img src="https://m.media-amazon.com/images/I/61uM9F3qspS._SX450_.jpg" />
      </div>
    </Carousel>
  );
};

export default Acer4;
