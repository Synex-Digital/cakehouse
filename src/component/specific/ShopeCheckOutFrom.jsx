import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";

const ShopForm = () => {
  const [accountOpen, setAccountOpen] = useState(false);
  const [differentAddressOpen, setDifferentAddressOpen] = useState(false);

  const toggleAccount = () => setAccountOpen(!accountOpen);
  const toggleDifferentAddress = () =>
    setDifferentAddressOpen(!differentAddressOpen);

  return (
    <form className="shop-form">
      <div className="row">
        {/* Billing & Shipping Address */}
        <div className="lg:w-1/2 w-full px-[15px]">
          <div className="widget mb-[50px]">
            <h4 className="widget-title xl:mb-[30px] mb-5 pb-3 relative text-[20px] font-medium">
              Billing & Shipping Address
            </h4>

            {/* Country Selector */}
            <div className="form-group mb-5 inline-block w-full">
              <select className="form-select nice-select after:border-black2 after:h-2 after:w-2 after:right-5 after:top-[60%] w-full py-[10px] px-5 rounded-[6px]">
                <option value="1">Åland Islands</option>
                <option value="2">Afghanistan</option>
                {/* Add more countries as needed */}
              </select>
            </div>

            {/* Name Inputs */}
            <div className="row">
              <InputGroup name="dzFirstName" placeholder="First Name" />
              <InputGroup name="dzLastName" placeholder="Last Name" />
            </div>

            {/* Company and Address Inputs */}

            <div class="form-group mb-5">
              <input
                name="CompanyType"
                required
                type="text"
                class="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500"
                placeholder="Company Name"
              />
            </div>
            <div class="form-group mb-5">
              <input
                name="Address"
                required
                type="text"
                class="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500"
                placeholder="Address"
              />
            </div>

            <div className="row">
              <InputGroup
                name="dzOther[Other]"
                placeholder="Apartment, suite, unit etc."
              />
              <InputGroup name="dzOther[Town/City]" placeholder="Town / City" />
            </div>

            <div className="row">
              <InputGroup
                name="dzOther[State/County]"
                placeholder="State / County"
              />
              <InputGroup name="Postcode/Zip" placeholder="Postcode / Zip" />
            </div>

            {/* Email and Phone Inputs */}
            <div className="row">
              <InputGroup name="dzEmail" type="email" placeholder="Email" />
              <InputGroup name="dzPhoneNumber" placeholder="Phone" />
            </div>

            {/* Create an Account Button */}
            <button
              className="btn bg-[#F3F3F3] gap-[10px] mb-4 py-[10px] px-[15px] rounded-[6px] font-medium text-[15px] hover:bg-[#e0e0e0] transition-all"
              onClick={toggleAccount}
              type="button"
            >
              Create an account <i className="fa fa-angle-down text-xl"></i>
            </button>

            {accountOpen && (
              <div id="create-an-account" className="account-info mt-5">
                <p className="text-base mb-4">
                  Create an account by entering the information below. If you
                  are a returning customer please login at the top of the page.
                </p>
                <InputGroup
                  name="Password"
                  type="password"
                  placeholder="Password"
                />
              </div>
            )}
          </div>
        </div>

        {/* Ship to a Different Address */}
        <div className="lg:w-1/2 w-full px-[15px]">
          <button
            className="btn bg-[#F3F3F3] gap-[10px] mb-4 py-[10px] px-[15px] rounded-[6px] font-medium text-[15px] hover:bg-[#e0e0e0] transition-all"
            onClick={toggleDifferentAddress}
            type="button"
          >
            Ship to a different address{" "}
            <i className="fa fa-angle-down text-xl"></i>
          </button>

          {differentAddressOpen && (
            <div className="widget mb-[50px]">
              <p class="text-base mb-4">
                If you have shopped with us before, please enter your details in
                the boxes below. If you are a new customer please proceed to the
                Billing & Shipping section.
              </p>

              {/* Country Selector */}
              <div className="form-group mb-5 inline-block w-full">
                <select className="form-select nice-select after:border-black2 after:h-2 after:w-2 after:right-5 after:top-[60%] w-full py-[10px] px-5 rounded-[6px]">
                  <option value="1">Åland Islands</option>
                  <option value="2">Afghanistan</option>
                  {/* Add more countries as needed */}
                </select>
              </div>

              {/* Name Inputs */}
              <div className="row">
                <InputGroup name="dzFirstName" placeholder="First Name" />
                <InputGroup name="dzLastName" placeholder="Last Name" />
              </div>

              {/* Company and Address Inputs */}

              <div class="form-group mb-5">
                <input
                  name="CompanyType"
                  required
                  type="text"
                  class="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500"
                  placeholder="Company Name"
                />
              </div>
              <div class="form-group mb-5">
                <input
                  name="Address"
                  required
                  type="text"
                  class="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500"
                  placeholder="Address"
                />
              </div>

              <div className="row">
                <InputGroup
                  name="dzOther[Other]"
                  placeholder="Apartment, suite, unit etc."
                />
                <InputGroup
                  name="dzOther[Town/City]"
                  placeholder="Town / City"
                />
              </div>

              <div className="row">
                <InputGroup
                  name="dzOther[State/County]"
                  placeholder="State / County"
                />
                <InputGroup name="Postcode/Zip" placeholder="Postcode / Zip" />
              </div>

              {/* Email and Phone Inputs */}
              <div className="row">
                <InputGroup name="dzEmail" type="email" placeholder="Email" />
                <InputGroup name="dzPhoneNumber" placeholder="Phone" />
              </div>
            </div>
          )}

          <p class="text-base mb-4">
            Create an account by entering the information below. If you are a
            returning customer please login at the top of the page.
          </p>
          <div className="form-group">
            <textarea
              className="resize-none py-[10px] px-5 w-full rounded-[6px] text-[15px] focus:border-primary duration-500 placeholder:text-[#666666]"
              rows="5"
              placeholder="Notes about your order, e.g. special notes for delivery"
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  );
};

// Reusable InputGroup Component
const InputGroup = ({ name, type = "text", placeholder, w = true }) => (
  <div
    className={`form-group md:${w ? "w-1/2" : "w-full"} w-full px-[15px] mb-5`}
  >
    <input
      name={name}
      type={type}
      required
      className="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500"
      placeholder={placeholder}
    />
  </div>
);

export default ShopForm;
