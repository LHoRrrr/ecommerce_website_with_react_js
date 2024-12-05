import React from 'react'
import ProductList from '../Components/ProdcuctList/ProductList'

export default function Home() {
  return (
    <>
      	<div className="breadcrumb-section breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 offset-lg-2 text-center">
                <div className="hero-text">
                  <div className="hero-text-tablecell">
                    <p className="subtitle">Worth it with your money</p>
                    <h1>New Look & Fit Your Body</h1>
                    <div className="hero-btns">
                      <a href="shop" className="boxed-btn">Collection</a>
                      <a href="contact" className="bordered-btn">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="list-section pt-80 pb-80">
          <div className="container">

            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="list-box d-flex align-items-center">
                  <div className="list-icon">
                    <i className="fas fa-shipping-fast"></i>
                  </div>
                  <div className="content">
                    <h3>Free Shipping</h3>
                    <p>When order over $75</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="list-box d-flex align-items-center">
                  <div className="list-icon">
                    <i className="fas fa-phone-volume"></i>
                  </div>
                  <div className="content">
                    <h3>24/7 Support</h3>
                    <p>Get support all day</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="list-box d-flex justify-content-start align-items-center">
                  <div className="list-icon">
                    <i className="fas fa-sync"></i>
                  </div>
                  <div className="content">
                    <h3>Refund</h3>
                    <p>Get refund within 3 days!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProductList></ProductList>

        <section className="cart-banner pt-100 pb-100">
            <div className="container">
                <div className="row clearfix">
                    <div className="image-column col-lg-6">
                        <div className="image">
                            <div className="price-box">
                                <div className="inner-price">
                                      <span className="price">
                                          <strong>30%</strong> <br/> limited off
                                      </span>
                                  </div>
                              </div>
                            <img src="assets/img/a.jpg" alt=""/>
                          </div>
                      </div>
                      <div className="content-column col-lg-6">
                <h3><span className="orange-text">Deal</span> of the month</h3>
                          <h4>Mens Cotton Jacket</h4>
                          <div className="text">Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant</div>
                          <div className="time-counter"><div className="time-countdown clearfix" data-countdown="2020/2/01"><div className="counter-column"><div className="inner"><span className="count">00</span>Days</div></div> <div className="counter-column"><div className="inner"><span className="count">00</span>Hours</div></div>  <div className="counter-column"><div className="inner"><span className="count">00</span>Mins</div></div>  <div className="counter-column"><div className="inner"><span className="count">00</span>Secs</div></div></div></div>
                        <a href="cart" className="cart-btn mt-3"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                      </div>
                  </div>
              </div>
          </section>

        <div className="testimonail-section mt-150 mb-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 text-center">
                <div className="testimonial-sliders">
                  <div className="single-testimonial-slider">
                    <div className="client-avater">
                      <img src="assets/img/avaters/avatar1.png" alt=""/>
                    </div>
                    <div className="client-meta">
                      <h3>Saira Hakim <span>Local shop owner</span></h3>
                      <p className="testimonial-body">
                        " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                      </p>
                      <div className="last-icon">
                        <i className="fas fa-quote-right"></i>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial-slider">
                    <div className="client-avater">
                      <img src="assets/img/avaters/avatar2.png" alt=""/>
                    </div>
                    <div className="client-meta">
                      <h3>David Niph <span>Local shop owner</span></h3>
                      <p className="testimonial-body">
                        " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                      </p>
                      <div className="last-icon">
                        <i className="fas fa-quote-right"></i>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial-slider">
                    <div className="client-avater">
                      <img src="assets/img/avaters/avatar3.png" alt=""/>
                    </div>
                    <div className="client-meta">
                      <h3>Jacob Sikim <span>Local shop owner</span></h3>
                      <p className="testimonial-body">
                        " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                      </p>
                      <div className="last-icon">
                        <i className="fas fa-quote-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="abt-section mb-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="abt-bg">
                  <a href="https://www.youtube.com/watch?v=DBLlFWYcIGQ" className="video-play-btn popup-youtube"><i className="fas fa-play"></i></a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="abt-text">
                  <p className="top-sub">Since Year 1999</p>
                  <h2>We are <span className="orange-text">Shopping Ecommerce</span></h2>
                  <p>Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.</p>
                  <a href="/about" className="boxed-btn mt-4">know more</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="shop-banner">
            <div className="container">
                <h3>December sale is on! <br/> with big <span className="orange-text">Discount...</span></h3>
                  <div className="sale-percent"><span>Sale! <br/> Upto</span>50% <span>off</span></div>
                  <a href="shop" className="cart-btn btn-lg">Shop Now</a>
              </div>
          </section>

        <div className="latest-news pt-150 pb-150">
          <div className="container">

            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <div className="section-title">	
                  <h3><span className="orange-text">Our</span> News</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-latest-news">
                  <a href="singlen"><div className="latest-news-bg news-bg-1"></div></a>
                  <div className="news-text-box">
                    <h3><a href="singlen">You will vainly look for fruit on it in autumn.</a></h3>
                    <p className="blog-meta">
                      <span className="author"><i className="fas fa-user"></i> Admin</span>
                      <span className="date"><i className="fas fa-calendar"></i> 27 December, 2019</span>
                    </p>
                    <p className="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                    <a href="/singlen" className="read-more-btn">read more <i className="fas fa-angle-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-latest-news">
                  <a href="/singlen"><div className="latest-news-bg news-bg-2"></div></a>
                  <div className="news-text-box">
                    <h3><a href="/singlen">A man's worth has its season, like tomato.</a></h3>
                    <p className="blog-meta">
                      <span className="author"><i className="fas fa-user"></i> Admin</span>
                      <span className="date"><i className="fas fa-calendar"></i> 27 December, 2019</span>
                    </p>
                    <p className="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                    <a href="/singlen" className="read-more-btn">read more <i className="fas fa-angle-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                <div className="single-latest-news">
                  <a href="/singlen"><div className="latest-news-bg news-bg-3"></div></a>
                  <div className="news-text-box">
                    <h3><a href="/singlen">Good thoughts bear good fresh juicy fruit.</a></h3>
                    <p className="blog-meta">
                      <span className="author"><i className="fas fa-user"></i> Admin</span>
                      <span className="date"><i className="fas fa-calendar"></i> 27 December, 2019</span>
                    </p>
                    <p className="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                    <a href="/singlen" className="read-more-btn">read more <i className="fas fa-angle-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <a href="/news" className="boxed-btn">More News</a>
              </div>
            </div>
          </div>
        </div>

        <div className="logo-carousel-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ">
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
