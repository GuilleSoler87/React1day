import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-title">Mi página personal</h1>
      <nav className="header-nav">
        <a href="#" className="header-nav-link">
          Inicio
        </a>
        <a href="#" className="header-nav-link">
          Proyectos
        </a>
        <a href="#" className="header-nav-link">
          Contacto
        </a>
      </nav>
    </div>
  );
};

export default Header;
