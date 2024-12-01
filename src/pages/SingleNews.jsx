import React from "react";

export default function SingleNews() {
  return (
    <>
      {/* Breadcrumb Section */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Read the Details</p>
                <h1>Single Article</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb Section */}
      
      {/* Single Article Section */}
      <div className="mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-article-section">
                <div className="single-article-text">
                  <div className="single-artcile-bg"></div>
                  <p className="blog-meta">
                    <span className="author"><i className="fas fa-user"></i> Admin</span>
                    <span className="date"><i className="fas fa-calendar"></i> 27 December, 2019</span>
                  </p>
                  <h2>Pomegranate can prevent heart disease</h2>
                  <p>Lorem ipsum dolor sit amet...</p>
                  {/* Add the rest of the paragraphs here */}
                </div>
                {/* Comments List */}
                <div className="comments-list-wrap">
                  <h3 className="comment-count-title">3 Comments</h3>
                  <div className="comment-list">
                    <div className="single-comment-body">
                      <div className="comment-user-avater">
                        <img src="assets/img/avaters/avatar1.png" alt="" />
                      </div>
                      <div className="comment-text-body">
                        <h4>
                          Jenny Joe <span className="comment-date">Apr 26, 2020</span> <a href="#">reply</a>
                        </h4>
                        <p>Nunc risus ex...</p>
                      </div>
                    </div>
                    {/* Add more comments as needed */}
                  </div>
                </div>
                {/* Comment Form */}
                <div className="comment-template">
                  <h4>Leave a comment</h4>
                  <p>If you have a comment, don't hesitate to send us your opinion.</p>
                  <form action="index.html">
                    <p>
                      <input type="text" placeholder="Your Name" />
                      <input type="email" placeholder="Your Email" />
                    </p>
                    <p>
                      <textarea name="comment" cols="30" rows="10" placeholder="Your Message"></textarea>
                    </p>
                    <p>
                      <input type="submit" value="Submit" />
                    </p>
                  </form>
                </div>
              </div>
            </div>
            {/* Sidebar Section */}
            <div className="col-lg-4">
              <div className="sidebar-section">
                <div className="recent-posts">
                  <h4>Recent Posts</h4>
                  <ul>
                    <li><a href="single-news.html">You will vainly look for fruit on it in autumn.</a></li>
                    <li><a href="single-news.html">A man's worth has its season, like tomato.</a></li>
                    {/* Add more posts */}
                  </ul>
                </div>
                {/* Archive Posts */}
                <div className="archive-posts">
                  <h4>Archive Posts</h4>
                  <ul>
                    <li><a href="single-news.html">JAN 2019 (5)</a></li>
                    {/* Add more archives */}
                  </ul>
                </div>
                {/* Tag Section */}
                <div className="tag-section">
                  <h4>Tags</h4>
                  <ul>
                    <li><a href="single-news.html">Apple</a></li>
                    {/* Add more tags */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Logo Carousel */}
      <div className="logo-carousel-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="logo-carousel-inner">
                <div className="single-logo-item">
                  <img src="assets/img/company-logos/1.png" alt="" />
                </div>
                {/* Add more logos */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
