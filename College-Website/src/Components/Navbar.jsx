import React from "react";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import menu_icon from "../assets/menu-icon.png";

const Navbar = () => {
  const [Sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${Sticky ? "dark-nav" : ""} `}>
      <div className="logo">
        <img src={logo} alt="brand-logo" />
      </div>
      <div className="navigations">
        <ul className={mobileMenu ? "" : "hideMenubar"}>
          <li>Home</li>
          <li>Programs</li>
          <li>About Us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <button className="btn">Contact Us</button>
        </ul>
        <img
          src={menu_icon}
          className="menubar_icon"
          alt=""
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;
