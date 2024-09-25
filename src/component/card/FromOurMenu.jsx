import React from "react";

const FromOurMenu = ({
  imageSrc,
  title,
  price,
  label,
  labelColor,
  linkToProduct,
  linkToCart,
}) => {
  return (
    <div className="swiper-slide">
      <div className="slide-box">
        <div className="group" style={{ width: "270px", height: "371px" }}>
          <div className="w-full min-w-full h-full">
            <img src={imageSrc} alt={title} className="block w-full h-full" />
          </div>
          {label && (
            <span
              className={`absolute ${labelColor} left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-1.5 font-semibold text-xs leading-[18px] z-[2] group-hover:top-0 top-[-40px] duration-500`}
            >
              {label}
            </span>
          )}
          <div className="hover-content flex justify-between py-5 px-[30px] absolute bottom-0 opacity-0 z-[2] w-full items-center duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
            <div className="info relative">
              <h5 className="mb-0">
                <a className="text-white" href={linkToProduct}>
                  {title}
                </a>
              </h5>
              <span className="text-xl text-yellow font-bold leading-[30px]">
                ${price}
              </span>
            </div>
            <a href={linkToCart}>
              <i className="flaticon-shopping-cart items-center bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] flex align-center relative justify-center text-2xl text-center"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromOurMenu;
