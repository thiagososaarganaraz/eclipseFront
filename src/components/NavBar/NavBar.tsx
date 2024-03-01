import React from "react";
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <div>
          <a href="#">PRODUCTOS</a>
        </div>
        <div>
          <a href="#">NOVEDADES</a>
        </div>
        <div>
          <a href="#">SEARCH</a>
        </div>
      </div>
      <div className="nav-center">
        <a href="#"><h1>ECLIPSE</h1></a>
      </div>
      <div className="nav-right">
        <div>
          <a href="#">CARRITO</a>
        </div>
        <div>
          <a href="#">USER</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
