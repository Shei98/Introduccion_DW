import React from 'react';
import './estilos.css';
import logo from './img/logo.png'

function BarraNavegacion() {
  return (
    <div className="barra">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/contacto">CONTACTO</a></li>
          <li><a href="/informacion">SOBRE NOSOTROS</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default BarraNavegacion;
