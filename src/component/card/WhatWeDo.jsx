import React from "react";
import { Link } from "react-router-dom";

const WhatWeDo = ({ title, description, link, img }) => {
  return (
    <div className="lg:w-1/4 sm:w-1/2 w-full mb-[30px] px-[15px]">
      <div className="icon-bx-wraper style-3 rounded-[10px] bg-[#2222220d] text-center h-full py-[30px] px-3 border-[2px] border-transparent flex flex-col duration-500 hover:bg-white hover:border-primary hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] hover:translate-y-[-10px]">
        <div className="icon-bx w-[95px] h-[95px] rounded-full bg-primary mx-auto mb-5 flex items-center justify-center">
          <div className="icon-cell">
            <img
              className="flaticon-vegetable text-[50px] text-white leading-[50px]"
              src={img}
            ></img>
          </div>
        </div>
        <div className="icon-content">
          <h5 className="mb-2">
            <Link href={link}>{title}</Link>
          </h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
