import React from "react";

function Testimonial() {
  return (
    <div className="w-full px-[15px] lg:mb-[60px] mb-[30px]">
      <div className="testimonial-2 flex lg:flex-row flex-col bg-white relative">
        <div className="dz-media rounded-lg xl:w-[570px] xl:min-w-[570px] lg:w-[450px] lg:min-w-[450px] w-full relative overflow-hidden">
          <img
            src="assets/images/testimonial/large/pic1.jpg"
            alt="/"
            className="max-xl:h-full object-cover"
          />
        </div>
        <div className="testimonial-1 lg:pt-5 lg:pb-[30px] lg:pl-[30px] py-5 relative w-full flex flex-col">
          <div className="testimonial-text relative my-[15px] text-base">
            <p className="xl:text-[18px] text-base leading-[32px] font-medium text-[#222222]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </div>
          <div className="testimonial-info pl-[15px] mt-auto relative z-[1] after:content-[''] after:bg-primary after:rounded after:h-[5px] after:w-[50px] after:absolute after:top-[25px] after:left-[-22px] after:rotate-90">
            <h5 className="testimonial-name font-bold leading-[32px] lg:text-[25px] text-lg">
              Carry Mint
            </h5>
            <span className="testimonial-position leading-[21px] text-sm block text-primary">
              Food Expert
            </span>
          </div>
          <i className="flaticon-right-quote quote absolute lg:right-[35px] right-5 bottom-[15px] xl:text-[102px] lg:text-[85px] text-[65px] text-primary inline-flex items-center"></i>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
