import React from "react";

const ShopCheckout = ({ img, title, price }) => {
  return (
    <tr>
      <td className="p-[15px] font-medium border border-[#00000020] product-item-img">
        <img
          src={img}
          style={{ height: "100px", borderRadius: "50%",objectFit:"cover" }}
          alt={title}
        />
      </td>
      <td className="p-[15px] font-medium border border-[#00000020] text-bodycolor">
        {title}
      </td>
      <td className="p-[15px] font-medium border border-[#00000020] text-bodycolor">
        ${Math.ceil(price)}
      </td>
    </tr>
  );
};

export default ShopCheckout;
