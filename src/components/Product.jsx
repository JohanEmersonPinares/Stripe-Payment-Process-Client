import PropTypes from 'prop-types';

const Product = ({ product, onAddToCart }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price / 100}</p> {/* Convertir de centavos a dólares */}
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default Product;
