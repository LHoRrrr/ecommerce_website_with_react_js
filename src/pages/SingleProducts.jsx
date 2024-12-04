import React from 'react'
import SingleProductDetail from '../Components/SingleProductDetail/SingleProductDetail'

export default function SingleProducts() {
  return (
    <>
        <div class="search-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <span class="close-btn"><i class="fas fa-window-close"></i></span>
                <div class="search-bar">
                  <div class="search-bar-tablecell">
                    <h3>Search For:</h3>
                    <input type="text" placeholder="Keywords"/>
                    <button type="submit">Search <i class="fas fa-search"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="breadcrumb-section breadcrumb-bg">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 offset-lg-2 text-center">
                <div class="breadcrumb-text">
                  <p>See more Details</p>
                  <h1>Single Product</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="single-product mt-150 mb-150">
          <div class="container">
            <div class="row">
              <SingleProductDetail></SingleProductDetail>
            </div>
          </div>
        </div>

        {/*
                <div class="more-products mb-150">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 offset-lg-2 text-center">
                <div class="section-title">	
                  <h3><span class="orange-text">Related</span> Products</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6 text-center">
                <div class="single-product-item">
                  <div class="product-image">
                    <a href="single-product.html"><img src="assets/img/products/product-img-1.jpg" alt=""/></a>
                  </div>
                  <h3>Strawberry</h3>
                  <p class="product-price"><span>Per Kg</span> 85$ </p>
                  <a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 text-center">
                <div class="single-product-item">
                  <div class="product-image">
                    <a href="single-product.html"><img src="assets/img/products/product-img-2.jpg" alt=""/></a>
                  </div>
                  <h3>Berry</h3>
                  <p class="product-price"><span>Per Kg</span> 70$ </p>
                  <a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3 text-center">
                <div class="single-product-item">
                  <div class="product-image">
                    <a href="single-product.html"><img src="assets/img/products/product-img-3.jpg" alt=""/></a>
                  </div>
                  <h3>Lemon</h3>
                  <p class="product-price"><span>Per Kg</span> 35$ </p>
                  <a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
         */}

        <div class="logo-carousel-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="row logo-carousel-inner">
                  <div class="col single-logo-item">
                    <img src="assets/img/company-logos/1.png" alt=""/>
                  </div>
                  <div class="col single-logo-item">
                    <img src="assets/img/company-logos/2.png" alt=""/>
                  </div>
                  <div class="col single-logo-item">
                    <img src="assets/img/company-logos/3.png" alt=""/>
                  </div>
                  <div class="col single-logo-item">
                    <img src="assets/img/company-logos/4.png" alt=""/>
                  </div>
                  <div class="col single-logo-item">
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
