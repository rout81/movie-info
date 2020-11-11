import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div>
        <img src={logo} alt="logo" width="250px" />
      </div>
      <div className="flex items-center relative">
        <input className="search p-1" type="text" width="200px" />
        <i className="material-icons absolute right-0">search</i>
      </div>
    </header>
  );
};

export default Header;
