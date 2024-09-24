import React from "react";
import MasterChefs from "../card/MasterChefs";

const MasterChefsSection = () => {
  return (
    <section className="bg-light sm:py-[100px] py-[40px] relative overflow-hidden">
      <div className="container">
        <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
          <h2 className="font-lobster">Master Chefs</h2>
        </div>
        <div className="swiper team-swiper overflow-visible swiper-visible">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="slide-box">
                <div className="shadow-[0_15px_55px_rgba(35,35,35,0.15)] rounded-[10px] bg-white overflow-hidden group">
                  <div className="relative overflow-hidden z-[1] before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:bg-black2 before:top-[-100px] before:left-[-100px] before:opacity-30 before:z-[1] before:duration-500 before:rounded-full before:scale-50 before:translate-x-[-50%] group-hover:before:scale-[7]">
                    <img
                      src="assets/images/team/pic1.jpg"
                      alt="/"
                      className="group-hover:scale-110 duration-500 block w-full"
                    />
                  </div>
                  <div className="content bg-white flex justify-between items-center py-[15px] px-5">
                    <div className="clearfix">
                      <h6>
                        <a href="team-detail.html"> Sarah Albert </a>
                      </h6>
                      <span className="font-normal text-sm leading-5 text-primary">
                        Senior Chef
                      </span>
                    </div>
                    <ul className="team-social">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="text-xl inline-block h-10 w-10 leading-10 text-center rounded-lg bg-primary text-white pt-[2px]"
                        >
                          <i className="flaticon-share"></i>
                        </a>
                        <ul className="sub-team-social absolute bottom-[20px] z-[1] w-10 rounded-lg opacity-0 duration-500 hover:opacity-100 hover:pb-[80px]">
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#4867AA] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#81B2DF] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#D74141] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#3A9DF9] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <MasterChefs name={"John Doe"} position={"Senior Chef"} image={"assets/images/team/pic2.jpg"} />
            <div className="swiper-slide">
              <div className="slide-box">
                <div className="shadow-[0_15px_55px_rgba(35,35,35,0.15)] rounded-[10px] bg-white overflow-hidden group">
                  <div className="relative overflow-hidden z-[1] before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:bg-black2 before:top-[-100px] before:left-[-100px] before:opacity-30 before:z-[1] before:duration-500 before:rounded-full before:scale-50 before:translate-x-[-50%] group-hover:before:scale-[7]">
                    <img
                      src="assets/images/team/pic3.jpg"
                      alt="/"
                      className="group-hover:scale-110 duration-500 block w-full"
                    />
                  </div>
                  <div className="content bg-white flex justify-between items-center py-[15px] px-5">
                    <div className="clearfix">
                      <h6>
                        <a href="team-detail.html"> Jemy carline </a>
                      </h6>
                      <span className="font-normal text-sm leading-5 text-primary">
                        Senior Chef
                      </span>
                    </div>
                    <ul className="team-social group">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="text-xl inline-block h-10 w-10 leading-10 text-center rounded-lg bg-primary text-white pt-[2px]"
                        >
                          <i className="flaticon-share"></i>
                        </a>
                        <ul className="sub-team-social absolute bottom-[20px] z-[1] w-10 rounded-lg opacity-0 duration-500 hover:opacity-100 hover:pb-[80px]">
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white inline-block duration-500 text-center h-10 w-10 leading-10 text-lg"
                            >
                              <i className="fab fa-facebook-f bg-[#4867AA] h-10 w-10 flex items-center justify-center rounded-lg"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white inline-block duration-500 text-center h-10 w-10 leading-10 text-lg"
                            >
                              <i className="fab fa-twitter bg-[#81B2DF] h-10 w-10 flex items-center justify-center rounded-lg"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white inline-block duration-500 text-center h-10 w-10 leading-10 text-lg"
                            >
                              <i className="fab fa-instagram bg-[#D74141] h-10 w-10 flex items-center justify-center rounded-lg"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white inline-block duration-500 text-center h-10 w-10 leading-10 text-lg"
                            >
                              <i className="fa-brands fa-linkedin-in bg-[#3A9DF9] h-10 w-10 flex items-center justify-center rounded-lg"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slide-box">
                <div className="shadow-[0_15px_55px_rgba(35,35,35,0.15)] rounded-[10px] bg-white overflow-hidden group">
                  <div className="relative overflow-hidden z-[1] before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:bg-black2 before:top-[-100px] before:left-[-100px] before:opacity-30 before:z-[1] before:duration-500 before:rounded-full before:scale-50 before:translate-x-[-50%] group-hover:before:scale-[7]">
                    <img
                      src="assets/images/team/pic4.jpg"
                      alt="/"
                      className="group-hover:scale-110 duration-500 block w-full"
                    />
                  </div>
                  <div className="content bg-white flex justify-between items-center py-[15px] px-5">
                    <div className="clearfix">
                      <h6>
                        <a href="team-detail.html"> Cotline Care </a>
                      </h6>
                      <span className="font-normal text-sm leading-5 text-primary">
                        Senior Chef
                      </span>
                    </div>
                    <ul className="team-social">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="text-xl inline-block h-10 w-10 leading-10 text-center rounded-lg bg-primary text-white pt-[2px]"
                        >
                          <i className="flaticon-share"></i>
                        </a>
                        <ul className="sub-team-social absolute bottom-[20px] z-[1] w-10 rounded-lg opacity-0 duration-500 hover:opacity-100 hover:pb-[80px]">
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#4867AA] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#81B2DF] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#D74141] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#3A9DF9] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slide-box">
                <div className="shadow-[0_15px_55px_rgba(35,35,35,0.15)] rounded-[10px] bg-white overflow-hidden group">
                  <div className="relative overflow-hidden z-[1] before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:bg-black2 before:top-[-100px] before:left-[-100px] before:opacity-30 before:z-[1] before:duration-500 before:rounded-full before:scale-50 before:translate-x-[-50%] group-hover:before:scale-[7]">
                    <img
                      src="assets/images/team/pic1.jpg"
                      alt="/"
                      className="group-hover:scale-110 duration-500 block w-full"
                    />
                  </div>
                  <div className="content bg-white flex justify-between items-center py-[15px] px-5">
                    <div className="clearfix">
                      <h6>
                        <a href="team-detail.html"> Sarah Albert </a>
                      </h6>
                      <span className="font-normal text-sm leading-5 text-primary">
                        Senior Chef
                      </span>
                    </div>
                    <ul className="team-social">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="text-xl inline-block h-10 w-10 leading-10 text-center rounded-lg bg-primary text-white items pt-[2px]"
                        >
                          <i className="flaticon-share"></i>
                        </a>
                        <ul className="sub-team-social absolute bottom-[20px] z-[1] w-10 rounded-lg opacity-0 duration-500 hover:opacity-100 hover:pb-[80px]">
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white inline-block duration-500 text-center h-10 w-10 leading-10 text-lg"
                            >
                              <i className="fab fa-facebook-f bg-[#4867AA] h-10 w-10 flex items-center justify-center rounded-lg"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white inline-block duration-500 text-center h-10 w-10 leading-10 text-lg"
                            >
                              <i className="fab fa-twitter bg-[#81B2DF] h-10 w-10 flex items-center justify-center rounded-lg"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white inline-block duration-500 text-center h-10 w-10 leading-10 text-lg"
                            >
                              <i className="fab fa-instagram bg-[#D74141] h-10 w-10 flex items-center justify-center rounded-lg"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white inline-block duration-500 text-center h-10 w-10 leading-10 text-lg"
                            >
                              <i className="fa-brands fa-linkedin-in bg-[#3A9DF9] h-10 w-10 flex items-center justify-center rounded-lg"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slide-box">
                <div className="shadow-[0_15px_55px_rgba(35,35,35,0.15)] rounded-[10px] bg-white overflow-hidden group">
                  <div className="relative overflow-hidden z-[1] before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:bg-black2 before:top-[-100px] before:left-[-100px] before:opacity-30 before:z-[1] before:duration-500 before:rounded-full before:scale-50 before:translate-x-[-50%] group-hover:before:scale-[7]">
                    <img
                      src="assets/images/team/pic2.jpg"
                      alt="/"
                      className="group-hover:scale-110 duration-500 block w-full"
                    />
                  </div>
                  <div className="content bg-white flex justify-between items-center py-[15px] px-5">
                    <div className="clearfix">
                      <h6>
                        <a href="team-detail.html"> Sarah Albert </a>
                      </h6>
                      <span className="font-normal text-sm leading-5 text-primary">
                        Senior Chef
                      </span>
                    </div>
                    <ul className="team-social">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="text-xl inline-block h-10 w-10 leading-10 text-center rounded-lg bg-primary text-white pt-[2px]"
                        >
                          <i className="flaticon-share"></i>
                        </a>
                        <ul className="sub-team-social absolute bottom-[20px] z-[1] w-10 rounded-lg opacity-0 duration-500 hover:opacity-100 hover:pb-[80px]">
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#4867AA] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#81B2DF] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#D74141] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#3A9DF9] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slide-box">
                <div className="shadow-[0_15px_55px_rgba(35,35,35,0.15)] rounded-[10px] bg-white overflow-hidden group">
                  <div className="relative overflow-hidden z-[1] before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:bg-black2 before:top-[-100px] before:left-[-100px] before:opacity-30 before:z-[1] before:duration-500 before:rounded-full before:scale-50 before:translate-x-[-50%] group-hover:before:scale-[7]">
                    <img
                      src="assets/images/team/pic3.jpg"
                      alt="/"
                      className="group-hover:scale-110 duration-500 block w-full"
                    />
                  </div>
                  <div className="content bg-white flex justify-between items-center py-[15px] px-5">
                    <div className="clearfix">
                      <h6>
                        <a href="team-detail.html"> Sarah Albert </a>
                      </h6>
                      <span className="font-normal text-sm leading-5 text-primary">
                        Senior Chef
                      </span>
                    </div>
                    <ul className="team-social">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="text-xl inline-block h-10 w-10 leading-10 text-center rounded-lg bg-primary text-white pt-[2px]"
                        >
                          <i className="flaticon-share"></i>
                        </a>
                        <ul className="sub-team-social absolute bottom-[20px] z-[1] w-10 rounded-lg opacity-0 duration-500 hover:opacity-100 hover:pb-[80px]">
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#4867AA] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#81B2DF] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#D74141] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#3A9DF9] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slide-box">
                <div className="shadow-[0_15px_55px_rgba(35,35,35,0.15)] rounded-[10px] bg-white overflow-hidden group">
                  <div className="relative overflow-hidden z-[1] before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:bg-black2 before:top-[-100px] before:left-[-100px] before:opacity-30 before:z-[1] before:duration-500 before:rounded-full before:scale-50 before:translate-x-[-50%] group-hover:before:scale-[7]">
                    <img
                      src="assets/images/team/pic4.jpg"
                      alt="/"
                      className="group-hover:scale-110 duration-500 block w-full"
                    />
                  </div>
                  <div className="content bg-white flex justify-between items-center py-[15px] px-5">
                    <div className="clearfix">
                      <h6>
                        <a href="team-detail.html"> Sarah Albert </a>
                      </h6>
                      <span className="font-normal text-sm leading-5 text-primary">
                        Senior Chef
                      </span>
                    </div>
                    <ul className="team-social">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="text-xl inline-block h-10 w-10 leading-10 text-center rounded-lg bg-primary text-white pt-[2px]"
                        >
                          <i className="flaticon-share"></i>
                        </a>
                        <ul className="sub-team-social absolute bottom-[20px] z-[1] w-10 rounded-lg opacity-0 duration-500 hover:opacity-100 hover:pb-[80px]">
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#4867AA] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#81B2DF] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#D74141] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li className="mb-2 relative">
                            <a
                              href="javascript:void(0);"
                              className="text-white duration-500 text-center text-lg bg-[#3A9DF9] h-10 w-10 flex items-center justify-center rounded-lg"
                            >
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-nav">
            <div className="swiper-button-prev team-button-prev group hover:before:animate-spin">
              <i className="fa-solid fa-arrow-left text-white group-hover:text-primary relative"></i>
            </div>
            <div className="swiper-button-next team-button-next group hover:before:animate-spin">
              <i className="fa-solid fa-arrow-right text-white group-hover:text-primary relative"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterChefsSection;
