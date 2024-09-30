import React from "react";

const ContactUs = ({ heading, title1, title2, icon }) => {
  return (
    <div className="lg:w-1/4 sm:w-1/2 w-full px-[15px]">
      <div className="icon-bx-wraper relative mb-[30px] xl:pb-[60px] lg:pb-[45px] lg:pt-0 lg:px-0 py-[30px] px-5 lg:rounded-none rounded-[10px] lg:shadow-none shadow-[0px_15px_55px_rgba(34,34,34,0.15)] lg:z-auto z-[1] text-center duration-500 style-5 hover-aware box-hover lg:overflow-visible overflow-hidden group">
        <div className="icon-bx xl:w-[115px] lg:w-[90px] w-[60px] xl:h-[115px] lg:h-[90px] h-[60px] xl:leading-[115px] lg:leading-[90px] leading-[60px] lg:absolute mx-auto lg:mb-0 mb-[15px] lg:translate-x-[-50%] lg:translate-y-[-50%] left-[50%] z-[2] text-center group-hover:bg-transparent">
          <div className="icon-cell lg:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] lg:bg-white rounded-full">
            <i className="flaticon-telephone lg:text-[50px] lg:leading-[50px] text-[45px] leading-[45px] text-primary lg:group-hover:text-primary group-hover:text-white ">
              {icon}
            </i>
          </div>
        </div>
        <div className="icon-content xl:pt-[90px] lg:pt-[65px] xl:px-10 lg:px-5 lg:pb-[30px] lg:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] lg:rounded-[10px] lg:bg-white lg:relative lg:overflow-hidden z-[1] group-hover:text-white">
          <h5 className="mb-[10px]">{heading}</h5>
          <p className="text-base max-2lg:text-sm max-xl:break-words mb-4 leading-[1.5] group-hover:text-white">
            {title1}
            <br />
            {title2}
          </p>
          <div className="effect absolute block rounded-[50%] z-[-1] translate-x-[-50%] translate-y-[-50%] bg-primary w-0 h-0 duration-500 group-hover:w-[300%] group-hover:h-[300%]"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
