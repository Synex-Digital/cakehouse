import React from "react";

import { Link } from "react-router-dom";
import { icons } from "../../assets/icons";
import HoverButton from "../shared/HoverButton";
import { FaRegUser } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="site-header main-bar-wraper top-0 left-0 w-full z-[999]">
        <div className="main-bar">
          <div className="container">
            {/* <!-- Website Logo --> */}
            <div className="logo-header w-[180px] h-[64px] items-center relative flex float-left">
              <a href="index.html" className="anim-logo"></a>
            </div>

            {/* <!-- Toggle button --> */}
            <button className="togglebtn lg:hidden block bg-primary w-[45px] h-[45px] relative rounded-md float-right mt-2">
              <span className="bar1"></span>
              <span className="bar2"></span>
              <span className="bar3"></span>
            </button>

            {/* <!-- EXTRA NAV --> */}
            <div className="extra-nav float-right items-center h-[64px] lg:flex relative hidden pl-[60px]">
              <div className="extra-cell flex items-center">
                <ul className="flex items-center gap-[10px]">
                  <li className="inline-block">
                    <a
                      className="bg-white text-[var(--title)] user-btn white-btn flex items-center justify-center w-[45px] h-[45px] rounded-md shadow-[0_10px_10px_0_rgba(0,0,0,0.1)]"
                      href="#offcanvasLogin"
                    >
                      <i className="flaticon-user text-2xl inline-flex">
                        <FaRegUser />
                      </i>
                    </a>
                  </li>
                  <li className="inline-block">
                    <button className="cart-btn bg-white white-btn flex items-center justify-center w-[45px] h-[45px] rounded-md shadow-[0_10px_10px_0_rgba(0,0,0,0.1)]">
                      <i className="flaticon-shopping-bag-1 text-2xl inline-flex ping-bag-1">
                        <FaShoppingBag />
                      </i>
                      <span className="badge absolute top-[3px] right-[-6px] p-0 h-5 w-5 font-medium text-xs leading-5 bg-[#666666] text-white rounded-[10px]">
                        6
                      </span>
                    </button>
                    <ul className="dropdown-menu cart-list mt-2.5">
                      <li className="cart-item">
                        <div className="media">
                          <div className="media-left">
                            <a href="product-detail.html">
                              <img
                                alt="/"
                                className="media-object"
                                src="assets/images/shop/pic2.jpg"
                              />
                            </a>
                          </div>
                          <div className="media-body">
                            <h6 className="dz-title">
                              <a
                                href="product-detail.html"
                                className="media-heading"
                              >
                                Double Burger
                              </a>
                            </h6>
                            <span className="dz-price">$28.00</span>
                            <span className="item-close">&times;</span>
                          </div>
                        </div>
                      </li>
                      <li className="cart-item">
                        <div className="media">
                          <div className="media-left">
                            <a href="product-detail.html">
                              <img
                                alt="/"
                                className="media-object"
                                src="assets/images/shop/pic3.jpg"
                              />
                            </a>
                          </div>
                          <div className="media-body">
                            <h6 className="dz-title">
                              <a
                                href="product-detail.html"
                                className="media-heading"
                              >
                                Cheese Burger
                              </a>
                            </h6>
                            <span className="dz-price">$20.00</span>
                            <span className="item-close">&times;</span>
                          </div>
                        </div>
                      </li>
                      <li className="cart-item">
                        <div className="media">
                          <div className="media-left">
                            <a href="product-detail.html">
                              <img
                                alt="/"
                                className="media-object"
                                src="assets/images/shop/pic4.jpg"
                              />
                            </a>
                          </div>
                          <div className="media-body">
                            <h6 className="dz-title">
                              <a
                                href="product-detail.html"
                                className="media-heading"
                              >
                                Burger
                              </a>
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
                      <li className="text-center flex">
                        <a
                          href="shop-cart.html"
                          className="btn btn-primary me-2 w-full btn-hover-1"
                        >
                          <span>View Cart</span>
                        </a>
                        <a
                          href="our-menu-1.html"
                          className="btn btn-outline w-full btn-hover-1"
                        >
                          <span>Menu</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- EXTRA NAV --> */}

            {/* <!-- Header Nav --> */}
            <div className="header-nav lg:justify-end lg:flex-row flex-col lg:gap-0 gap-5 flex">
              <div className="logo-header lg:hidden">
                <a href="index.html" className="anim-logo">
                  <img src="assets/images/logo.png" alt="/" />
                </a>
              </div>
              <ul className="nav navbar-nav navbar lg:flex items-center float-right">
                <li className="sub-menu-down">
                  <a href="#">Home</a>

                  <ul className="sub-menu">
                    <li className="py-[5px] px-5 relative">
                      <a href="index.html">Home 01</a>
                    </li>
                    <li className="py-[5px] px-5 relative">
                      <a href="index-2.html">Home 02</a>
                    </li>
                    <li className="py-[5px] px-5 relative">
                      <a href="index-3.html">Home 03</a>
                    </li>
                  </ul>
                </li>
                <li className="has-mega-menu sub-menu-down">
                  <a href="#">Pages</a>
                  <ul className="mega-menu sub-menu left-0 p-0 max-w-[1100px] max-xl:max-w-[990px] w-full mx-auto">
                    <li>
                      <a href="#">Pages</a>
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
                          <Link to="services">Services</Link>
                        </li>
                        <li>
                          <Link to="service-detail">Service Detail</Link>
                        </li>
                        <li>
                          <Link to="error-404">Error 404</Link>
                        </li>
                        <li>
                          <Link to="coming-soon">Coming Soon</Link>
                        </li>
                        <li>
                          <Link to="under-maintenance">Under Maintenance</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Our Menus</a>
                      <ul className="lg:mt-[15px] sub-part">
                        <li>
                          <Link to="our-menu-1">Menu Style 1</Link>
                        </li>
                        <li>
                          <Link to="our-menu-2">Menu Style 2</Link>
                        </li>
                        <li>
                          <Link to="our-menu-3">Menu Style 3</Link>
                        </li>
                        <li>
                          <Link to="our-menu-4">Menu Style 4</Link>
                        </li>
                        <li>
                          <Link to="our-menu-5">Menu Style 5</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      style={{
                        display: "none",
                      }}
                      className="header-adv lg:table-cell hidden pt-[15px] px-[15px] pb-[15px] relative align-top w-1/4"
                    >
                      <img src={icons.CAKE_Advertisement} alt="Advertisement" />
                    </li>
                  </ul>
                </li>
                <li className="sub-menu-down">
                  <a href="#">Shop</a>
                  <ul className="sub-menu">
                    <li className="py-[5px] px-5 relative">
                      <Link to="shop-style-1">Shop Style 1</Link>
                    </li>
                    <li className="py-[5px] px-5 relative">
                      <Link to="shop-style-2">Shop Style 2</Link>
                    </li>
                    <li className="py-[5px] px-5 relative">
                      <Link to="shop-cart">Shop Cart</Link>
                    </li>
                    <li className="py-[5px] px-5 relative">
                      <Link to="shop-wishlist">Shop Wishlist</Link>
                    </li>
                    <li className="py-[5px] px-5 relative">
                      <Link to="shop-checkout">Shop Checkout</Link>
                    </li>
                    <li className="py-[5px] px-5 relative">
                      <Link to="product-detail">Product Detail</Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu-down has-mega-menu">
                  <a href="#;">Blogs</a>
                  <ul className="mega-menu sub-menu p-0 left-0 lg:table">
                    <li>
                      {" "}
                      <a href="#">Blog Grid</a>
                      <ul className="sub-part lg:mt-[15px]">
                        <HoverButton name={"Blog Grid 2"} link="/blog-grid-2" />
                        <HoverButton name={"Blog Grid 3"} link="/blog-grid-3" />
                        <HoverButton
                          name={"Blog Grid Left Sidebar"}
                          link="/blog-grid-left-sidebar"
                        />
                        <HoverButton
                          name={"Blog Grid Right Sidebar"}
                          link="/blog-grid-right-sidebar"
                        />
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Blog List</a>
                      <ul className="sub-part lg:mt-[15px]">
                        <li>
                          <a href="blog-list.html">Blog List</a>
                        </li>
                        <li>
                          <a href="blog-list-left-sidebar.html">
                            Blog List Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-list-right-sidebar.html">
                            Blog List Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-both-sidebar.html">Blog Both Sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Blog Single</a>
                      <ul className="sub-part lg:mt-[15px]">
                        <li>
                          <a href="blog-standard.html">Blog Detail</a>
                        </li>
                        <li>
                          <a href="blog-open-gutenberg.html">
                            Blog Open Gutenberg
                          </a>
                        </li>
                        <li>
                          <a href="blog-detail-left-sidebar.html">
                            Blog Details Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-detail-right-sidebar.html">
                            Blog Details Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <a href="#;">Blog Masonry</a>
                      <ul className="sub-part lg:mt-[15px]">
                        <li>
                          <a href="blog-grid-3-masonary.html">
                            Blog Grid 3 Masonry
                          </a>
                        </li>
                        <li>
                          <a href="blog-grid-4-masonary.html">
                            Blog Grid 4 Masonry
                          </a>
                        </li>
                        <li>
                          <a href="blog-wide-list-sidebar.html">
                            Blog Wide List Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-wide-grid-sidebar.html">
                            Blog Wide Grid Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="contact-us.html">Contact Us</a>
                </li>
              </ul>

              <div className="dz-social-icon">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      className="fab fa-facebook-f"
                      href="https://www.facebook.com/"
                    ></a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      className="fab fa-twitter"
                      href="https://twitter.com/"
                    ></a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      className="fab fa-linkedin-in"
                      href="https://www.linkedin.com/"
                    ></a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      className="fab fa-instagram"
                      href="https://www.instagram.com/"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
