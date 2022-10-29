import React, { lazy, Suspense, useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { SidebarContext } from "../../../context/dashboard/SidebarContext";

import AddArticles from "../../../pages/dashboard/articles/AddArticles";
import Articles from "../../../pages/dashboard/articles/Articles";
import Categories from "../../../pages/dashboard/Categories";
import Comments from "../../../pages/dashboard/Comments";
import CreateAccount from "../../../pages/dashboard/CreateAccount";
import ForgotPassword from "../../../pages/dashboard/ForgotPassword";
import Tags from "../../../pages/dashboard/Tags";
import Users from "../../../pages/dashboard/Users";
import Header from "../Header";
import Sidebar from "../Sidebar";
import ThemedSuspense from "../ThemedSuspense";
import Main from "./Main";
const Admin = lazy(() => import("../../../pages/dashboard/Admin"));
const Page404 = lazy(() => import("../../../pages/dashboard/404"));

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
              <Route path="/article/add" element={<AddArticles />} />
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
