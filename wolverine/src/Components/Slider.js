import React from "react";
import "./Sllider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import bannerA from "../assets/images/764016b15837a02fdeeb7a0f697f1902.jpg";
import bannerB from "../assets/images/banner_164792607361de769736f65b21e9c81da0163aaaf9.jpeg";
import bannerC from "../assets/images/banner_164852300762efa60e844a15758ee24183cc807694.jpeg";
import bannerD from "../assets/images/fjvmy8nnrtzlp0rj-0_0_desktop_1X.webp";
import bannerE from "../assets/images/banner_1644914130b0ed9a75e4b5062effe545d1c43eac8c.jpeg";
import bannerF from "../assets/images/banner_1642554221c17ab0336db2eff0b99e67c426b669e4.jpeg";
import bannerG from "../assets/images/banner_16421481999c3ffdb6fcbe118be5144438ebaf9828 (1).jpeg";
import bannerH from "../assets/images/banner_1646987808131ef06b514a8cc41cc6a32dc19a71cf.jpeg";

const Slider = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="cliderImg ">
        <img src={bannerA} className="imGE1" />
      </div>
      <div className="cliderImg">
        <img src={bannerB} />
      </div>

      <div className="cliderImg">
        <img src="https://www.asus.com/WebsitesBanner/IN/banners/injlkhokmo4wu0cb/injlkhokmo4wu0cb-0_0_desktop_0_1X.jpg?webp" />
      </div>

      <div className="cliderImg">
        <img src={bannerC} />
      </div>
      <div className="cliderImg">
        <img src={bannerD} />
      </div>

      <div className="cliderImg">
        <img src={bannerE} />
      </div>

      <div className="cliderImg">
        <img src="https://www.asus.com/WebsitesBanner/IN/banners/krokdrqcx1dqwu1l/krokdrqcx1dqwu1l-0_0_desktop_0_1X.jpg?webp" />
      </div>

      <div className="cliderImg">
        <img src="https://www.asus.com/WebsitesBanner/IN/banners/mstxuyirpcqkdbaa/mstxuyirpcqkdbaa-0_0_desktop_0_1X.jpg?webp" />
      </div>

      <div className="cliderImg">
        <img src={bannerF} />
      </div>

      <div className="cliderImg">
        <img src={bannerG} />
      </div>

      <div className="cliderImg">
        <img src={bannerH} />
      </div>

      <div className="cliderImg">
        <img src="https://www.asus.com/WebsitesBanner/IN/banners/ft5ypdzubxftqfnk/ft5ypdzubxftqfnk-0_0_desktop_1X.jpg?webp" />
      </div>
    </Carousel>
  );
};

export default Slider;
