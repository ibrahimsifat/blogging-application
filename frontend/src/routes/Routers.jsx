import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../components/home/auth/Register";
import ArticlesDetails from "../pages/home/articlesDetails/ArticlesDetails";
import Login from "../pages/home/auth/Login";
import Home from "../pages/home/Home";
const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="article/details/:slug" element={<ArticlesDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
