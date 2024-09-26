import React from "react";

import QualityServices from "../card/QualityServices";
import ServiceExcellence from "../../assets/ServiceExcellence";
import PremiumSupport from "../../assets/PremiumSupport";
import ClientCareProgram from "../../assets/ClientCareProgram";
import ServiceGuarantee from "../../assets/ServiceGuarantee";

const qualityServices = [
  {
    name: "Service Excellence",
    description:
      "Providing top-notch support and solutions tailored to your needs, ensuring every interaction exceeds expectations.",
    icon: <ServiceExcellence />,
  },
  {
    name: "Premium Support",
    description:
      "Our dedicated team is here to assist you around the clock, delivering prompt and effective solutions for all your inquiries.",
    icon: <PremiumSupport />,
  },
  {
    name: "Client Care Program",
    description:
      "Committed to your satisfaction, our client care program ensures personalized service and ongoing support every step of the way.",
    icon: <ClientCareProgram />,
  },
  {
    name: "Service Guarantee",
    description:
      "Experience peace of mind with our service guarantee, where quality and reliability are at the forefront of everything we do.",

    icon: <ServiceGuarantee />,
  },
];

const QualityServiceSection = () => {
  return (
    <section className="bg-light relative section-wrapper-3  after:content-[''] after:h-[200px] after:w-full after:bg-white after:absolute after:bottom-0 after:left-0 after:z-[0] sm:py-[100px] py-[50px]">
      <div className="container">
        <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
          <h2 className="font-lobster">Quality Service's</h2>
        </div>
        <div className="icon-wrapper1 bg-white rounded-[15px] relative z-[1]">
          <div className="row">
            {qualityServices.map((service, index) => (
              <QualityServices
                icon={service.icon}
                key={index}
                name={service.name}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
      <img
        src="assets/images/background/pic3.png"
        alt=""
        className="2xl:left-[20px] 2xl:top-[20px] absolute 2xl:block hidden"
      />
    </section>
  );
};

export default QualityServiceSection;
