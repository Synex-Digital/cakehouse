import React from "react";
import PageLaout from "../../component/layout/PageLaout";
import WhatWeDo from "../../component/card/WhatWeDo";
import PageBanner from "../../component/shared/PageBanner";
import { icons } from "../../assets/icons";
const services = [
  {
    id: 1,
    title: "Custom Cake Delivery",
    description:
      "We ensure timely delivery of your custom cake orders, catering to any special requirements.",
    icon: icons.Delivery,
  },
  {
    id: 2,
    title: "Custom Cake Design",
    description:
      "Crafting unique and personalized cake designs for any occasion.",
    icon: icons.Design,
  },
  {
    id: 3,
    title: "Cake Shop Operations",
    description:
      "Efficiently managing daily cake shop operations and ensuring a smooth workflow.",
    icon: icons.Operation,
  },
  {
    id: 4,
    title: "Cake Shop Marketing",
    description:
      "Promoting the cake shop through online and offline channels, growing our customer base.",
    icon: icons.Marketing,
  },
  {
    id: 5,
    title: "Sales Data Analysis",
    description:
      "Analyzing sales trends to optimize inventory and pricing for maximum profitability.",
    icon: icons.Analysis,
  },
  {
    id: 6,
    title: "Customer Support for Cake Orders",
    description:
      "Handling customer inquiries and providing assistance for cake order issues.",
    icon: icons.Orders,
  },
  {
    id: 7,
    title: "Customer Support Specialist",
    description:
      "Providing comprehensive support to customers and resolving cake-related queries.",
    icon: icons.Specialist,
  },
  {
    id: 8,
    title: "Large Project Management",
    description:
      "Overseeing large-scale cake orders and coordinating seamless deliveries.",
    icon: icons.Management,
  },
  {
    id: 9,
    title: "HR Management",
    description:
      "Managing employee well-being and handling recruitment for the cake shop.",
    icon: icons.Management,
  },
  {
    id: 10,
    title: "Cake Shop Financial Planning",
    description:
      "Managing the cake shop's financial health, including budgeting and forecasting.",
    icon: icons.Planning,
  },
  {
    id: 11,
    title: "UI/UX Design for Online Orders",
    description:
      "Designing a smooth and user-friendly experience for the cake shop's online ordering system.",
    icon: icons.Orders,
  },
  {
    id: 12,
    title: "Online Ordering System Development",
    description:
      "Building and maintaining the cake shop's online ordering platform to ensure a seamless user experience.",
    icon: icons.Development,
  },
];

const Services = () => {
  return (
    <PageLaout>
      <PageBanner name={"Services"} />
      <section class="lg:pt-[100px] sm:pt-[70px] pt-[50px] overflow-hidden lg:pb-[70px] sm:pb-10 pb-5">
        <div class="container">
          <div class="row">
            {services.map((service) => (
              <WhatWeDo
                key={service.id}
                title={service.title}
                description={service.description}
                img={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </PageLaout>
  );
};

export default Services;
