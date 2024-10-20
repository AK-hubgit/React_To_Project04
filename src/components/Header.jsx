import React from "react";
import img from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <header id="header">
      <img src={img} alt="img" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}

export default Header;
