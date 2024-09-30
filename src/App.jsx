// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./component/layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/page/AboutUS";
import Faq from "./pages/page/Faq";
import Team from "./pages/page/Team";
import TeamDetails from "./pages/page/TeamDetails";
import Testimonial from "./pages/page/Testimonial";
import Services from "./pages/page/Services";
import CommingSoon from "./pages/page/CommingSoon";
import UnderMaintenance from "./pages/page/UnderMaintenance";
import OurMenu1 from "./pages/page/OurMenu1";
import OurMenu2 from "./pages/page/OurMenu2";
import OurMenu3 from "./pages/page/OurMenu3";
import OurMenu4 from "./pages/page/OurMenu4";
import OurMenu5 from "./pages/page/OurMenu5";
import ErrorPage from "./pages/page/ErrorPage";

import ShopeStyle1 from "./pages/shop/ShopeStyle1";
import ShopeStyle2 from "./pages/shop/ShopeStyle2";
import ShopeCard from "./pages/shop/ShopeCard";
import ProductDetail from "./pages/shop/ProductDetail";
import ShopWishlist from "./pages/shop/ShopWishlist";
import ShopeCheckout from "./pages/shop/ShopeCheckout";

import BlogGrid2 from "./pages/blog/BlogGrid2";
import BlogGrid3 from "./pages/blog/BlogGrid3";
import BlogGridLeftSidebar from "./pages/blog/BlogGridLeftSidebar";

import ServicesDetail from "./pages/page/ServicesDetail";
import ContactUs from "./pages/ContactUs";
import BlogGridRightSidebar from "./pages/blog/BlogGridRightSidebar";

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap pages inside the Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-details/:id" element={<TeamDetails />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/services" element={<Services />} />
        <Route path="/coming-soon" element={<CommingSoon />} />
        <Route path="/under-maintenance" element={<UnderMaintenance />} />
        <Route path="/our-menu-1" element={<OurMenu1 />} />
        <Route path="/our-menu-2" element={<OurMenu2 />} />
        <Route path="/our-menu-3" element={<OurMenu3 />} />
        <Route path="/our-menu-4" element={<OurMenu4 />} />
        <Route path="/our-menu-5" element={<OurMenu5 />} />
        <Route path="*" element={<ErrorPage />} />

        <Route path="/shop-style-1" element={<ShopeStyle1 />} />
        <Route path="/shop-style-2" element={<ShopeStyle2 />} />
        <Route path="/shop-cart" element={<ShopeCard />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/shop-wishlist" element={<ShopWishlist />} />
        <Route path="/shop-checkout" element={<ShopeCheckout />} />
        <Route path="/service-detail" element={<ServicesDetail />} />

        <Route path="/blog-grid-2" element={<BlogGrid2 />} />
        <Route path="/blog-grid-3" element={<BlogGrid3 />} />
        <Route
          path="/blog-grid-left-sidebar"
          element={<BlogGridLeftSidebar />}
        />
        <Route
          path="/blog-grid-right-sidebar"
          element={<BlogGridRightSidebar />}
        />
      </Routes>
    </Router>
  );
}

export default App;
