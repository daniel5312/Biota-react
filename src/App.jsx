import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CarouselComponent from './components/CarouselComponent';
import Section from './components/Section';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="container">
        <CarouselComponent />
        <Section image="./assets/BIOTA.png" title="Nuestra Historia" text="Descubre cómo Biota Orgánicos empezó..." />
        <Section image="/example.jpg" title="Nuestros Productos" text="Orgánicos, frescos y de la mejor calidad" reverse />
        <Section image="/example.jpg" title="Capacitaciones" text="Aprende sobre prácticas agrícolas sostenibles" />
        <Section image="/example.jpg" title="Únete a nuestra comunidad" text="Forma parte del cambio hacia la sostenibilidad" reverse />
      </div>
      <Footer />
    </div>
  );
};

export default App;
