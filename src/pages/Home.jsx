import React from "react";
import SpecialMenu from "../component/card/SpecialMenu";
import TodaysMenu from "../component/card/TodaysMenu";
import QualityServices from "../component/card/QualityServices";
import FromOurMenu from "../component/card/FromOurMenu";
import AppLayout from "../component/layout/AppLayout";

const Home = () => {
  return (
    <>
      <SpecialMenu
        price={"$10"}
        image={
          "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        description={"lowsuediqwjk"}
      />

      <TodaysMenu
        href={"#"}
        alt={"asdasd"}
        Image={
          "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        name={"asdasd"}
        description={"asdasd"}
        price={"$10"}
        hoverName={"asdasd"}
        hoverNameLink={"#"}
        shopCartLink={"#"}
      />

      <QualityServices name={"loem"} description={"lorem saka"} />
    </>
  );
};

export default AppLayout()(Home);
