import React from "react";
import MasterChefs from "../card/MasterChefs";

const people = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO",
    image:
      "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CTO",
    image:
      "https://img.freepik.com/premium-photo/happy-fashionable-handsome-man_739685-5866.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "CFO",
    image:
      "https://img.freepik.com/premium-photo/happy-fashionable-handsome-man_739685-5844.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
  },
  {
    id: 4,
    name: "Emily White",
    position: "COO",
    image:
      "https://img.freepik.com/premium-photo/man-with-glasses-blue-shirt-that-says-he-is-smiling_1257035-3299.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
  },
];

const MasterChefsSection = () => {
  return (
    <section className="bg-light sm:py-[100px] py-[40px] relative overflow-hidden">
      <div className="container">
        <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
          <h2 className="font-lobster">Master Chefs</h2>
        </div>

        <div className="flex flex-wrap justify-between">
          {" "}
          {people.map((person) => (
            <MasterChefs
              key={person.id}
              image={person.image}
              name={person.name}
              position={person.position}
            />
          ))}
        </div>
        {/* <div className="swiper-nav">
            <div className="swiper-button-prev team-button-prev group hover:before:animate-spin">
              <i className="fa-solid fa-arrow-left text-white group-hover:text-primary relative"></i>
            </div>
            <div className="swiper-button-next team-button-next group hover:before:animate-spin">
              <i className="fa-solid fa-arrow-right text-white group-hover:text-primary relative"></i>
            </div>
          </div> */}
      </div>
    </section>
  );
};

export default MasterChefsSection;
