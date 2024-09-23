import React from "react";
import AppLayout from "../component/layout/AppLayout";
import BannerHome from "../component/specific/BannerHome";
import SpecialMenuSection from "../component/home/SpecialMenuSection";
import TodaysMenuSection from "../component/home/TodaysMenuSection";
import TodaysMenu from "../component/card/TodaysMenu";
import QualityServiceSection from "../component/home/QualityServiceSection";

const Home = () => {
  return (
    <>
      {/* <BannerHome /> */}

      <SpecialMenuSection />
      <TodaysMenuSection />
      <QualityServiceSection />
    </>
  );
};

export default AppLayout()(Home);
