import React from "react";
import PageLaout from "../../component/layout/PageLaout";
import PageBanner from "../../component/shared/PageBanner";
import BlogGridLeftSidePostCard from "../../component/card/BlogGridLeftSidePostCard";
import BlogGridCard from "../../component/card/BlogGridCard";

const blogPostsLeftSidebar = [
  {
    id: 1,
    imgSrc:
      "https://img.freepik.com/premium-photo/decadent-triple-chocolate-layer-cake_1079150-221471.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    title: "Triple Chocolate Cake",
    postLink: "https://example.com/blog/triple-chocolate-cake",
    date: "2024-09-15",
    comments: 45,
  },
  {
    id: 2,
    imgSrc:
      "https://img.freepik.com/premium-photo/red-velvet-cake-with-classic-look-photo_960396-966522.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    title: "Classic Red Velvet Cake",
    postLink: "https://example.com/blog/classic-red-velvet-cake",
    date: "2024-09-20",
    comments: 32,
  },
  {
    id: 3,
    imgSrc:
      "https://img.freepik.com/premium-photo/realistic-homemade-vanilla-sponge-cake-white-background-photorealistic-style_167857-29311.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    title: "Vanilla Dream Cake",
    postLink: "https://example.com/blog/vanilla-dream-cake",
    date: "2024-09-25",
    comments: 18,
  },
  {
    id: 4,
    imgSrc:
      "https://img.freepik.com/premium-photo/delicious-cheesecake-with-fresh-strawberries-raspberries-pink-background-perfect-print-poster-design_416256-67078.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    title: "Fresh Strawberry Cheesecake",
    postLink: "https://example.com/blog/fresh-strawberry-cheesecake",
    date: "2024-09-28",
    comments: 50,
  },
];

const blogPost = [
  {
    id: 1,
    imgSrc: "https://img.freepik.com/free-photo/decorating-cake_1098-13807.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    title: "The Ultimate Guide to Baking Cakes",
    description:
      "Learn how to bake perfect cakes every time with our step-by-step guide.",
    date: "2024-09-28",
    comments: 15,
    postLink: "https://example.com/posts/1",
  },
  {
    id: 2,
    imgSrc: "https://img.freepik.com/free-photo/confectioner-uniform-decorates-cake_1157-33251.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    title: "Top 10 Cake Decorating Ideas",
    description:
      "Get inspired by these stunning cake decorating ideas for any occasion.",
    date: "2024-09-15",
    comments: 22,
    postLink: "https://example.com/posts/2",
  },
  {
    id: 3,
    imgSrc: "https://img.freepik.com/premium-photo/decadent-red-velvet-cake-perfect-special-occasions_1168676-71883.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    title: "How to Make a Perfect Red Velvet Cake",
    description:
      "Master the art of making the classic red velvet cake with our easy recipe.",
    date: "2024-09-10",
    comments: 18,
    postLink: "https://example.com/posts/3",
  },
  {
    id: 4,
    imgSrc: "https://img.freepik.com/free-photo/surreal-food-online-content-creation_23-2151368796.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    title: "5 Cake Flavors You Must Try",
    description:
      "Discover unique and delicious cake flavors that will wow your taste buds.",
    date: "2024-09-05",
    comments: 30,
    postLink: "https://example.com/posts/4",
  },
];

