import React from "react";
import { Link } from "react-router-dom";

const NewsAndBlog = () => {
  return (
    <div className="swiper-slide">
      <div className="slide-box">
        <div className="card rela overlay-shine rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] sm:flex w-full bg-white group">
          <div className="dz-media sm:min-w-[240px] sm:w-[240px] w-full sm:h-auto h-[250px] mb-0 relative overflow-hidden">
            <Link to="#" className="block h-full">
              <img
                src="https://img.freepik.com/premium-photo/man-with-glasses-blue-shirt-that-says-he-is-smiling_1257035-3299.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid"
                alt="/"
                className="h-full object-cover w-full group-hover:scale-110 duration-500"
              />
            </Link>
          </div>
          <div className="content flex-col flex py-[25px] px-[30px] relative">
            <div className="mb-2.5">
              <ul className="flex items-center">
                <li className="inline-block relative text-[13px] mr-3">
                  <Link className="text-inherit" to="#">
                    <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150"></i>
                    30 Nov 2024
                  </Link>
                </li>
                <li className="inline-block relative text-[13px] mr-3">
                  <Link className="text-inherit" to="#">
                    <i className="flaticon-chat-bubble text-xs text-primary mr-[5px] translate-y-[1px] scale-150"></i>
                    3.5K
                  </Link>
                </li>
              </ul>
            </div>
            <h5 className="mb-2">
              <Link to="blog-standard.html">Taste of Paradise Dishes</Link>
            </h5>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have.
            </p>
            <div>
              <Link
                to="blog-standard.html"
                className="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px] bg-primary border-primary text-white btn-hover-2"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndBlog;
