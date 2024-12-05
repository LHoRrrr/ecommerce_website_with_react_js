import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import './Header.css';
import Image from '../img/logo2.png';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null); // Tracks open dropdown
  const [activeItem, setActiveItem] = useState('/'); // Tracks active menu item

  const handleMenuToggle = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleSetActive = (path) => {
    setActiveItem(path);
    setActiveMenu(null); // Close dropdown when a link is clicked
  };

  const { cartItems = [] } = useCart();
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="top-header-area" id="sticker">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="main-menu-wrap">
              <div className="site-logo center">
                <a href="/">
                  <img src={Image} alt="Site Logo" />
                </a>
              </div>
              <nav className="main-menu">
                <ul>
                  <li className={activeItem === '/' ? 'active' : ''}>
                    <a href="/" onClick={() => handleSetActive('/')}>Home</a>
                  </li>
                  <li className={activeItem === 'about' ? 'active' : ''}>
                    <a href="about" onClick={() => handleSetActive('about')}>About</a>
                  </li>
                  <li className={activeMenu === 'pages' ? 'active' : ''}>
                    <a href="#" onClick={() => handleMenuToggle('pages')}>Pages</a>
                    {activeMenu === 'pages' && (
                      <ul className="sub-menu">
                        <li className={activeItem === 'error' ? 'active' : ''}>
                          <a href="error" onClick={() => handleSetActive('error')}>404 page</a>
                        </li>
                        <li className={activeItem === 'cart' ? 'active' : ''}>
                          <a href="cart" onClick={() => handleSetActive('cart')}>Cart</a>
                        </li>
                        <li className={activeItem === 'checkout' ? 'active' : ''}>
                          <a href="checkout" onClick={() => handleSetActive('checkout')}>Check Out</a>
                        </li>
                        <li className={activeItem === 'contact' ? 'active' : ''}>
                          <a href="contact" onClick={() => handleSetActive('contact')}>Contact</a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className={activeMenu === 'shop' ? 'active' : ''}>
                    <a href="#" onClick={() => handleMenuToggle('shop')}>Shop</a>
                    {activeMenu === 'shop' && (
                      <ul className="sub-menu">
                        <li className={activeItem === 'shop' ? 'active' : ''}>
                          <a href="shop" onClick={() => handleSetActive('shop')}>Shop</a>
                        </li>
                        <li className={activeItem === 'checkout' ? 'active' : ''}>
                          <a href="checkout" onClick={() => handleSetActive('checkout')}>Check Out</a>
                        </li>
                        <li className={activeItem === 'singlep' ? 'active' : ''}>
                          <a href="singlep" onClick={() => handleSetActive('singlep')}>Single Product</a>
                        </li>
                        <li className={activeItem === 'cart' ? 'active' : ''}>
                          <a href="cart" onClick={() => handleSetActive('cart')}>Cart</a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className={activeItem === 'news' ? 'active' : ''}>
                    <a href="news" onClick={() => handleSetActive('news')}>News</a>
                  </li>
                  <li className={activeItem === 'contact' ? 'active' : ''}>
                    <a href="contact" onClick={() => handleSetActive('contact')}>Contact</a>
                  </li>
                  <li>
                    <div className="header-icons">
                      <a className="shopping-cart" href="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>{totalQuantity}</span>
                      </a>
                      <a className="mobile-hide search-bar-icon" href="#">
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
  );
}
