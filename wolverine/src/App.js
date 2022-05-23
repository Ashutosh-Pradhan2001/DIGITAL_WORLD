import "./App.css";
import { Header } from "./Components/Header";
import { Article } from "./Components/Article";
import { Footer } from "./Components/Footer";
import Slider from "./Components/Slider";
import Slider2 from "./Components/Slider2";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./home/Home";
import Sign_in from "./Components/auth/Sign_in";
import UserLogin from "./Components/auth/UserLogin";
import { useEffect, useState } from "react";
import axios from "axios";
import Shopcart from "./Components/Shopcart";
// import Wave from "react-wavify";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const findme = async () => {
      try {
        const res = await axios.get("/me");
        setUser(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    findme();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route
            path="/signin"
            element={user ? <Navigate to="/" /> : <Sign_in />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <UserLogin />}
          />
          <Route path="/checkout/:product" element={<Shopcart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
