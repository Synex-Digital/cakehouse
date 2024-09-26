import React from "react";
import Slider from "../shared/Slider";

const FromOurMenuSection = () => {
  return (
    <section className="sm:pb-[100px] pb-[40px] relative">
      <div className="container">
        <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
          <h2 className="font-lobster">From Our Menu</h2>
        </div>

        <div className="slider-frame relative">
          <div className="swiper menu-swiper">
            <div>
              <Slider />
            </div>
          </div>
          <div className="swiper-nav">
            <div className="swiper-button-prev prev1 group hover:before:animate-spin">
              <i className="fa-solid fa-arrow-left text-white group-hover:text-primary relative"></i>
            </div>
            <div className="swiper-button-next next1 group hover:before:animate-spin">
              <i className="fa-solid fa-arrow-right text-white group-hover:text-primary relative"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FromOurMenuSection;
