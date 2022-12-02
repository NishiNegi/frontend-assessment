/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;

  return `${minutes}:${seconds}`;
};

const ProductCard = (props) => {
  const { title, image, id } = props;
  const [countdown, setCountdown] = useState(Math.floor(Math.random() * 60));
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      const button = document.getElementById('button');
      button.classList.add('disable');
    }
  }, [countdown]);

  return (
    <div className="product-card">
      <figure className="product-card__fig">
        <img src={image} alt={title} className="product-card__img" />
      </figure>
      <h3>{title}</h3>
      <div>{formatTime(countdown)}</div>
      <Link id="button" to={`/product/${id}`}>Go to detail</Link>
    </div>
  );
};
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProductCard;
