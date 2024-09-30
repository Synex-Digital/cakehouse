import React, { useState } from "react";
import PageLayout from "../../component/layout/PageLaout";
import PageBanner from "../../component/shared/PageBanner";
import RelatedProducts from "../../component/card/RelatedProducts";
import Cart from "../../component/card/Cart";
import { Link } from "react-router-dom";
const menuItems = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/decadent-chocolate-dessert-with-fresh-raspberry-mint-leaf-generated-by-artificial-intellingence_25030-63058.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    nameLink: "product-detail.html",
    name: "Burger",
    rating: 4.5,
    price: 10.0,
    creator: "John Doe",
    time: "30min",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/premium-photo/realistic-sponge-cake-dessert-ultrahigh-quality-imagery-style_167857-29343.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    nameLink: "product-detail.html",
    name: "Pasta",
    rating: 4.2,
    price: 12.99,
    creator: "Jane Smith",
    time: "30min",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/delicate-red-velvet-cake-slices-topped-with-cream-cheese-frosting-edible-rose-petals-against_1268-31370.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    nameLink: "product-detail.html",
    name: "Caesar Salad",
    rating: 4.8,
    price: 8.5,
    creator: "Michael Johnson",
    time: "30min",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/premium-photo/homemade-lemon-cake-with-lush-lemon-frosting-lemon-decorations-sleek-white-cake-stand_1174497-110079.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    nameLink: "product-detail.html",
    name: "Lemon Drizzle Cake",
    rating: 4.7,
    price: 18.3,
    creator: "Emily Davis",
    time: "30min",
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/premium-photo/slice-new-york-cheesecake_1230717-179639.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    nameLink: "product-detail.html",
    name: "Cheesecake",
    rating: 4.9,
    price: 25.5,
    creator: "Olivia Taylor",
    time: "30min",
  },
  {
    id: 6,
    image:
      "https://img.freepik.com/premium-photo/layered-strawberry-shortcake-slice-with-fresh-whipped-cream-whole-strawberry-rustic-table_1260445-6707.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    nameLink: "product-detail.html",
    name: "Strawberry Shortcake",
    rating: 4.5,
    price: 19.99,
    creator: "Noah Carter",
    time: "30min",
  },
  {
    id: 7,
    image:
      "https://img.freepik.com/free-photo/delicious-fried-chicken-wings-served-with-fries-beer-on-wooden-table_1268-21370.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    nameLink: "product-detail.html",
    name: "Fried Chicken Wings",
    rating: 4.7,
    price: 14.99,
    creator: "Ava Lee",
    time: "30min",
  },
  {
    id: 8,
    image:
      "https://img.freepik.com/free-photo/fresh-vegetable-salad-with-avocado-tomatoes-cucumber-red-onion-olives-balsamic-vinaigrette_1268-25827.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    nameLink: "product-detail.html",
    name: "Fresh Vegetable Salad",
    rating: 4.6,
    price: 9.99,
    creator: "Ethan Walker",
    time: "30min",
  },
  {
    id: 9,
    image:
      "https://img.freepik.com/free-photo/delicious-pizza-pepperoni-mushrooms-olives-tomatoes-cheese-wooden-board_1268-22175.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    nameLink: "product-detail.html",
    name: "Pepperoni Pizza",
    rating: 4.8,
    price: 15.99,
    creator: "Sophia James",
    time: "30min",
  },
  {
    id: 10,
    image:
      "https://img.freepik.com/free-photo/fresh-sushi-rolls-salmon-avocado-cucumber-wasabi-soy-sauce_1268-24923.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    nameLink: "product-detail.html",
    name: "Salmon Sushi Roll",
    rating: 4.9,
    price: 18.99,
    creator: "Liam Riley",
    time: "30min",
  },
  {
    id: 11,
    image:
      "https://img.freepik.com/free-photo/delicious-grilled-steak-medium-rare-served-with-potatoes-vegetables_1268-23775.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    nameLink: "product-detail.html",
    name: "Grilled Steak",
    rating: 4.6,
    price: 24.99,
    creator: "Lily Wilson",
    time: "30min",
  },
];

