import React from 'react';

const Section = ({ image, title, text, reverse }) => {
  return (
    <div className={`d-flex align-items-center py-5 ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="col-md-6">
        <img src={image} alt={title} className="img-fluid rounded" />
      </div>
      <div className="col-md-6 p-4">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Section;
