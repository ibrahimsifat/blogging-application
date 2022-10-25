import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticlesDetails from "../pages/home/articlesDetails/ArticlesDetails";
import Home from "../pages/home/Home";
const Routers = () => {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="artical/details/:slug" element={<ArticlesDetails />} />
      </Routes>
    </Routers>
  );
};

export default Routers;
