// Layout.js (or Layout.jsx)
import React from "react";
import { Outlet } from "react-router-dom";
import PageHeader from "../shared/PageHeader";
import PageFooter from "../shared/PageFooter";
import PageBanner from "../shared/PageBanner";

const Layout = ({ children }) => {
  return (
    <div>
      <PageHeader />
      <main>
        <PageBanner name={"Team Details"} />
        {children}
        <Outlet />
      </main>
      <PageFooter />
    </div>
  );
};

export default Layout;
