import React from "react";
import PageLaout from "../../component/layout/PageLaout";
import { icons } from "../../assets/icons";
import PageBanner from "../../component/shared/PageBanner";
import {Link} from "react-router-dom";

const Testimonial = () => {
  return (
  
    <PageLaout>
      <PageBanner name={"Testimonial"} />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[100px] sm:pb-10 pb-5 overflow-hidden">
        <div className="container">
          <div className="row loadmore-content">
            <div className="w-full px-[15px] lg:mb-[60px] mb-[30px]">
              <div className="testimonial-2 flex lg:flex-row flex-col bg-white relative">
                <div className="dz-media rounded-lg xl:w-[570px] xl:min-w-[570px] lg:w-[450px] lg:min-w-[450px] w-full relative overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid"
                    alt="/"
                    className="max-xl:h-full object-cover"
                    style={{
                      width: "570px",
                      height: "392px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="testimonial-1 lg:pt-5 lg:pb-[30px] lg:pl-[30px] py-5 relative w-full flex flex-col">
                  <div className="testimonial-text relative my-[15px] text-base">
                    <p className="xl:text-[18px] text-base leading-[32px] font-medium text-[#222222]">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
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
                  <i className="flaticon-right-quote quote absolute lg:right-[35px] right-5 bottom-[15px] xl:text-[102px] lg:text-[85px] text-[65px] text-primary inline-flex items-center">
                    <img src={icons.quote} alt="quote.svg" loading="" />
                  </i>
                </div>
              </div>
            </div>
            <div className="w-full px-[15px] lg:mb-[60px] mb-[30px]">
              <div className="testimonial-2 flex lg:flex-row flex-col-reverse bg-white relative">
                <div className="testimonial-1 lg:pt-5 lg:pb-[30px] lg:pr-[30px] py-5 relative w-full flex flex-col">
                  <div className="testimonial-text relative my-[15px] text-base">
                    <p className="xl:text-[18px] text-base leading-[32px] font-medium text-[#222222]">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                  <div className="testimonial-info pl-[15px] mt-auto relative z-[1] after:content-[''] after:bg-primary after:rounded after:h-[5px] after:w-[50px] after:absolute after:top-[25px] after:left-[-22px] after:rotate-90">
                    <h5 className="testimonial-name font-bold leading-[32px] lg:text-[25px] text-lg">
                      John Doe
                    </h5>
                    <span className="testimonial-position leading-[21px] text-sm block text-primary">
                      Food Expert
                    </span>
                  </div>
                  <i className="flaticon-right-quote quote absolute lg:right-[35px] right-5 bottom-[15px] xl:text-[102px] lg:text-[85px] text-[65px] text-primary inline-flex items-center">
                    <img src={icons.quote} alt="quote.svg" loading="" />
                  </i>
                </div>
                <div className="dz-media rounded-lg xl:w-[570px] xl:min-w-[570px] lg:w-[450px] lg:min-w-[450px] w-full relative overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid"
                    alt="/"
                    className="max-xl:h-full object-cover"
                    style={{
                      width: "570px",
                      height: "392px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-[15px] lg:mb-[60px] mb-[30px]">
              <div className="testimonial-2 flex lg:flex-row flex-col bg-white relative">
                <div className="dz-media rounded-lg xl:w-[570px] xl:min-w-[570px] lg:w-[450px] lg:min-w-[450px] w-full relative overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid"
                    alt="/"
                    className="max-xl:h-full object-cover"
                    style={{
                      width: "570px",
                      height: "392px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="testimonial-1 lg:pt-5 lg:pb-[30px] lg:pl-[30px] py-5 relative w-full flex flex-col">
                  <div className="testimonial-text relative my-[15px] text-base">
                    <p className="xl:text-[18px] text-base leading-[32px] font-medium text-[#222222]">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                  <div className="testimonial-info pl-[15px] mt-auto relative z-[1] after:content-[''] after:bg-primary after:rounded after:h-[5px] after:w-[50px] after:absolute after:top-[25px] after:left-[-22px] after:rotate-90">
                    <h5 className="testimonial-name font-bold leading-[32px] lg:text-[25px] text-lg">
                      Marn Kamk
                    </h5>
                    <span className="testimonial-position leading-[21px] text-sm block text-primary">
                      Food Expert
                    </span>
                  </div>
                  <i className="flaticon-right-quote quote absolute lg:right-[35px] right-5 bottom-[15px] xl:text-[102px] lg:text-[85px] text-[65px] text-primary inline-flex items-center">
                    <img src={icons.quote} alt="quote.svg" loading="" />
                  </i>
                </div>
              </div>
            </div>
            <div className="w-full px-[15px] lg:mb-[60px] mb-[30px]">
              <div className="testimonial-2 flex lg:flex-row flex-col-reverse bg-white relative">
                <div className="testimonial-1 lg:pt-5 lg:pb-[30px] lg:pr-[30px] py-5 relative w-full flex flex-col">
                  <div className="testimonial-text relative my-[15px] text-base">
                    <p className="xl:text-[18px] text-base leading-[32px] font-medium text-[#222222]">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
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
                  <i className="flaticon-right-quote quote absolute lg:right-[35px] right-5 bottom-[15px] xl:text-[102px] lg:text-[85px] text-[65px] text-primary inline-flex items-center">
                    <img src={icons.quote} alt="quote.svg" loading="" />
                  </i>
                </div>
                <div className="dz-media rounded-lg xl:w-[570px] xl:min-w-[570px] lg:w-[450px] lg:min-w-[450px] w-full relative overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid"
                    alt="/"
                    className="max-xl:h-full object-cover"
                    style={{
                      width: "570px",
                      height: "392px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center m-t10">
            <Link
              className="btn btn-primary dz-load-more btn-hover-2"
              to="#"
              rel="assets/ajax/testimonial.html"
            >
              Load More
            </Link>
          </div>
        </div>
      </section>
    </PageLaout>
  );
};

export default Testimonial;
