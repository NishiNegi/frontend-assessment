import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;

  return `${minutes}:${seconds}`;
};

const ProductCard = (props) => {
  const { title, image, id } = props;
  const [countdown, setCountdown] = useState(Math.floor(Math.random() * 120));
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
      const button = document.getElementById(`product-card__button${id}`);
      button.classList.add('product-card__button--disable');
    }
  }, [countdown]);

  return (
    <div className="product-card">
      <figure className="product-card__fig">
        <img src={image} alt={title} className="product-card__img" />
      </figure>
      <div className="product-card__caption">
        <h3 className="product-card__caption-header">{title}</h3>
        <p className="product-card__countdown">{formatTime(countdown)}</p>
        <Link
          id={`product-card__button${id}`}
          className="product-card__button"
          to={`/product/${id}`}
        >Go to detail
        </Link>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProductCard;
