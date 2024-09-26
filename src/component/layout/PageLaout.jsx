// Layout.js (or Layout.jsx)
import React from "react";
import { Outlet } from "react-router-dom";
import PageHeader from "../shared/PageHeader";
import PageFooter from "../shared/PageFooter";

const Layout = ({ children }) => {
  return (
    <div>
      <PageHeader />
      <main>
        {children}
        <Outlet />
      </main>
      <PageFooter />
    </div>
  );
};

export default Layout;
