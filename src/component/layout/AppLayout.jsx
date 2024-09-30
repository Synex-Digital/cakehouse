// Layout.js (or Layout.jsx)
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Drawer from "./Drawer";
import Footer from "./Footer";
import Header from "./Header";
import Drawar2 from "./Drawar2";

const Layout = () => {
  return (
    <div>
      <Header />
      <Drawer />
      <Drawar2 />
      <main>
        {/* The Outlet component is where the child routes will be rendered */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
