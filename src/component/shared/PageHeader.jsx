import React from "react";
import { Link } from "react-router-dom";

const PageHeader = () => {
  return (
    <header className="site-header main-bar-wraper main-bar-wraper top-0 left-0 w-full z-[999]">
      <div className="main-bar">
        <div className="container">
          {/* <!-- Website Logo --> */}
          <div className="logo-header w-[180px] h-[64px] items-center relative flex float-left">
            <Link
              to="index.html"
              className=" pt-[5px] relative logo-white anim-logo-white"
            >
              <img
                src="assets/images/logo2.png"
                alt="/"
                className="lg:w-full sm:w-[165px] w-[150px]"
              />
            </Link>
            <Link to="index.html" className="anim-logo logo-black ">
              <img
                src="assets/images/logo.png"
                alt="/"
                className="lg:w-full sm:w-[165px] w-[150px]"
              />
            </Link>
          </div>

          {/* <!-- Toggle button --> */}
          <button className="togglebtn lg:hidden block bg-primary w-[45px] h-[45px] relative rounded-md float-right mt-2">
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </button>

          {/* <!-- EXTRA NAV --> */}
          <div className="extra-nav float-right items-center h-[64px] lg:flex relative hidden pl-[70px]">
            <div className="extra-cell flex items-center">
              <ul className="flex items-center gap-[10px]">
                <li className="inline-block">
                  <Link
                    className="bg-white user-btn white-btn flex items-center justify-center w-[45px] h-[45px] rounded-md shadow-[0_10px_10px_0_rgba(0,0,0,0.1)] text-black2"
                    to="#offcanvasLogin"
                  >
                    <i className="flaticon-user text-2xl inline-flex"></i>
                  </Link>
                </li>
                <li className="inline-block">
                  <button className="cart-btn bg-white white-btn flex items-center justify-center w-[45px] h-[45px] rounded-md shadow-[0_10px_10px_0_rgba(0,0,0,0.1)]">
                    <i className="flaticon-shopping-bag-1 text-2xl inline-flex ping-bag-1"></i>
                    <span className="badge absolute top-[3px] right-[-6px] p-0 h-5 w-5 font-medium text-xs leading-5 bg-[#666666] text-white rounded-[10px]">
                      6
                    </span>
                  </button>
                  <ul className="dropdown-menu cart-list mt-2.5">
                    <li className="cart-item">
                      <div className="media">
                        <div className="media-left">
                          <Link to="product-detail.html">
                            <img
                              alt="/"
                              className="media-object"
                              src="assets/images/shop/pic2.jpg"
                            />
                          </Link>
                        </div>
                        <div className="media-body">
                          <h6 className="dz-title">
                            <Link
                              to="product-detail.html"
                              className="media-heading"
                            >
                              Double Burger
                            </Link>
                          </h6>
                          <span className="dz-price">$28.00</span>
                          <span className="item-close">&times;</span>
                        </div>
                      </div>
                    </li>
                    <li className="cart-item">
                      <div className="media">
                        <div className="media-left">
                          <Link to="product-detail.html">
                            <img
                              alt="/"
                              className="media-object"
                              src="assets/images/shop/pic3.jpg"
                            />
                          </Link>
                        </div>
                        <div className="media-body">
                          <h6 className="dz-title">
                            <Link
                              to="product-detail.html"
                              className="media-heading"
                            >
                              Cheese Burger
                            </Link>
                          </h6>
                          <span className="dz-price">$20.00</span>
                          <span className="item-close">&times;</span>
                        </div>
                      </div>
                    </li>
                    <li className="cart-item">
                      <div className="media">
                        <div className="media-left">
                          <Link to="product-detail.html">
                            <img
                              alt="/"
                              className="media-object"
                              src="assets/images/shop/pic4.jpg"
                            />
                          </Link>
                        </div>
                        <div className="media-body">
                          <h6 className="dz-title">
                            <Link
                              to="product-detail.html"
                              className="media-heading"
                            >
                              Burger
                            </Link>
                          </h6>
                          <span className="dz-price">$15.00</span>
                          <span className="item-close">&times;</span>
                        </div>
                      </div>
                    </li>
                    <li className="cart-item text-center flex justify-between">
                      <h6 className="text-primary mb-0">Total:</h6>
                      <h6 className="text-primary mb-0">$63</h6>
                    </li>
                    <li className="text-center d-flex">
                      <Link
                        to="shop-cart.html"
                        className="btn btn-primary me-2 w-100 d-block btn-hover-1"
                      >
                        <span>View Cart</span>
                      </Link>
                      <Link
                        to="our-menu-1.html"
                        className="btn btn-outline w-100 d-block btn-hover-1"
                      >
                        <span>Menu</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- EXTRA NAV -->
           */}
          {/* <!-- Header Nav --> */}
          <div className="header-nav lg:justify-end lg:flex-row flex-col lg:gap-0 gap-5 flex">
            <div className="logo-header lg:hidden">
              <Link to="index.html" className="anim-logo">
                <img src="assets/images/logo.png" alt="/" />
              </Link>
            </div>
            <ul className="nav white navbar-nav navbar lg:flex items-center float-right">
              <li className="sub-menu-down">
                <Link to="#">Home</Link>
                <ul className="sub-menu">
                  <li className="py-[5px] px-5 relative">
                    <Link to="/">Home 01</Link>
                  </li>
                  <li className="py-[5px] px-5 relative">
                    <Link to="#">Home 02</Link>
                  </li>
                  <li className="py-[5px] px-5 relative">
                    <Link to="#">Home 03</Link>
                  </li>
                </ul>
              </li>
              <li className="has-mega-menu sub-menu-down">
                <Link to="#">Pages</Link>
                <ul className="mega-menu sub-menu left-0 p-0 max-w-[1100px] max-xl:max-w-[990px] w-full mx-auto">
                  <li>
                    <Link to="#">Pages</Link>
                    <ul className="sub-part lg:mt-[15px]">
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/team">Team</Link>
                      </li>
                      <li>
                        <Link to="/team-details/3">Team Detail</Link>
                      </li>
                      <li>
                        <Link to="/testimonial">Testimonial</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                    <ul className="lg:mt-[15px] sub-part">
                      <li>
                        <Link to="/services">Services</Link>
                      </li>
                      <li>
                        <Link to="/service-detail">Service Detail</Link>
                      </li>
                      <li>
                        <Link to="/error-404">Error 404</Link>
                      </li>
                      <li>
                        <Link to="/coming-soon">Coming Soon</Link>
                      </li>
                      <li>
                        <Link to="/under-maintenance">Under Maintenance</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Our Menus</Link>
                    <ul className="lg:mt-[15px] sub-part">
                      <li>
                        <Link to="our-menu-1.html">Menu Style 1</Link>
                      </li>
                      <li>
                        <Link to="our-menu-2.html">Menu Style 2</Link>
                      </li>
                      <li>
                        <Link to="our-menu-3.html">Menu Style 3</Link>
                      </li>
                      <li>
                        <Link to="our-menu-4.html">Menu Style 4</Link>
                      </li>
                      <li>
                        <Link to="our-menu-5.html">Menu Style 5</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header-adv lg:table-cell hidden pt-[30px] px-2.5 pb-5 relative align-top w-1/4">
                    <img src="assets/images/adv-media.jpg" alt="/" />
                  </li>
                </ul>
              </li>
              <li className="sub-menu-down">
                <Link to="#">Shop</Link>
                <ul className="sub-menu">
                  <li className="py-[5px] px-5 relative">
                    <Link to="shop-style-1.html">Shop Style 1</Link>
                  </li>
                  <li className="py-[5px] px-5 relative">
                    <Link to="shop-style-2.html">Shop Style 2</Link>
                  </li>
                  <li className="py-[5px] px-5 relative">
                    <Link to="shop-cart.html">Shop Cart</Link>
                  </li>
                  <li className="py-[5px] px-5 relative">
                    <Link to="shop-wishlist.html">Shop Wishlist</Link>
                  </li>
                  <li className="py-[5px] px-5 relative">
                    <Link to="shop-checkout.html">Shop Checkout</Link>
                  </li>
                  <li className="py-[5px] px-5 relative">
                    <Link to="product-detail.html">Product Detail</Link>
                  </li>
                </ul>
              </li>
              <li className="sub-menu-down has-mega-menu">
                <Link to="#">Blogs</Link>
                <ul className="mega-menu sub-menu p-0 left-0 lg:table">
                  <li>
                    {" "}
                    <Link to="#">Blog Grid</Link>
                    <ul className="sub-part lg:mt-[15px]">
                      <li>
                        <Link to="blog-grid-2.html">Blog Grid 2</Link>
                      </li>
                      <li>
                        <Link to="blog-grid-3.html">Blog Grid 3</Link>
                      </li>
                      <li>
                        <Link to="blog-grid-left-sidebar.html">
                          Blog Grid Left Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to="blog-grid-right-sidebar.html">
                          Blog Grid Right Sidebar
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <Link to="#">Blog List</Link>
                    <ul className="sub-part lg:mt-[15px]">
                      <li>
                        <Link to="blog-list.html">Blog List</Link>
                      </li>
                      <li>
                        <Link to="blog-list-left-sidebar.html">
                          Blog List Left Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to="blog-list-right-sidebar.html">
                          Blog List Right Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to="blog-both-sidebar.html">
                          Blog Both Sidebar
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <Link to="#">Blog Single</Link>
                    <ul className="sub-part lg:mt-[15px]">
                      <li>
                        <Link to="blog-standard.html">Blog Detail</Link>
                      </li>
                      <li>
                        <Link to="blog-open-gutenberg.html">
                          Blog Open Gutenberg
                        </Link>
                      </li>
                      <li>
                        <Link to="blog-detail-left-sidebar.html">
                          Blog Details Left Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to="blog-detail-right-sidebar.html">
                          Blog Details Right Sidebar
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <Link to="#">Blog Masonry</Link>
                    <ul className="sub-part lg:mt-[15px]">
                      <li>
                        <Link to="blog-grid-3-masonary.html">
                          Blog Grid 3 Masonry
                        </Link>
                      </li>
                      <li>
                        <Link to="blog-grid-4-masonary.html">
                          Blog Grid 4 Masonry
                        </Link>
                      </li>
                      <li>
                        <Link to="blog-wide-list-sidebar.html">
                          Blog Wide List Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to="blog-wide-grid-sidebar.html">
                          Blog Wide Grid Sidebar
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="contact-us.html">Contact Us</Link>
              </li>
            </ul>

            <div className="dz-social-icon">
              <ul>
                <li>
                  <Link
                    target="_blank"
                    className="fab fa-facebook-f"
                    to="https://www.facebook.com/"
                  ></Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="fab fa-twitter"
                    to="https://twitter.com/"
                  ></Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="fab fa-linkedin-in"
                    to="https://www.linkedin.com/"
                  ></Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="fab fa-instagram"
                    to="https://www.instagram.com/"
                  ></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
