import React, { lazy, Suspense, useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ThemedSuspense from "../components/ThemedSuspense";
import Main from "../containers/Main";
import { SidebarContext } from "../context/SidebarContext";
import Articles from "../pages/Articles";
import Categories from "../pages/Categories";
import Comments from "../pages/Comments";
import CreateAccount from "../pages/CreateAccount";
import ForgotPassword from "../pages/ForgotPassword";
import Tags from "../pages/Tags";
import Users from "../pages/Users";
const Admin = lazy(() => import("../pages/Admin"));
const Forms = lazy(() => import("../pages/Categories"));

const Page404 = lazy(() => import("../pages/404"));

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
              <Route path="/category" element={<Categories />} />
              <Route path="/tags" element={<Tags />} />
              <Route path="/users" element={<Users />} />
              <Route path="/comments" element={<Comments />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="create-account" element={<CreateAccount />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="*" element={<Page404 />} />
              {/* {routes.map((route, i) => {
                console.log(route);
                return (
                  <Route
                    key={i}
                    path={`/dashboard${route.path}`}
                    element={<route.component />}
                  />
                );
              })} */}
            </Routes>
            {/* <Admin /> */}
          </Suspense>
        </Main>
      </div>
    </div>
  );
}

export default Layout;
