import React from 'react'
import ProductCheckout from '../Components/Checkout/ProductCheckout'

export default function Checkout() {
  return (
    <>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Fresh and Organic</p>
                <h1>Check Out Product</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="checkout-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="checkout-accordion-wrap">
                <div className="accordion" id="accordionExample">
                  <div className="card single-accordion">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Billing Address
                        </button>
                      </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body">
                        <div className="billing-address-form">
                          <form action="index.html">
                            <p><input type="text" placeholder="Name"/></p>
                            <p><input type="email" placeholder="Email"/></p>
                            <p><input type="text" placeholder="Address"/></p>
                            <p><input type="tel" placeholder="Phone"/></p>
                            <p><textarea name="bill" id="bill" cols="30" rows="10" placeholder="Say Something"></textarea></p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card single-accordion">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Shipping Address
                        </button>
                      </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div className="card-body">
                        <div className="shipping-address-form">
                          <p>Your shipping address form is here.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card single-accordion">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Card Details
                        </button>
                      </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div className="card-body">
                        <div className="card-details">
                          <p>Your card details goes here.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          <ProductCheckout></ProductCheckout>
          </div>
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
