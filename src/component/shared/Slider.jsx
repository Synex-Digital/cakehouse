import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../card/FromOurMenu";

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <div>
        <ProductCard
          imageSrc="https://img.freepik.com/premium-photo/sticky-toffee-pudding-natural-sunlight-sticky-toffee-pudding-dessert-close-up_1020697-225745.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid"
          title="Burger"
          price="50.00"
          label="Top Seller"
          labelColor="bg-[var(--secondary-dark)]"
          linkToProduct="our-menu-1.html"
          linkToCart="shop-cart.html"
        />
      </div>
      <div>
        <ProductCard
          imageSrc="https://img.freepik.com/premium-photo/sticky-toffee-pudding-natural-sunlight-sticky-toffee-pudding-dessert-close-up_1020697-225745.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid"
          title="Burger"
          price="50.00"
          label="Top Seller"
          labelColor="bg-[var(--secondary-dark)]"
          linkToProduct="our-menu-1.html"
          linkToCart="shop-cart.html"
        />
      </div>
      <div>
        <ProductCard
          imageSrc="https://img.freepik.com/premium-photo/sticky-toffee-pudding-natural-sunlight-sticky-toffee-pudding-dessert-close-up_1020697-225745.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid"
          title="Burger"
          price="50.00"
          label="Top Seller"
          labelColor="bg-[var(--secondary-dark)]"
          linkToProduct="our-menu-1.html"
          linkToCart="shop-cart.html"
        />
      </div>
      <div>
        <ProductCard
          imageSrc="https://img.freepik.com/premium-photo/sticky-toffee-pudding-natural-sunlight-sticky-toffee-pudding-dessert-close-up_1020697-225745.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid"
          title="Burger"
          price="50.00"
          label="Top Seller"
          labelColor="bg-[var(--secondary-dark)]"
          linkToProduct="our-menu-1.html"
          linkToCart="shop-cart.html"
        />
      </div>
    </Carousel>
  );
};

export default Slider;
