import React from "react";
import { CgCalendarDates } from "react-icons/cg";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const BlogGrid3 = ({ img, name, view, date, description }) => {
  return (
    <div class="lg:w-1/3 md:1/2 w-full px-[15px]">
      <div class="overlay-shine rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] bg-white group mb-[30px]">
        <div class="dz-media w-full h-full mb-0 relative overflow-hidden">
          <Link to={"#"} class="block">
            <img
              src={img}
              alt={name}
              class="block w-full group-hover:scale-110 duration-500"
              style={{
                width: "231px",
                height: "370px",
                objectFit: "cover",
              }}
            />
          </Link>
        </div>
        <div class="content flex-col flex p-[30px] max-xl:p-5 relative">
          <div class="mb-2.5">
            <ul class="flex">
              <li class="inline-block relative text-[13px] mr-3">
                <Link
                  to={"#"}
                  class="text-sm font-medium text-bodycolor flex items-center gap-1"
                >
                  <i class="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150">
                    <CgCalendarDates />
                  </i>{" "}
                  {date}
                </Link>
              </li>
              <li class="inline-block relative text-[13px] mr-3">
                <Link
                  to={"#"}
                  class="text-sm font-medium text-bodycolor flex items-center gap-1"
                >
                  <i class="flaticon-chat-bubble text-base text-primary mr-[5px]">
                    <IoChatbubbleEllipsesOutline />
                  </i>{" "}
                  {view}
                </Link>
              </li>
            </ul>
          </div>
          <h5 class="mb-2">{name}</h5>
          <p>{description}</p>
          <div>
            <Link
              to={"#"}
              class="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px]  bg-primary border-primary text-white btn-hover-2"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid3;
