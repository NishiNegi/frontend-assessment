import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = (props) => {
  const { title, image, id } = props;
  const countdownInit = Math.floor(Math.random() * 10);
  const [seconds, setSeconds] = useState(countdownInit);
  const countdown = setInterval(() => {
    setSeconds(seconds - 1);
    console.log(seconds);
  }, 1000);
  useEffect(() => {
    if (seconds <= 0) {
      console.log('STOP!');
      clearInterval(countdown);
    }
  }, [seconds]);
  return (
    <div className="product-card">
      <figure className="product-card__fig">
        <img src={image} alt={title} className="product-card__img" />
      </figure>
      <h3>{title}</h3>
      <div>countdown</div>
      <Link to={`/product/${id}`}>Go to detail</Link>
    </div>
  );
};
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProductCard;
