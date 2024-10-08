import React from "react";
import { Link } from "react-router-dom";

const BlogGridCard = ({
  imgSrc,
  title,
  description,
  date,
  comments,
  postLink,
}) => {
  return (
    <div className="w-full px-[15px]">
      <div className="overlay-shine rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] sm:flex bg-white group mb-[30px]">
        <div className="dz-media sm:min-w-[240px] sm:w-[240px] w-full sm:h-auto h-[250px] mb-0 relative overflow-hidden">
          <Link href="#" className="block h-full">
            <img
              src={imgSrc}
              alt={title}
              className="h-full object-cover w-full group-hover:scale-110 duration-500"
            />
          </Link>
        </div>
        <div className="content flex-col flex py-[25px] px-[30px] relative">
          <div className="mb-2.5">
            <ul className="flex items-center">
              <li className="inline-block relative text-[13px] mr-3">
                <Link
                  href="#"
                  className="text-sm font-medium text-bodycolor"
                >
                  <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150"></i>
                  {date}
                </Link>
              </li>
              <li className="dz-comment">
                <Link
                  href="#"
                  className="text-sm font-medium text-bodycolor"
                >
                  <i className="flaticon-chat-bubble text-base text-primary mr-[5px]"></i>
                  {comments}
                </Link>
              </li>
            </ul>
          </div>
          <h5 className="mb-2">{title}</h5>
          <p>{description}</p>
          <div>
            <Link
              href={postLink}
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

export default BlogGridCard;
