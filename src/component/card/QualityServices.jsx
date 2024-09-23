import React from "react";

const QualityServices = ({ name, description, icon }) => {
  return (
    <div className="lg:w-1/4 sm:w-1/2 w-full px-[15px]">
      <div className="bg-[url('../images/gallery/grid/pic1.jpg')] icon-box-wrapper group text-center">
        <div className="inner-content relative z-[1]">
          <div className="mb-[10px] flex justify-center">{icon && icon}</div>
          <div className="icon-content overflow-hidden text-center">
            <h5 className="mb-2">{name}</h5>
            <p className="sm:text-base text-[15px] group-hover:text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityServices;