const cartItems = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/decadent-chocolate-dessert-with-fresh-raspberry-mint-leaf-generated-by-artificial-intellingence_25030-63058.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    name: "Burger",
    price: 10.0,
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/premium-photo/realistic-sponge-cake-dessert-ultrahigh-quality-imagery-style_167857-29343.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    name: "Pasta",
    price: 12.99,
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/delicate-red-velvet-cake-slices-topped-with-cream-cheese-frosting-edible-rose-petals-against_1268-31370.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    name: "Caesar Salad",
    price: 8.5,
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/premium-photo/homemade-lemon-cake-with-lush-lemon-frosting-lemon-decorations-sleek-white-cake-stand_1174497-110079.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    name: "Lemon Drizzle Cake",
    price: 18.3,
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/premium-photo/slice-new-york-cheesecake_1230717-179639.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    name: "Cheesecake",
    price: 25.5,
  },
  {
    id: 6,
    image:
      "https://img.freepik.com/premium-photo/layered-strawberry-shortcake-slice-with-fresh-whipped-cream-whole-strawberry-rustic-table_1260445-6707.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    name: "Strawberry Shortcake",
    price: 19.99,
  },
  {
    id: 7,
    image:
      "https://img.freepik.com/free-photo/delicious-fried-chicken-wings-served-with-fries-beer-on-wooden-table_1268-21370.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    name: "Fried Chicken Wings",
    price: 14.99,
  },
  {
    id: 8,
    image:
      "https://img.freepik.com/free-photo/fresh-vegetable-salad-with-avocado-tomatoes-cucumber-red-onion-olives-balsamic-vinaigrette_1268-25827.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    name: "Fresh Vegetable Salad",
    price: 9.99,
  },
  {
    id: 9,
    image:
      "https://img.freepik.com/free-photo/delicious-pizza-pepperoni-mushrooms-olives-tomatoes-cheese-wooden-board_1268-22175.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    name: "Pepperoni Pizza",
    price: 15.99,
  },
  {
    id: 10,
    image:
      "https://img.freepik.com/free-photo/fresh-sushi-rolls-salmon-avocado-cucumber-wasabi-soy-sauce_1268-24923.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    name: "Salmon Sushi Roll",
    price: 18.99,
  },
  {
    id: 11,
    image:
      "https://img.freepik.com/free-photo/delicious-grilled-steak-medium-rare-served-with-potatoes-vegetables_1268-23775.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    name: "Grilled Steak",
    price: 24.99,
  },
  {
    id: 12,
    image:
      "https://img.freepik.com/free-photo/delicious-chicken-burger-fries-cola-wooden-table_1268-21370.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
    name: "Chicken Burger",
    price: 12.99,
  },
];
const ShopeCard = () => {
  const [totalPrice, setTotalPrice] = useState(23.5);
  const [deliveryCharge, setDeliveryCharge] = useState(12.5);
  const [tax, setTax] = useState(120);

  return (
    <PageLayout>
      <PageBanner name={"Shop Cart"} />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[100px] sm:pb-10 pb-5 relative bg-white">
        <div className="container">
          <div className="row">
            <div className="lg:w-2/3 w-full px-[15px]">
              <div className="flex justify-between items-center">
                <h5 className="lg:mb-[15px] mb-5">Related Products</h5>
                <Link
                  to="#offcanvasFilter"
                  id="filter-button2"
                  className="btn btn-primary filter-btn lg:hidden block mb-[15px] py-[5px] px-[18px] text-white"
                >
                  Filter
                </Link>
              </div>
              {menuItems.map((items) => {
                return (
                  <RelatedProducts
                    name={items.name}
                    img={items.image}
                    price={items.price}
                    rating={items.rating}
                    creator={items.creator}
                    time={items.time}
                    nameLink={items.nameLink}
                    id={items.id}
                    key={items.id}
                  />
                );
              })}
            </div>

            <div className="lg:w-1/3 w-full px-[15px] mb-[30px]">
              <aside className="lg:sticky pl-5 max-xl:pl-0 pb-[1px] top-[100px]">
                <div className="shop-filter style-1">
                  <div className="flex justify-between">
                    <div className="widget-title xl:mb-[30px] mb-5 pb-3 text-lg relative">
                      <h5 className="">
                        Cart <span className="text-primary">(03)</span>
                      </h5>
                    </div>
                    <Link
                      to="#"
                      className="btn-close style-1 text-xl font-black text-primary p-0 lg:hidden block"
                    >
                      <i className="la la-close font-black"></i>
                    </Link>
                  </div>
                  {cartItems.map((item) => {
                    return (
                      <Cart
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        img={item.image}
                      />
                    );
                  })}

                  <div className="order-detail mt-10">
                    <h6 className="mb-2">Bill Details</h6>
                    <table className="mb-[25px] w-full border-collapse">
                      <tbody>
                        <tr>
                          <td className="py-[6px] font-medium text-sm leading-[21px] text-bodycolor">
                            Item Total
                          </td>
                          <td className="price text-primary font-semibold text-base leading-6 text-right">
                            ${Math.round(totalPrice)}
                          </td>
                        </tr>
                        <tr className="charges border-b border-dashed border-[#22222233]">
                          <td className="pt-[6px] pb-[15px] font-medium text-sm leading-[21px] text-bodycolor">
                            Delivery Charges
                          </td>
                          <td className="price pt-[6px] pb-[15px] text-primary font-semibold text-base leading-6 text-right">
                            ${Math.round(deliveryCharge)}
                          </td>
                        </tr>
                        <tr className="tax border-b-2 border-[#22222233]">
                          <td className="pt-[6px] pb-[15px] font-medium text-sm leading-[21px] text-bodycolor">
                            Govt Taxes & Other Charges
                          </td>
                          <td className="price pt-[6px] pb-[15px] text-primary font-semibold text-base leading-6 text-right">
                            ${Math.round(tax)}
                          </td>
                        </tr>
                        <tr className="total">
                          <td className="py-[6px] font-medium text-sm leading-[21px] text-bodycolor">
                            <h6>Total</h6>
                          </td>
                          <td className="price text-primary font-semibold text-base leading-6 text-right">
                            ${Math.round(totalPrice + deliveryCharge + tax)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <a
                      href="shop-checkout.html"
                      className="btn btn-primary block text-center btn-md w-full btn-hover-1"
                    >
                      <span className="z-[2] relative block">
                        Order Now{" "}
                        <i className="fa-solid fa-arrow-right ml-[10px]"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ShopeCard;
