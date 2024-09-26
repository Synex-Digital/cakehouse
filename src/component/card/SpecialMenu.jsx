import React from "react";

const SpecialMenu = ({ name, image, description, price, alt, href }) => {
  return (
    <div className="lg:w-1/4 sm:w-1/2 w-full pl-[15px] pr-[15px] pb-[30px]">
      <div className="group rounded-lg menu-box box-hover text-center pt-10 px-5 pb-[30px] bg-white border border-grey-border hover:border-primary h-full flex duration-500 flex-col relative overflow-hidden z-[1] active">
        <div className="w-[150px] min-w-[150px] h-[150px] mt-0 mx-auto mb-[10px] rounded-full border-[9px] border-white duration-500 z-[1]">
          <img
            src={image}
            alt={alt}
            className="rounded-full relative group-hover:animate-spin"

            style={{
              width: "132px",
              height: "132px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="mt-auto">
          <h4 className="mb-2.5">
            <a href="product-detail.html">{name}</a>
          </h4>
          <p className="mb-2">{description}</p>
          <h5 className="text-primary">{price}</h5>
          <a href={href} className="btn btn-primary btn-hover-2 mt-[18px]">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
