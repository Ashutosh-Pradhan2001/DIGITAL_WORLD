import React from "react";
import "./HP3.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HP3 = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="HP3">
        <img src="https://m.media-amazon.com/images/I/712lajO8VaL._SX450_.jpg" />
      </div>
      <div className="HP3">
        <img src="https://m.media-amazon.com/images/I/71Wx6M18NkL._SX355_.jpg" />
      </div>
      <div className="HP3">
        <img src="https://m.media-amazon.com/images/I/71FzpoKlX5L._SX355_.jpg" />
      </div>

      <div className="HP3">
        <img src="https://m.media-amazon.com/images/I/61Y9SeQJB6L._SX355_.jpg" />
      </div>

      <div className="HP3">
        <img src="https://m.media-amazon.com/images/I/51tzqv3mKIL._SX355_.jpg" />
      </div>

      <div className="HP3">
        <img src="https://m.media-amazon.com/images/I/51QVAIjL40L._SX355_.jpg" />
      </div>
    </Carousel>
  );
};

export default HP3;
