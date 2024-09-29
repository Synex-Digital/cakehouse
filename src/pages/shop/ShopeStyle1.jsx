import React from "react";
import PageLaout from "../../component/layout/PageLaout";
import PageBanner from "../../component/shared/PageBanner";
import ShopStyle1Card from "../../component/card/ShopStyle1";
const products = [
  {
    id: 1,
    imageUrl: "https://example.com/images/item1.jpg",
    itemName: "Wireless Earbuds",
    vendorName: "Tech Vendor",
    deliveryTime: "3-5 days",
    price: 50.99,
    rating: 4.7,
  },
  {
    id: 2,
    imageUrl: "https://example.com/images/item2.jpg",
    itemName: "Smartphone",
    vendorName: "Gadget World",
    deliveryTime: "2-4 days",
    price: 799.99,
    rating: 4.8,
  },
  {
    id: 3,
    imageUrl: "https://example.com/images/item3.jpg",
    itemName: "Gaming Laptop",
    vendorName: "Pro Tech",
    deliveryTime: "5-7 days",
    price: 1200.49,
    rating: 4.5,
  },
  {
    id: 4,
    imageUrl: "https://example.com/images/item4.jpg",
    itemName: "4K Monitor",
    vendorName: "Display Hub",
    deliveryTime: "3-6 days",
    price: 399.99,
    rating: 4.6,
  },
];

