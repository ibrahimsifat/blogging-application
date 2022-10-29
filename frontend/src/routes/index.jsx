import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const Home = lazy(() => import("../pages/home/Home"));

const Layout = lazy(() => import("../components/dashboard/containers/Layout"));
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