const BlogGridLeftSidebar = () => {
  return (
    <PageLaout>
      <PageBanner name={"Blog Grid Left Sidebar"} />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[70px] sm:pb-10 pb-5">
        <div className="container">
          <div className="row">
            <div className="lg:w-1/3 w-full px-[15px] lg:order-1 order-2">
              <aside className="lg:sticky pr-5 max-xl:pr-0 pb-[1px] top-[100px]">
                <div className="md:mb-[50px] mb-[30px]">
                  <div className="widget-title xl:mb-[25px] mb-5 pb-3 text-lg relative">
                    <h5 className="">Search</h5>
                  </div>
                  <form role="search" method="post" className="mb-[10px]">
                    <div className="input-group flex flex-wrap relative items-stretch w-full">
                      <div className="input-side bg-primary rounded-md flex m-0 p-[5px] items-center w-full h-[60px]">
                        <input
                          name="text"
                          className="bg-white border-0 rounded-md z-0 h-[50px] py-[6px] pl-5 w-full outline-none"
                          placeholder="Search"
                          type="text"
                        />
                        <div className="input-group-btn">
                          <button
                            type="submit"
                            className="btn ml-[5px] w-[50px] min-w-[50px] h-[50px] p-0 justify-center"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.58366 17.5001C13.9559 17.5001 17.5003 13.9557 17.5003 9.58342C17.5003 5.21116 13.9559 1.66675 9.58366 1.66675C5.21141 1.66675 1.66699 5.21116 1.66699 9.58342C1.66699 13.9557 5.21141 17.5001 9.58366 17.5001Z"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M18.3337 18.3334L16.667 16.6667"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="md:mb-[50px] mb-[30px] widget_categories">
                  <div className="widget-title xl:mb-[25px] mb-5 pb-3 text-lg relative">
                    <h5 className="">Categories</h5>
                  </div>
                  <ul>
                    <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
                      <a
                        href="blog-standard.html"
                        className="text-bodycolor text-[15px] font-medium float-left text-left"
                      >
                        Pepperoni Pizza
                      </a>
                    </li>
                    <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
                      <a
                        href="blog-standard.html"
                        className="text-bodycolor text-[15px] font-medium float-left text-left"
                      >
                        Apricot Chicken
                      </a>
                    </li>
                    <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
                      <a
                        href="blog-standard.html"
                        className="text-bodycolor text-[15px] font-medium float-left text-left"
                      >
                        Pizza Veronese
                      </a>
                    </li>
                    <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
                      <a
                        href="blog-standard.html"
                        className="text-bodycolor text-[15px] font-medium float-left text-left"
                      >
                        Summer Pizza
                      </a>
                    </li>
                    <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
                      <a
                        href="blog-standard.html"
                        className="text-bodycolor text-[15px] font-medium float-left text-left"
                      >
                        Italian Tuna
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="md:mb-[50px] mb-[30px]">
                  <div className="widget-title xl:mb-[25px] mb-5 pb-3 text-lg relative">
                    <h5 className="">Latest Post</h5>
                  </div>
                  <div className="widget-post-bx">
                    {blogPostsLeftSidebar.map((item) => (
                      <BlogGridLeftSidePostCard
                        imgSrc={item.imgSrc}
                        title={item.title}
                        postLink={item.postLink}
                        date={item.date}
                        comments={item.comments}
                        key={item.id}
                      />
                    ))}
                  </div>
                </div>
                <div className="widget mb-[50px] widget_tag_cloud">
                  <div className="flex justify-between">
                    <div className="widget-title xl:mb-[25px] mb-5 pb-3 relative">
                      <h5 className="text-xl">Popular Tags</h5>
                    </div>
                  </div>
                  <div className="tagcloud table">
                    <a
                      href="product-detail.html"
                      className="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a]"
                    >
                      Pizza
                    </a>
                    <a
                      href="product-detail.html"
                      className="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a]"
                    >
                      Chicken
                    </a>
                    <a
                      href="product-detail.html"
                      className="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a]"
                    >
                      Pizza Veronese
                    </a>
                    <a
                      href="product-detail.html"
                      className="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a]"
                    >
                      Burger
                    </a>
                    <a
                      href="product-detail.html"
                      className="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a]"
                    >
                      Sandwich
                    </a>
                  </div>
                </div>
              </aside>
            </div>

            <div class="lg:w-4/6 w-full px-[15px] lg:order-2 order-1 mb-[30px]">
              <div class="row justify-center loadmore-content">
                {blogPost.map((item) => (
                  <BlogGridCard
                    imgSrc={item.imgSrc}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    comments={item.comments}
                    postLink={item.postLink}
                    key={item.id}
                  />
                ))}
              </div>

              <div class="text-center mt-[10px]">
                <a
                  class="btn btn-primary dz-load-more btn-hover-2"
                  href="javascript:void(0);"
                  rel="assets/ajax/blog-list-sidebar.html"
                >
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLaout>
  );
};

export default BlogGridLeftSidebar;
