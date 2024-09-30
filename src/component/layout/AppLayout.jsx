// Layout.js (or Layout.jsx)
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Drawer from "./Drawer";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Drawer />
      <main>
        {/* The Outlet component is where the child routes will be rendered */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
