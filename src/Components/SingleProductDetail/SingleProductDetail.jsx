import React from 'react'
import useGetProduct from '../../useGetCategory/useGetProduct';
import { useCart } from '../../contexts/CartContext';
import './SingleProductDetail.css'

export default function SingleProductDetail() {
  const { product } = useGetProduct(); // Ensure your hook provides these
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.stopPropagation(); 
    addToCart(product);
  };
  return (
    <>
      <div class="col-md-5">
        <div class="single-product-img">
          <img class="image" src={product.image} alt="" width="500px"/>
        </div>
      </div>
      <div class="col-md-7">
        <div class="single-product-content">
          <h3>{product.title}</h3>
          <p class="single-product-pricing">{product.price ? `${product.price.toFixed(2)}$` : '0.00$'} </p>
          <p>{product.description}</p>
          <div class="single-product-form">
            <form action="home">
              <input type="number" placeholder="1"/>
            </form>
            <a href="/cart" class="cart-btn" onClick={handleAdd}><i class="fas fa-shopping-cart"></i> Add to Cart</a>
            <p><strong>Categories: </strong>{product.category}</p>
          </div>
          <h4>Share:</h4>
          <ul class="product-share">
            <li><a href="facebook.com"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href=""><i class="fab fa-twitter"></i></a></li>
            <li><a href=""><i class="fab fa-google-plus-g"></i></a></li>
            <li><a href=""><i class="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </>
  )
}
