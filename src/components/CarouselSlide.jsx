import React, { useEffect } from 'react';


const CarouselSlide = ({ id, images, title }) => {

 

  return (
    <div className="carousel-container">
      <div id={id} className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="carousel-image-wrapper">
                <img src={image} className="carousel-image" alt={`Slide ${index}`} />
              </div>
            </div>
          ))}
        </div>
        {/* <button
          className="carousel-control-prev custom-carousel-control"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button> */}
{/* 
        <button
          className="carousel-control-next custom-carousel-control"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
      <div className="carousel-title">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default CarouselSlide;

