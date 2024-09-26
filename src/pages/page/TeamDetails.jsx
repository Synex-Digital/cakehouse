import React, { useEffect, useState } from "react";
import PageLayout from "../../component/layout/PageLaout";
import TeamMemberInfo from "../../component/specific/TeamMemberInfo";
import TeamBio from "../../component/specific/TeamBio";
import SignatureDishes from "../../component/specific/SignatureDishes";
import { useParams } from "react-router-dom";

const personsData = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 30,
    city: "New York",
    position: "Order and Delivery Manager",
    responsibility: "Oversees cake orders and coordinates deliveries.",
    bio: "Alice is a detail-oriented manager with over 7 years of experience in managing logistics for bakery operations.",
    email: "alice.johnson@cakeshop.com",
    phone: "+1-555-123-4567",
    experience: "7 years",
    socialMedia: {
      facebook: "https://facebook.com/alicejohnson",
      instagram: "https://instagram.com/alicejohnson",
      youtube: "https://youtube.com/alicejohnson",
      linkedin: "https://linkedin.com/in/alicejohnson",
      twitter: "https://twitter.com/alicejohnson",
    },
    avatar:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 25,
    city: "Los Angeles",
    position: "Cake Designer",
    responsibility: "Creates custom-designed cakes for clients.",
    bio: "Bob is a creative cake designer with a passion for turning clients' visions into edible works of art.",
    email: "bob.smith@cakeshop.com",
    phone: "+1-555-987-6543",
    experience: "3 years",
    socialMedia: {
      facebook: "https://facebook.com/bobsmith",
      instagram: "https://instagram.com/bobsmith",
      youtube: "https://youtube.com/bobsmith",
      linkedin: "https://linkedin.com/in/bobsmith",
      twitter: "https://twitter.com/bobsmith",
    },
    avatar:
      "https://img.freepik.com/premium-photo/man-with-glasses-blue-jacket-with-word-it_1249303-7405.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Charlie Brown",
    age: 35,
    city: "Chicago",
    position: "Shop Operations Manager",
    responsibility: "Ensures smooth daily operations of the cake shop.",
    bio: "Charlie is an experienced manager known for improving operational efficiency and team productivity.",
    email: "charlie.brown@cakeshop.com",
    phone: "+1-555-234-5678",
    experience: "10 years",
    socialMedia: {
      facebook: "https://facebook.com/charliebrown",
      instagram: "https://instagram.com/charliebrown",
      youtube: "https://youtube.com/charliebrown",
      linkedin: "https://linkedin.com/in/charliebrown",
      twitter: "https://twitter.com/charliebrown",
    },
    avatar:
      "https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 4,
    name: "David Lee",
    age: 28,
    city: "Houston",
    position: "Marketing Specialist",
    responsibility: "Develops marketing strategies to promote the cake shop.",
    bio: "David is a marketing specialist with expertise in both digital and traditional marketing methods.",
    email: "david.lee@cakeshop.com",
    phone: "+1-555-345-6789",
    experience: "5 years",
    socialMedia: {
      facebook: "https://facebook.com/davidlee",
      instagram: "https://instagram.com/davidlee",
      youtube: "https://youtube.com/davidlee",
      linkedin: "https://linkedin.com/in/davidlee",
      twitter: "https://twitter.com/davidlee",
    },
    avatar:
      "https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 5,
    name: "Emily Williams",
    age: 32,
    city: "Phoenix",
    position: "Sales Analyst",
    responsibility: "Analyzes sales data to drive business decisions.",
    bio: "Emily is a data-driven analyst who uses her expertise to help businesses grow through insightful analysis.",
    email: "emily.williams@cakeshop.com",
    phone: "+1-555-456-7890",
    experience: "6 years",
    socialMedia: {
      facebook: "https://facebook.com/emilywilliams",
      instagram: "https://instagram.com/emilywilliams",
      youtube: "https://youtube.com/emilywilliams",
      linkedin: "https://linkedin.com/in/emilywilliams",
      twitter: "https://twitter.com/emilywilliams",
    },
    avatar:
      "https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 6,
    name: "Frank Taylor",
    age: 27,
    city: "Philadelphia",
    position: "Customer Service Representative",
    responsibility: "Handles customer inquiries and resolves issues.",
    bio: "Frank has a knack for solving customer problems and ensuring they leave the shop satisfied.",
    email: "frank.taylor@cakeshop.com",
    phone: "+1-555-567-8901",
    experience: "4 years",
    socialMedia: {
      facebook: "https://facebook.com/franktaylor",
      instagram: "https://instagram.com/franktaylor",
      youtube: "https://youtube.com/franktaylor",
      linkedin: "https://linkedin.com/in/franktaylor",
      twitter: "https://twitter.com/franktaylor",
    },
    avatar:
      "https://img.freepik.com/premium-photo/photography-professional-teacher-classNameroom_1288657-41945.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 7,
    name: "Grace Baker",
    age: 38,
    city: "San Antonio",
    position: "Customer Support Specialist",
    responsibility: "Handles support tickets for cake orders.",
    bio: "Grace excels in providing top-tier support for customers, ensuring smooth and timely resolutions.",
    email: "grace.baker@cakeshop.com",
    phone: "+1-555-678-9012",
    experience: "9 years",
    socialMedia: {
      facebook: "https://facebook.com/gracebaker",
      instagram: "https://instagram.com/gracebaker",
      youtube: "https://youtube.com/gracebaker",
      linkedin: "https://linkedin.com/in/gracebaker",
      twitter: "https://twitter.com/gracebaker",
    },
    avatar:
      "https://img.freepik.com/premium-photo/handsome-man-with-glasses-smiling-looking-t-1720967623-1_979520-126729.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 8,
    name: "Henry Carter",
    age: 29,
    city: "San Diego",
    position: "Project Manager",
    responsibility:
      "Leads large-scale cake projects and oversees delivery logistics.",
    bio: "Henry has extensive experience managing high-profile cake projects, ensuring each order is perfect.",
    email: "henry.carter@cakeshop.com",
    phone: "+1-555-789-0123",
    experience: "6 years",
    socialMedia: {
      facebook: "https://facebook.com/henrycarter",
      instagram: "https://instagram.com/henrycarter",
      youtube: "https://youtube.com/henrycarter",
      linkedin: "https://linkedin.com/in/henrycarter",
      twitter: "https://twitter.com/henrycarter",
    },
    avatar:
      "https://img.freepik.com/free-photo/puzzled-bearded-funny-guy-making-confused-face_176420-18687.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 9,
    name: "Isabella Harris",
    age: 33,
    city: "Dallas",
    position: "HR Manager",
    responsibility: "Manages HR and oversees employee well-being.",
    bio: "Isabella is a dedicated HR professional, focusing on fostering a healthy work environment for the cake shop.",
    email: "isabella.harris@cakeshop.com",
    phone: "+1-555-890-1234",
    experience: "8 years",
    socialMedia: {
      facebook: "https://facebook.com/isabellaharris",
      instagram: "https://instagram.com/isabellaharris",
      youtube: "https://youtube.com/isabellaharris",
      linkedin: "https://linkedin.com/in/isabellaharris",
      twitter: "https://twitter.com/isabellaharris",
    },
    avatar:
      "https://img.freepik.com/premium-photo/man-with-blue-shirt-that-says-he-is-smiling_406811-24208.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 10,
    name: "Jack Wilson",
    age: 26,
    city: "Austin",
    position: "Finance Manager",
    responsibility: "Oversees the cake shop’s finances and budgeting.",
    bio: "Jack is a skilled finance manager who ensures that the shop’s budget is allocated efficiently and effectively.",
    email: "jack.wilson@cakeshop.com",
    phone: "+1-555-901-2345",
    experience: "5 years",
    socialMedia: {
      facebook: "https://facebook.com/jackwilson",
      instagram: "https://instagram.com/jackwilson",
      youtube: "https://youtube.com/jackwilson",
      linkedin: "https://linkedin.com/in/jackwilson",
      twitter: "https://twitter.com/jackwilson",
    },
    avatar:
      "https://img.freepik.com/free-photo/assertive-determined-man-with-beard-points-himself_273609-40657.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 11,
    name: "Kate Smith",
    age: 31,
    city: "San Jose",
    position: "UI/UX Designer",
    responsibility:
      "Designs user interfaces for the online cake ordering platform.",
    bio: "Kate has an eye for design, making the cake shop’s online ordering experience seamless and intuitive.",
    email: "kate.smith@cakeshop.com",
    phone: "+1-555-012-3456",
    experience: "7 years",
    socialMedia: {
      facebook: "https://facebook.com/katesmith",
      instagram: "https://instagram.com/katesmith",
      youtube: "https://youtube.com/katesmith",
      linkedin: "https://linkedin.com/in/katesmith",
      twitter: "https://twitter.com/katesmith",
    },
    avatar:
      "https://img.freepik.com/free-photo/person-indian-origin-having-fun_23-2150285283.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
  {
    id: 12,
    name: "Leo Davis",
    age: 34,
    city: "Indianapolis",
    position: "Software Developer",
    responsibility:
      "Develops and maintains the online ordering system for the cake shop.",
    bio: "Leo is a software developer with over 9 years of experience, ensuring the cake shop’s tech infrastructure runs smoothly.",
    email: "leo.davis@cakeshop.com",
    phone: "+1-555-123-4568",
    experience: "9 years",
    socialMedia: {
      facebook: "https://facebook.com/leodavis",
      instagram: "https://instagram.com/leodavis",
      youtube: "https://youtube.com/leodavis",
      linkedin: "https://linkedin.com/in/leodavis",
      twitter: "https://twitter.com/leodavis",
    },
    avatar:
      "https://img.freepik.com/premium-photo/happy-man-doing-advertisement-pose-product_758367-207980.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
  },
];

