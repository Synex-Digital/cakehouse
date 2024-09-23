import React from "react";
import AppLayout from "../component/layout/AppLayout";
import BannerHome from "../component/specific/BannerHome";
import SpecialMenuSection from "../component/home/SpecialMenuSection";

const Home = () => {
  return (
    <>
      {/* <BannerHome /> */}

      <SpecialMenuSection />
    </>
  );
};

export default AppLayout()(Home);
