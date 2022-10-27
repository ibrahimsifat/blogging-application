import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import AdminDashboard from "./pages/Admin";

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
// const AdminDashboard = lazy(() => import("./pages/Dashboard"));
const Forms = lazy(() => import("./pages/Forms"));
const Cards = lazy(() => import("./pages/Cards"));

const Buttons = lazy(() => import("./pages/Buttons"));
const Modals = lazy(() => import("./pages/Modals"));
const Tables = lazy(() => import("./pages/Tables"));
const Page404 = lazy(() => import("./pages/404"));
const Blank = lazy(() => import("./pages/Blank"));
function Dashboard() {
  return (
    <BrowserRouter>
      {/* <AccessibleNavigationAnnouncer /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* <Route path="/app" element={<Layout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route> */}
        <Route path="/dashboard/*" element={<Layout />} />
        {/* {routes.map((route, i) => {
            return route.component ? (
              <Route
                key={i}
                path={`/dashboard${route.path}`}
                element={<route.component />}
              />
            ) : null;
          })} */}
      </Routes>
    </BrowserRouter>
  );
}

export default Dashboard;
