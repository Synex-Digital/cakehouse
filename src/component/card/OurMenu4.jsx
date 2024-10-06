import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const MenuCard = ({ image, title, description, price, link }) => {
  return (
    <li className="card-container xl:w-1/4 lg:w-1/3 sm:w-1/2 w-full pl-[15px] pr-[15px] pb-[30px] All pizza spicy">
      <div className="dz-img-box3 box-hover group style-4 bg-white p-[18px] flex flex-col h-[160px] relative z-[1] overflow-hidden rounded-[10px]">
        <div className="menu-detail flex items-center mb-3">
          <div className="dz-media mr-5 w-[60px] min-w-[60px] h-[60px]">
            <img src={image} alt="menu-image" />
          </div>
          <div className="dz-content">
            <h5 className="title mb-[3px] duration-500">
              <a href="product-detail.html">{title}</a>
            </h5>
            <p>{description}</p>
          </div>
        </div>
        <div className="menu-footer max-w-[110px] mt-auto flex flex-col">
          <span className="text-bodycolor text-[13px]">Regular Price</span>
          <span className="price duration-500 mt-1">${Math.round(price)}</span>
        </div>
        <Link className="detail-btn flex justify-center items-center" to={link}>
          <i className="fa-solid fa-star">
            <FaPlus />
          </i>
        </Link>
      </div>
    </li>
  );
};

export default MenuCard;
