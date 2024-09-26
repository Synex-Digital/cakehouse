import React from "react";

const TeamMemberInfo = ({
  name,
  title,
  imageUrl,
  responsibility,
  experience,
  email,
  phone,
  socialLinks,
  bio,
}) => {
  return (
    <div className="team-member-info flex mb-5">
      <div className="dz-media rounded-[10px] lg:w-[500px] md:w-[250px] w-full lg:min-w-[500px] md:min-w-[250px] min-w-full relative overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="lg:h-auto md:h-[350px] h-full rounded-[10px]"
          style={{
            objectFit: "cover",
            width: "500px",
            height: "500px",
          }}
        />
      </div>
      <div className="dz-info w-full lg:ml-[50px] md:ml-[30px] mb-0 md:mt-0 mt-[30px]">
        <div className="head pb-[18px] mb-[15px] border-b-2 border-[#C6C6C6]">
          <h2 className="lg:mb-2 mb-0 xl:text-[50px] lg:text-[35px] text-[25px] font-semibold">
            {name}
          </h2>
          <span className="sub-title text-primary text-lg font-normal">
            {title}
          </span>
        </div>
        <p className="xl:text-lg lg:text-[15px] text-sm xl:w-[580px] w-full mb-5">
          {bio}
        </p>
        <ul className="team-info mb-[18px]">
          <li className="xl:text-lg text-base mb-2.5 font-normal text-bodycolor">
            <strong className="mr-[15px] font-normal text-black2">
              Responsibility:
            </strong>
            {responsibility}
          </li>
          <li className="xl:text-lg text-base mb-2.5 font-normal text-bodycolor">
            <strong className="mr-[15px] font-normal text-black2">
              Experience:
            </strong>
            {experience}
          </li>
          <li className="xl:text-lg text-base mb-2.5 font-normal text-bodycolor">
            <strong className="mr-[15px] font-normal text-black2">
              Email:
            </strong>
            {email}
          </li>
          <li className="xl:text-lg text-base mb-2.5 font-normal text-bodycolor">
            <strong className="mr-[15px] font-normal text-black2">
              Phone:
            </strong>
            {phone}
          </li>
        </ul>
        <div className="social-icon">
          <ul className="mr-[-20px] ml-[-5px]">
            {/* {socialLinks.map((link, index) => (
              <li key={index} className="inline-block px-[5px] mr-5">
                <a
                  target="_blank"
                  className="text-bodycolor lg:text-xl text-base"
                  href={link.href}
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberInfo;
