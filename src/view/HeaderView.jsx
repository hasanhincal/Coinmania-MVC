import React from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header>
      <Link to={"/home"} className="h-logo">
        <img className="logo-img" src="/c-logo.png" alt="logo" />
        <h3 className="logo-title text-white">Coinmania</h3>
      </Link>
      <nav className="buttons">
        <NavLink to={"/home"}>Anasayfa</NavLink>
        <NavLink to={"/"}>Kayıt Ol</NavLink>
      </nav>
    </header>
  );
};

export default HeaderView;
