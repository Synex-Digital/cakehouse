import React from "react";
import { Link } from "react-router-dom";

const ShopStyle1 = ({
  imageUrl,
  itemName,
  vendorName,
  deliveryTime,
  price,
  rating,
}) => {
  return (
    <div className="dz-shop-card style-1 flex border border-[#0000001a] rounded-[10px] mb-5 overflow-hidden duration-500 hover:border-transparent hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] relative">
      <div
        className="dz-media w-[100px] min-w-[100px]"
        style={{ height: "108px", width: "100px" }}
      >
        <img
          src={imageUrl}
          alt={itemName}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="dz-content sm:p-5 p-2 flex flex-col w-full">
        <div className="dz-head mb-4 flex items-center justify-between">
          <h6 className="dz-name mb-0 flex items-center text-base">
            <svg
              className="mr-[10px]"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" y="0.5" width="16" height="16" stroke="#0F8A65" />
              <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
            </svg>
            <Link to={"#"} className="menuDetailModal">
              {itemName}
            </Link>
          </h6>
          <div className="rate bg-[#FE9F10] text-white rounded-[5px] py-[2px] px-[5px] font-medium text-[13px] leading-[18px] inline-block sm:static absolute bottom-[10px] right-3">
            <i className="fa-solid fa-star"></i> {rating}
          </div>
        </div>
        <div className="dz-body sm:flex block justify-between">
          <ul className="dz-meta flex mx-[-10px]">
            <li className="leading-[21px] mx-[10px] text-sm text-[#727272]">
              By <span className="text-primary font-medium">{vendorName}</span>
            </li>
            <li className="leading-[21px] mx-[10px] text-sm text-[#727272]">
              <i className="flaticon-scooter mr-1 text-xl text-primary"></i>{" "}
              {deliveryTime} min
            </li>
          </ul>
          <p className="mb-0">
            <span className="text-primary font-weight-500">
              ${Math.ceil(price)}
            </span>
            For a one
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopStyle1;
