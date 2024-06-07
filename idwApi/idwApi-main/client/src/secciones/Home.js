import React from 'react';
import BarraNavegacion from './Barra';
import Footer from './Footer';
import './estilos.css';
import habitacion1 from './img/habitacion1.jpg';
import habitacion2 from './img/habitacion2.jpg';
import habitacion3 from './img/habitacion3.jpg';

function Home() {
  return (
    <div>
        <BarraNavegacion/>

      <header className="contenido principal">
        <h2 className="titulo-principal">Hotel IDW</h2>
        <p>¡Vive el lujo, reserva tu escapada perfecta con nosotros!</p>

        <div className="boton">
          <a href="#" className="boton">¡RESERVAR!</a>
        </div>
      </header>

      <section className="contenido hab">
        <h2 className="titulo-hab">Habitaciones Exclusivas</h2>
        <p>
          ¡Explora nuestras habitaciones y da el primer paso hacia una escapada perfecta!
        </p>
        <div className="habitaciones">
          <div className="imagen-texto">
            <img src={habitacion1} alt="Habitación 1" />
            <h3>Habitacion 1</h3>
            <p>Labore molestias consectetur veniam</p>
          </div>
          <div className="imagen-texto">
            <img src={habitacion2} alt="Habitación 2" />
            <h3>Habitacion 2</h3>
            <p>Labore molestias consectetur veniam</p>
          </div>
          <div className="imagen-texto">
            <img src={habitacion3} alt="Habitación 3" />
            <h3>Habitacion 3</h3>
            <p>Labore molestias consectetur veniam</p>
          </div>
          <a href="#" className="boton">Ver más</a>
        </div>
      </section>

      <section className="contenido exclusivo">
        <article className="img-texto">
          <h2 className="titulo">Descuentos exclusivos ¡No te lo pierdas!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facere alias expedita delectus, dolorum provident porro atque.
            Earum itaque perferendis voluptate! Deserunt numquam, libero
            reiciendis aut fugit asperiores perspiciatis est accusantium?
          </p>
          <a href="#" className="boton">Más info</a>
        </article>
      </section>

      <section className="contenido extra">
        <h2 className="titulo">Lorem</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facere alias expedita delectus, dolorum provident porro atque.
          Earum itaque perferendis voluptate! Deserunt numquam, libero
          reiciendis aut fugit asperiores perspiciatis est accusantium?
        </p>
      </section>

    <Footer/>
    </div>
  );
}

export default Home;
