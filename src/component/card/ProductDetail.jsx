import React from "react";

const ProductDetail = ({ img, name }) => {
  return (
    <li className="p-[5px] sm:w-[50%] w-full">
      <div className="mini-modal inline-flex p-[10px] w-full rounded-[10px] items-center border border-[#2222221a]">
        <div className="dz-media w-[45px] min-w-[45px] h-[45px] rounded-md relative overflow-hidden">
          <img src={img} alt={name} className="w-full h-auto" />
        </div>
        <div className="dz-content ml-[15px] flex justify-between w-full">
          <p className="font-medium text-black2 text-base">{name}</p>
          <div className="form-check search-content block">
            <input
              className="form-check-input appearance-none rounded-[0.5em] w-6 h-6 border-2 border-primary"
              type="checkbox"
              value=""
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductDetail;
