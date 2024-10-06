import React from "react";
import PageBanner from "../component/shared/PageBanner";
import PageLaout from "../component/layout/PageLaout";
import ContactUsCard from "../component/card/ContactUs";
import { IoLocationOutline } from "react-icons/io5";
import { CiClock1, CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const items = [
  {
    id: 1,
    title1: "Location",
    title2: "6952 Shelley St",
    heading: "Melbource",
    icon: <IoLocationOutline />,
  },
  {
    id: 2,
    title1: "Phone Number",
    title2: "+(800) 800-900-100",
    heading: "+222 33 567 8665",
    icon: <CiPhone />,
  },
  {
    id: 3,
    title1: "Email Address",
    title2: "Info@Webmail.com",
    heading: "nfo@Example.web.com",
    icon: <MdOutlineEmail />,
  },

  {
    id: 4,
    title1: "Open & Closing",
    title2: "Mon - Fri: 09:00am",
    heading: "to 07.00pm",
    icon: <CiClock1 />,
  },
];

const ContactUs = () => {
  return (
    <PageLaout>
      <PageBanner name={"Contact Us"} />
      <section className="section-wrapper-8 sm:pt-[100px] pt-[50px] lg:pb-[100px] sm:pb-10 pb-5 md:px-[30px] px-[15px] 2xl:mx-[100px] lg:mx-[50px] bg-[#2222220a] rounded-[30px] 2xl:mb-[100px] lg:mb-[70px] 2xl:mt-[270px] lg:mt-[190px]">
        <div className="container">
          <div className="row inner-section-wrapper items-center 2xl:mb-[80px] lg:mb-[60px] md:mb-[30px] mb-[45px] 2xl:mt-[-215px] lg:mt-[-170px] mt-0">
            {items.map((item) => (
              <ContactUsCard
                key={item.id}
                heading={item.heading}
                title1={item.title1}
                title2={item.title2}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
        <div className="mb-[50px] max-xl:mb-[30px] relative mx-auto text-center">
          <h2 className="font-lobster">Reservation</h2>
        </div>
        <form
          className="dzForm dezPlaceAni"
          method="POST"
          action="https://swigo.dexignzone.com/tailwind/xhtml/assets/script/contact_smtp.php"
        >
          <div className="dzFormMsg"></div>
          <input
            type="hidden"
            className="form-control"
            name="dzToDo"
            value="Contact"
          />
          <div className="row">
            <div className="md:w-1/2 w-full mb-[30px] sm:mb-[50px] px-[15px]">
              <label className="form-label text-sm font-medium mb-[10px] text-primary">
                Your Name
              </label>
              <div className="input-group m-0 relative flex flex-wrap items-center border-b border-white input-line input-black">
                <input
                  name="dzName"
                  required
                  type="text"
                  className="form-control bg-transparent h-[48px] leading-6 p-0 pb-[10px] border-0 placeholder:text-black2 outline-none"
                  placeholder="John Doe"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full mb-[30px] sm:mb-[50px] px-[15px]">
              <label className="form-label text-sm font-medium mb-[10px] text-primary">
                Your Email
              </label>
              <div className="input-group m-0 relative flex flex-wrap items-center border-b border-white input-line input-black">
                <input
                  name="dzEmail"
                  required
                  type="text"
                  className="form-control bg-transparent h-[48px] leading-6 p-0 pb-[10px] border-0 placeholder:text-black2 outline-none"
                  placeholder="info@example.com"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full mb-[30px] sm:mb-[50px] px-[15px]">
              <label className="form-label text-sm font-medium mb-[10px] text-primary">
                Your Number
              </label>
              <div className="input-group m-0 relative flex flex-wrap items-center border-b border-white input-line input-black">
                <input
                  name="dzPhoneNumber"
                  required
                  type="text"
                  className="form-control bg-transparent h-[48px] leading-6 p-0 pb-[10px] border-0 placeholder:text-black2 outline-none dz-number"
                  placeholder="9876543210"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full mb-[30px] sm:mb-[50px] px-[15px]">
              <label className="form-label text-sm font-medium mb-[10px] text-primary">
                Members
              </label>
              <div className="input-group m-0 relative flex flex-wrap items-center border-b border-white input-line input-black">
                <input
                  name="dzOther[Person]"
                  required
                  type="text"
                  className="form-control bg-transparent h-[48px] leading-6 p-0 pb-[10px] border-0 placeholder:text-black2 outline-none"
                  placeholder="1 Person"
                />
              </div>
            </div>
            <div className="w-full px-[15px] mb-[40px]">
              <label className="form-label text-primary">Message</label>
              <div className="input-group m-0 relative flex flex-wrap items-center border-b border-white input-line input-black">
                <textarea
                  name="dzMessage"
                  required
                  className="form-control bg-transparent resize-none h-[105px] w-full leading-6 p-0 pb-[10px] border-0 placeholder:text-black2"
                  placeholder="Hi, do you Have a moment to talk About !"
                ></textarea>
              </div>
            </div>
            <div className="w-full px-[15px] mb-5">
              <div className="input-recaptcha">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                  data-callback="verifyRecaptchaCallback"
                  data-expired-callback="expiredRecaptchaCallback"
                ></div>
                <input
                  className="form-control hidden"
                  style={{ display: "none" }}
                  data-recaptcha="true"
                  required
                  data-error="Please complete the Captcha"
                />
              </div>
            </div>
            <div className="w-full px-[15px] text-center">
              <button
                name="submit"
                value="submit"
                type="submit"
                className="btn btn-primary btn-hover-1"
              >
                <span>Book A Table</span>
              </button>
            </div>
          </div>
        </form>
      </section>
    </PageLaout>
  );
};

export default ContactUs;
