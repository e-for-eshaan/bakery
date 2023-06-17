import React from "react";
import { Navbar, Footer } from "../../layout";
import { Outlet } from "react-router-dom";
import './PageLayout.scss'
const PageLayout = () => {
  return (
    <main>
      <Navbar />
      <section className="content">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default PageLayout;
