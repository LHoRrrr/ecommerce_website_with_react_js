import React from 'react';
import PropTypes from 'prop-types';
import '../Product/product.css';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

export default function ShopProduct({ product }) {
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="col-lg-4 col-md-6 text-center strawberry">
      <div className="single-product-item">
        <div className="product-image">
          <Link to={`/singlep/${product.id}`}>
            <img className='image' src={product.image || 'assets/img/products/default-img.jpg'} alt={product.title} />
          </Link>
        </div>
        <h3>{product.title}</h3>
        <p className="product-price">{`${(product.price.toFixed(2))}$`}</p>
        <button className="cart-btn" onClick={handleAdd}>
          <i className="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    </div>
  );
}

ShopProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
  }).isRequired,
};
