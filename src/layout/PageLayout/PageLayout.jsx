import React from "react";
import { Navbar, Footer } from "../../layout";
import { Outlet } from "react-router-dom";

const PageLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <Outlet>{children}</Outlet>
      <Footer />
    </main>
  );
};

export default PageLayout;
