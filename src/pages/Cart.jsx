import React from 'react'
import CartConatainer from "../Components/Cart/CartContainer"

export default function Cart() {
  return (
    <>
    	<div class="breadcrumb-section breadcrumb-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
              <div class="breadcrumb-text">
                <p>Fresh and Organic</p>
                <h1>Cart</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CartConatainer></CartConatainer>

     {/*Cart Conatainer */}

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
