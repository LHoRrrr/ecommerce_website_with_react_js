import React, { useState } from 'react';

export default function Footer() {
  // State to track clicked headers and their colors
  const [headerColors, setHeaderColors] = useState({
    Pages: 'black', // Default color
  });

  // Handle header click and change color
  const handleHeaderClick = (section) => {
    setHeaderColors((prevState) => ({
      ...prevState,
      [section]: prevState[section] === 'orange' ? 'white' : 'orange', // Toggle between orange and black
    }));
  };

  return (
    <>
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-box about-widget">
                <h2
                  className="widget-title"
                  style={{ color: headerColors['About us'] || 'black' }}
                  onClick={() => handleHeaderClick('About us')}
                >
                  About us
                </h2>
                <p>
                  Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box get-in-touch">
                <h2
                  className="widget-title"
                  style={{ color: headerColors['Get in Touch'] || 'black' }}
                  onClick={() => handleHeaderClick('Get in Touch')}
                >
                  Get in Touch
                </h2>
                <ul>
                  <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
                  <li>support@fruitkha.com</li>
                  <li>+00 111 222 3333</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
            <div className="footer-box pages">
              <h2
                className="widget-title"
                style={{ color: headerColors['Pages'] || 'black' }}
                onClick={() => handleHeaderClick('Pages')}
              >
                Pages
              </h2>
              <ul>
                <li>
                  <a href="/" style={{ color: headerColors['Pages'] === 'orange' ? 'orange' : 'inherit' }}>Home</a>
                </li>
                <li>
                  <a href="about" style={{ color: headerColors['Pages'] === 'orange' ? 'orange' : 'inherit' }}>About</a>
                </li>
                <li>
                  <a href="shop" style={{ color: headerColors['Pages'] === 'orange' ? 'orange' : 'inherit' }}>Shop</a>
                </li>
                <li>
                  <a href="news" style={{ color: headerColors['Pages'] === 'orange' ? 'orange' : 'inherit' }}>News</a>
                </li>
                <li>
                  <a href="contact" style={{ color: headerColors['Pages'] === 'orange' ? 'orange' : 'inherit' }}>Contact</a>
                </li>
              </ul>
            </div>
          </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box subscribe">
                <h2
                  className="widget-title"
                  style={{ color: headerColors['Subscribe'] || 'black' }}
                  onClick={() => handleHeaderClick('Subscribe')}
                >
                  Subscribe
                </h2>
                <p>Subscribe to our mailing list to get the latest updates.</p>
                <form action="index.html">
                  <input type="email" placeholder="Email" />
                  <button type="submit">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p>
                Copyrights &copy; 2019 - <a href="https://imransdesign.com/">Imran Hossain</a>, All Rights Reserved.
                <br />
                Distributed By - <a href="https://themewagon.com/">Themewagon</a>
              </p>
            </div>
            <div className="col-lg-6 text-right col-md-12">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
