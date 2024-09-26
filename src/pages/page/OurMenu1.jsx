import React from "react";
import PageLaout from "../../component/layout/PageLaout";
import PageBanner from "../../component/shared/PageBanner";
import { OurMenu } from "../../component/card/OurMenu";
const startersCakes = [
  {
    id: 1,
    title: "Vanilla Delight Cake",
    description:
      "A classic vanilla sponge cake with a light buttercream frosting, perfect for any occasion.",
    price: "$25.00",
  },
  {
    id: 2,
    title: "Chocolate Fudge Cake",
    description:
      "Rich, moist chocolate cake layered with decadent fudge frosting for a sweet indulgence.",
    price: "$30.00",
  },
  {
    id: 3,
    title: "Red Velvet Cake",
    description:
      "Soft red velvet cake with a cream cheese frosting, combining sweetness with a hint of cocoa.",
    price: "$28.00",
  },
  {
    id: 4,
    title: "Lemon Zest Cake",
    description:
      "A zesty lemon cake with a tangy lemon glaze, offering a fresh, citrusy flavor in every bite.",
    price: "$26.00",
  },
  {
    id: 5,
    title: "Strawberry Shortcake",
    description:
      "A light and fluffy cake filled with fresh strawberries and whipped cream layers.",
    price: "$27.00",
  },
  {
    id: 6,
    title: "Carrot Cake",
    description:
      "Moist carrot cake with walnuts and a rich cream cheese frosting for a wholesome treat.",
    price: "$29.00",
  },
];

const seafoodDishes = [
  {
    id: 1,
    title: "Grilled Salmon",
    description:
      "Perfectly grilled salmon fillet seasoned with herbs and served with lemon butter sauce.",
    price: "$18.00",
  },
  {
    id: 2,
    title: "Shrimp Scampi",
    description:
      "Succulent shrimp sautéed in garlic, white wine, and butter, served over pasta.",
    price: "$20.00",
  },
  {
    id: 3,
    title: "Lobster Bisque",
    description:
      "A creamy, rich lobster bisque made with fresh lobster and a touch of sherry.",
    price: "$22.00",
  },
  {
    id: 4,
    title: "Fried Calamari",
    description:
      "Crispy fried calamari rings served with marinara sauce and lemon wedges.",
    price: "$15.00",
  },
];

const drinksMenu = [
  {
    id: 1,
    title: "Fresh Lemonade",
    description:
      "A refreshing blend of fresh lemons, sugar, and water, served chilled with ice.",
    price: "$4.00",
  },
  {
    id: 2,
    title: "Iced Coffee",
    description:
      "Chilled coffee served over ice, with the option to add milk, sugar, or flavored syrups.",
    price: "$5.00",
  },
  {
    id: 3,
    title: "Mango Smoothie",
    description:
      "A creamy smoothie made with ripe mangoes, yogurt, and a hint of honey.",
    price: "$6.00",
  },
  {
    id: 4,
    title: "Mint Mojito (Non-Alcoholic)",
    description:
      "A zesty, minty drink made with fresh mint leaves, lime, and sparkling water.",
    price: "$7.00",
  },
];
const specialsMenu = [
  {
    id: 1,
    title: "Truffle Risotto",
    description:
      "Creamy risotto infused with black truffle, Parmesan cheese, and a touch of white wine.",
    price: "$28.00",
  },
  {
    id: 2,
    title: "Surf and Turf",
    description:
      "A luxurious combination of a tender filet mignon paired with a lobster tail, served with garlic butter.",
    price: "$45.00",
  },
  {
    id: 3,
    title: "Duck à l'Orange",
    description:
      "Crispy roasted duck served with a sweet and tangy orange sauce, complemented by seasonal vegetables.",
    price: "$32.00",
  },
  {
    id: 4,
    title: "Wagyu Beef Burger",
    description:
      "A gourmet burger featuring premium Wagyu beef, caramelized onions, and truffle aioli on a brioche bun.",
    price: "$35.00",
  },
];
const meatDishes = [
  {
    id: 1,
    title: "Grilled Ribeye Steak",
    description:
      "A juicy, perfectly grilled ribeye steak seasoned with a blend of herbs and spices, served with a side of garlic mashed potatoes.",
    price: "$30.00",
  },
  {
    id: 2,
    title: "Slow-Cooked BBQ Ribs",
    description:
      "Tender pork ribs slow-cooked in a smoky barbecue sauce, served with coleslaw and cornbread.",
    price: "$25.00",
  },
  {
    id: 3,
    title: "Roast Lamb",
    description:
      "Succulent roast lamb seasoned with rosemary and garlic, served with roasted vegetables and mint sauce.",
    price: "$28.00",
  },
  {
    id: 4,
    title: "Beef Wellington",
    description:
      "Tender beef fillet wrapped in puff pastry with a mushroom duxelles and served with a rich red wine sauce.",
    price: "$40.00",
  },
];

const OurMenu1 = () => {
  return (
    <PageLaout>
      <PageBanner name={"Our Menu"} />
      <section class="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[70px] sm:pb-10 pb-5 section-wrapper-7 overflow-hidden relative bg-white">
        <div class="container">
          <div class="row inner-section-wrapper md:mb-[50px]">
            <div class="xl:w-1/3 md:w-1/2 w-full px-[15px]">
              <div class="menu-head mb-[25px]">
                <h4 class="title font-lobster text-[34px] font-normal text-primary">
                  Starters
                </h4>
              </div>
              {startersCakes.map((item) => (
                <OurMenu
                  key={item.id}
                  link={"/menu"}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                />
              ))}
            </div>
            <div class="xl:w-1/3 md:w-1/2 w-full px-[15px]">
              <div class="menu-head mb-[25px]">
                <h4 class="title font-lobster text-[34px] font-normal text-primary">
                  Seafood
                </h4>
              </div>
              {seafoodDishes.map((item) => (
                <OurMenu
                  key={item.id}
                  link={"/menu"}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                />
              ))}
            </div>
          </div>
          <div class="row">
            <div class="xl:w-1/3 md:w-1/2 w-full px-[15px]">
              <div class="menu-head mb-[25px]">
                <h4 class="title font-lobster text-[34px] font-normal text-primary">
                  Drinks
                </h4>
              </div>
              {drinksMenu.map((item) => (
                <OurMenu
                  key={item.id}
                  link={"/menu"}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                />
              ))}
            </div>
            <div class="xl:w-1/3 md:w-1/2 w-full px-[15px]">
              <div class="menu-head mb-[25px]">
                <h4 class="title font-lobster text-[34px] font-normal text-primary">
                  Specials
                </h4>
              </div>
              {specialsMenu.map((item) => (
                <OurMenu
                  key={item.id}
                  link={"/menu"}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                />
              ))}
            </div>
            <div class="xl:w-1/3 md:w-1/2 w-full px-[15px]">
              <div class="menu-head mb-[25px]">
                <h4 class="title font-lobster text-[34px] font-normal text-primary">
                  Meat
                </h4>
              </div>
              {meatDishes.map((item) => (
                <OurMenu
                  key={item.id}
                  link={"/menu"}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
        <img
          class="bg1 animate-move absolute top-[85px] left-[-110px] max-2xl:hidden"
          src="assets/images/background/pic12.png"
          alt="/"
        />
        <img
          class="bg2 animate-move absolute right-[-54px] top-[30px] max-2lg:top-auto max-2lg:bottom-0 z-[0] 2xl:w-[600px] md:w-[500px] md:block hidden"
          src="assets/images/background/pic14.png"
          alt="/"
        />
      </section>
    </PageLaout>
  );
};

export default OurMenu1;
