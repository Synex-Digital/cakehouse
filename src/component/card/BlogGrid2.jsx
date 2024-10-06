import React from "react";
import { CgCalendarDates } from "react-icons/cg";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { Link } from "react-router-dom";

const BlogGrid2 = ({ img, name, date, view, desciption }) => {
  return (
    <div className="md:w-1/2 w-full px-[15px]">
      <div className="overlay-shine rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] bg-white group mb-[30px]">
        <div className="dz-media w-full h-full mb-0 relative overflow-hidden">
          <Link to="*" className="block">
            <img
              src={img}
              alt={name}
              className="block w-full group-hover:scale-110 duration-500"
              style={{
                objectFit: "cover",
                height: "231px",
                width: "370px",
              }}
            />
          </Link>
        </div>
        <div className="content flex-col flex p-[30px] max-xl:p-5 relative">
          <div className="mb-2.5">
            <ul className="flex">
              <li className="inline-block relative text-[13px] mr-3">
                <Link to="*" className="text-sm font-medium text-bodycolor">
                  <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150">
                    <CgCalendarDates />
                  </i>{" "}
                  {date}
                </Link>
              </li>
              <li className="inline-block relative text-[13px] mr-3">
                <Link to={"#"} className="text-sm font-medium text-bodycolor">
                  <i className="flaticon-chat-bubble text-base text-primary mr-[5px]">
                    <IoChatbubbleEllipses />
                  </i>{" "}
                  {view}
                </Link>
              </li>
            </ul>
          </div>
          <h5 className="mb-2">{name}</h5>
          <p>{desciption}</p>
          <div>
            <Link
              to="*"
              className="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px] bg-primary border-primary text-white btn-hover-2"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid2;
