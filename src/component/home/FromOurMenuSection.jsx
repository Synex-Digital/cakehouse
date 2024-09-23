import React from "react";
import Slider from "../shared/Slider";
import FromOurMenu from "../card/FromOurMenu";
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
    image: "https://example.com/tiramisu.jpg",
    nameLink: "https://example.com/tiramisu",
    shopCartLink: "https://example.com/order-tiramisu",
  },
  {
    name: "Almond Joy Cake",
    price: 28.0,
    image: "https://example.com/almond-joy.jpg",
    nameLink: "https://example.com/almond-joy",
    shopCartLink: "https://example.com/order-almond-joy",
  },
  {
    name: "Banana Foster Cake",
    price: 26.5,
    image: "https://example.com/banana-foster.jpg",
    nameLink: "https://example.com/banana-foster",
    shopCartLink: "https://example.com/order-banana-foster",
  },
];

const FromOurMenuSection = () => {
  return (
    <Slider
      cards={[
        <FromOurMenu
          name={cakesMenu[0].name}
          price={cakesMenu[0].price}
          image={cakesMenu[0].image}
          nameLink={cakesMenu[0].nameLink}
          shopCartLink={cakesMenu[0].shopCartLink}
        />,
        <div>Card 2</div>,
        <div>Card 3</div>,
      ]}
      // autoSlide={true}
      slideInterval={3000}
    />
  );
};

export default FromOurMenuSection;
