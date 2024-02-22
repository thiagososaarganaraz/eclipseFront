import React from "react";
import './Home.css';
import NavBar from "../NavBar/NavBar";
import Slider from "../Slider/Slider";

const Home = () =>{
  return(
    <div className="home-container">
      <NavBar/>
      <Slider/>
    </div>
  )
}

export default Home;