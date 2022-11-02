import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import AdminLogin from "../pages/auth/adminLogin";
import AdminRoute from "./auth/adminRoute";
import PublicRoute from "./auth/PublicRoute";
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const Home = lazy(() => import("../pages/home/Home"));

const Layout = lazy(() => import("../components/dashboard/containers/Layout"));
const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/admin/login"
          element={
            <PublicRoute>
              <AdminLogin />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <AdminRoute>
              <Layout />
            </AdminRoute>
          }
        />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routers;
