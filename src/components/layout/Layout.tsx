import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import TitleTab from "../movie/TitleTab";

const Layout: React.FC = () => (
  <>
    <div className="max-w-[1000px] mx-auto">
      <Header />
      <main id="main">
        <TitleTab />
        <Outlet />
      </main>
      <Footer />
    </div>
  </>
);

export default Layout;
