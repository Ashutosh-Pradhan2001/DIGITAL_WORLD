import React from "react";
import "./Slider2.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import bannerI from "../assets/images/Yoga-6-D.jpg";
import bannerJ from "../assets/images/MacBook-Air-D.webp";
import bannerK from "../assets/images/Intel-11th-Gen-Gaming-Laptop-CLP-Banner-20-09-2021.webp";
import bannerL from "../assets/images/HP-ENVY-CLP-Banner-04-03-2022.jpg";
import bannerM from "../assets/images/Acer-Banner-CLP-D.jpg";
import bannerN from "../assets/images/Asus-VivoBook-Pro-Desktop.webp";
import bannerO from "../assets/images/ASUS-Vivobook-Slate-CLP-Banner-23-02-2022.jpg";
import bannerP from "../assets/images/1365x260.webp";

const Slider2 = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="cliderImg2">
        <img src={bannerI} />
      </div>

      <div className="cliderImg2">
        <img src={bannerJ} />
      </div>

      <div className="cliderImg2">
        <img src={bannerK} />
      </div>

      <div className="cliderImg2">
        <img src={bannerL} />
      </div>

      <div className="cliderImg2">
        <img src={bannerM} />
      </div>

      <div className="cliderImg2">
        <img src={bannerN} />
      </div>

      <div className="cliderImg2">
        <img src={bannerO} />
      </div>

      <div className="cliderImg2">
        <img src={bannerP} />
      </div>
    </Carousel>
  );
};

export default Slider2;
