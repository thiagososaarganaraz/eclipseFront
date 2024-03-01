import React from "react";
import './Home.css';
import NavBar from "../NavBar/NavBar";
import Slider from "../Slider/Slider";
import Catalog from "../Catalog/Catalog";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";

export interface Product {
  Name: string;
}

let productos: Product[] = [
  { Name: "Producto 1" },
  { Name: "Producto 2" },
  { Name: "Producto 3" }
];

const Home = () =>{
  return(
    <div className="home-container">
      <NavBar/>
      <Slider/>
      <Catalog products={productos}/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default Home;