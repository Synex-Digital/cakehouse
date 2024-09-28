import React from "react";

import PageLayout from "../../component/layout/PageLaout";
import PageBanner from "../../component/shared/PageBanner";
import ShopeCheckoutForm from "../../component/specific/ShopeCheckOutFrom";
const ShopeCheckout = () => {
  return (
    <PageLayout>
      <PageBanner name={"Checkout"} />

      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[100px] sm:pb-10 pb-5 relative bg-white">
        <div className="container">
          <ShopeCheckoutForm />
          {/* <div className="dz-divider bg-gray-dark icon-center my-12 relative h-[1px] bg-[#d3d3d3]">
            <i className="fa fa-circle bg-white text-primary absolute left-[50%] text-center top-[-8px] block"></i>
          </div> */}
          {/* <div className="row">
            <div className="lg:w-1/2 w-full px-[15px]">
              <div className="widget">
                <h4 className="widget-title xl:mb-[30px] mb-5 pb-3 relative">
                  Your Order
                </h4>
                <table className="mb-5 border border-[#00000020] align-middle w-full">
                  <thead className="text-center">
                    <tr className="border-b border-[#00000020]">
                      <th className="bg-[#222] p-[15px] text-base font-semibold text-white">
                        IMAGE
                      </th>
                      <th className="bg-[#222] p-[15px] text-base font-semibold text-white">
                        PRODUCT NAME
                      </th>
                      <th className="bg-[#222] p-[15px] text-base font-semibold text-white">
                        TOTAL
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-[15px] font-medium border border-[#00000020] product-item-img">
                        <img
                          src="assets/images/gallery/small/pic4.jpg"
                          alt="/"
                          className="w-[100px] rounded-md"
                        />
                      </td>
                      <td className="p-[15px] font-medium border border-[#00000020] text-bodycolor">
                        Prduct Item 4
                      </td>
                      <td className="p-[15px] font-medium border border-[#00000020] text-bodycolor">
                        $36.00
                      </td>
                    </tr>
                    <tr>
                      <td className="p-[15px] font-medium product-item-img">
                        <img
                          src="assets/images/gallery/small/pic3.jpg"
                          alt="/"
                          className="w-[100px] rounded-md"
                        />
                      </td>
                      <td className="p-[15px] font-medium border border-[#00000020] text-bodycolor">
                        Prduct Item 3
                      </td>
                      <td className="p-[15px] font-medium border border-[#00000020] text-bodycolor">
                        $25.00
                      </td>
                    </tr>
                    <tr>
                      <td className="p-[15px] font-medium border border-[#00000020] product-item-img">
                        <img
                          src="assets/images/gallery/small/pic2.jpg"
                          alt="/"
                          className="w-[100px] rounded-md"
                        />
                      </td>
                      <td className="p-[15px] font-medium border border-[#00000020] text-bodycolor">
                        Prduct Item 2
                      </td>
                      <td className="p-[15px] font-medium border border-[#00000020] text-bodycolor">
                        $22.00
                      </td>
                    </tr>
                    <tr>
                      <td className="p-[15px] font-medium border border-[#00000020] product-item-img">
                        <img
                          src="assets/images/gallery/small/pic1.jpg"
                          alt="/"
                          className="w-[100px] rounded-md"
                        />
                      </td>
                      <td className="p-[15px] font-medium border border-[#00000020] text-bodycolor">
                        Prduct Item 1
                      </td>
                      <td className="p-[15px] font-medium border border-[#00000020] text-bodycolor">
                        $28.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="lg:w-1/2 w-full px-[15px]">
              <form className="shop-form widget">
                <h4 className="widget-title xl:mb-[30px] mb-5 pb-3 relative">
                  Order Total
                </h4>
                <table className="mb-5 border border-[#00000020] align-middle w-full">
                  <tbody>
                    <tr>
                      <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                        Order Subtotal
                      </td>
                      <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">
                        $125.96
                      </td>
                    </tr>
                    <tr>
                      <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">
                        Shipping
                      </td>
                      <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">
                        Free Shipping
                      </td>
                    </tr>
                    <tr>
                      <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">
                        Coupon
                      </td>
                      <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">
                        $28.00
                      </td>
                    </tr>
                    <tr>
                      <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">
                        Total
                      </td>
                      <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">
                        $506.00
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h4 className="widget-title xl:mb-[30px] mb-5 pb-3 relative">
                  Payment Method
                </h4>
                <div className="mb-5">
                  <input
                    type="text"
                    className="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500"
                    placeholder="Name on Card"
                  />
                </div>
                <div className="form-group mb-5 inline-block w-full">
                  <select className="form-select nice-select after:border-black2 after:h-2 after:w-2 after:right-5 after:top-[60%]">
                    <option value="Credit Card Type">Credit Card Type</option>
                    <option value="Another option">Another option</option>
                    <option value="A option">A option</option>
                    <option value="Potato">Potato</option>
                  </select>
                </div>
                <div className="form-group mb-5">
                  <input
                    name="dzOther[CreditCardNumber]"
                    type="text"
                    className="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500"
                    placeholder="Credit Card Number"
                  />
                </div>
                <div className="form-group mb-5">
                  <input
                    name="dzOther[CardVerificationNumber]"
                    type="text"
                    className="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500"
                    placeholder="Card Verification Number"
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn bg-[#F3F3F3] gap-[10px] mb-4 shadow-none duration-700 btn-hover-2 btn-gray hover:bg-primary"
                    type="submit"
                    value="submit"
                    name="submit"
                  >
                    Place Order Now{" "}
                  </button>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </section>
    </PageLayout>
  );
};

export default ShopeCheckout;
