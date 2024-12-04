import React from 'react'
import ShopProductList from '../Components/ShopProductLists/ShopProductList'
import CategoryList from '../Components/CategoryList/CategoryList'

export default function Shop() {
  return (
    <>
    	<div class="breadcrumb-section breadcrumb-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
              <div class="breadcrumb-text">
                <p>New look with our product</p>
                <h1>Shop</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="product-section mt-150 mb-150">
        <div class="container">
          <div class="row">
            <CategoryList></CategoryList>
          </div>
          <ShopProductList></ShopProductList>
        </div>
      </div>

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
