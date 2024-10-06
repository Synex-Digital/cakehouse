import React from "react";
import NewsAndBlog from "../card/NewsAndBlog";

const NewsAndBlogSection = () => {
  return (
    <section className="content-inner sm:pb-[100px] pb-[40px] relative overflow-hidden">
      <div className="container">
        <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
          <h2 className="font-lobster">News & Blog</h2>
        </div>

        <NewsAndBlog />
        <NewsAndBlog />
      </div>
    </section>
  );
};

export default NewsAndBlogSection;
