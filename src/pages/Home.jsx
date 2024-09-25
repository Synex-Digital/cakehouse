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
      {/* <BannerHome /> */}
      <SpecialMenuSection />
      <TodaysMenuSection />
      <QualityServiceSection />
      <FromOurMenuSection />
      <ReservationSection />
      <CustomersComment />
      {/* <MasterChefsSection /> */}
      {/* <NewsAndBlogSection /> */}
    </>
  );
};

export default Home;
