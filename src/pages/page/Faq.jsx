import React, { useState } from "react";
import PageHeader from "../../component/shared/PageHeader";
import { Link } from "react-router-dom";
import FaqItem from "../../component/specific/FaqItem";
import PageFooter from "../../component/shared/PageFooter";
const faqData = [
  {
    title: "What are the most common ingredients in cakes?",
    description:
      "The most common ingredients in cakes include flour, sugar, eggs, butter, baking powder, and vanilla extract. Variations might include additions like cocoa powder, nuts, or fruit.",
  },
  {
    title: "How long can I store a cake before it goes bad?",
    description:
      "Most cakes can be stored at room temperature for several days if they are covered properly. Refrigerating your cake can extend its life up to a week, and freezing it can extend it for months.",
  },
  {
    title: "What is the difference between buttercream and fondant?",
    description:
      "Buttercream is a creamy, butter-based frosting that is smooth and easy to spread, ideal for both filling and coating cakes. Fondant is a thick, pliable icing that can be rolled out and draped over cakes for a sleek, smooth appearance.",
  },
  {
    title: "How do I keep my cake moist?",
    description:
      "To keep your cake moist, make sure to not overbake it, use ingredients like oil or yogurt in the batter, and store the cake properly by covering it with foil or plastic wrap to prevent air exposure.",
  },
  {
    title: "Can I make a cake without eggs?",
    description:
      "Yes, you can make a cake without eggs by using alternatives like applesauce, mashed bananas, yogurt, or commercial egg replacers. These substitutes can help maintain the cake's moisture and structure.",
  },
  {
    title: "What's the best way to frost a cake?",
    description:
      "The best way to frost a cake is to start with a crumb coat — a thin layer of frosting that seals in crumbs — then refrigerate it briefly before applying a thicker final coat. Use an offset spatula for smoother results.",
  },
  {
    title: "How do I choose the right cake for an occasion?",
    description:
      "Choosing the right cake depends on the occasion. For birthdays, consider the favorite flavor of the celebrant. For weddings, tiered cakes are traditional. Consider guest preferences and dietary restrictions for any event.",
  },
];

const Faq = () => {
  const [email, setEmail] = useState("Enter Your Email");

  return (
    <>
      <PageHeader />
      <section className="bg-[url('../images/banner/bnr2.jpg')] bg-fixed relative z-[1] after:content-[''] after:absolute after:z-[-1] after:bg-[#222222e6] after:opacity-100 after:w-full after:h-full after:top-0 after:left-0  pt-[50px] lg:h-[450px] sm:h-[400px] h-[300px] overflow-hidden bg-cover bg-center">
        <div className="container table h-full relative z-[1] text-center">
          <div className="dz-bnr-inr-entry align-middle table-cell">
            <h2 className="font-lobster text-white mb-5 2xl:text-[70px] md:text-[60px] text-[40px] leading-[1.2]">
              Faq
            </h2>
            {/* <!-- Breadcrumb Row --> */}
            <nav aria-label="breadcrumb" className="breadcrumb-row">
              <ul className="breadcrumb bg-primary shadow-[0px_10px_20px_rgba(0,0,0,0.05)] rounded-[10px] inline-block lg:py-[13px] md:py-[10px] sm:py-[5px] py-[7px] lg:px-[30px] md:px-[18px] sm:px-5 px-3.5 m-0">
                <li className="breadcrumb-item p-0 inline-block text-[15px] font-normal">
                  <Link to="/" className="text-white ">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item text-white p-0 inline-block text-[15px] font-normal active pl-2">
                  Faq
                </li>
              </ul>
            </nav>
            {/* <!-- Breadcrumb Row End --> */}
          </div>
        </div>
      </section>
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[80px] sm:pb-10 pb-5">
        <div className="min-container max-w-[53.125rem] px-[0.938rem] mx-auto">
          <div className="row search-wraper style-1 text-center lg:mt-[-135px] sm:mt-[-100px] mt-[-90px] xl:mb-[80px] lg:mb-[60px] sm:mb-[50px] mb-[40px]">
            <div className="lg:w-5/6 w-full px-[15px] m-auto">
              <form>
                <div className="input-group relative flex flex-wrap items-stretch z-[1] w-full">
                  <div className="input-group-prepand absolute left-0 top-[50%] translate-y-[-50%]">
                    <button
                      name="submit"
                      value="submit"
                      type="submit"
                      className="p-[30px]"
                    >
                      <i className="icon-search text-2xl"></i>
                    </button>
                  </div>
                  <input
                    required="required"
                    type="text"
                    className="form-control bg-white py-[27px] pr-5 pl-[77px] border-none rounded-[10px] lg:h-[80px] h-[60px] w-full shadow-[0px_15px_55px_rgba(34,34,34,0.15)] text-[#666666] text-[15px] outline-none"
                    placeholder="Why Should I Use Swigo ?"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="w-full px-[15px]">
              <div
                className="accordion dz-accordion mb-[60px]"
                id="accordionFaq2"
              >
                {faqData.map((item, index) => (
                  <FaqItem
                    key={index}
                    tittle={item.title}
                    description={item.description}
                    index={index + 1}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="row items-center">
            <div className="lg:w-5/12 w-full px-[15px] mb-5">
              <div className="dz-media faq-media move-2 lg:w-full md:w-[450px] w-[300px] lg:h-full md:h-[450px] h-[300px] mx-auto">
                <img src="assets/images/faq/pic1.png" alt="/" />
              </div>
            </div>
            <div className="lg:w-7/12 w-full px-[15px] mb-5">
              <div className="faq-info">
                <h2 className="lg:text-[50px] text-[35px] font-semibold mb-2">
                  Newsletter
                </h2>
                <p className="mb-[30px] text-base">
                  We hope this newsletter finds you well. We are excited to
                  announce some new additions to our menu that we think you'll
                  love. Our culinary team has been
                </p>
                <form
                  className="dzSubscribe"
                  action="https://swigo.dexignzone.com/tailwind/xhtml/assets/script/mailchamp.php"
                  method="post"
                >
                  <div className="dzSubscribeMsg text-white"></div>
                  <div className="input-group flex flex-wrap relative items-stretch w-full">
                    <input
                      name="dzEmail"
                      required="required"
                      type="text"
                      className="form-control outline-none lg:h-[65px] h-[55px] w-full bg-[#F8F8F8] border border-[#B1B1B1] sm:pr-[150px] pr-20"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />

                    <div className="input-group-addon absolute top-[50%] right-[12px] translate-y-[-50%] z-[9]">
                      <button
                        name="submit"
                        value="submit"
                        type="submit"
                        className="btn btn-primary btn-hover-2 lg:py-3 xl:px-6 sm:py-[10px] py-[6px] px-3"
                      >
                        <span className="sm:block hidden">Submit</span>
                        <i className="fa-solid fa-paper-plane sm:hidden block text-xl"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageFooter />
    </>
  );
};

export default Faq;
