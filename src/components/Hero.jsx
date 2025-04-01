import React from 'react';
import heroImage from '../assets/foto_no_exif_juan.jpg'; // Agrega tu imagen en src/assets

const Hero = () => {
  return (
    <div className="hero d-flex align-items-center text-white" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      //backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundBlendMode: 'darken',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
     // backgroundPositionX: 'center',
      //backgroundPositionY: 'center',
      //backgroundPosition: 'center',
      height: '70vh',
      //marginLeft: '20px',
      
    }}>
      <div className="container text-center">
        <h1 className="display-4 fw-bold">Agricultura Regenerativa</h1>
        <p className="lead">Un proyecto de Daniel Vargas Hermosa</p>
      </div>
    </div>
  );
};

export default Hero;
