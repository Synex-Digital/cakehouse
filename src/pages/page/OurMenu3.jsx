import React from "react";
import PageLaout from "../../component/layout/PageLaout";
import PageBanner from "../../component/shared/PageBanner";
import OurMenu3Card from "../../component/card/OurMenu3";
import { Link } from "react-router-dom";
const cakeItems = [
  {
    id: 1,
    name: "Chocolate Fudge Cake",
    description:
      "Rich and decadent chocolate cake layered with smooth fudge frosting and topped with chocolate shavings.",
    ratings: 4.8,
    price: 20.99,
    img: "https://img.freepik.com/free-photo/decadent-chocolate-dessert-with-fresh-raspberry-mint-leaf-generated-by-artificial-intellingence_25030-63058.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Vanilla Sponge Cake",
    description:
      "Light and fluffy vanilla sponge cake with a hint of sweetness, perfect for any occasion.",
    ratings: 4.6,
    price: 15.49,
    img: "https://img.freepik.com/premium-photo/realistic-sponge-cake-dessert-ultrahigh-quality-imagery-style_167857-29343.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Red Velvet Cake",
    description:
      "Classic red velvet cake with cream cheese frosting and a moist, tender crumb.",
    ratings: 4.9,
    price: 22.75,
    img: "https://img.freepik.com/free-photo/delicate-red-velvet-cake-slices-topped-with-cream-cheese-frosting-edible-rose-petals-against_1268-31370.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 4,
    name: "Lemon Drizzle Cake",
    description:
      "Tangy lemon cake with a zesty lemon glaze, perfect for citrus lovers.",
    ratings: 4.7,
    price: 18.3,
    img: "https://img.freepik.com/premium-photo/homemade-lemon-cake-with-lush-lemon-frosting-lemon-decorations-sleek-white-cake-stand_1174497-110079.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 5,
    name: "Cheesecake",
    description:
      "Classic New York-style cheesecake with a buttery graham cracker crust.",
    ratings: 4.9,
    price: 25.5,
    img: "https://img.freepik.com/premium-photo/slice-new-york-cheesecake_1230717-179639.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 6,
    name: "Strawberry Shortcake",
    description:
      "Layers of fluffy shortcake, whipped cream, and fresh strawberries for a refreshing treat.",
    ratings: 4.5,
    price: 19.99,
    img: "https://img.freepik.com/premium-photo/layered-strawberry-shortcake-slice-with-fresh-whipped-cream-whole-strawberry-rustic-table_1260445-6707.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
];

const OurMenu3 = () => {
  return (
    <PageLaout>
      <PageBanner name={"Our Menu 3"} />
      <section className="content-inner-1 lg:pt-[100px] sm:pt-[70px] pt-[50px] pb-10 relative overflow-hidden">
        <div className="container">
          <div className="row justify-between">
            <div className="xl:w-10/12 lg:w-9/12 w-full px-[15px]">
              <div className="site-filters lg:mb-10 mb-[30px] sm:text-left text-center">
                <ul className="filters style-1">
                  <li
                    data-filter=".All"
                    className="btn lg:py-2 lg:px-[15px] p-2 lg:mr-[10px] mr-[5px] duration-500 active"
                  >
                    <Link
                      to="#"
                      className="flex items-center lg:text-[15px] text-[13px] overflow-hidden"
                    >
                      <span className="mb-0">
                        <i className="flaticon-fast-food text-[25px]  lg:mr-[10px] mr-[5px]"></i>
                      </span>
                      ALL
                    </Link>
                  </li>
                  <li
                    data-filter=".drink"
                    className="btn lg:py-2 lg:px-[15px] p-2 lg:mr-[10px] mr-[5px]"
                  >
                    <Link
                      to="#"
                      className="flex items-center lg:text-[15px] text-[13px] overflow-hidden"
                    >
                      <span className="mb-0">
                        <i className="flaticon-cocktail text-[25px]  lg:mr-[10px] mr-[5px]"></i>
                      </span>
                      COLD DRINK
                    </Link>
                  </li>
                  <li
                    data-filter=".pizza"
                    className="btn lg:py-2 lg:px-[15px] p-2 lg:mr-[10px] mr-[5px]"
                  >
                    <Link
                      to="#"
                      className="flex items-center lg:text-[15px] text-[13px] overflow-hidden"
                    >
                      <span className="mb-0">
                        <i className="flaticon-pizza-slice text-[25px]  lg:mr-[10px] mr-[5px]"></i>
                      </span>
                      PIZZA
                    </Link>
                  </li>
                  <li
                    data-filter=".salad"
                    className="btn lg:py-2 lg:px-[15px] p-2 lg:mr-[10px] mr-[5px] duration-500 active"
                  >
                    <Link
                      to="#"
                      className="flex items-center lg:text-[15px] text-[13px] overflow-hidden"
                    >
                      <span className="mb-0">
                        <i className="flaticon-salad text-[25px]  lg:mr-[10px] mr-[5px]"></i>
                      </span>
                      SALAD
                    </Link>
                  </li>
                  <li
                    data-filter=".sweet"
                    className="btn lg:py-2 lg:px-[15px] p-2 lg:mr-[10px] mr-[5px] duration-500 active"
                  >
                    <Link
                      to="#"
                      className="flex items-center lg:text-[15px] text-[13px] overflow-hidden"
                    >
                      <span className="mb-0">
                        <i className="flaticon-cupcake text-[25px]  lg:mr-[10px] mr-[5px]"></i>
                      </span>
                      SWEETS
                    </Link>
                  </li>
                  <li
                    data-filter=".spicy"
                    className="btn lg:py-2 lg:px-[15px] p-2 lg:mr-[10px] mr-[5px] duration-500 active"
                  >
                    <Link
                      to="#"
                      className="flex items-center lg:text-[15px] text-[13px] overflow-hidden"
                    >
                      <span className="mb-0">
                        <i className="flaticon-chili-pepper text-[25px]  lg:mr-[10px] mr-[5px]"></i>
                      </span>
                      SPICY
                    </Link>
                  </li>
                  <li
                    data-filter=".burger"
                    className="btn lg:py-2 lg:px-[15px] p-2 lg:mr-[10px] mr-[5px] duration-500 active"
                  >
                    <Link
                      to="#"
                      className="flex items-center lg:text-[15px] text-[13px] overflow-hidden"
                    >
                      <span className="mb-0">
                        <i className="flaticon-hamburger-1 text-[25px]  lg:mr-[10px] mr-[5px]"></i>
                      </span>
                      BURGER
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:w-2/12 lg:w-1/4 w-full px-[15px] lg:text-right lg:block flex justify-between items-center mb-[30px]">
              <strong className="filter-item-show text-bodycolor font-medium lg:hidden block">
                51,740 items
              </strong>
              <Link
                to="#offcanvasFilter"
                id="filter-button"
                className="btn btn-primary filter-btn btn-hover-2"
              >
                Filter{" "}
                <span>
                  <i className="icon-filter ml-[5px] text-xl"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="clearfix">
            <ul id="masonry" className="row dlab-gallery-listing gallery">
              {cakeItems.map((item) => (
                <OurMenu3Card
                  key={item.id}
                  name={item.name}
                  link={item.link}
                  description={item.description}
                  ratings={item.ratings}
                  price={`$${item.price}`}
                  img={item.img}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageLaout>
  );
};

export default OurMenu3;
