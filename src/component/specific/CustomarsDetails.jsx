import React from "react";

const CustomarsDetails = ({ details, name, position }) => {
  return (
    <div className="swiper-slide">
      <div className="testimonial-1 bg-primary relative lg:py-[35px] lg:px-10 py-[25px] px-[15px] h-full lg:rounded-se-[10px] rounded-ee-[10px] rounded-se-none lg:rounded-es-none rounded-es-[10px] flex flex-col">
        <div className="testimonial-text relative mb-[10px]">
          <p className="lg:text-[18px] max-2lg:text-[16px] text-base text-white leading-[1.8]">
            {details}
          </p>
        </div>
        <div className="testimonial-info pl-[15px] lg:mt-[60px] max-2lg:mt-[40px] relative z-[1] after:content-[''] after:bg-[var(--secondary)] after:rounded after:h-[5px] after:w-[50px] after:absolute after:top-[25px] after:left-[-22px] after:rotate-90">
          <h5 className="testimonial-name font-bold leading-[32px] text-white">
            {name}
          </h5>
          <span className="testimonial-position text-white leading-[21px] text-sm block">
            {position}
          </span>
        </div>
        <i className="flaticon-right-quote quote absolute lg:right-[35px] right-5 bottom-[5px] lg:text-[140px] text-[85px] text-[var(--secondary)] inline-flex items-center"></i>
      </div>
    </div>
  );
};

export default CustomarsDetails;
