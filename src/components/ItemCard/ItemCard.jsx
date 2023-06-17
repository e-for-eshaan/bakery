// lib
import React from "react";

// styles
import "./ItemCard.scss"

const ItemCard = ({
  title, description, price, rating, images
}) => {
  return <div>
    <ImagesCarousel images={images} />
    <h1>{title}</h1>
    <p>{description}</p>
    <p>{price}</p>
    <Rating rating={rating} />
  </div>;
};

const Rating = ({ rating }) => {
  return <div>{rating}</div>
}

const ImagesCarousel = ({ images }) => {
  return <div>
    {
      images?.map(item => <img src={item} alt="" />)
    }
  </div>
}

export default ItemCard;
