import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "../components/shared/footer/Footer";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Layout from "../pages/dashboard/containers/Layout";
import Home from "../pages/home/Home";
const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Layout />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routers;
