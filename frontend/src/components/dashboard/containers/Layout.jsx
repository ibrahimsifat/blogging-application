import React, { lazy, Suspense, useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { SidebarContext } from "../../../context/dashboard/SidebarContext";
import AddUser from "../../../pages/dashboard/admins/add";
import UpdateUser from "../../../pages/dashboard/admins/update";
import Users from "../../../pages/dashboard/admins/Users";

import AddArticles from "../../../pages/dashboard/articles/AddArticles";
import Articles from "../../../pages/dashboard/articles/Articles";
import AddCategory from "../../../pages/dashboard/categories/add";
import Categories from "../../../pages/dashboard/categories/Categories";
import UpdateCategory from "../../../pages/dashboard/categories/update";
import Comments from "../../../pages/dashboard/Comments";
import CreateAccount from "../../../pages/dashboard/CreateAccount";
import ForgotPassword from "../../../pages/dashboard/ForgotPassword";
import AddTags from "../../../pages/dashboard/tags/add";
import Tags from "../../../pages/dashboard/tags/Tags";
import UpdateTags from "../../../pages/dashboard/tags/update";

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
              <Route path="/comments" element={<Comments />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/article/add" element={<AddArticles />} />
              {/* categories routes */}
              <Route path="/category" element={<Categories />} />
              <Route path="/category/add/" element={<AddCategory />} />
              <Route
                path="/category/edit/:categoryId"
                element={<UpdateCategory />}
              />
              {/* tags routes */}

              <Route path="/tags" element={<Tags />} />
              <Route path="/tag/add" element={<AddTags />} />
              <Route path="/tag/edit/:tagId" element={<UpdateTags />} />

              {/* Admins routes */}
              <Route path="/users" element={<Users />} />
              <Route path="/user/add" element={<AddUser />} />
              <Route path="/user/edit/:userId" element={<UpdateUser />} />
              {/* create accounts */}
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
