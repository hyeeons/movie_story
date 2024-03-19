import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NowMovie from "./views/NowMovie";
import Layout from "./components/layout/Layout";
import Upcomming from "./views/UpComming";

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<NowMovie />} />
        <Route path="upcomming" element={<Upcomming />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
