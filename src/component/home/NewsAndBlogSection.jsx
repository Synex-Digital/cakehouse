import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";

const data = [
  {
    imgSrc:
      "https://img.freepik.com/premium-photo/man-with-beard-watch-his-left-arm_1249303-8424.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    date: "2024-09-25",
    comments: 15,
    title: "First Article Title",
    description: "This is the description for the first article.",
    link: "https://example.com/article1",
  },
  {
    imgSrc:
      "https://img.freepik.com/premium-photo/smiling-businessman-formal-wear-using-tablet-while-standing-rooftop_1289061-391.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    date: "2024-09-24",
    comments: 20,
    title: "Second Article Title",
    description: "This is the description for the second article.",
    link: "https://example.com/article2",
  },
  {
    imgSrc:
      "https://img.freepik.com/premium-photo/happy-fashionable-handsome-man_739685-5844.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    date: "2024-09-23",
    comments: 5,
    title: "Third Article Title",
    description: "This is the description for the third article.",
    link: "https://example.com/article3",
  },
  {
    imgSrc:
      "https://img.freepik.com/premium-photo/smiling-businessman-formal-wear-using-tablet-while-standing-rooftop_1289061-391.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    date: "2024-09-22",
    comments: 10,
    title: "Fourth Article Title",
    description: "This is the description for the fourth article.",
    link: "https://example.com/article4",
  },
];

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
                height: "244px",
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
        <BlogSlide
          imgSrc={data[0].imgSrc}
          date={data[0].date}
          comments={data[0].comments}
          title={data[0].title}
          description={data[0].description}
          link={data[0].link}
        />
      </SwiperSlide>
      <SwiperSlide>
        <BlogSlide
          imgSrc={data[1].imgSrc}
          date={data[1].date}
          comments={data[1].comments}
          title={data[1].title}
          description={data[1].description}
          link={data[1].link}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default BlogSection;
