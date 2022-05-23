import React from "react";
import "./Acer2.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Acer2 = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="Acer2">
        <img src="https://m.media-amazon.com/images/I/71D3y82w27L._SX679_.jpg" />
      </div>
      <div className="Acer2">
        <img src="https://m.media-amazon.com/images/I/71ZOwrVAToL._SX569_.jpg" />
      </div>
      <div className="Acer2">
        <img src="https://m.media-amazon.com/images/I/9191lnOZRJL._SX569_.jpg" />
      </div>

      <div className="Acer2">
        <img src="https://m.media-amazon.com/images/I/81qxYvazGvL._SX569_.jpg" />
      </div>

      <div className="Acer2">
        <img src="https://m.media-amazon.com/images/I/71E3EOi0fML._SX569_.jpg" />
      </div>

      <div className="Acer2">
        <img src="https://m.media-amazon.com/images/I/71REhHF6-zL._SX569_.jpg" />
      </div>
    </Carousel>
  );
};

export default Acer2;
