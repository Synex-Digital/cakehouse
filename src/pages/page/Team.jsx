import React from "react";
import PageHeader from "../../component/shared/PageHeader";
import PageFooter from "../../component/shared/PageFooter";
import PageBanner from "../../component/shared/PageBanner";
import TeamCard from "../../component/card/Team";

const persons = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 30,
    city: "New York",
    occupation: "Software Engineer",
    avatar:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 25,
    city: "Los Angeles",
    occupation: "Designer",
    avatar:
      "https://img.freepik.com/premium-photo/man-with-glasses-blue-jacket-with-word-it_1249303-7405.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Charlie Brown",
    age: 35,
    city: "Chicago",
    occupation: "Project Manager",
    avatar:
      "https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 4,
    name: "David Lee",
    age: 28,
    city: "Houston",
    occupation: "Marketing Specialist",
    avatar:
      "https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 5,
    name: "Emily Williams",
    age: 32,
    city: "Phoenix",
    occupation: "Data Analyst",
    avatar:
      "https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 6,
    name: "Frank Taylor",
    age: 27,
    city: "Philadelphia",
    occupation: "Sales Representative",
    avatar:
      "https://img.freepik.com/premium-photo/photography-professional-teacher-classNameroom_1288657-41945.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 7,
    name: "Grace Baker",
    age: 38,
    city: "San Antonio",
    occupation: "Customer Support",
    avatar:
      "https://img.freepik.com/premium-photo/handsome-man-with-glasses-smiling-looking-t-1720967623-1_979520-126729.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 8,
    name: "Henry Carter",
    age: 29,
    city: "San Diego",
    occupation: "Project Manager",
    avatar: "https://img.freepik.com/free-photo/puzzled-bearded-funny-guy-making-confused-face_176420-18687.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 9,
    name: "Isabella Harris",
    age: 33,
    city: "Dallas",
    occupation: "HR Manager",
    avatar:
      "https://img.freepik.com/premium-photo/man-with-blue-shirt-that-says-he-is-smiling_406811-24208.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 10,
    name: "Jack Wilson",
    age: 26,
    city: "Austin",
    occupation: "Finance Manager",
    avatar:
      "https://img.freepik.com/free-photo/assertive-determined-man-with-beard-points-himself_273609-40657.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 11,
    name: "Kate Smith",
    age: 31,
    city: "San Jose",
    occupation: "UI/UX Designer",
    avatar:
      "https://img.freepik.com/free-photo/person-indian-origin-having-fun_23-2150285283.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 12,
    name: "Leo Davis",
    age: 34,
    city: "Indianapolis",
    occupation: "Software Developer",
    avatar:
      "https://img.freepik.com/premium-photo/happy-man-doing-advertisement-pose-product_758367-207980.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
];
const Team = () => {
  return (
    <>
      <PageHeader />
      <PageBanner name={"Team"} />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] overflow-hidden lg:pb-[80px] sm:pb-10 pb-5">
        <div className="container">
          <div className="row">
            {persons.map((person) => (
              <TeamCard
                key={person.id}
                name={person.name}
                image={person.avatar}
                position={person.occupation}
              />
            ))}
          </div>
        </div>
      </section>
      <PageFooter />
    </>
  );
};

export default Team;
