import React from "react";
import "./header.css";
import Cta from "./Cta";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDownButton from "./ScrollDownButton";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ariel Biagio</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <Cta />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" className="header__img" />
        </div>

        <div className="scroll__group">
          <ScrollDownButton />
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
