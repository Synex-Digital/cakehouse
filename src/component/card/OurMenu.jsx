import React from "react";
import { Link } from "react-router-dom";

export const OurMenu = ({ link, price, title, description }) => {
  return (
    <div class="dz-shop-card style-2 relative overflow-hidden mb-[30px] p-0 shadow-none">
      <div class="dz-content flex flex-col w-full">
        <div class="dz-headdz-head flex justify-between items-center mb-3">
          <span class="header-text lg:text-lg text-base lg:leading-7 lg:leading-528px]a font-semibold">
            <Link
              to={link}
              class="text-black2 max-w-[280px] text-ellipsis overflow-hidden block whitespace-nowrap duration-500 hover:text-primary"
            >
              {title}
            </Link>
          </span>
          <span class="img-line block"></span>
          <span class="header-price header-price text-primary font-semibold text-xl leading-7">
            {price}
          </span>
        </div>
        <p class="dz-body dz-body text-[15px] text-bodycolor leading-[21px] font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};
