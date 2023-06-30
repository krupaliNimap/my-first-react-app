import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="nav">
      <Link className="menu" to="./HomePage">
        Home Page
      </Link>
      <Link className="menu" to="./ShoesPage">
        Shoes Page
      </Link>
      <Link className="menu" to="./ClothesPage">
        Clothes Page
      </Link>
    </div>
  );
};

export default Header;
