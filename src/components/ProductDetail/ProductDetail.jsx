/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

const ProductDetail = (props) => {
  const {
    name,
    image,
    description,
    category,
    price,
  } = props;

  return (
    <div className="product-detail">
      <h1>{name}</h1>
      <img src={image} alt="" />
      <p>{description}</p>
      <p>{category}</p>
      <p>${price}</p>

    </div>
  );
};
ProductDetail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductDetail;
