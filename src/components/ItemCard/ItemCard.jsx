// lib
import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import store from "../../redux/store";

// styles
import "./ItemCard.scss"

// images
import cart from "../../images/cart.svg"


const ItemCard = ({
  title, description, price, rating, images
}) => {

  const item = { title, description, price, rating, images }

  return <div className="itemCard">
    <Carousel images={images} />
    <div className="itemDetails">
      <h1>{title}</h1>
      {/* <p>{description}</p> */}
      <div className="valueWrap">
        ${price}
        <AddToCart item={item} />
      </div>
      <div>
        <StarRating rating={rating} />
      </div>
    </div>
  </div>;
};

const StarRating = ({ rating }) => {
  const starIcons = [];
  const maxRating = 5;
  const ratingNumber = parseInt(rating)
  for (let i = 0; i < maxRating; i++) {
    const starClass = i < ratingNumber ? 'star-filled' : 'star-empty';
    starIcons.push(<span key={i} className={`star ${starClass}`} />);
  }

  return <div className="star-rating">{starIcons}</div>;
};

const AddToCart = ({ item }) => {
  const dispatch = useDispatch();
  const [count, setcount] = useState(0)

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART", payload: item
    });
  };
  const handleDeleteItem = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };
  store.subscribe(() => setcount(store.getState().cartItems.filter(i => i.title === item.title).length))
  return <div className="addToCart">

    {count
      ? <> <div className="cartButtons" onClick={handleDeleteItem}>
        -
      </div>
        {count}
        <div className="cartButtons" onClick={handleAddToCart}>
          +
        </div></>
      : <div className="addtocartButton" onClick={handleAddToCart}>Add to Cart</div>}
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
