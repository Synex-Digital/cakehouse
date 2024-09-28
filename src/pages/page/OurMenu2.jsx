import React from "react";
import PageLaout from "../../component/layout/PageLaout";
import PageBanner from "../../component/shared/PageBanner";
import OurMenuCard from "../../component/card/OurMenu2";
import { Link } from "react-router-dom";
import { BsCake2 } from "react-icons/bs";
import { GiChocolateBar, GiVanillaFlower } from "react-icons/gi";
import { FaBreadSlice, FaCheese, FaNutritionix } from "react-icons/fa";
const cakeItems = [
  {
    id: 1,
    name: "Chocolate Fudge Cake",
    img: "https://img.freepik.com/free-photo/decadent-chocolate-dessert-with-fresh-raspberry-mint-leaf-generated-by-artificial-intellingence_25030-63058.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    category: "Chocolate",
  },
  {
    id: 2,
    name: "Vanilla Sponge Cake",
    img: "https://img.freepik.com/premium-photo/realistic-sponge-cake-dessert-ultrahigh-quality-imagery-style_167857-29343.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    category: "Vanilla",
  },
  {
    id: 3,
    name: "Red Velvet Cake",
    img: "https://img.freepik.com/free-photo/delicate-red-velvet-cake-slices-topped-with-cream-cheese-frosting-edible-rose-petals-against_1268-31370.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    category: "Velvet",
  },
  {
    id: 4,
    name: "Carrot Cake",
    img: "https://img.freepik.com/premium-photo/sweet-carrot-cake-slice-wooden-table-close-up-ar-c-v_960396-701512.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    category: "Vegetable",
  },
  {
    id: 5,
    name: "Black Forest Cake",
    img: "https://img.freepik.com/premium-photo/birthday-cake-with-woodland-animal-theme-forest_1177965-86481.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    category: "Forest",
  },
  {
    id: 6,
    name: "Lemon Drizzle Cake",
    img: "https://img.freepik.com/premium-photo/homemade-lemon-cake-with-lush-lemon-frosting-lemon-decorations-sleek-white-cake-stand_1174497-110079.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    category: "Citrus",
  },
  {
    id: 7,
    name: "Cheesecake",
    img: "https://img.freepik.com/premium-photo/slice-new-york-cheesecake_1230717-179639.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    category: "Cheese",
  },
  {
    id: 8,
    name: "Tiramisu",
    img: "https://img.freepik.com/free-photo/tiramisu-cake-with-cocoa-coffee-black-background_123827-29270.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    category: "Chocolate",
  },
  {
    id: 9,
    name: "Coffee Walnut Cake",
    img: "https://img.freepik.com/free-photo/chocolate-walnut-muffins-with-coffee-cup-with-walnuts-dark-surface_114579-5333.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    category: "Nut",
  },
  {
    id: 10,
    name: "Pineapple Upside-Down Cake",
    img: "https://img.freepik.com/free-photo/top-view-salad-with-herbs-cutting-board-side-with-leaves-top-it-dark-grey-table_140725-80566.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    category: "Fruit",
  },
  {
    id: 11,
    name: "Strawberry Shortcake",
    img: "https://img.freepik.com/premium-photo/layered-strawberry-shortcake-slice-with-fresh-whipped-cream-whole-strawberry-rustic-table_1260445-6707.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    category: "Berry",
  },
  {
    id: 12,
    name: "Banana Bread",
    img: "https://img.freepik.com/free-photo/delicious-banana-bread-table_23-2150764402.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    category: "Bread",
  },
];

const OurMenu2 = () => {
  return (
    <PageLaout>
      <PageBanner name={"Our Menu 2"} />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[70px] sm:pb-10 pb-5 overflow-hidden relative bg-white">
        <div className="container">
          <div className="row">
            <div className="w-full px-[15px] text-center">
              <div className="site-filters style-2 clearfix lg:mb-12 md:mb-6 mb-5">
                <ul className="filters" data-bs-toggle="buttons">
                  <li data-filter=".All" className="btn md:mb-0 mb-5 active">
                    <Link to="#">
                      <span>
                        <i className="flaticon-fast-food"></i>
                      </span>
                      All
                    </Link>
                  </li>
                  <li data-filter=".drink" className="btn md:mb-0 mb-5">
                    <Link
                      to="#"
                      className="flex justify-center flex-col items-center"
                    >
                      <span>
                        <BsCake2 className="text-3xl" />
                      </span>
                      CAKE
                    </Link>
                  </li>
                  <li data-filter=".pizza" className="btn md:mb-0 mb-5">
                    <Link
                      to="#"
                      className="flex justify-center flex-col items-center"
                    >
                      <span>
                        <GiVanillaFlower className="text-3xl" />
                      </span>
                      Vanilla
                    </Link>
                  </li>
                  <li data-filter=".salad" className="btn md:mb-0 mb-5 active">
                    <Link
                      to="#"
                      className="flex justify-center flex-col items-center"
                    >
                      <span>
                        <FaCheese className="text-3xl" />
                      </span>
                      Cheese
                    </Link>
                  </li>
                  <li data-filter=".sweet" className="btn md:mb-0 mb-5 active">
                    <Link
                      to="#"
                      className="flex justify-center flex-col items-center"
                    >
                      <span>
                        <GiChocolateBar className="text-3xl" />
                      </span>
                      Chocolate
                    </Link>
                  </li>
                  <li data-filter=".spicy" className="btn md:mb-0 mb-5 active">
                    <Link
                      to="#"
                      className="flex justify-center flex-col items-center"
                    >
                      <span>
                        <FaBreadSlice className="text-3xl" />
                      </span>
                      Bread
                    </Link>
                  </li>
                  <li data-filter=".burger" className="btn md:mb-0 mb-5 active">
                    <Link
                      to="#"
                      className="flex justify-center flex-col items-center"
                    >
                      <span>
                        <FaNutritionix className="text-3xl" />
                      </span>
                      Nut
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="clearfix" id="lightgallery">
            <ul id="masonry" className="row dlab-gallery-listing gallery">
              {cakeItems.map((item) => (
                <OurMenuCard
                  key={item.id}
                  link={`/menu-details/${item.id}`}
                  img={item.img}
                  name={item.name}
                  category={item.category}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageLaout>
  );
};

export default OurMenu2;
