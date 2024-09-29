import React from "react";
import { Link } from "react-router-dom";

const ServicesDetail = ({ img, text, brand, date }) => {
  return (
    <div className="widget-post-bx style-1">
      <div className="widget-post bg-transparent flex items-center rounded-[10px] mb-[30px] clearfix">
        <div className="dz-media rounded-[10px] mr-[15px] w-[100px] min-w-[100px] h-[100px] overflow-hidden">
          <img
            src={img}
            alt={text}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="dz-info relative">
          <div className="dz-meta">
            <ul className="px-[-10px]">
              <li className="text-[#1F1F1F] text-sm font-normal leading-[30px] mr-[25px] relative inline-block">
                <Link href="*" className="text-[#1F1F1F]">
                  {brand}
                </Link>
              </li>
              <li className="date text-[#1F1F1F] text-sm font-medium leading-[30px] mx-[10px] relative inline-block">
                <Link href="*" className="text-[#666666]">
                  {date}
                </Link>
              </li>
            </ul>
          </div>
          <h6 className="text-base">
            <Link to="blog-standard.html">{text}</Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetail;
