import React from "react";
import { icons } from "../../assets/icons";
import { Link } from "react-router-dom";

const Team = ({ name, image, position }) => {
  return (
    <div className="lg:w-1/4 sm:w-1/2 w-full px-[15px] mb-[30px]">
      <div className="shadow-lg rounded-[10px] bg-white overflow-hidden group">
        <div className="relative  overflow-hidden z-[1] before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:bg-black2 before:top-[-100px] before:left-[-100px] before:opacity-30 before:z-[1] before:duration-500 before:rounded-full before:scale-50 before:translate-x-[-50%] group-hover:before:scale-[7]">
          <img
            src={image}
            alt={name}
            className="group-hover:scale-110 duration-500 block w-full"
            style={{
              width: "270px",
              height: "311px",
              aspectRatio: "1/1",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="content bg-white flex justify-between items-center py-[15px] px-5">
          <div className="clearfix">
            <h6>
              <Link href="team-detail.html">{name}</Link>
            </h6>
            <span className="font-normal text-sm leading-5 text-primary">
              {position}
            </span>
          </div>
          <ul className="team-social">
            <li className="relative">
              <Link
                to="#"
                className="text-xl inline-block h-10 w-10 leading-10 text-center rounded-lg bg-primary text-white pt-[2px] flex items-center justify-center"
              >
                <img src={icons.Share} alt="share" loading="lazy" />
              </Link>
              <ul className="sub-team-social absolute bottom-0 z-[1] w-10 rounded-lg opacity-0 duration-500 	hover:opacity-100 hover:pb-[80px]">
                <li className="mb-2 relative">
                  <Link
                    href="#"
                    className="text-white duration-500 text-center text-lg bg-[#4867AA] h-10 w-10 flex items-center justify-center rounded-lg"
                  >
                    <img src={icons.Facebook} alt="facebook" loading="lazy" />
                  </Link>
                </li>
                <li className="mb-2 relative">
                  <Link
                    href="#;"
                    className="text-white duration-500 text-center text-lg bg-[#81B2DF] h-10 w-10 flex items-center justify-center rounded-lg"
                  >
                    <img src={icons.Twitter} alt="twitter" loading="lazy" />
                  </Link>
                </li>
                <li className="mb-2 relative">
                  <Link
                    href="#;"
                    className="text-white duration-500 text-center text-lg bg-[#D74141] h-10 w-10 flex items-center justify-center rounded-lg"
                  >
                    <img src={icons.Instagram} alt="instagram" loading="lazy" />
                  </Link>
                </li>
                <li className="mb-2 relative">
                  <Link
                    href="#;"
                    className="text-white duration-500 text-center text-lg bg-[#3A9DF9] h-10 w-10 flex items-center justify-center rounded-lg"
                  >
                    <img src={icons.Linkedin} alt="linkedin" loading="lazy" />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
