import React from "react";

const Hero = ({
  heading,
  title1,
  title2,
  title3,
  description,
  img1,
  img2,
  animationImg,
}) => {
  return (
    <div class="swiper-slide">
      <div class="banner-inner lg:pt-0 md:pt-[110px] pt-[110px] overflow-hidden">
        <div class="container h-full">
          <div class="row items-center md:justify-between justify-center h-full">
            <div class="md:w-7/12 px-[15px]">
              <div class="banner-content md:mb-[60px] mb-0">
                <span class="font-medium md:text-xl text-base text-[var(--secondary-dark)] mb-[10px] block">
                  {heading}
                </span>
                <h1 class="font-lobster mb-2.5 text-black2">
                  {title1}
                  <br /> {title2} <span class="text-primary">{title3}</span>
                </h1>
                <p class="max-w-[500px] lg:text-lg sm:text-base text-sm leading-[27px]">
                  {description}
                </p>
                <div class="banner-btn flex items-center lg:mt-10 mt-[25px] gap-[30px]">
                  <a
                    href="contact-us.html"
                    class="btn btn-primary btn-md btn-hover-1"
                  >
                    <span>Book a Table</span>
                  </a>
                  <a
                    href="about-us.html"
                    class="btn btn-outline text-primary btn-md btn-hover-1"
                  >
                    <span>View More</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="md:w-5/12 px-[15px]">
              <div class="banner-media">
                <img
                  src="assets/images/main-slider/slider1/pic1.png"
                  alt="/"
                  class="xl:w-full lg:w-[450px] md:w-[100%] sm:w-[250px] w-[250px]"
                />
              </div>
            </div>
          </div>
        </div>
        <img src={img1} class="img1" alt="/" />
        <img src={img2} class="img2" alt="/" />
        <img src={animationImg} class="img3 animate-motion" alt="/" />
      </div>
    </div>
  );
};

export default Hero;
