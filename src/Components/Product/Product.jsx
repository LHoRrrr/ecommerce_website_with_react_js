import React from 'react';
import PropTypes from 'prop-types';
import './product.css';
import { useCart } from '../../contexts/CartContext';

export default function Product({ product }) {
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.stopPropagation(); 
    addToCart(product);
    console.log(product);
  };

  return (
    <div className="col-lg-4 col-md-6 text-center">
      <div className="single-product-item">
        <div className="product-image">
          <a href="singlep">
            <img
              className="image"
              src={product.image || '/placeholder.png'}
              alt={product.title || 'Product image'}
            />
          </a>
        </div>
        <h3>{product.title || 'No title available'}</h3>
        <p className="product-price">{product.price ? `${product.price}$` : '0.00$'}</p>
        <button
          className="btn btn-dark cart-btn"
          onClick={handleAdd}
          aria-label={`Add ${product.title || 'product'} to cart`}
        >
          <i className="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
