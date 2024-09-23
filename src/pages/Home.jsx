import React from "react";
import AppLayout from "../component/layout/AppLayout";
import BannerHome from "../component/specific/BannerHome";
import SpecialMenuSection from "../component/home/SpecialMenuSection";
import TodaysMenuSection from "../component/home/TodaysMenuSection";
import TodaysMenu from "../component/card/TodaysMenu";

const Home = () => {
  return (
    <>
      {/* <BannerHome /> */}

      <SpecialMenuSection />
      <TodaysMenuSection />
    </>
  );
};

export default AppLayout()(Home);
