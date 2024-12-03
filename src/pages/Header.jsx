import React from 'react';
import { useCart } from '../contexts/CartContext';
import './Header.css';
import Image from '../img/logo.png';

export default function Header() {
  const cartContext = useCart(); // Retrieve the object from context
  console.log(cartContext); // Debugging: log the entire object

  const { cartItems = [] } = cartContext; // Destructure the `cartItems` array with a default empty array
  console.log(cartItems); // Debugging: log the extracted cartItems array

  // Calculate the total quantity of items in the cart
  const totalQuantity = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => total + item.quantity, 0)
    : 0;

  console.log(totalQuantity); // Debugging: log the total quantity

  return (
    <>
      <div className="loader">
        <div className="loader-inner">
          <div className="circle"></div>
        </div>
      </div>

      <div className="top-header-area mb-4" id="sticker">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
              <div className="main-menu-wrap">
                <div className="site-logo">
                  <a href="/">
                    <img src={Image} alt="Site Logo" />
                  </a>
                </div>

                <nav className="main-menu">
                  <ul>
                    <li className="current-list-item"><a href="/">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li>
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li><a href="error">404 page</a></li>
                        <li><a href="about">About</a></li>
                        <li><a href="cart">Cart</a></li>
                        <li><a href="checkout">Check Out</a></li>
                        <li><a href="contact">Contact</a></li>
                        <li><a href="news">News</a></li>
                        <li><a href="shop">Shop</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="news">News</a>
                      <ul className="sub-menu">
                        <li><a href="news">News</a></li>
                        <li><a href="singlen">Single News</a></li>
                      </ul>
                    </li>
                    <li><a href="contact">Contact</a></li>
                    <li>
                      <a href="shop">Shop</a>
                      <ul className="sub-menu">
                        <li><a href="shop">Shop</a></li>
                        <li><a href="checkout">Check Out</a></li>
                        <li><a href="singlep">Single Product</a></li>
                        <li><a href="cart">Cart</a></li>
                      </ul>
                    </li>
                    <li>
                      <div className="header-icons">
                        <a className="shopping-cart" href="/cart">
                          <i className="fas fa-shopping-cart"></i>
                          <span>{totalQuantity}</span>
                        </a>
                        <a className="mobile-hide search-bar-icon" href="">
                          <i className="fas fa-search"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
                <a className="mobile-show search-bar-icon" href="#">
                  <i className="fas fa-search"></i>
                </a>
                <div className="mobile-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="search-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="close-btn">
                <i className="fas fa-window-close"></i>
              </span>
              <div className="search-bar">
                <div className="search-bar-tablecell">
                  <h3>Search For:</h3>
                  <input type="text" placeholder="Keywords" />
                  <button type="submit">
                    Search <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
