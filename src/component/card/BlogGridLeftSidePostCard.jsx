import React from "react";
import { Link } from "react-router-dom";

const BlogGridLeftSidePostCard = ({
  imgSrc,
  title,
  postLink,
  date,
  comments,
}) => {
  return (
    <div className="widget-post clearfix flex items-center p-[10px] rounded-[10px] border border-[#2222221a] mb-[15px]">
      <div className="dz-media h-[80px] w-[100px] min-w-[100px] max-xl:w-[80px] max-xl:min-w-[80px] mr-[15px] rounded-md overflow-hidden">
        <img
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
          }}
          src={imgSrc}
          alt={title}
        />
      </div>
      <div className="dz-info relative">
        <h6 className="text-base mb-2">
          <Link to={postLink}>{title}</Link>
        </h6>
        <div className="mb-0">
          <ul className="flex items-center max-2xl:block max-xl:mx-[-6px]">
            <li className="inline-block relative text-[13px] mr-3">
              <Link
                to="#"
                className="text-sm font-medium text-bodycolor"
              >
                <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150"></i>
                {date}
              </Link>
            </li>
            <li className="inline-block relative text-[13px] mr-3">
              <Link
                to="#"
                className="text-sm font-medium text-bodycolor"
              >
                <i className="flaticon-chat-bubble text-xs text-primary mr-[5px] translate-y-[1px] scale-150"></i>
                {comments}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogGridLeftSidePostCard;
