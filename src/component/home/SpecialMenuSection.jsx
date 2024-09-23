import React from "react";
import SpecialMenu from "../card/SpecialMenu";

const specialCakes = [
  {
    name: "Chocolate Truffle Cake",
    description:
      "Rich and creamy chocolate layers with a luscious truffle filling, topped with a smooth chocolate glaze. Perfect for chocolate lovers.",
    price: 40.0,
    imageUrl:
      "https://img.freepik.com/free-photo/chocolate-cake-surrounded-by-chocolate-truffles-bonbons_23-2148019546.jpg?t=st=1727077512~exp=1727081112~hmac=63eefdba656f176c633c19d6af2c47d11115da47c0e01ebf4fdfbb9d6acb7699&w=700",
    redirectPath: "/cakes/chocolate-truffle",
  },
  {
    name: "Red Velvet Dream Cake",
    description:
      "Classic red velvet cake with layers of silky cream cheese frosting. A perfect balance of sweet and tangy flavors.",
    price: 35.0,
    imageUrl:
      "https://img.freepik.com/free-photo/front-close-view-red-cake-slice-fruit-cake-piece-inside-plate-with-strawberries-grey-surface_140725-19934.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    redirectPath: "/cakes/red-velvet-dream",
  },
  {
    name: "Lemon Zest Delight",
    description:
      "Refreshing lemon cake with a burst of citrus flavor, topped with a light lemon frosting.",
    price: 30.0,
    imageUrl:
      "https://img.freepik.com/premium-vector/sour-lemon-tart-fresh-look-cartoon-style_1253557-68.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    redirectPath: "/cakes/lemon-zest-delight",
  },
  {
    name: "Carrot Spice Cake",
    description:
      "Moist carrot cake infused with warm spices, layered with creamy vanilla frosting and topped with walnuts.",
    price: 38.0,
    imageUrl:
      "https://img.freepik.com/premium-photo/layered-carrot-cake-with-cream-cheese-frosting-generous-garnish-shredded-carrots_1174497-111136.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    redirectPath: "/cakes/carrot-spice",
  },
];

const SpecialMenuSection = () => {
  return (
    <section class="lg:pt-[100px] pt-[50px] lg:pb-[70px] pb-[40px] bg-white relative overflow-hidden section-wrapper-2">
      <div class="container">
        <div class="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
          <h2 class="font-lobster" style={{ fontFamily: "Lobster, cursive" }}>
            Special Menu
          </h2>
        </div>
        <div class="row">
          {specialCakes.map((cake) => (
            <SpecialMenu
              key={cake.name}
              name={cake.name}
              description={cake.description}
              price={cake.price}
              image={cake.imageUrl}
              alt={cake.name}
              href={cake.redirectPath}
            />
          ))}
        </div>
      </div>

      <img
        src="assets/images/background/pic2.png"
        alt=""
        class="bg1 bottom-0 left-[-275px] absolute max-2xl:hidden animate-move"
      />
      <img
        src="assets/images/background/pic3.png"
        alt=""
        class="bg2 right-[40px] max-2xl:right-0 top-[100px] max-2xl:top-[28px] absolute 2xl:block hidden"
      />
    </section>
  );
};

export default SpecialMenuSection;
