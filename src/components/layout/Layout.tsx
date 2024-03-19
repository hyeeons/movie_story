import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => (
  <>
    <Header />
    <main id="main">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
