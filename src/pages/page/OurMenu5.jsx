import React from "react";
import PageLayout from "../../component/layout/PageLaout";
import PageBanner from "../../component/shared/PageBanner";
import SpecialMenu from "../../component/card/SpecialMenu";
const menuItems = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/decadent-chocolate-dessert-with-fresh-raspberry-mint-leaf-generated-by-artificial-intellingence_25030-63058.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    title: "Burger",
    description: "Delicious and spicy",
    price: 10.0,
    alt: "Burger image",
    href: "product-detail.html",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/premium-photo/realistic-sponge-cake-dessert-ultrahigh-quality-imagery-style_167857-29343.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    title: "Pasta",
    description: "Creamy tomato sauce",
    price: 12.99,
    alt: "Pasta image",
    href: "product-detail.html",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/delicate-red-velvet-cake-slices-topped-with-cream-cheese-frosting-edible-rose-petals-against_1268-31370.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    title: "Caesar Salad",
    description: "Crisp romaine lettuce",
    price: 8.5,
    alt: "Caesar Salad image",
    href: "product-detail.html",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/premium-photo/homemade-lemon-cake-with-lush-lemon-frosting-lemon-decorations-sleek-white-cake-stand_1174497-110079.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    title: "Lemon Drizzle Cake",
    description: "Tangy lemon cake",
    price: 18.3,
    alt: "Lemon Drizzle Cake image",
    href: "product-detail.html",
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/premium-photo/slice-new-york-cheesecake_1230717-179639.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    title: "Cheesecake",
    description: "Classic New York",
    price: 25.5,
    alt: "Cheesecake image",
    href: "product-detail.html",
  },
  {
    id: 6,
    image:
      "https://img.freepik.com/premium-photo/layered-strawberry-shortcake-slice-with-fresh-whipped-cream-whole-strawberry-rustic-table_1260445-6707.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    title: "Strawberry Shortcake",
    description: "Fluffy shortcake",
    price: 19.99,
    alt: "Strawberry Shortcake image",
    href: "product-detail.html",
  },
  {
    id: 7,
    image:
      "https://img.freepik.com/free-photo/delicious-fried-chicken-wings-served-with-fries-beer-on-wooden-table_1268-21370.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    title: "Fried Chicken Wings",
    description: "Crispy chicken wings",
    price: 14.99,
    alt: "Fried Chicken Wings image",
    href: "product-detail.html",
  },
  {
    id: 8,
    image:
      "https://img.freepik.com/free-photo/fresh-vegetable-salad-with-avocado-tomatoes-cucumber-red-onion-olives-balsamic-vinaigrette_1268-25827.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    title: "Fresh Vegetable Salad",
    description: "Healthy vegetable salad",
    price: 9.99,
    alt: "Fresh Vegetable Salad image",
    href: "product-detail.html",
  },
  {
    id: 9,
    image:
      "https://img.freepik.com/free-photo/delicious-pizza-pepperoni-mushrooms-olives-tomatoes-cheese-wooden-board_1268-22175.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    title: "Pepperoni Pizza",
    description: "Classic pepperoni",
    price: 15.99,
    alt: "Pepperoni Pizza image",
    href: "product-detail.html",
  },
  {
    id: 10,
    image:
      "https://img.freepik.com/free-photo/fresh-sushi-rolls-salmon-avocado-cucumber-wasabi-soy-sauce_1268-24923.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    title: "Salmon Sushi Roll",
    description: "Fresh salmon sushi",
    price: 18.99,
    alt: "Salmon Sushi Roll image",
    href: "product-detail.html",
  },
  {
    id: 11,
    image:
      "https://img.freepik.com/free-photo/delicious-grilled-steak-medium-rare-served-with-potatoes-vegetables_1268-23775.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    title: "Grilled Steak",
    description: "Tender grilled steak",
    price: 24.99,
    alt: "Grilled Steak image",
    href: "product-detail.html",
  },
  {
    id: 12,
    image:
      "https://img.freepik.com/free-photo/delicious-chicken-burger-fries-cola-wooden-table_1268-21370.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    title: "Chicken Burger",
    description: "Juicy chicken patty",
    price: 12.99,
    alt: "Chicken Burger image",
    href: "product-detail.html",
  },
];
const OurMenu5 = () => {
  return (
    <PageLayout>
      <PageBanner name={"Our Menu 5"} />
      <section class="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[70px] sm:pb-10 pb-5 overflow-hidden relative bg-white">
        <div class="container">
          <div class="clearfix" id="lightgallery">
            <ul id="masonry" class="row dlab-gallery-listing gallery">
              {menuItems.map((item) => (
                <SpecialMenu
                  key={item.id}
                  image={item.image}
                  name={item.title}
                  description={item.description}
                  price={item.price}
                  alt={item.alt}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default OurMenu5;
