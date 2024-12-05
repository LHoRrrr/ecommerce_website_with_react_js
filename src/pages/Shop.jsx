import React from 'react'
import ShopProductList from '../Components/ShopProductLists/ShopProductList'
import CategoryList from '../Components/CategoryList/CategoryList'

export default function Shop() {
  return (
    <>
    	<div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>New look with our product</p>
                <h1>Shop</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <CategoryList></CategoryList>
          </div>
          <ShopProductList></ShopProductList>
        </div>
      </div>

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
