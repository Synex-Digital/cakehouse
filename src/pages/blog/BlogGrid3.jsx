import React from "react";
import PageLaout from "../../component/layout/PageLaout";
import PageBanner from "../../component/shared/PageBanner";
import BlogGrid3Card from "../../component/card/BlogGrid3";

const products = [
  {
    id: 1,
    name: "Classic Panjabi",
    description: "A traditional Panjabi with elegant design.",
    image:
      "https://img.freepik.com/free-photo/ai-generated-cake-picture_23-2150649256.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    date: "2024-09-28",
    view: 500,
  },
  {
    id: 2,
    name: "Modern Panjabi",
    description: "A stylish Panjabi for a modern look.",
    image:
      "https://img.freepik.com/free-photo/delicious-cake-with-fruits_23-2150727618.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    date: "2024-09-15",
    view: 1200,
  },
  {
    id: 3,
    name: "Designer Panjabi",
    description: "A premium designer Panjabi with intricate details.",
    image:
      "https://img.freepik.com/premium-photo/cake-with-candle-that-says-happy-birthday-it_1109459-2413.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    date: "2024-09-10",
    view: 850,
  },
];

const BlogGrid3 = () => {
  return (
    <PageLaout>
      <PageBanner name={"Blog Grid 3"} />
      <section class="content-inner-1 sm:pt-[100px] pt-[50px] lg:pb-[100px] pb-[70px] relative bg-white">
        <div class="container">
          <div class="row loadmore-content">
            {products.map((product) => (
              <BlogGrid3Card
                key={product.id}
                img={product.image}
                name={product.name}
                date={product.date}
                description={product.description}
                view={product.view}
              />
            ))}
          </div>
          <div class="text-center m-t10">
            <a
              class="btn btn-primary dz-load-more btn-hover-2"
              href="javascript:void(0);"
              rel="assets/ajax/blog-grid-3.html"
            >
              Load More
            </a>
          </div>
        </div>
      </section>
    </PageLaout>
  );
};

export default BlogGrid3;
