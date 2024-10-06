import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const OurMenu3 = ({ name, link, description, ratings, price, img }) => {
  return (
    <li className="card-container lg:w-1/3 md:w-1/2	w-full px-[15px] mb-[30px] All drink sweet salad">
      <div className="dz-img-box7 rounded-[10px] bg-white text-center relative h-full duration-200 overflow-hidden z-[1] shadow-[0px_15px_55px_rgba(34,34,34,0.15)]">
        <div className="dz-media relative overflow-hidden">
          <img src={img} alt="/" className="duration-300" />
          <div className="dz-meta">
            <ul>
              <li className="absolute top-0 bg-[#FE9F10] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-2.5 font-semibold text-xs leading-[18px] z-[2]">
                Top Seller
              </li>
              <li className="rating absolute bottom-[20px] right-[20px] bg-white text-[#222222] rounded-md text-sm font-medium py-1 px-[10px] mr-0 flex items-center gap-y-1">
                <FaStar className="text-[#FE9F10] text-xs top-[-2px] mr-[5px] relative scale-[1.2]" />
                {ratings}
              </li>
            </ul>
          </div>
        </div>
        <div className="dz-content flex flex-col lg:py-[25px] py-5 lg:px-5 px-[15px]">
          <h5 className="title text-black2 mb-2">
            <Link to={link}>{name}</Link>
          </h5>
          <p className="mb-[10px] text-sm">{description}</p>
          <span className="price text-2xl font-semibold leading-[1.1]">
            {price}
          </span>
        </div>
      </div>
    </li>
  );
};

export default OurMenu3;
