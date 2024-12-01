import React from 'react'
import PropTypes from 'prop-types';
import './product.css'

export default function Product({product}) {
  return (
    <>
        <div class="col-lg-4 col-md-6 text-center">
                <div class="single-product-item">
                  <div class="product-image">
                    <a href="singlep"><img class= "image" src={product.image} alt=""/></a>
                  </div>
                  <h3>{product.title}</h3>
                  <p class="product-price">{`${product.price}$`}</p>
                  <a href="cart" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                </div>
              </div>
    </>
  )
}
Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
