// Layout.js (or Layout.jsx)
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        {/* The Outlet component is where the child routes will be rendered */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
