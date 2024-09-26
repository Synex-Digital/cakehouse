import React from "react";

import TodaysMenu from "../card/TodaysMenu";

const todaysMenu = [
  {
    image:
      "https://img.freepik.com/premium-photo/world-chcolate-day-cake-design-chocolate-day-celeberation-world-chocolate-day-images-cake-pics_1190219-6363.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    name: "Chocolate Cake",
    description:
      "Decadent chocolate cake layered with rich chocolate frosting.",
    price: 25.0,
    hoverName: "Delicious Chocolate Cake",
    hoverNameLink: "/cakes/chocolate",
    shopCartLink: "/cart/add/chocolate-cake",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/slice-red-velvet-cake-with-white-frosting-spoon_996043-1820.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    name: "Red Velvet Cake",
    description: "classNameic red velvet cake with cream cheese frosting.",
    price: 30.0,
    hoverName: "Red Velvet Delight",
    hoverNameLink: "/cakes/red-velvet",
    shopCartLink: "/cart/add/red-velvet-cake",
  },
  {
    image:
      "https://img.freepik.com/free-photo/delicious-cake-with-berries-lemon_23-2150727499.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    name: "Lemon Cake",
    description: "Fresh lemon cake topped with lemon glaze.",
    price: 28.0,
    hoverName: "Zesty Lemon Cake",
    hoverNameLink: "/cakes/lemon",
    shopCartLink: "/cart/add/lemon-cake",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/sweet-carrot-cake-slice-wooden-table-close-up-ar-c-v_960396-701512.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    name: "Carrot Cake",
    description: "Moist carrot cake with walnuts and cream cheese frosting.",
    price: 27.0,
    hoverName: "Carrot Spice Cake",
    hoverNameLink: "/cakes/carrot",
    shopCartLink: "/cart/add/carrot-cake",
  },
];

const TodaysMenuSection = () => {
  return (
    <section className="bg-light content-inner pb-0 relative overflow-hidden">
      <div className="container">
        <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
          <h2 className="font-lobster">Today's Menu</h2>
        </div>
        <div className="row">
          {todaysMenu.map((i, index) => (
            <TodaysMenu
              key={index}
              name={i.name}
              description={i.description}
              price={i.price}
              hoverName={i.hoverName}
              hoverNameLink={i.hoverNameLink}
              shopCartLink={i.shopCartLink}
              image={i.image}
              alt={i.name} // Using the name as the alt text for
            />
          ))}
          <div className="w-full text-center mt-[10px]">
            <a
              href="our-menu-2.html"
              className="btn btn-md btn-primary btn-hover-1"
            >
              <span>See All Dishes</span>
            </a>
          </div>
        </div>
      </div>
      <img
        src="https://img.freepik.com/free-psd/beautiful-blue-cake-isolated_23-2151331065.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid"
        alt=""
        style={{
          width: "170px",
          height: "184px",
          rotate: "-20deg",
        }}
        className="2xl:right-[20px] xl:right-[20px] 2xl:top-[20px] xl:top-[10px] absolute xl:block hidden"
      />
    </section>
  );
};

export default TodaysMenuSection;
