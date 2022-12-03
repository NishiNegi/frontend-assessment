import PropTypes from 'prop-types';
import './style.scss';

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
      <figure className="product-detail__image">
        <img className="product-detail__img" src={image} alt={name} />
      </figure>
      <div className="product-detail__caption">
        <h1>{name}</h1>
        <p>{description}</p>
        <p><b>Category: </b><span className="product-detail__category">{category}</span></p>
        <p className="product-detail__price">${price}</p>
      </div>

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
