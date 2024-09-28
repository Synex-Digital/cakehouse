import React from "react";
import PageLayout from "../../component/layout/PageLaout";
import PageBanner from "../../component/shared/PageBanner";
import { Link } from "react-router-dom";

import ShopWishlistCard from "../../component/card/ShopWishlist";

const menuItems = [
  {
    id: 1,
    name: "Burger",
    price: 10.0,
    image:
      "https://img.freepik.com/free-photo/decadent-chocolate-dessert-with-fresh-raspberry-mint-leaf-generated-by-artificial-intellingence_25030-63058.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Pasta",
    price: 12.99,
    image:
      "https://img.freepik.com/premium-photo/realistic-sponge-cake-dessert-ultrahigh-quality-imagery-style_167857-29343.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Caesar Salad",
    price: 8.5,
    image:
      "https://img.freepik.com/free-photo/delicate-red-velvet-cake-slices-topped-with-cream-cheese-frosting-edible-rose-petals-against_1268-31370.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 4,
    name: "Lemon Drizzle Cake",
    price: 18.3,
    image:
      "https://img.freepik.com/premium-photo/homemade-lemon-cake-with-lush-lemon-frosting-lemon-decorations-sleek-white-cake-stand_1174497-110079.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 5,
    name: "Cheesecake",
    price: 25.5,
    image:
      "https://img.freepik.com/premium-photo/slice-new-york-cheesecake_1230717-179639.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 6,
    name: "Strawberry Shortcake",
    price: 19.99,
    image:
      "https://img.freepik.com/premium-photo/layered-strawberry-shortcake-slice-with-fresh-whipped-cream-whole-strawberry-rustic-table_1260445-6707.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 7,
    name: "Fried Chicken Wings",
    price: 14.99,
    image:
      "https://img.freepik.com/free-photo/delicious-fried-chicken-wings-served-with-fries-beer-on-wooden-table_1268-21370.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 8,
    name: "Fresh Vegetable Salad",
    price: 9.99,
    image:
      "https://img.freepik.com/free-photo/fresh-vegetable-salad-with-avocado-tomatoes-cucumber-red-onion-olives-balsamic-vinaigrette_1268-25827.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 9,
    name: "Pepperoni Pizza",
    price: 15.99,
    image:
      "https://img.freepik.com/free-photo/delicious-pizza-pepperoni-mushrooms-olives-tomatoes-cheese-wooden-board_1268-22175.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 10,
    name: "Salmon Sushi Roll",
    price: 18.99,
    image:
      "https://img.freepik.com/free-photo/fresh-sushi-rolls-salmon-avocado-cucumber-wasabi-soy-sauce_1268-24923.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 11,
    name: "Grilled Steak",
    price: 24.99,
    image:
      "https://img.freepik.com/free-photo/delicious-grilled-steak-medium-rare-served-with-potatoes-vegetables_1268-23775.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 12,
    name: "Chicken Burger",
    price: 12.99,
    image:
      "https://img.freepik.com/free-photo/delicious-chicken-burger-fries-cola-wooden-table_1268-21370.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
];

const ShopWishlist = () => {
  return (
    <PageLayout>
      <PageBanner name={"Shop Wishlist"} />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[100px] sm:pb-10 pb-5 relative bg-white overflow-x-auto">
        <div className="container">
          <div className="row">
            <div className="w-full px-[15px] mb-[30px]">
              <div className="table-responsive rounded-md overflow-x-auto min-w-[60rem]">
                <table className="border border-[#00000020] overflow-x-auto align-middle w-full">
                  <thead className="align-bottom">
                    <tr className="border-b border-[#00000020]">
                      <th className="text-left bg-[#222] p-[15px] text-base font-semibold text-white">
                        Product
                      </th>
                      <th className="text-left bg-[#222] p-[15px] text-base font-semibold text-white">
                        Product Name
                      </th>
                      <th className="text-left bg-[#222] p-[15px] text-base font-semibold text-white">
                        Unit Price
                      </th>
                      <th className="text-left bg-[#222] p-[15px] text-base font-semibold text-white">
                        Add to cart{" "}
                      </th>
                      <th className="text-right bg-[#222] p-[15px] text-base font-semibold text-white">
                        Close
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {menuItems.map((item) => (
                      <ShopWishlistCard
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        img={item.image}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ShopWishlist;
