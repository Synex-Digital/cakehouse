import React from "react";

const FromOurMenu = ({ name, price, image, nameLink, shopCartLink }) => {
  return (
    <div class="swiper-slide">
      <div class="slide-box">
        <div class="dz-img-box2 group">
          <div class="w-full min-w-full h-full">
            <img src={image} alt="" class="block w-full" />
          </div>
          <span class="absolute bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-1.5 font-semibold text-xs leading-[18px] z-[2] group-hover:top-0 top-[-40px] duration-500">
            top seller
          </span>
          <div class="hover-content flex justify-between py-5 px-[30px] absolute bottom-0 opacity-0 z-[2] w-full items-center  duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
            <div class="info relative">
              <h5 class="mb-0">
                <a class="text-white" href={nameLink}>
                  {name}
                </a>
              </h5>
              <span class="text-xl text-yellow font-bold leading-[30px]">
                {price}
              </span>
            </div>
            <a href={shopCartLink}>
              <i class="flaticon-shopping-cart items-center bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] flex align-center relative justify-center text-2xl text-center"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromOurMenu;
