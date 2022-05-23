import React from "react";
import { Article } from "../Components/Article";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import Slider from "../Components/Slider";
import Slider2 from "../Components/Slider2";

const Home = ({ user }) => {
  return (
    <div>
      <Header user={user} />,
      <Slider />
      <Article />,{/* <Wave />, */}
      <Slider2 />
      <Footer />
    </div>
  );
};

export default Home;
