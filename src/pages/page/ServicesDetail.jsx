import React from "react";
import { FaUser } from "react-icons/fa";
import { ImQuotesRight } from "react-icons/im";
import { Link } from "react-router-dom";
import ServicesDetailCard from "../../component/card/ServicesDetail";
import PageLaout from "../../component/layout/PageLaout";
import PageBanner from "../../component/shared/PageBanner";
const items = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/gourmet-birthday-cake-with-whipped-cream-fresh-berries-generated-by-artificial-intelligence_188544-150094.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    text: "Stylish and comfortable wear",
    brand: "STANDARD",
    date: "2024-09-28",
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-photo/sliced-chocolate-crepe-cake-topped-with-raspberries_140725-8848.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    text: "Innovative design for professionals",
    brand: "STANDARD",
    date: "2024-09-15",
  },
];

const ServicesDetail = () => {
  return (
    <PageLaout>
      <PageBanner name="Services Detail" />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] overflow-hidden lg:pb-[70px] sm:pb-10 pb-5">
        <div className="container">
          <div className="row">
            <div className="lg:w-1/3 w-full px-[15px] lg:order-1 order-2">
              <aside className="lg:sticky lg:pr-5 pb-[1px]">
                <div className="mb-[50px]">
                  <div className="widget-title xl:mb-[30px] mb-5 pb-3 text-lg relative">
                    <h5 className="">Search</h5>
                  </div>
                  <form role="search" method="post" className="mb-[10px]">
                    <div className="input-group flex flex-wrap relative items-stretch w-full">
                      <div className="input-side bg-primary rounded-md flex m-0 p-[5px] items-center w-full h-[60px]">
                        <input
                          name="text"
                          className="bg-white border-0 rounded-md z-0 h-[50px] py-[6px] pl-5 w-full outline-none"
                          placeholder="Search"
                          type="text"
                        />
                        <div className="input-group-btn">
                          <button
                            type="submit"
                            className="btn ml-[5px] w-[50px] min-w-[50px] h-[50px] p-0 justify-center"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.58366 17.5001C13.9559 17.5001 17.5003 13.9557 17.5003 9.58342C17.5003 5.21116 13.9559 1.66675 9.58366 1.66675C5.21141 1.66675 1.66699 5.21116 1.66699 9.58342C1.66699 13.9557 5.21141 17.5001 9.58366 17.5001Z"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M18.3337 18.3334L16.667 16.6667"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="mb-[50px]">
                  <div className="widget-title xl:mb-[30px] mb-5 pb-3 text-lg relative">
                    <h5 className="">Recent Post</h5>
                  </div>
                  {items.map((item) => (
                    <ServicesDetailCard
                      key={item.id}
                      img={item.img}
                      text={item.text}
                      brand={item.brand}
                      date={item.date}
                    />
                  ))}
                </div>
                <div className="mb-[50px] widget_categories">
                  <div className="widget-title xl:mb-[30px] mb-5 pb-3 text-lg relative">
                    <h5 className="">Categories</h5>
                  </div>
                  <ul>
                    <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
                      <Link
                        to="blog-standard.html"
                        className="text-bodycolor text-[15px] font-medium float-left text-left"
                      >
                        All Services
                      </Link>
                    </li>
                    <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
                      <Link
                        to="blog-standard.html"
                        className="text-bodycolor text-[15px] font-medium float-left text-left"
                      >
                        Water
                      </Link>
                    </li>
                    <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
                      <Link
                        to="blog-standard.html"
                        className="text-bodycolor text-[15px] font-medium float-left text-left"
                      >
                        Residental Cleaning
                      </Link>
                    </li>
                    <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
                      <Link
                        to="blog-standard.html"
                        className="text-bodycolor text-[15px] font-medium float-left text-left"
                      >
                        Summer Pizza
                      </Link>
                    </li>
                    <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
                      <Link
                        to="blog-standard.html"
                        className="text-bodycolor text-[15px] font-medium float-left text-left"
                      >
                        Free Support
                      </Link>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="lg:w-4/6 w-full px-[15px] lg:order-2 order-1 mb-[30px]">
              <div className=".dz-card blog-half dz-card sidebar mb-0">
                <div className="dz-media rounded-[10px] overflow-hidden">
                  <img src={items[0].img} alt="/" className="w-full h-auto" />
                </div>

                <div className="dz-info pt-[25px]">
                  <h2 className="lg:text-4xl md:text-3xl text-[1.75rem] mb-2 font-semibold">
                    Delivery Services in Today's World
                  </h2>

                  <div className="dz-meta mb-5">
                    <ul>
                      <li className="dz-user">
                        <Link
                          to="#"
                          className="text-black2 flex items-center"
                        >
                          <i className="fa-solid fa-user text-base text-primary mr-[5px] relative top-0 scale-[1.2]">
                            <FaUser />
                          </i>
                          By <span className="text-primary">RK Gupta</span>
                        </Link>
                      </li>
                      <li className="dz-comment">
                        <Link to="#" className="text-black2">
                          <i className="fa-solid fa-message text-base text-primary mr-[5px] relative top-0 scale-[1.2]"></i>
                          10 Comments
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dz-post-text style-1">
                    <p className="mb-[10px] text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took Link galley of type and scrambled it to make Link
                      type specimen book.
                    </p>
                    <p className="text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                  </div>
                  <blockquote className="wp-block-quote style-1 text-primary xl:pt-[35px] md:pt-[25px] md:pr-[32px] md:pb-5 md:pl-[100px] p-5 shadow-[0px_15px_50px_rgba(34,34,34,0.15)] mt-[22px] mb-5 rounded-[10px] relative">
                    <i className="flaticon-right-quote quotes absolute right-auto left-[25px] bottom-auto top-[25px] text-[52px] rotate-180 text-primary md:block hidden">
                      <ImQuotesRight />
                    </i>
                    <p className="2xl:text-[22px] md:text-lg text-base xl:leading-[35px] leading-[22px] text-black2 mb-6">
                      Fragment collings mauris sit amet nibh. Donec sodales
                      sagittis magna. Sed consequat,
                    </p>
                    <cite className="relative font-semibold text-primary not-italic	text-base">
                      Ronald M. Spino
                    </cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLaout>
  );
};

export default ServicesDetail;
