import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";

const BlogSlide = ({ imgSrc, date, comments, title, description, link }) => {
  return (
    <div className="slide-box">
      <div className="card rela overlay-shine rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] sm:flex w-full bg-white group">
        <div className="dz-media sm:min-w-[240px] sm:w-[240px] w-full sm:h-auto h-[250px] mb-0 relative overflow-hidden">
          <Link to={link} className="block h-full">
            <img
              src={imgSrc}
              alt="/"
              className="h-full object-cover w-full group-hover:scale-110 duration-500"
              style={{
                width: "244px",
                height: "250px",
                objectFit: "cover",
              }}
            />
          </Link>
        </div>
        <div className="content flex-col flex py-[25px] px-[30px] relative">
          <div className="mb-2.5">
            <ul className="flex items-center">
              <li className="inline-block relative text-[13px] mr-3">
                <a className="text-inherit" href="#">
                  <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150"></i>
                  {date}
                </a>
              </li>
              <li className="inline-block relative text-[13px] mr-3">
                <a className="text-inherit" href="#">
                  <i className="flaticon-chat-bubble text-xs text-primary mr-[5px] translate-y-[1px] scale-150"></i>
                  {comments}
                </a>
              </li>
            </ul>
          </div>
          <h5 className="mb-2">
            <a href={link}>{title}</a>
          </h5>
          <p>{description}</p>
          <div>
            <a
              href={link}
              className="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px] bg-primary border-primary text-white btn-hover-2"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        {" "}
        <BlogSlide
          date={"2023-06-01"}
          comments={"10"}
          title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          }
          link={"#"}
          imgSrc={
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <BlogSlide
          date={"2023-06-01"}
          comments={"10"}
          title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          }
          link={"#"}
          imgSrc={
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          }
        />
      </SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
};

export default BlogSection;
