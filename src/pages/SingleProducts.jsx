import React from 'react'
import SingleProductDetail from '../Components/SingleProductDetail/SingleProductDetail'

export default function SingleProducts() {
  return (
    <>
        <div className="search-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <span className="close-btn"><i className="fas fa-window-close"></i></span>
                <div className="search-bar">
                  <div className="search-bar-tablecell">
                    <h3>Search For:</h3>
                    <input type="text" placeholder="Keywords"/>
                    <button type="submit">Search <i className="fas fa-search"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="breadcrumb-section breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <div className="breadcrumb-text">
                  <p>See more Details</p>
                  <h1>Single Product</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="single-product mt-150 mb-150">
          <div className="container">
            <div className="row">
              <SingleProductDetail></SingleProductDetail>
            </div>
          </div>
        </div>

        {/*
                <div className="more-products mb-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <div className="section-title">	
                  <h3><span className="orange-text">Related</span> Products</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <a href="single-product.html"><img src="assets/img/products/product-img-1.jpg" alt=""/></a>
                  </div>
                  <h3>Strawberry</h3>
                  <p className="product-price"><span>Per Kg</span> 85$ </p>
                  <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <a href="single-product.html"><img src="assets/img/products/product-img-2.jpg" alt=""/></a>
                  </div>
                  <h3>Berry</h3>
                  <p className="product-price"><span>Per Kg</span> 70$ </p>
                  <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <a href="single-product.html"><img src="assets/img/products/product-img-3.jpg" alt=""/></a>
                  </div>
                  <h3>Lemon</h3>
                  <p className="product-price"><span>Per Kg</span> 35$ </p>
                  <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
         */}

        <div className="logo-carousel-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row logo-carousel-inner">
                  <div className="col single-logo-item">
                    <img src="assets/img/company-logos/1.png" alt=""/>
                  </div>
                  <div className="col single-logo-item">
                    <img src="assets/img/company-logos/2.png" alt=""/>
                  </div>
                  <div className="col single-logo-item">
                    <img src="assets/img/company-logos/3.png" alt=""/>
                  </div>
                  <div className="col single-logo-item">
                    <img src="assets/img/company-logos/4.png" alt=""/>
                  </div>
                  <div className="col single-logo-item">
                    <img src="assets/img/company-logos/5.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