const TeamDetails = () => {
  const [persons, setPersons] = useState([]);

  const param = useParams();
  useEffect(() => {
    const person = personsData.find(
      (person) => person.id === parseInt(param.id)
    );
    if (person) {
      setPersons([person]);
    }
  }, [param.id]);

  console.log(persons);

  return (
    <>
      <PageLayout>
        <section className="team-details lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[80px] sm:pb-10 pb-5">
          <div className="container">
            <div className="row">
              <div className="w-full px-[15px]">
                {/* <TeamMemberInfo
                  name="John Doe"
                  title="Restaurant Chef"
                  imageUrl="assets/images/team/detail/pic1.jpg"
                  responsibility="Senior Chef"
                  experience="10 Year"
                  email="Example@gmail.com"
                  phone="+22 33 56 7675 8939"
                  socialLinks={[
                    {
                      href: "https://www.facebook.com/",
                      icon: "fa-facebook-f",
                    },
                    { href: "https://twitter.com/", icon: "fa-twitter" },
                    {
                      href: "https://www.youtube.com/",
                      icon: "fa-brands fa-youtube",
                    },
                    {
                      href: "https://www.instagram.com/",
                      icon: "fa-brands fa-instagram",
                    },
                    {
                      href: "https://www.linkedin.com/feed/",
                      icon: "fa-brands fa-linkedin",
                    },
                  ]}
                /> */}

                {persons.map((data) => {
                  return (
                    <TeamMemberInfo
                      key={data.id}
                      name={data.name}
                      title={data.position}
                      imageUrl={data.avatar}
                      responsibility={data.responsibility}
                      experience={data.experience}
                      email={data.email}
                      phone={data.phone}
                      bio={data.bio}
                      // socialLinks={data.socialMedia}
                    />
                  );
                })}

                <TeamBio bio={persons[0]?.bio} />
                <SignatureDishes
                  dishes={[
                    {
                      title: "Sweet Cake",
                      image: "https://img.freepik.com/free-photo/delicious-cake-with-fruits_23-2150727618.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
                    },
                    {
                      title: "Chicken",
                      image: "https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
                    },
                    {
                      title: "Salad",
                      image: "https://img.freepik.com/free-photo/top-view-tasty-salad-with-vegetables_23-2148515491.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
                    },
                    {
                      title: "Burger",
                      image: "https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?uid=R165295523&ga=GA1.1.1982624528.1727324533&semt=ais_hybrid",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default TeamDetails;
