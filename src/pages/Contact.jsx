import React from 'react';

export default function Contact() {
  return (
    <>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Get 24/7 Support</p>
                <h1>Contact us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-from-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="form-title">
                <h2>Have you any question?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid.
                  Corporis ipsum minus voluptate? Dolore, esse natus!
                </p>
              </div>
              <div id="form_status"></div>
              <div className="contact-form">
                <form
                  type="POST"
                  id="fruitkha-contact"
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log('Form submitted'); // Replace with your validation logic
                  }}
                >
                  <p>
                    <input type="text" placeholder="Name" name="name" id="name" />
                    <input type="email" placeholder="Email" name="email" id="email" />
                  </p>
                  <p>
                    <input type="tel" placeholder="Phone" name="phone" id="phone" />
                    <input type="text" placeholder="Subject" name="subject" id="subject" />
                  </p>
                  <p>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                  </p>
                  <input type="hidden" name="token" value="FsWga4&@f6aw" />
                  <p>
                    <input type="submit" value="Submit" />
                  </p>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-form-wrap">
                <div className="contact-form-box">
                  <h4>
                    <i className="fas fa-map"></i> Shop Address
                  </h4>
                  <p>
                    34/8, East Hukupara <br />
                    Gifirtok, Sadan. <br />
                    Country Name
                  </p>
                </div>
                <div className="contact-form-box">
                  <h4>
                    <i className="far fa-clock"></i> Shop Hours
                  </h4>
                  <p>
                    MON - FRIDAY: 8 to 9 PM <br />
                    SAT - SUN: 10 to 8 PM
                  </p>
                </div>
                <div className="contact-form-box">
                  <h4>
                    <i className="fas fa-address-book"></i> Contact
                  </h4>
                  <p>
                    Phone: +885 12 222 333 <br />
                    Email: student@rupp.edu.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="find-location blue-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p>
                <i className="fas fa-map-marker-alt"></i> Find Our Location
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="embed-responsive embed-responsive-21by9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1954.3741533025393!2d104.8880415141726!3d11.569892547659874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951d8f415e021%3A0x2eab87173a291faa!2sRUPP%20IT%20Building%20B!5e0!3m2!1skm!2skh!4v1733037874461!5m2!1skm!2skh"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          className="embed-responsive-item"
        ></iframe>
      </div>
    </>
  );
}
