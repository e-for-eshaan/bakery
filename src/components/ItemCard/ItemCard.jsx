// lib
import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

// styles
import "./ItemCard.scss"

const ItemCard = ({
  title, description, price, rating, images
}) => {
  return <div className="itemCard">
    <Carousel images={images} />
    <div className="itemDetails">
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        ${price} <Rating rating={rating} />
      </div>
    </div>
  </div>;
};

const Rating = ({ rating }) => {
  return rating
}

const ImagesCarousel = ({ images }) => {

  return <div className="carousel">
    {
      images?.map(item => item ? "" : null)
    }
  </div>
}

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      {images.length > 1 && <FaArrowAltCircleLeft className="carousel__prev" onClick={nextSlide} />}
      <div className="carousel__slide">
        {images.map((image, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', width: '100%', height: 200 }}
            className={`carousel__image ${index === activeIndex ? "active" : ""}`}
          />
        ))}
      </div>
      {images.length > 1 && <FaArrowAltCircleRight className="carousel__next" onClick={prevSlide} />}
    </div>
  );
};



export default ItemCard;
