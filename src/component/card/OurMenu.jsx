import React from "react";
import { Link } from "react-router-dom";

export const OurMenu = ({ link, price, title, description }) => {
  return (
    <div className="dz-shop-card style-2 relative overflow-hidden mb-[30px] p-0 shadow-none">
      <div className="dz-content flex flex-col w-full">
        <div className="dz-headdz-head flex justify-between items-center mb-3">
          <span className="header-text lg:text-lg text-base lg:leading-7 lg:leading-528px]a font-semibold">
            <Link
              to={link}
              className="text-black2 max-w-[280px] text-ellipsis overflow-hidden block whitespace-nowrap duration-500 hover:text-primary"
            >
              {title}
            </Link>
          </span>
          <span className="img-line block"></span>
          <span className="header-price header-price text-primary font-semibold text-xl leading-7">
            {price}
          </span>
        </div>
        <p className="dz-body dz-body text-[15px] text-bodycolor leading-[21px] font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};
