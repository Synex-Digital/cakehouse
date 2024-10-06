import React from "react";
import { Link } from "react-router-dom";

const OurMenu2 = ({ link, img, name, category }) => {
  return (
    <li className="card-container lg:w-1/3 md:w-1/2	w-full px-[15px] All pizza spicy">
      <div className="dz-img-box8 flex flex-col xl:mb-[45px] mb-[30px]">
        <Link
          to={img}
          title="Sweet Cake"
          data-src="assets/images/gallery/grid5/pic1.jpg"
          className="dz-media overflow-hidden"
        >
          <img
            src={img}
            alt={name}
            className="h-full w-full rounded-[5px] object-cover duration-500"
          />
        </Link>
        <div className="dz-content pt-[15px] relative">
          <div className="dz-head flex justify-between items-center">
            <h6>
              <Link to={link}>{name}</Link>
            </h6>
            <span className="bg-heart w-[60px] h-[60px] inline-block my-[-25px] mx-[-18px]"></span>
          </div>
          <p className="category text-[13px] leading-5 uppercase">{category}</p>
        </div>
      </div>
    </li>
  );
};

export default OurMenu2;
