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
      <div className="col-md-5">
        <div className="single-product-img">
          <img className="image" src={product.image} alt="" width="500px"/>
        </div>
      </div>
      <div className="col-md-7">
        <div className="single-product-content">
          <h3>{product.title}</h3>
          <p className="single-product-pricing">{product.price ? `${product.price.toFixed(2)}$` : '0.00$'} </p>
          <p>{product.description}</p>
          <div className="single-product-form">
            <form action="home">
              <input type="number" placeholder="1"/>
            </form>
            <a href="/cart" className="cart-btn" onClick={handleAdd}><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            <p><strong>Categories: </strong>{product.category}</p>
          </div>
          <h4>Share:</h4>
          <ul className="product-share">
            <li><a href="facebook.com"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href=""><i className="fab fa-twitter"></i></a></li>
            <li><a href=""><i className="fab fa-google-plus-g"></i></a></li>
            <li><a href=""><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </>
  )
}
