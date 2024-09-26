import React from "react";

const ReservationSection = () => {
  return (
    <section className="bg-[url('../../assets/cake_background.jpg')] bg-fixed sm:py-[100px] py-[40px] relative z-[2] after:content-[''] after:absolute after:z-[-1] after:bg-black-blur after:opacity-100 after:w-full after:h-full after:top-0 after:left-0 after:backdrop-blur-[6px]">
      <div className="container">
        <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
          <h2 className="font-lobster text-white">Reservation</h2>
        </div>
        <form>
          <div className="row">
            <div className="lg:w-1/3 md:w-1/2 w-full sm:mb-[50px] mb-[30px] pl-[15px] pr-[15px]">
              <div className="relative flex gap-5 items-center w-full border-b border-white">
                <div className="w-[35px] h-[50px] leading-10">
                  <i className="flaticon-user text-white text-2xl align-middle inline-flex"></i>
                </div>
                <input
                  name="dzName"
                  required=""
                  type="text"
                  className="placeholder:text-white bg-transparent p-0 leading-2xl pb-0.5 text-lg border-0 text-white font-medium h-[48px] outline-none relative top-[-5px] focus:ring-0 w-full"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full sm:mb-[50px] mb-[30px] pl-[15px] pr-[15px]">
              <div className="relative flex gap-5 items-center w-full border-b border-white">
                <div className="w-[35px] h-[50px] leading-10">
                  <i className="flaticon-phone-call text-white text-2xl align-middle inline-flex"></i>
                </div>
                <input
                  name="dzPhoneNumber"
                  required=""
                  type="number"
                  className="placeholder:text-white bg-transparent p-0 leading-2xl pb-0.5 text-lg border-0 text-white font-medium h-[48px] outline-none relative top-[-5px] focus:ring-0 w-full"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full sm:mb-[50px] mb-[30px] pl-[15px] pr-[15px]">
              <div className="relative flex gap-5 items-center w-full border-b border-white">
                <div className="w-[35px] h-[50px] leading-10">
                  <i className="flaticon-email-1 text-white text-2xl align-middle inline-flex"></i>
                </div>
                <input
                  name="dzEmail"
                  required=""
                  type="email"
                  className="placeholder:text-white bg-transparent p-0 leading-2xl pb-0.5 text-lg border-0 text-white font-medium h-[48px] outline-none relative top-[-5px] focus:ring-0 w-full"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full sm:mb-[50px] mb-[30px] pl-[15px] pr-[15px]">
              <div className="relative flex gap-3 items-center w-full border-b border-white">
                <div className="w-[35px] h-[50px] leading-10">
                  <i className="flaticon-two-people text-white text-2xl align-middle inline-flex"></i>
                </div>
                <select className="nice-select style-1 text-white flex-1 bg-transparent border-0 text-lg font-normal outline-none relative focus:ring-0">
                  <option value="Member">Number Of People</option>
                  <option value="Member1">Member1</option>
                  <option value="Member2">Member2</option>
                  <option value="Member3">Member3</option>
                  <option value="Member4">Member4</option>
                  <option value="Member5">Member5</option>
                </select>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full sm:mb-[50px] mb-[30px] pl-[15px] pr-[15px]">
              <div className="relative flex gap-5 items-center w-full border-b border-white">
                <div className="w-[35px] h-[50px] leading-10">
                  <i className="flaticon-calendar-date text-white text-2xl align-middle inline-flex"></i>
                </div>
                <input
                  id="datePickerOnly"
                  name="dzName"
                  required=""
                  type="text"
                  className="placeholder:text-white bg-transparent p-0 leading-2xl pb-0.5 text-lg border-0 text-white font-medium h-[48px] outline-none relative top-[-5px] focus:ring-0 w-full form-control filled"
                  placeholder="Date"
                />
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full sm:mb-[50px] mb-[30px] pl-[15px] pr-[15px]">
              <div className="relative flex gap-5 items-center w-full border-b border-white">
                <div className="w-[35px] h-[50px] leading-10">
                  <i className="flaticon-clock text-white text-2xl align-middle inline-flex"></i>
                </div>
                <input
                  id="timePickerOnly"
                  name="dzName"
                  required=""
                  type="text"
                  className="placeholder:text-white bg-transparent p-0 leading-2xl pb-0.5 text-lg border-0 text-white font-medium h-[48px] outline-none relative top-[-5px] focus:ring-0 w-full"
                  placeholder="Time"
                />
              </div>
            </div>
            <div className="w-full text-center">
              <button
                type="submit"
                name="submit"
                value="submit"
                className="btn btn-lg btn-white btn-hover-1 py-[18px] px-[50px] font-medium text-base leading-2xl overflow-hidden z-[1] text-black2 rounded-[6px] relative inline-flex items-center justify-center duration-500 focus:ring-0"
              >
                <span>Book a Table</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
