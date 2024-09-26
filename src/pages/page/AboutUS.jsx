import React from "react";
import { Link } from "react-router-dom";
import { pic } from "../../assets/pic";
import WhatWeDo from "../../component/card/WhatWeDo";
import { icons } from "../../assets/icons";
import PageHeader from "../../component/shared/PageHeader";
import PageFooter from "../../component/shared/PageFooter";
const whatWeDo = [
  {
    title: "Delicious Cakes",
    description:
      "We specialize in creating custom, delicious cakes for any occasion, ensuring top quality and unforgettable taste.",
    link: "",
    imageUrl: `${icons.DeliciousCakes}`,
  },
  {
    title: "Artisan Breads",
    description:
      "Discover our wide range of freshly baked artisan breads, crafted with the finest ingredients and traditional techniques.",
    link: "",
    imageUrl: `${icons.ArtisanBreads}`,
  },
  {
    title: "Gourmet Pastries",
    description:
      "Indulge in our exquisite selection of gourmet pastries, from French classics to contemporary delights.",
    link: "",
    imageUrl: `${icons.GourmetPastries}`,
  },
  {
    title: "Handcrafted Chocolates",
    description:
      "Experience the luxury of our handcrafted chocolates, made using the highest quality cocoa and unique ingredients.",
    link: "",
    imageUrl: `${icons.HandcraftedChocolates}`,
  },
];
const AboutUS = () => {
  return (
    <>
      <PageHeader />
      <section
        className={`bg-[url(${pic.AboutUsBack})] bg-fixed relative z-[1] after:content-[''] after:absolute after:z-[-1] after:bg-[#222222e6] after:opacity-100 after:w-full after:h-full after:top-0 after:left-0  pt-[50px] lg:h-[450px] sm:h-[400px] h-[300px] overflow-hidden bg-cover bg-center`}
      >
        <div className="container table h-full relative z-[1] text-center">
          <div className="dz-bnr-inr-entry align-middle table-cell">
            <h2 className="font-lobster text-white mb-5 2xl:text-[70px] md:text-[60px] text-[40px] leading-[1.2]">
              About Us
            </h2>
            {/* <!-- Breadcrumb Row --> */}
            <nav aria-label="breadcrumb" className="breadcrumb-row">
              <ul className="breadcrumb bg-primary shadow-[0px_10px_20px_rgba(0,0,0,0.05)] rounded-[10px] inline-block lg:py-[13px] md:py-[10px] sm:py-[5px] py-[7px] lg:px-[30px] md:px-[18px] sm:px-5 px-3.5 m-0">
                <li className="breadcrumb-item p-0 inline-block text-[15px] font-normal">
                  <Link to="index.html" className="text-white ">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item text-white p-0 inline-block text-[15px] font-normal active pl-2">
                  About Us
                </li>
              </ul>
            </nav>
            {/* <!-- Breadcrumb Row End --> */}
          </div>
        </div>
      </section>

      <section class="lg:pt-[100px] sm:pt-[70px] pt-[50px] overflow-hidden pb-0">
        <div class="container">
          <div class="2xl:mb-[50px] mb-[35px] relative mx-auto text-center">
            <h2 class="font-lobster max-xl:leading-[50px]">
              We Invite you to Visit Our Restaurant
            </h2>
            <p class="max-w-[815px] m-auto lg:text-base text-sm lg:leading-[1.6rem]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took Link galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div class="row">
            <div class="w-full px-[15px]">
              <div class="about-media dz-media relative overflow-hidden rounded-[10px]">
                <img
                  src="https://img.freepik.com/premium-photo/sticky-toffee-pudding-with-pecan-topping-sticky-toffee-pudding-dessert_1020697-227743.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid"
                  alt="/"
                  style={{
                    width: "1170px",
                    height: "430px",
                    objectFit: "cover",
                    objectPosition: "cover",
                  }}
                  class="lg:h-[430px] sm:h-[380px] h-[300px]"
                />
                <Link
                  class="video video-btn popup-youtube absolute top-[50%] left-[50%] 2xl:w-[87px] md:w-[70px] w-[55px] 2xl:h-[87px] md:h-[70px] h-[55px] bg-primary text-white rounded-full 2xl:text-2xl md:text-lg text-base flex items-center justify-center translate-x-[-50%]  translate-y-[-50%] duration-500 hover:scale-125"
                  href="https://ak.picdn.net/shutterstock/videos/3568338279/preview/stock-footage-classical-new-york-style-cheesecake-with-caramel-topping-taking-bite-of-cake-with-Link-dessert-fork.mp4"
                  target="_blank"
                />
                <i class="fa-solid fa-play"></i>
                <Link />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="lg:pt-[100px] sm:pt-[70px] pt-[50px] overflow-hidden lg:pb-[70px] sm:pb-10 pb-5">
        <div class="container">
          <div class="2xl:mb-[50px] mb-[35px] relative mx-auto text-center">
            <h2 class="font-lobster max-xl:leading-[50px]">What We Do</h2>
          </div>
          <div class="row">
            {whatWeDo.map((item, index) => (
              <WhatWeDo
                key={index}
                title={item.title}
                description={item.description}
                link={item.link}
                img={item.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <PageFooter />
    </>
  );
};

export default AboutUS;
