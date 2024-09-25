import React from "react";
import { Link } from "react-router-dom";

const WhatWeDo = ({ title, description, link, img }) => {
  return (
    <div class="lg:w-1/4 sm:w-1/2 w-full mb-[30px] px-[15px]">
      <div class="icon-bx-wraper style-3 rounded-[10px] bg-[#2222220d] text-center h-full py-[30px] px-3 border-[2px] border-transparent flex flex-col duration-500 hover:bg-white hover:border-primary hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] hover:translate-y-[-10px]">
        <div class="icon-bx w-[95px] h-[95px] rounded-full bg-primary mx-auto mb-5 flex items-center justify-center">
          <div class="icon-cell">
            <img
              class="flaticon-vegetable text-[50px] text-white leading-[50px]"
              src={img}
            ></img>
          </div>
        </div>
        <div class="icon-content">
          <h5 class="mb-2">
            <Link href={link}>{title}</Link>
          </h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
