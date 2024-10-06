import React from "react";
import PageBanner from "../../component/shared/PageHeader";

const CommingSoon = () => {
  return (
    <>
      <PageBanner />

      <div className="page-wraper">
        <div className="page-wraper bg-white">
          <div className="page-content bg-white">
            <div className="coming-wrapper overflow-hidden xl:px-[25px] py-[25px] relative z-[1]">
              <div className="container">
                <img
                  className="bg-img dz-move absolute top-5 z-[-1] animate-dz lg:block hidden"
                  src="assets/images/background/pic17.png"
                  alt="/"
                />
                <div className="row">
                  <div className="lg:w-4/6 w-full px-[15px] mx-auto">
                    <div className="inner-content text-center w-full 2xl:min-h-[650px] lg:min-h-[500px] md:min-h-[600px] sm:min-h-[500px] min-h-[400px] overflow-hidden">
                      <div className="logo-header mx-auto mb-[10px] h-[65px] w-[160px] align-middle logo-header items-center relative flex">
                        <a href="index.html" className="anim-logo">
                          <img src="assets/images/logo.png" alt="/" />
                        </a>
                      </div>
                      <h3 className="coming-head md:text-[32px] text-[25px] leading-[1.3] text-[#323232]">
                        WE ARE COMING SOON!
                      </h3>
                      <p className="coming-para text-[#828282] sm:text-base text-[15px] tracking-[0.01em] mb-4">
                        Stay tuned for something amazing
                      </p>
                      <lottie-player
                        src="assets/json/coming-soon.json"
                        className="coming-media relative z-[-1] scale-[2.5]"
                        background="transparent.html"
                        speed="1"
                        loop
                        autoplay
                      ></lottie-player>
                    </div>
                    <div className="middle-content 2xl:mb-[60px] mb-[35px]">
                      <h5 className="font-normal mb-[5px]">
                        Subscribe to our mailing list to get latest updates
                      </h5>
                      <form className="dzSubscribe mb-[15px]">
                        <div className="input-group flex flex-wrap relative items-stretch w-full">
                          <input
                            name="dzEmail"
                            required="required"
                            type="text"
                            className="form-control outline-none lg:h-[65px] h-[55px] w-full sm:pr-[150px] pr-20"
                            placeholder="Enter Your Email"
                          />
                          <div className="input-group-addon absolute top-[50%] right-[12px] translate-y-[-50%] z-[9]">
                            <button
                              name="submit"
                              value="submit"
                              type="submit"
                              className="btn btn-primary btn-hover-2 lg:py-3 xl:px-6 sm:py-[10px] py-[6px] px-3"
                            >
                              <span className="sm:block hidden">
                                Send Request
                              </span>
                              <i className="fa-solid fa-paper-plane sm:hidden block text-xl"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                      <div className="social-icon text-center">
                        <ul className="mr-[-20px] ml-[-5px]">
                          <li className="inline-block px-[5px] mr-5">
                            <a
                              target="_blank"
                              className="text-xl"
                              href="https://www.facebook.com/"
                            >
                              <i className="fab fa-facebook-f text-lg"></i>
                            </a>
                          </li>
                          <li className="inline-block px-[5px] mr-5">
                            <a
                              target="_blank"
                              className="text-xl"
                              href="https://twitter.com/"
                            >
                              <i className="fab fa-twitter text-lg"></i>
                            </a>
                          </li>
                          <li className="inline-block px-[5px] mr-5">
                            <a
                              target="_blank"
                              className="text-xl"
                              href="https://www.youtube.com/"
                            >
                              <i className="fa-brands fa-youtube text-lg"></i>
                            </a>
                          </li>
                          <li className="inline-block px-[5px] mr-5">
                            <a
                              target="_blank"
                              className="text-xl"
                              href="https://www.instagram.com/"
                            >
                              <i className="fab fa-instagram text-lg"></i>
                            </a>
                          </li>
                          <li className="inline-block px-[5px] mr-5">
                            <a
                              target="_blank"
                              className="text-xl"
                              href="https://www.linkedin.com/feed/"
                            >
                              <i className="fa-brands fa-linkedin-in text-lg"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="coming-footer text-center">
                      <p className="lg:text-base text-[15px] text-[#828282] tracking-[0.01em]">
                        © Copyrights
                        <span className="bg-heart w-[60px] h-[60px] inline-block my-[-25px] mx-[-18px]"></span>
                        by
                        <a
                          href="https://dexignzone.com/"
                          target="_blank"
                          className="text-primary"
                        >
                          DexignZone
                        </a>
                        | 2024 All Rights Reserved
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommingSoon;
