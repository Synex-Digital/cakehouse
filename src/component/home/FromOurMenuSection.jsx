import React from "react";
import FromOurMenu from "../card/FromOurMenu";

const products = [
  {
    id: 1,
    name: "Classic Panjabi",
    img: "https://img.freepik.com/premium-photo/cake-with-candle-that-says-happy-birthday-it_1109459-2413.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    price: 1200,
    linkToProduct: "https://example.com/product/1",
    linkToCart: "https://example.com/cart/add/1",
  },
  {
    id: 2,
    name: "Modern Panjabi",
    img: "https://img.freepik.com/free-photo/view-delicious-wedding-cake-with-ornate-decorations_23-2151379530.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    price: 1500,
    linkToProduct: "https://example.com/product/2",
    linkToCart: "https://example.com/cart/add/2",
  },
  {
    id: 3,
    name: "Designer Panjabi",
    img: "https://img.freepik.com/free-photo/front-view-sweet-chocolate-cake_23-2148834059.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    price: 1800,
    linkToProduct: "https://example.com/product/3",
    linkToCart: "https://example.com/cart/add/3",
  },
  {
    id: 4,
    name: "Luxury Panjabi",
    img: "https://img.freepik.com/premium-photo/white-cake-poured-with-chocolate-decorated-with-different-cookies_1230717-179252.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    price: 2000,
    linkToProduct: "https://example.com/product/4",
    linkToCart: "https://example.com/cart/add/4",
  },
];

const FromOurMenuSection = () => {
  return (
    <section className="sm:pb-[100px] pb-[40px] relative">
      <div className="container">
        <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
          <h2 className="font-lobster">From Our Menu</h2>
        </div>
        <div className="slider-frame relative">
          <div className="swiper menu-swiper">
            <div className="swiper-wrapper flex flex-row justify-between">
              {products.map((item) => (
                <FromOurMenu
                  key={item.id}
                  name={item.name}
                  img={item.img}
                  price={item.price}
                  linkToProduct={item.linkToProduct}
                  linkToCart={item.linkToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FromOurMenuSection;
