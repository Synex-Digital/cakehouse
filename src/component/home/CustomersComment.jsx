import { useEffect, useState } from "react";
import CustomarsDetails from "../specific/CustomarsDetails";
const people = [
  {
    name: "Person 1",
    position: "Position 1",
    description: "Description for Person 1",
  },
  {
    name: "Person 2",
    position: "Position 2",
    description: "Description for Person 2",
  },
  {
    name: "Person 3",
    position: "Position 3",
    description: "Description for Person 3",
  },
  {
    name: "Person 4",
    position: "Position 4",
    description: "Description for Person 4",
  },
  {
    name: "Person 5",
    position: "Position 5",
    description: "Description for Person 5",
  },
  {
    name: "Person 6",
    position: "Position 6",
    description: "Description for Person 6",
  },
];

const CustomersComment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < people.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <section className="sm:py-[100px] py-[40px] bg-white relative overflow-hidden">
      <div className="container">
        <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
          <h2 className="font-lobster">Customer's Comment</h2>
        </div>
        <div className="row mx-0">
          {/* Left Side with Images */}
          <div className="lg:w-7/12 w-full">
            <div className="swiper testimonial-one-thumb w-full">
              <div className="swiper-wrapper flex flex-col">
                <div className="flex">
                  <div
                    className="swiper-slide"
                    style={{
                      width: "228px",
                      height: "226px",
                    }}
                  >
                    <img
                      src="https://img.freepik.com/free-photo/close-up-banana-bread_23-2151006011.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid"
                      alt="Customer"
                      style={{
                        width: currentIndex === 0 ? "90%" : "228px",
                        height: "226px",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      onClick={() => {
                        setCurrentIndex(0);
                      }}
                    />
                  </div>
                  <div
                    className="swiper-slide"
                    style={{
                      width: "228px",
                      height: "226px",
                    }}
                  >
                    <img
                      src="https://img.freepik.com/free-photo/close-up-banana-bread_23-2151006011.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid"
                      alt="Customer"
                      style={{
                        width: currentIndex === 1 ? "90%" : "228px",
                        height: "226px",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      onClick={() => {
                        setCurrentIndex(1);
                      }}
                    />
                  </div>
                  <div
                    className="swiper-slide"
                    style={{
                      width: "228px",
                      height: "226px",
                    }}
                  >
                    <img
                      src="https://img.freepik.com/free-photo/close-up-banana-bread_23-2151006011.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid"
                      alt="Customer"
                      style={{
                        width: currentIndex === 2 ? "90%" : "228px",
                        height: "226px",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      onClick={() => {
                        setCurrentIndex(2);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side with Customer Details */}
          <div className="lg:w-5/12 w-full">
            <div className="swiper testimonial-one-swiper h-100">
              <div className="swiper-wrapper">
                <CustomarsDetails
                  details={people[currentIndex].description}
                  name={people[currentIndex].name}
                  position={people[currentIndex].position}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="assets/images/background/pic2.png"
        alt="Background"
        className="bottom-0 right-[-355px] absolute 2xl:block hidden animate-move"
      />
    </section>
  );
};

export default CustomersComment;
