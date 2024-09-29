import React from "react";
import Slider from "react-slick";
import FromOurMenu from "../card/FromOurMenu";
const products = [
  {
    id: 1,
    name: "Classic Panjabi",
    img: "https://example.com/images/product1.jpg",
    price: 1200,
    linkToProduct: "https://example.com/product/1",
    linkToCart: "https://example.com/cart/add/1",
  },
  {
    id: 2,
    name: "Modern Panjabi",
    img: "https://example.com/images/product2.jpg",
    price: 1500,
    linkToProduct: "https://example.com/product/2",
    linkToCart: "https://example.com/cart/add/2",
  },
  {
    id: 3,
    name: "Designer Panjabi",
    img: "https://example.com/images/product3.jpg",
    price: 1800,
    linkToProduct: "https://example.com/product/3",
    linkToCart: "https://example.com/cart/add/3",
  },
  {
    id: 4,
    name: "Luxury Panjabi",
    img: "https://example.com/images/product4.jpg",
    price: 2000,
    linkToProduct: "https://example.com/product/4",
    linkToCart: "https://example.com/cart/add/4",
  },
];
function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map((item) => (
          <div key={item.id}>
            <FromOurMenu
              key={item.id}
              name={item.name}
              img={item.img}
              price={item.price}
              linkToProduct={item.linkToProduct}
              linkToCart={item.linkToCart}
            />
          </div>
        ))}
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
