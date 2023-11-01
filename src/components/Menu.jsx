import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#0f0f0f', color: 'white'}}>
      <div className="container-div container-fluid">
        <Link to="/">Home</Link>
        <Link to="/tasks">Lista de tareas</Link>
        <Link to="/about">Sobre nosotros</Link>
      </div>
    </nav>
  );
};
export default Menu;
