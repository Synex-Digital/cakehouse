import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cart = ({ img, name, price }) => {
  const [count, setCount] = useState(1);
  return (
    <div className="cart-item flex items-center border-b border-[#2222221a] pb-[15px] mb-[15px]">
      <div className="dz-media w-[80px] min-w-[80px] h-[80px] overflow-hidden rounded-[10px] relative">
        <img
          src={img}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover  rounded-[10px]"
        />
      </div>
      <div className="dz-content ml-[15px] w-full">
        <div className="dz-head mb-[10px] flex items-center justify-between">
          <h6 className="text-base">{name}</h6>
          <Link to="#" className="text-black2">
            <i className="fa-solid fa-xmark text-danger">
              <FaXmark />
            </i>
          </Link>
        </div>
        <div className="dz-body flex items-center justify-between">
          <div className="input-group mt-[5px] flex flex-wrap items-stretch h-[31px] relative w-[105px] min-w-[105px]">
            <input
              type="number"
              step="1"
              value={count}
              name="quantity"
              className="quantity-field"
              readOnly
            />
            <span className="flex justify-between p-[2px] absolute w-full">
              <input
                type="button"
                value="-"
                onClick={() => setCount((prev) => prev - 1)}
                className="button-minus"
                data-field="quantity"
                disabled={count === 1}
              />
              <input
                type="button"
                value="+"
                className="button-plus"
                data-field="quantity"
                onClick={() => setCount((prev) => prev + 1)}
                disabled={count === 9}
              />
            </span>
          </div>
          <h5 className="price text-primary mb-0">
            ${Math.round(price) * count}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Cart;
