import React from 'react';
import heroImage from '../assets/20201010_103457.jpg'; // Agrega tu imagen en src/assets

const Hero = () => {
  return (
    <div className="hero d-flex align-items-center text-white" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '50vh'

    }}>
      <div className="container text-center">
        <h1 className="display-4 fw-bold">Agricultura Regenerativa</h1>
        <p className="lead">Un proyecto de Daniel Vargas Hermosa</p>
      </div>
    </div>
  );
};

export default Hero;
