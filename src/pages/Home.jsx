import React from "react";
import AppLayout from "../component/layout/AppLayout";
import BannerHome from "../component/specific/BannerHome";
import SpecialMenuSection from "../component/home/SpecialMenuSection";
import TodaysMenuSection from "../component/home/TodaysMenuSection";
import TodaysMenu from "../component/card/TodaysMenu";
import QualityServiceSection from "../component/home/QualityServiceSection";
import FromOurMenuSection from "../component/home/FromOurMenuSection";
import ReservationSection from "../component/home/ReservationSection";
import CustomersComment from "../component/home/CustomersComment";
import MasterChefsSection from "../component/home/MasterChefsSection";
import NewsAndBlogSection from "../component/home/NewsAndBlogSection";
import Header from "../component/layout/Header";

const Home = () => {
  return (
    <>
      <BannerHome />
      <SpecialMenuSection />
      <TodaysMenuSection />
      <QualityServiceSection />
      <FromOurMenuSection />
      <ReservationSection />
      <CustomersComment />
      <MasterChefsSection />
      <NewsAndBlogSection />
      <div class="map-iframe style-1 relative">
        <iframe
          class="w-full lg:h-[400px] sm:h-[350px] h-[300px] mb-[-10px]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d244934.17139458598!2d75.27787773507539!3d25.125368923263647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1678086292169!5m2!1sen!2sin"
          style={{ border: "0" }}
        ></iframe>
      </div>
    </>
  );
};

export default Home;
