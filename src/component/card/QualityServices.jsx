import React from "react";

const QualityServices = ({ name, description, icon }) => {
  return (
    <div class="lg:w-1/4 sm:w-1/2 w-full px-[15px]">
      <div class="bg-[url('../images/gallery/grid/pic1.jpg')] icon-box-wrapper group text-center">
        <div class="inner-content relative z-[1]">
          <div class="mb-[10px] flex justify-center">{icon && icon}</div>
          <div class="icon-content overflow-hidden text-center">
            <h5 class="mb-2">{name}</h5>
            <p class="sm:text-base text-[15px] group-hover:text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityServices;