const ShopeStyle1 = () => {
  return (
    <PageLaout>
      <PageBanner name="Shop Style 1" />
      <section class="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[100px] sm:pb-10 pb-5 relative bg-white">
        <div class="container">
          <div class="row search-wraper style-1 text-center lg:mt-[-135px] sm:mt-[-100px] mt-[-90px] xl:mb-[80px] lg:mb-[60px] sm:mb-[50px] mb-[40px]">
            <div class="lg:w-2/3 w-full px-[15px] m-auto">
              <form>
                <div class="input-group relative flex flex-wrap items-stretch z-[1] w-full">
                  <input
                    required="required"
                    type="text"
                    class="form-control bg-white py-[25px] pl-[30px] sm:pr-[150px] pr-20 border-none rounded-[10px] lg:h-[80px] h-[60px] w-full shadow-[0px_15px_55px_rgba(34,34,34,0.15)] text-[#666666] text-[15px] outline-none"
                    placeholder="Type Here"
                  />
                  <div class="input-group-addon absolute top-[50%] right-[12px] translate-y-[-50%] z-[9]">
                    <button
                      name="submit"
                      value="submit"
                      type="submit"
                      class="btn btn-primary btn-hover-2 lg:py-[15PX] xl:px-[30px] sm:py-[10px] py-[6px] px-3"
                    >
                      <span class="sm:block hidden">Search</span>
                      <i class="icon-search sm:hidden block text-xl"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="row">
            <div class="lg:w-1/4 w-full px-[15px]">
              <aside class="lg:sticky top-[100px] lg:pr-5 pb-[1px]">
                <div class="shop-filter">
                  <div class="widget mb-[50px] widget_tag_cloud">
                    <div class="flex justify-between">
                      <div class="widget-title xl:mb-[30px] mb-5 pb-3 relative">
                        <h4 class="text-xl">Current Search</h4>
                      </div>
                      <a
                        href="javascript:void(0);"
                        class="btn-close style-1 text-xl font-black text-primary p-0 lg:hidden block"
                      >
                        <i class="la la-close font-black"></i>
                      </a>
                    </div>
                    <div class="tagcloud table">
                      <a
                        href="product-detail.html"
                        class="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a]"
                      >
                        Burger
                      </a>
                      <a
                        href="product-detail.html"
                        class="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a]"
                      >
                        Restaurant
                      </a>
                      <a
                        href="product-detail.html"
                        class="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a]"
                      >
                        Pizza
                      </a>
                    </div>
                  </div>
                  <div class="widget dz-widget_services mb-[50px] dz-widget_services">
                    <div class="widget-title xl:mb-[30px] mb-5 pb-3 text-lg relative">
                      <h4 class="text-xl">Refine By Categories</h4>
                    </div>

                    <div class="form-check mb-[15px] block">
                      <input
                        class="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none"
                        type="checkbox"
                        value=""
                        id="productCheckBox-01"
                      />
                      <label
                        class="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor"
                        for="productCheckBox-01"
                      >
                        Pizza
                      </label>
                    </div>
                    <div class="form-check mb-[15px] block">
                      <input
                        class="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none"
                        type="checkbox"
                        value=""
                        id="productCheckBox-02"
                      />
                      <label
                        class="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor"
                        for="productCheckBox-02"
                      >
                        Hamburger
                      </label>
                    </div>
                    <div class="form-check mb-[15px] block">
                      <input
                        class="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none"
                        type="checkbox"
                        value=""
                        id="productCheckBox-03"
                      />
                      <label
                        class="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor"
                        for="productCheckBox-03"
                      >
                        Cold Drink
                      </label>
                    </div>
                    <div class="form-check mb-[15px] block">
                      <input
                        class="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none"
                        type="checkbox"
                        value=""
                        id="productCheckBox-04"
                      />
                      <label
                        class="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor"
                        for="productCheckBox-04"
                      >
                        Sandwich
                      </label>
                    </div>
                    <div class="form-check mb-[15px] block">
                      <input
                        class="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none"
                        type="checkbox"
                        value=""
                        id="productCheckBox-05"
                      />
                      <label
                        class="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor"
                        for="productCheckBox-05"
                      >
                        Muffin
                      </label>
                    </div>
                    <div class="form-check mb-[15px] block">
                      <input
                        class="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none"
                        type="checkbox"
                        value=""
                        id="productCheckBox-06"
                      />
                      <label
                        class="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor"
                        for="productCheckBox-06"
                      >
                        Burrito
                      </label>
                    </div>
                    <div class="form-check mb-[15px] block">
                      <input
                        class="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none"
                        type="checkbox"
                        value=""
                        id="productCheckBox-07"
                      />
                      <label
                        class="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor"
                        for="productCheckBox-07"
                      >
                        Taco
                      </label>
                    </div>
                    <div class="form-check mb-[15px] block">
                      <input
                        class="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none"
                        type="checkbox"
                        value=""
                        id="productCheckBox-08"
                      />
                      <label
                        class="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor"
                        for="productCheckBox-08"
                      >
                        Hot Dog
                      </label>
                    </div>
                  </div>
                  <div class="widget">
                    <div class="widget-title xl:mb-[30px] mb-5 pb-3 text-lg relative">
                      <h4 class="text-xl">Price Range</h4>
                    </div>
                    <div class="range-slider style-1 pt-[45px]">
                      <div id="slider-tooltips"></div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            <div class="lg:w-3/4 w-full px-[15px] lg:order-2 order-1 mb-[30px]">
              <div class="flex justify-between items-center">
                <h5 class="md:mb-4 lg:mb-6 mb-5 lg:block hidden">
                  Search Results
                </h5>
                <strong class="filter-item-show mb-5 text-bodycolor font-medium">
                  Search: 51,740 items
                </strong>
                <a
                  href="#offcanvasFilter"
                  id="filter-button2"
                  class="btn btn-primary filter-btn lg:hidden block mb-[15px] py-[5px] px-[18px] text-white"
                >
                  Filter
                </a>
              </div>

              <div class="dz-shop-card style-1 flex border border-[#0000001a] rounded-[10px] mb-5 overflow-hidden duration-500 hover:border-transparent hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] relative">
                <div class="dz-media w-[100px] min-w-[100px]">
                  <img
                    src="assets/images/shop/pic1.jpg"
                    alt="/"
                    class="h-full"
                  />
                </div>
                <div class="dz-content sm:p-5 p-2 flex flex-col w-full">
                  <div class="dz-head mb-4 flex items-center justify-between">
                    <h6 class="dz-name mb-0 flex items-center text-base">
                      <svg
                        class="mr-[10px]"
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
                      <a href="javascript:void(0);" class="menuDetailModal">
                        Double Patty Burger
                      </a>
                    </h6>
                    <div class="rate bg-[#FE9F10] text-white rounded-[5px] py-[2px] px-[5px] font-medium text-[13px] leading-[18px] inline-block sm:static absolute bottom-[10px] right-3">
                      <i class="fa-solid fa-star"></i> 4.5
                    </div>
                  </div>
                  <div class="dz-body sm:flex block justify-between">
                    <ul class="dz-meta flex mx-[-10px]">
                      <li class="leading-[21px] mx-[10px] text-sm text-[#727272]">
                        By{" "}
                        <span class="text-primary font-medium">
                          {" "}
                          Burger Farm
                        </span>
                      </li>
                      <li class="leading-[21px] mx-[10px] text-sm text-[#727272]">
                        <i class="flaticon-scooter mr-1 text-xl text-primary"></i>{" "}
                        30 min
                      </li>
                    </ul>
                    <p class="mb-0">
                      <span class="text-primary font-weight-500">$15.00</span>{" "}
                      For a one
                    </p>
                  </div>
                </div>
              </div>

              <div class="dz-shop-card style-1 flex border border-[#0000001a] rounded-[10px] mb-5 overflow-hidden duration-500 hover:border-transparent hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] relative">
                <div class="dz-media w-[100px] min-w-[100px]">
                  <img
                    src="assets/images/shop/pic2.jpg"
                    alt="/"
                    class="h-full"
                  />
                </div>
                <div class="dz-content sm:p-5 p-2 flex flex-col w-full">
                  <div class="dz-head mb-4 flex items-center justify-between">
                    <h6 class="dz-name mb-0 flex items-center text-base">
                      <svg
                        class="mr-[10px]"
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
                      <a href="javascript:void(0);" class="menuDetailModal">
                        Chicken Patty Burger
                      </a>
                    </h6>
                    <div class="rate bg-[#FE9F10] text-white rounded-[5px] py-[2px] px-[5px] font-medium text-[13px] leading-[18px] inline-block sm:static absolute bottom-[10px] right-3">
                      <i class="fa-solid fa-star"></i> 4.5
                    </div>
                  </div>
                  <div class="dz-body sm:flex block justify-between">
                    <ul class="dz-meta flex mx-[-10px]">
                      <li class="leading-[21px] mx-[10px] text-sm text-[#727272]">
                        By{" "}
                        <span class="text-primary font-medium">
                          {" "}
                          Burger Farm
                        </span>
                      </li>
                      <li class="leading-[21px] mx-[10px] text-sm text-[#727272]">
                        <i class="flaticon-scooter mr-1 text-xl text-primary"></i>{" "}
                        20 min
                      </li>
                    </ul>
                    <p class="mb-0">
                      <span class="text-primary font-weight-500">$10.00</span>{" "}
                      For a one
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLaout>
  );
};

export default ShopeStyle1;
