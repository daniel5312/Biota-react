import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/src/assets/BIOTA.png" alt="Primera imagen" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/src/assets/bwink_ind_02_single_08.jpg" alt="Segunda imagen" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/img3.jpg" alt="Tercera imagen" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
