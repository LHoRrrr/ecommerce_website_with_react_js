import React from 'react';

export default function Error() {
  return (
    <>
    		<div className="breadcrumb-section breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <div className="breadcrumb-text">
                  <p>Fresh adn Organic</p>
                  <h1>404 - Not Found</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="full-height-section error-section">
          <div className="full-height-tablecell">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                  <div className="error-text">
                    <i className="far fa-sad-cry"></i>
                    <h1>Oops! Not Found.</h1>
                    <p>The page you requested for is not found.</p>
                    <a href="index.html" className="boxed-btn">Back to Home</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="logo-carousel-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row logo-carousel-inner">
                  <div className="colsingle-logo-item">
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
