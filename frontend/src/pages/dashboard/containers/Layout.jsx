import React, { lazy, Suspense, useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ThemedSuspense from "../components/ThemedSuspense";
import Main from "../containers/Main";
import { SidebarContext } from "../context/SidebarContext";
const Admin = lazy(() => import("../pages/Admin"));
const Forms = lazy(() => import("../pages/Forms"));
const Cards = lazy(() => import("../pages/Cards"));

const Buttons = lazy(() => import("../pages/Buttons"));
const Modals = lazy(() => import("../pages/Modals"));
const Tables = lazy(() => import("../pages/Tables"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));

function Layout({ children }) {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [location]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900  ${
        isSidebarOpen && "overflow-hidden"
      }`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Routes>
              <Route path="/" element={<Admin />} />
              <Route path="/forms" element={<Forms />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/modals" element={<Modals />} />
              <Route path="/tables" element={<Tables />} />
            </Routes>
            {/* <Admin /> */}
          </Suspense>
        </Main>
      </div>
    </div>
  );
}

export default Layout;
