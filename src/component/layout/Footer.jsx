import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="site-footer style-1 bg-black2 relative">
        <div className="xl:pt-[85px] md:pt-[80px] pt-[60px] lg:pb-10 md:pb-5 p-0 relative z-[2]">
          <div className="container">
            <div className="row">
              <div className="lg:w-5/12 w-full pl-[15px] pr-[15px] lg:mb-auto mb-10">
                <div className="rounded-[10px] md:pt-10 md:px-10 p-5 md:pb-[50px] bg-primary xl:mt-[-415px] lg:mt-[-390px] mt-0">
                  <div className="section-head mb-[30px] relative mx-auto">
                    <h5 className="font-lobster text-white text-[45px] leading-[56px] font-normal">
                      Contact us
                    </h5>
                    <p className="text-white mt-[10px] text-base opacity-80">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <form
                    className="dzForm dezPlaceAni"
                    method="POST"
                    action="https://swigo.dexignzone.com/tailwind/xhtml/assets/script/contact_smtp.php"
                  >
                    <input
                      type="hidden"
                      className="form-control"
                      name="dzToDo"
                      value="Contact"
                    />
                    <input
                      type="hidden"
                      className="form-control"
                      name="reCaptchaEnable"
                      value="0"
                    />
                    <div className="dzFormMsg"></div>

                    <div className="w-full relative group">
                      <div className="input-group input-line relative mb-[30px] after:content-[''] after:bg-white after:absolute after:h-[2px] after:w-full after:left-0 after:bottom-0 after:opacity-25 items-center flex flex-wrap before:content-[''] before:w-0 before:bg-white before:duration-300 before:absolute before:h-[2px] before:left-0 before:bottom-0 group-hover:before:w-full">
                        <input
                          name="dzName"
                          required
                          type="text"
                          className="flex-1 bg-transparent focus:ring-0 placeholder:text-white text-white border-none outline-none pl-0 pb-[15px]"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="w-full group">
                      <div className="input-group input-line relative mb-[30px] items-center flex flex-wrap after:content-[''] after:bg-white after:absolute after:h-[2px] after:w-full after:left-0 after:bottom-0 after:opacity-25 before:content-[''] before:w-0 before:bg-white before:duration-300 before:absolute before:h-[2px] before:left-0 before:bottom-0 group-hover:before:w-full">
                        <input
                          name="dzEmail"
                          required
                          type="email"
                          className="flex-1 bg-transparent border-none outline-none focus:ring-0 placeholder:text-white text-white pl-0 pb-[15px]"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="w-full group">
                      <div className="input-group input-line relative mb-[30px] items-center flex flex-wrap after:content-[''] after:bg-white after:absolute after:h-[2px] after:w-full after:left-0 after:bottom-0 after:opacity-25 before:content-[''] before:w-0 before:bg-white before:duration-300 before:absolute before:h-[2px] before:left-0 before:bottom-0 group-hover:before:w-full">
                        <input
                          name="dzOther[Subject]"
                          required
                          type="text"
                          className="flex-1 bg-transparent focus:ring-0 placeholder:text-white text-white border-none outline-none pl-0 pb-[15px]"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="w-full group">
                      <div className="input-group input-line relative mb-[30px] items-center flex flex-wrap after:content-[''] after:bg-white after:absolute after:h-[2px] after:w-full after:left-0 after:bottom-0 after:opacity-25 before:content-[''] before:w-0 before:bg-white before:duration-300 before:absolute before:h-[2px] before:left-0 before:bottom-0 group-hover:before:w-full">
                        <textarea
                          name="dzMessage"
                          required
                          className="flex-1 bg-transparent focus:ring-0 placeholder:text-white text-white border-none outline-none h-[120px] resize-none pl-0 pb-[15px]"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full">
                      <button
                        type="submit"
                        name="submit"
                        value="submit"
                        className="btn-white btn-hover-1 py-[15px] px-[30px] font-medium text-base leading-2xl overflow-hidden z-[1] text-black2 rounded-[6px] relative inline-flex items-center justify-center duration-500 focus:ring-0"
                      >
                        <span>Send Message</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-5/12 w-full pl-[15px] pr-[15px]">
                <div className="sm:mb-[30px] mb-2.5">
                  <h5 className="footer-title lg:mb-[30px] mb-5 text-white lg:text-2xl text-xl uppercase font-semibold">
                    Contact
                  </h5>
                  <ul>
                    <li className="relative mb-[25px] pl-10">
                      <i className="flaticon-placeholder absolute text-3xl leading-[30px] left-0 top-[5px] text-primary w-[30px] h-[30px]"></i>
                      <p className="text-[#CCCCCC] tracking-wide leading-6">
                        1247/Plot No. 39, 15th Phase, Colony, Kkatpally,
                        Hyderabad
                      </p>
                    </li>
                    <li className="relative mb-[25px] pl-10">
                      <i className="flaticon-telephone absolute text-3xl leading-[30px] left-0 top-[5px] text-primary w-[30px] h-[30px]"></i>
                      <p className="text-[#CCCCCC] tracking-wide leading-6">
                        +91 987-654-3210
                        <br />
                        +91 123-456-7890
                      </p>
                    </li>
                    <li className="relative mb-[25px] pl-10">
                      <i className="flaticon-email-1 absolute text-3xl leading-[30px] left-0 top-[5px] text-primary w-[30px] h-[30px]"></i>
                      <p className="text-[#CCCCCC] tracking-wide leading-6">
                        info@example.com
                        <br />
                        info@example.com
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/6 md:w-1/4 sm:w-1/2 w-full pl-[15px] pr-[15px]">
                <div className="widget widget_services mb-[30px]">
                  <h5 className="footer-title mb-[30px] xl:text-2xl text-xl font-semibold text-white uppercase leading-[1.1]">
                    Our Links
                  </h5>
                  <ul>
                    <li>
                      <a href="index.html">
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="about-us.html">
                        <span>About Us</span>
                      </a>
                    </li>
                    <li>
                      <a href="services.html">
                        <span>Services</span>
                      </a>
                    </li>
                    <li>
                      <a href="team.html">
                        <span>Team</span>
                      </a>
                    </li>
                    <li>
                      <a href="blog-standard.html">
                        <span>Blog</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/6 md:w-1/4 sm:w-1/2 w-full pl-[15px] pr-[15px]">
                <div className="widget widget_services mb-[30px]">
                  <h5 className="footer-title mb-[30px] xl:text-2xl text-xl font-semibold text-white uppercase leading-[1.1]">
                    Help Center
                  </h5>
                  <ul>
                    <li>
                      <a href="faq.html">
                        <span>FAQ</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop-style-1.html">
                        <span>Shop</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop-style-2.html">
                        <span>Category Filter</span>
                      </a>
                    </li>
                    <li>
                      <a href="testimonial.html">
                        <span>Testimonials</span>
                      </a>
                    </li>
                    <li>
                      <a href="contact-us.html">
                        <span>Contact Us</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-bottom relative py-5 border-t border-[#ffffff1a]">
            <div className="row">
              <div className="md:w-1/2 w-full md:text-left text-center pl-[15px] pr-[15px]">
                <p className="text-sm text-[#999999]">
                  Copyright 2024 All rights reserved.
                </p>
              </div>
              <div className="md:w-1/2 w-full md:text-right text-center px-[15px] md:mt-0 mt-[15px]">
                <span className="text-sm text-[#999999]">
                  Crafted With
                  <span className="bg-heart w-[60px] h-[60px] inline-block my-[-25px] mx-[-18px]"></span>
                  by
                  <a
                    href="https://dexignzone.com/"
                    target="_blank"
                    className="text-primary"
                  >
                    DexignZone
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/images/background/pic5.png"
          alt=""
          className="bg1 bottom-[10px] left-0 absolute max-2xl:hidden animate-dz"
        />
        <img
          src="assets/images/background/pic6.png"
          alt=""
          className="top-[15px] right-[10px] absolute max-2xl:hidden animate-dz"
        />
      </section>
    </div>
  );
};

export default Footer;
