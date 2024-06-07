import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './secciones/Home';
import Informacion from './secciones/Informacion';
import Contacto from './secciones/Contacto';
import './secciones/estilos.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;