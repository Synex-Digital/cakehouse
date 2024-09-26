import React from "react";

const SignatureDishes = ({ dishes }) => {
  return (
    <div className="signature-dishes">
      <h4 className="mb-[15px]">Signature Dish</h4>
      <ul className="dish-gallery flex flex-wrap pl-0 mx-[-10px]">
        {dishes.map((dish, index) => (
          <li key={index} className="w-1/2 px-[10px] mb-5">
            <a href="product-detail.html">
              <div className="gallery-box-1 relative overflow-hidden rounded-[5px]">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full min-w-full md:h-[150px] h-[120px]"
                />
                <span className="absolute bottom-[5px] left-3 text-lg font-medium text-white z-[1]">
                  {dish.title}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SignatureDishes;
