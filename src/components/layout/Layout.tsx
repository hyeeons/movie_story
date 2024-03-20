import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => (
  <>
    <div className="max-w-[1000px] mx-auto">
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  </>
);

export default Layout;
