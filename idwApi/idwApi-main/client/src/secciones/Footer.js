import React from 'react';
import '../secciones/estilos.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 Hotel IDW. Todos los derechos reservados.</p>
        <div className="social-media">
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.twitter.com">Twitter</a>
          <a href="https://www.instagram.com">Instagram</a>
          <a href="https://www.linkedin.com">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
