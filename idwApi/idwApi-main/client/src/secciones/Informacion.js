import React from 'react';
import BarraNavegacion from './Barra';
import Footer from './Footer';
import './estilos.css';

function Informacion() {
  return (
    <div>
      <BarraNavegacion />

      <header className="informacion">
        <h2 className="titulo-info">Quienes somos</h2>
      </header>

      <section className="nosotros">
        <h2 className="titulo">Sobre Nosotros</h2>
        <p>
          Zorzales Hoteles es una cadena joven, dinámica y moderna con instalaciones en Bariloche y Buenos Aires. A lo largo de 10 años,
          hemos forjado una gran trayectoria en el mercado. Es nuestra prioridad distinguirnos en calidad, confianza, servicio al cliente
          y generar una experiencia vivencial a nuestros huéspedes. Nuestra propuesta de alojamiento está enfocada directamente en las
          necesidades de cada huésped bien sean en calidad de negocios o turismo. La infraestructura de nuestros hoteles nos permite brindar
          soluciones integrales para cada ocasión. La impronta de diseño en nuestros hoteles, combina calidez y buen gusto.
          En Latitud Hoteles las condiciones están dadas para garantizar una experiencia de confort y satisfacción.
        </p>

        <h2 className="titulo">Mision</h2>
        <p>
          Nuestro objetivo es brindar alojamientos cómodos y seguros que superen las expectativas de nuestros huéspedes. Estamos comprometidos
          a mantener altos estándares de calidad y servicio en todo momento. Con miras a la excelencia, nuestro propósito es ser una cadena
          hotelera innovadora en expansión internacional y servicios. Tenemos como desafío brindar una propuesta acorde a cada uno de nuestros
          huéspedes y dar respuestas a sus necesidades para así, garantizar que en la experiencia Latitud Hoteles a través de nuestra
          infraestructura y talento humano, se sientan a gusto al elegirnos.
        </p>

        <h2 className="titulo">Servicios</h2>
        <p>
          Zorzales Hoteles cuenta actualmente con hoteles ubicados estratégicamente en cada uno de sus destinos. Todas nuestras instalaciones
          han sido equipadas de tal forma que, la estadía de nuestros huéspedes sea una experiencia única y acogedora. Hace parte de nuestra
          impronta, sorprender a nuestros huéspedes con amabilidad y excelencia en nuestros servicios.

          Zorzales Hoteles desarrolla, comercializa y opera en Latinoamérica, por esto nos encontramos en una etapa de expansión en la cual
          nos proyectamos a sumar nuevos proyectos en diferentes puntos de la región.
        </p>
      </section>

      <Footer/>
    </div>
  );
}

export default Informacion;
