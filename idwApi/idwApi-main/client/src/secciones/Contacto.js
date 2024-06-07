import React from 'react';
import BarraNavegacion from './Barra';
import Footer from './Footer';
import './estilos.css';

function Contacto() {
  return (
    <div>
      <BarraNavegacion/>

      <section>
        <div className="form-container">
          <h2>Formulario de Contacto</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido:</label>
              <input type="text" id="apellido" name="apelido" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default Contacto;
