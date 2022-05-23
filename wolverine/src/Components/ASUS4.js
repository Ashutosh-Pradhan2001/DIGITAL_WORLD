import React from "react";
import "./ASUS4.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ASUS4 = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="ASUS4">
        <img src="https://m.media-amazon.com/images/I/41VujVrDFYL.jpg" />
      </div>
      <div className="ASUS4">
        <img src="https://m.media-amazon.com/images/I/418iwCQBJjL.jpg " />
      </div>
      <div className="ASUS4">
        <img src="https://m.media-amazon.com/images/I/31SnTJnMerL.jpg" />
      </div>

      <div className="ASUS4">
        <img src="https://m.media-amazon.com/images/I/319gX56mn2L.jpg" />
      </div>

      <div className="ASUS4">
        <img src="https://m.media-amazon.com/images/I/31UDM3434GL.jpg" />
      </div>

      <div className="ASUS4">
        <img src="https://m.media-amazon.com/images/I/11u78C+IpBL.jpg" />
      </div>
      <div className="ASUS4">
        <img src="https://m.media-amazon.com/images/I/31PY3-7OwKL.jpg" />
      </div>
    </Carousel>
  );
};

export default ASUS4;
