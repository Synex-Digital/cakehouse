import React from "react";
import FromOurMenu from "../card/FromOurMenu";
import Slider from "../shared/Slider";

const cakesMenu = [
  {
    name: "Black Forest Delight",
    price: 32.0,
    image:
      "https://img.freepik.com/free-photo/front-view-mug-with-blackberries_23-2148426594.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    nameLink: "https://example.com/black-forest",
    shopCartLink: "https://example.com/order-black-forest",
  },
  {
    name: "Classic Caramel Cake",
    price: 29.0,
    image:
      "https://img.freepik.com/free-photo/delicious-carrot-cake-with-cream_23-2150727520.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    nameLink: "https://example.com/caramel-cake",
    shopCartLink: "https://example.com/order-caramel-cake",
  },
  {
    name: "Tiramisu Temptation",
    price: 35.0,
    image:
      "https://img.freepik.com/free-photo/close-up-fancy-dessert_23-2150527561.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    nameLink: "https://example.com/tiramisu",
    shopCartLink: "https://example.com/order-tiramisu",
  },
  {
    name: "Almond Joy Cake",
    price: 28.0,
    image:
      "https://img.freepik.com/free-photo/vertical-shot-slice-delicious-lotus-cookie-cake-with-caramel-with-cookies-table_181624-21690.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    nameLink: "https://example.com/almond-joy",
    shopCartLink: "https://example.com/order-almond-joy",
  },
  {
    name: "Banana Foster Cake",
    price: 26.5,
    image:
      "https://img.freepik.com/free-photo/close-up-banana-bread_23-2151006011.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    nameLink: "https://example.com/banana-foster",
    shopCartLink: "https://example.com/order-banana-foster",
  },
];

const FromOurMenuSection = () => {
  return (
    <>
      <Slider
        cards={[
          <FromOurMenu
            name={cakesMenu[0].name}
            price={cakesMenu[0].price}
            image={cakesMenu[0].image}
            nameLink={cakesMenu[0].nameLink}
            shopCartLink={cakesMenu[0].shopCartLink}
          />,
          <FromOurMenu
            name={cakesMenu[1].name}
            price={cakesMenu[1].price}
            image={cakesMenu[1].image}
            nameLink={cakesMenu[1].nameLink}
            shopCartLink={cakesMenu[1].shopCartLink}
          />,
          <FromOurMenu
            name={cakesMenu[2].name}
            price={cakesMenu[2].price}
            image={cakesMenu[2].image}
            nameLink={cakesMenu[2].nameLink}
            shopCartLink={cakesMenu[2].shopCartLink}
          />,
          <FromOurMenu
            name={cakesMenu[3].name}
            price={cakesMenu[3].price}
            image={cakesMenu[3].image}
            nameLink={cakesMenu[3].nameLink}
            shopCartLink={cakesMenu[3].shopCartLink}
          />,
        ]}
        // autoSlide={true}
        slideInterval={1000}
      />
    </>
  );
};

export default FromOurMenuSection;
