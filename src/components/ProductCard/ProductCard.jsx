import React from "react";
import { Link } from "react-router-dom";

const ProductCard = props => {
  const {title, image, id} = props;
  return (
    <div>
      <figure>
        <img src={image} alt="" />
      </figure>
      <h3>{title}</h3>
      <div>Countdown</div>
      <Link to={`/product/${id}`}>Go to detail</Link>
    </div>
  );
};

export default ProductCard;
