import React from "react";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ShopWishlist = ({ name, price, img }) => {
  return (
    <tr className="border-b border-[#00000020]">
      <td className="p-[15px] font-medium product-item-img">
        <img src={img} alt={name} className="w-[100px] rounded-md" />
      </td>
      <td className="p-[15px] font-medium text-bodycolor">{name}</td>
      <td className="p-[15px] font-medium text-bodycolor">
        ${Math.ceil(price)}
      </td>
      <td className="p-[15px] font-medium product-item-totle">
        <Link
          to="shop-cart.html"
          className="btn bg-[#f3f3f3] shadow-none btn-hover-2 btn-gray hover:bg-primary"
        >
          Add To Cart
        </Link>
      </td>
      <td className="p-[15px] font-medium text-right">
        <Link
          to="#"
          className="bg-danger text-white w-[40px] h-[40px] leading-[40px] rounded-md inline-block text-center "
        >
          <i className="fa fa-close flex justify-center items-center h-full">
            <FaXmark className="text-white" />
          </i>
        </Link>
      </td>
    </tr>
  );
};

export default ShopWishlist;
