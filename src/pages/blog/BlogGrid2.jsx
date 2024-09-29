import React from "react";
import PageLaout from "../../component/layout/PageLaout";
import PageBanner from "../../component/shared/PageBanner";
import BlogGrid2card from "../../component/card/BlogGrid2";
import { Link } from "react-router-dom";
const products = [
  {
    id: 1,
    name: "Classic Panjabi",
    description: "A traditional Panjabi with elegant design.",
    image:
      "https://img.freepik.com/free-photo/birthday-cake_23-2150734952.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    date: "2024-09-28",
    view: 500,
  },
  {
    id: 2,
    name: "Modern Panjabi",
    description: "A stylish Panjabi for a modern look.",
    image:
      "https://img.freepik.com/premium-photo/cake-with-candle-that-says-happy-birthday-it_1109459-2413.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    date: "2024-09-15",
    view: 1200,
  },
  {
    id: 3,
    name: "Designer Panjabi",
    description: "A premium designer Panjabi with intricate details.",
    image:
      "https://img.freepik.com/free-photo/close-up-delicious-birthday-cake_23-2150734928.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    date: "2024-09-10",
    view: 850,
  },
];

const BlogGrid2 = () => {
  return (
    <PageLaout>
      <PageBanner name={"Blog Grid 2"} />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[100px] pb-[70px] relative bg-white">
        <div className="min-container max-w-[53.125rem] mx-auto relative px-[0.938rem]">
          <div className="row loadmore-content">
            {products.map((product) => (
              <BlogGrid2card
                img={product.image}
                name={product.name}
                date={product.date}
                view={product.view}
                desciption={product.description}
                key={product.id}
              />
            ))}
          </div>
          <div className="text-center m-t10">
            <Link
              className="btn btn-primary dz-load-more btn-hover-2"
              to={"#"}
              rel="assets/ajax/blog-grid-2.html"
            >
              Load More
            </Link>
          </div>
        </div>
      </section>
    </PageLaout>
  );
};

export default BlogGrid2;
