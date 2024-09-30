import React, { useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import ProductDetailCard from "../../component/card/ProductDetail";
import ProductDetailComment from "../../component/card/ProductDetailComment";
import PageLayout from "../../component/layout/PageLaout";
import PageBanner from "../../component/shared/PageBanner";
const products = [
  {
    id: 1,
    name: "Classic Panjabi",
    image:
      "https://img.freepik.com/premium-photo/arafly-decorated-cake-with-candy-candies-wooden-stand_1028723-96759.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Modern Panjabi",
    image:
      "https://img.freepik.com/premium-photo/cake-with-number-candles-it_1015384-94588.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Designer Panjabi",
    image:
      "https://img.freepik.com/premium-photo/celebration-birthday-cake-with-lots-icing-decorations-ar-11-style-raw-job-id-c5fe24988147485f984373ca43646f2d_786688-40167.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
  },
];
// Array of objects with image, name, description, and id
const productsComment = [
  {
    id: 1,
    name: "Classic Panjabi",
    description: "A traditional Panjabi with elegant design.",
    image:
      "https://img.freepik.com/premium-photo/handsome-man-with-glasses-smiling-looking-t-1720967623-1_979520-126729.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Modern Panjabi",
    description: "A stylish Panjabi for a modern look.",
    image:
      "https://img.freepik.com/premium-photo/man-with-blue-shirt-that-says-he-is-smiling_406811-24208.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Designer Panjabi",
    description: "A premium designer Panjabi with intricate details.",
    image:
      "https://img.freepik.com/premium-photo/man-with-glasses-blue-shirt-with-plaid-shirt-that-says-word-it_1249303-7400.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
  },
];

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const [descriptonIsOpen, setDescriptonIsOpen] = useState(true);
  const [addOnIsOpen, setAddOnIsOpen] = useState(false);
  const [reviewIsOpen, setReviewIsOpen] = useState(false);

  const descriptionHandler = () => {
    setDescriptonIsOpen(true);
    setAddOnIsOpen(false);
    setReviewIsOpen(false);
  };
  const informationHandler = () => {
    setAddOnIsOpen(true);
    setDescriptonIsOpen(false);
    setReviewIsOpen(false);
  };

  const reviewHandler = () => {
    setReviewIsOpen(true);
    setDescriptonIsOpen(false);
    setAddOnIsOpen(false);
  };
  return (
    <PageLayout>
      <PageBanner name="Product Detail" />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[100px] pb-[50px] relative bg-white overflow-hidden">
        <div className="container">
          <div className="row product-detail">
            <div className="lg:w-1/3 md:w-5/12 w-full px-[15px]">
              <div className="detail-media rounded-[10px] overflow-hidden w-full mb-[30px]">
                <img
                  src="https://img.freepik.com/free-photo/side-view-cake-with-strawberries-crumbs-silver-tray_140725-12096.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid"
                  alt="/"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-8/12 md:w-7/12 w-full px-[15px]">
              <div className="detail-info relative">
                <span className="badge mb-[10px] p-[2px] font-medium text-sm leading-5 text-[#666666] flex items-center rounded-[10px]">
                  <svg
                    className="mr-2"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="16"
                      height="16"
                      stroke="#0F8A65"
                    />
                    <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
                  </svg>
                  Pure veg
                </span>
                <div className="dz-head">
                  <h2 className="mb-2 lg:text-4xl sm:text-[2rem] text-[1.75rem] font-semibold">
                    Double Patty Veg Burger
                  </h2>
                  <div className="rating text-sm leading-[21px]">
                    <i className="fa-solid fa-star text-[var(--secondary-dark)]">
                      <FaStar />
                    </i>{" "}
                    <span className="text-bodycolor">
                      <strong className="font-medium">4.5</strong> - 20 Reviews
                    </span>
                  </div>
                </div>
                <p className="text-[15px] mt-5 mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <ul className="detail-list flex my-[25px]">
                  <li className="mr-[45px] text-[15px] font-medium leading-[22px] text-bodycolor">
                    Price{" "}
                    <span className="text-primary flex text-xl font-semibold leading-[30px] mt-[5px]">
                      $20.00
                    </span>
                  </li>
                  <li className="mr-[45px] text-[15px] font-medium leading-[22px] text-bodycolor">
                    Quantity
                    <div className="input-group mt-[5px] flex flex-wrap items-stretch h-[31px] relative w-[105px] min-w-[105px]">
                      <input
                        type="number"
                        step="1"
                        value={quantity}
                        name="quantity"
                        className="quantity-field"
                        readOnly
                      />
                      <span className="flex justify-between p-[2px] absolute w-full">
                        <input
                          type="button"
                          value="-"
                          className="button-minus"
                          data-field="quantity"
                          onClick={() => setQuantity(quantity - 1)}
                          disabled={quantity === 1}
                        />
                        <input
                          type="button"
                          value="+"
                          className="button-plus"
                          data-field="quantity"
                          onClick={() => setQuantity(quantity + 1)}
                          disabled={quantity === 9}
                        />
                      </span>
                    </div>
                  </li>
                </ul>

                <h6 className="mb-2">Add On</h6>
                <ul className="add-product flex flex-wrap mx-[-5px] mb-[30px] w-full">
                  {products.map((item, index) => (
                    <ProductDetailCard
                      key={index}
                      img={item.image}
                      name={item.name}
                    />
                  ))}
                </ul>
                <div className="lg:flex justify-between">
                  <ul className="modal-btn-group sm:flex block mx-[-7px]">
                    <li className="mx-[7px] lg:mb-0 mb-[10px]">
                      <a
                        href="shop-cart.html"
                        className="btn shadow-none btn-primary btn-hover-1"
                      >
                        <span>
                          Add To Cart{" "}
                          <i className="flaticon-shopping-bag-1 text-xl ml-[10px] inline-flex">
                            <CiShoppingBasket />
                          </i>
                        </span>
                      </a>
                    </li>
                    <li className="mx-[7px] lg:mb-0 mb-[10px]">
                      <a
                        href="shop-checkout.html"
                        className="btn shadow-none btn-outline-secondary btn-hover-1 text-yellow"
                      >
                        <span>
                          Buy Now{" "}
                          <i className="flaticon-shopping-cart text-xl ml-[10px] inline-flex">
                            <FiShoppingCart />
                          </i>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul className="avatar-list avatar-list-stacked flex">
                    <li className="avatar inline-block relative duration-300 hover:z-[1] mr-[-17px]">
                      <img
                        src="assets/images/testimonial/small/pic1.jpg"
                        alt=""
                        className="object-cover rounded-full h-[2.735rem] w-[2.735rem] border-2 border-white"
                      />
                    </li>
                    <li className="avatar inline-block relative duration-300 hover:z-[1] mr-[-17px]">
                      <img
                        src="assets/images/testimonial/small/pic2.jpg"
                        alt=""
                        className="object-cover rounded-full h-[2.735rem] w-[2.735rem] border-2 border-white"
                      />
                    </li>
                    <li className="avatar inline-block relative duration-300 hover:z-[1] mr-[-17px]">
                      <img
                        src="assets/images/testimonial/small/pic3.jpg"
                        alt=""
                        className="object-cover rounded-full h-[2.735rem] w-[2.735rem] border-2 border-white"
                      />
                    </li>
                    <li className="avatar inline-block relative duration-300 hover:z-[1] mr-[-17px]">
                      <img
                        src="assets/images/testimonial/small/pic4.jpg"
                        alt=""
                        className="object-cover rounded-full h-[2.735rem] w-[2.735rem] border-2 border-white"
                      />
                    </li>
                    <li className="avatar inline-block relative duration-300 hover:z-[1] mr-[-17px]">
                      <img
                        src="assets/images/testimonial/small/pic5.jpg"
                        alt=""
                        className="object-cover rounded-full h-[2.735rem] w-[2.735rem] border-2 border-white"
                      />
                    </li>
                    <li className="avatar inline-block relative duration-300 hover:z-[1]">
                      <span className="bg-primary h-[2.735rem] w-[2.735rem] leading-[2.735rem] text-center inline-block text-xs rounded-full text-white">
                        150+
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-0 lg:pb-[100px] sm:pb-10 pb-5 relative bg-white">
        <div className="container">
          <div className="row">
            <div className="w-full px-[15px]">
              <ul className="nav nav-tabs tabs-style-1 flex flex-wrap mb-[30px] border-b-2 border-[#EAEAEA]">
                <li className="nav-item mr-[3px] mb-[-1px] rounded-ss-md rounded-se-md overflow-hidden">
                  <button
                    className="nav-link border-2 border-transparent px-4 py-2 block active web-design-1"
                    onClick={descriptionHandler}
                  >
                    <i className="icon-globe"></i>
                    <span className="hidden md:inline-block ml-[10px]">
                      Description
                    </span>
                  </button>
                </li>
                <li className="nav-item mr-[3px] mb-[-1px] rounded-ss-md rounded-se-md overflow-hidden">
                  <button
                    className="nav-link border-2 border-transparent px-4 py-2 block graphic-design-1"
                    onClick={informationHandler}
                  >
                    <i className="icon-image"></i>
                    <span className="hidden md:inline-block ml-[10px]">
                      Additional Information
                    </span>
                  </button>
                </li>
                <li className="nav-item mr-[3px] mb-[-1px] rounded-ss-md rounded-se-md overflow-hidden">
                  <button
                    className="nav-link border-2 border-transparent px-4 py-2 block developement-1"
                    onClick={reviewHandler}
                  >
                    <i className="icon-settings"></i>
                    <span className="hidden md:inline-block ml-[10px]">
                      Product Review
                    </span>
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                {descriptonIsOpen && (
                  <div id="web-design-1" className="tab-pane duration-500 active">
                    <p className="mb-[10px] lg:text-base text-[15px]">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't hidden in the middle of text.
                    </p>
                    <p className="lg:text-base text-[15px] mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                    <ul className="list-check primary">
                      <li className="relative lg:text-base text-[15px] py-[6px] pr-[5px] pl-[30px] text-bodycolor">
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and{" "}
                      </li>
                      <li className="relative lg:text-base text-[15px] py-[6px] pr-[5px] pl-[30px] text-bodycolor">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.{" "}
                      </li>
                    </ul>
                  </div>
                )}

                {addOnIsOpen && (
                  <div id="graphic-design-1" className="tab-pane duration-500">
                    <table className="mb-5 border border-[#00000020] align-middle w-full">
                      <tr>
                        <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                          Cheese Burger
                        </td>
                        <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                          Small, Medium & Large
                        </td>
                      </tr>
                      <tr>
                        <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                          Toppings
                        </td>
                        <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                          Onion, Tomato, Olives
                        </td>
                      </tr>
                      <tr>
                        <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                          Rating
                        </td>
                        <td className="p-[15px] font-medium text-yellow border border-[#00000020] ">
                          <span className="rating-bx">
                            <div className="flex text-md gap-1">
                              <i className="fas fa-star text-yellow">
                                <FaStar />
                              </i>
                              <i className="fas fa-star text-yellow">
                                <FaStar />
                              </i>
                              <i className="fas fa-star text-yellow">
                                <FaStar />
                              </i>
                              <i className="fas fa-star text-yellow">
                                <FaStar />
                              </i>
                              <i className="fas fa-star text-yellow">
                                <FaStar />
                              </i>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                          Shipping Charges
                        </td>
                        <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                          Free Shipping
                        </td>
                      </tr>
                      <tr>
                        <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                          Add More
                        </td>
                        <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                          Coke, Cheese, Choco lava
                        </td>
                      </tr>
                      <tr>
                        <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                          Delivery Time
                        </td>
                        <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                          30 mins
                        </td>
                      </tr>
                    </table>
                  </div>
                )}

                {reviewIsOpen && (
                  <div id="developement-1" className="tab-pane duration-500">
                    <div className="comments-area" id="comments">
                      <ul className="comment-list md:mb-[60px] mb-10">
                        {productsComment.map((item) => (
                          <ProductDetailComment
                            key={item.id}
                            name={item.name}
                            img={item.image}
                            description={item.description}
                          />
                        ))}
                      </ul>
                    </div>
                    <div className="comment-respond style-1" id="respond">
                      <h3
                        className="widget-title xl:mb-[30px] mb-5 pb-3 relative text-2xl"
                        id="reply-title"
                      >
                        Add a review
                      </h3>
                      <form
                        className="flex flex-wrap mx-[-10px]"
                        id="commentform"
                        method="post"
                      >
                        <p className="mb-[30px] px-[10px] sm:w-[50%] w-full comment-form-author">
                          <label className="hidden" for="author">
                            Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="h-[60px] py-[15px] bg-[#f3f4f6] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] border-2 border-[#f3f4f6] focus:border-primary focus:bg-white duration-500"
                            name="dzName"
                            placeholder="Author"
                            id="author"
                          />
                        </p>
                        <p className="mb-[30px] px-[10px] sm:w-[50%] w-full comment-form-email">
                          <label className="hidden" for="email">
                            Email <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="h-[60px] py-[15px] bg-[#f3f4f6] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] border-2 border-[#f3f4f6] focus:border-primary focus:bg-white duration-500"
                            placeholder="Email"
                            name="dzEmail"
                            id="email"
                          />
                        </p>
                        <div className="comment-form-rating flex text-bodycolor px-[10px]">
                          <label className="pull-left mr-[10px] mb-5">
                            Your Rating
                          </label>
                          <div className="rating-widget">
                            <div className="rating-stars">
                              <ul id="stars">
                                <li
                                  className="star inline-block"
                                  title="Poor"
                                  data-value="1"
                                >
                                  <i className="fas fa-star fa-fw text-sm text-[#ccc]"></i>
                                </li>
                                <li
                                  className="star inline-block"
                                  title="Fair"
                                  data-value="2"
                                >
                                  <i className="fas fa-star fa-fw text-sm text-[#ccc]"></i>
                                </li>
                                <li
                                  className="star inline-block"
                                  title="Good"
                                  data-value="3"
                                >
                                  <i className="fas fa-star fa-fw text-sm text-[#ccc]"></i>
                                </li>
                                <li
                                  className="star inline-block"
                                  title="Excellent"
                                  data-value="4"
                                >
                                  <i className="fas fa-star fa-fw text-sm text-[#ccc]"></i>
                                </li>
                                <li
                                  className="star inline-block"
                                  title="WOW!!!"
                                  data-value="5"
                                >
                                  <i className="fas fa-star fa-fw text-sm text-[#ccc]"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <p className="comment-form-comment mb-5 px-[10px] w-full">
                          <label className="hidden" for="comment">
                            Comment
                          </label>
                          <textarea
                            rows="10"
                            name="comment"
                            placeholder="Type Review Here"
                            id="comment"
                            className="resize-none h-[120px] py-[15px] bg-[#f3f4f6] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] border-2 border-[#f3f4f6] focus:border-primary focus:bg-white duration-500"
                          ></textarea>
                        </p>
                        <p className="form-submit mb-5 px-[10px] w-full">
                          <button
                            type="submit"
                            className="btn btn-primary btn-hover-2"
                            id="submit"
                          >
                            Submit Now
                          </button>
                        </p>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductDetail;
