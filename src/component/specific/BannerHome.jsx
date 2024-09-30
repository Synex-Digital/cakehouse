import React, { useState } from "react";
import Hero from "../card/Hero";
import { pic } from "../../assets/pic";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaLongArrowAltUp } from "react-icons/fa";
const BannerHome = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="main-bnr-one overflow-hidden relative">
      <div className="slider-pagination 2xl:left-[50px] xl:left-0 max-xl:left-auto max-xl:right-[20px] z-[2]">
        <div className="main-button-prev lg:block hidden mx-auto">
          <i className="fa-solid fa-arrow-up">
            <FaLongArrowAltUp />
          </i>
        </div>
        <div className="main-slider-pagination">
          <span
            className="swiper-pagination-bullet"
            onClick={() => setCount(1)}
            style={{
              cursor: "pointer",
              color: count === 1 ? "#4a6a1a" : "#7da64066",
            }}
          >
            01
          </span>
          <span
            style={{
              cursor: "pointer",
              color: count === 2 ? "#4a6a1a" : "#7da64066",
            }}
            className="swiper-pagination-bullet"
            onClick={() => setCount(2)}
          >
            02
          </span>
          <span
            style={{
              cursor: "pointer",
              color: count === 3 ? "#4a6a1a" : "#7da64066",
            }}
            className="swiper-pagination-bullet"
            onClick={() => setCount(3)}
          >
            03
          </span>
        </div>
        <div className="main-button-next lg:block hidden mx-auto">
          <i className="fa-solid fa-arrow-down">
            <FaArrowDownLong />
          </i>
        </div>
      </div>
      <div className="main-slider-1  overflow-hidden z-[1]">
        <div className="swiper-wrapper">
          {count === 1 && (
            <Hero
              heading={"Our Product Features"}
              title1={"Discover"}
              title2={"Our"}
              title3={"Menu"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
              }
              img1={""}
              img2={pic.user_spaghetti}
              animationImg={pic.user_arrow}
            />
          )}
          {count === 2 && (
            <Hero
              heading={"Why Choose Us"}
              title1={"Trusted by Millions"}
              title2={"Affordable Prices"}
              title3={"24/7 Support"}
              description={
                "We are trusted by millions of users worldwide, offer affordable pricing, and provide round-the-clock support."
              }
              img1={""}
              img2={pic.user_spaghetti}
              animationImg={pic.user_arrow}
            />
          )}
          {count === 3 && (
            <Hero
              heading={"Our Services"}
              title1={"Custom Development"}
              title2={"Cloud Solutions"}
              title3={"AI Integration"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
              }
              img1={""}
              img2={pic.user_spaghetti}
              animationImg={pic.user_arrow}
            />
          )}
        </div>
      </div>
      {/* <div className="container relative z-[1]">
        <div className="main-thumb1-area swiper-btn-lr">
          <div className="swiper main-thumb1 w-[612px] h-auto overflow-hidden">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="food-card flex items-center">
                  <div className="dz-media w-[80px] min-w-[80px] rounded-md relative overflow-hidden">
                    <img
                      src="assets/images/main-slider/slider1/thumb/pic1.jpg"
                      alt="/"
                    />
                  </div>
                  <div className="dz-content ml-[15px]">
                    <h5 className="mb-1">BreakFast</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="food-card flex items-center">
                  <div className="dz-media w-[80px] min-w-[80px] rounded-md relative overflow-hidden">
                    <img
                      src="assets/images/main-slider/slider1/thumb/pic2.jpg"
                      alt="/"
                    />
                  </div>
                  <div className="dz-content ml-[15px]">
                    <h5 className="mb-1">Lunch</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="food-card flex items-center">
                  <div className="dz-media w-[80px] min-w-[80px] rounded-md relative overflow-hidden">
                    <img
                      src="assets/images/main-slider/slider1/thumb/pic3.jpg"
                      alt="/"
                    />
                  </div>
                  <div className="dz-content ml-[15px]">
                    <h5 className="mb-1">Dinner</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="thumb-button-prev btn-prev-1 top-[50%] absolute translate-y-[-50%] h-[80px] rounded-md w-[27px] leading-[80px] text-center text-[#222222] text-sm duration-500 hover:bg-primary hover:text-white bg-[#2222221a] left-0 right-auto">
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <div className="thumb-button-next btn-next-1 top-[50%] absolute translate-y-[-50%] h-[80px] rounded-md w-[27px] leading-[80px] text-center text-[#222222] text-sm duration-500 hover:bg-primary hover:text-white bg-[#2222221a] right-0">
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BannerHome;
