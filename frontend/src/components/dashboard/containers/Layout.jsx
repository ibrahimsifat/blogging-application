import React, { lazy, Suspense, useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { SidebarContext } from "../../../context/dashboard/SidebarContext";

import AddArticles from "../../../pages/dashboard/articles/add/AddArticles";
import Articles from "../../../pages/dashboard/articles/Articles";
import UpdateArticle from "../../../pages/dashboard/articles/update";
import AddCategory from "../../../pages/dashboard/categories/add";
import Categories from "../../../pages/dashboard/categories/Categories";
import UpdateCategory from "../../../pages/dashboard/categories/update";
import Comments from "../../../pages/dashboard/Comments";
import CreateAccount from "../../../pages/dashboard/CreateAccount";
import ForgotPassword from "../../../pages/dashboard/ForgotPassword";
import SubAdmins from "../../../pages/dashboard/subAdmins";
import AddSubAdmin from "../../../pages/dashboard/subAdmins/add";
import SubAdminProfile from "../../../pages/dashboard/subAdmins/subAdminProfile";
import UpdateSubAdmin from "../../../pages/dashboard/subAdmins/update";
import AddTags from "../../../pages/dashboard/tags/add";
import Tags from "../../../pages/dashboard/tags/Tags";
import UpdateTag from "../../../pages/dashboard/tags/update";
import Users from "../../../pages/dashboard/Users";
import AddUser from "../../../pages/dashboard/users/add";
import UpdateUser from "../../../pages/dashboard/users/update";
import Header from "../Header";
import Sidebar from "../Sidebar";
import ThemedSuspense from "../ThemedSuspense";
import Main from "./Main";
const Admin = lazy(() => import("../../../pages/dashboard/home/Admin"));
const Page404 = lazy(() => import("../../../pages/dashboard/404"));

function Layout({ children }) {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();

  useEffect(() => {
    closeSidebar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <Route
                path="/article/edit/:articleId"
                element={<UpdateArticle />}
              />
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
              <Route path="/tag/edit/:categoryId" element={<UpdateTag />} />

              {/* sub Admin routes */}
              <Route path="/sub_admins" element={<SubAdmins />} />
              <Route path="/sub_admin/add" element={<AddSubAdmin />} />
              <Route
                path="/sub_admin/edit/:adminId"
                element={<UpdateSubAdmin />}
              />
              <Route
                path="/admin/profile/:adminId"
                element={<SubAdminProfile />}
              />

              {/* Users routes */}
              <Route path="/users" element={<Users />} />
              <Route path="/user/add" element={<AddUser />} />
              <Route path="/user/edit/:userId" element={<UpdateUser />} />

              {/* create accounts */}
              <Route path="create-account" element={<CreateAccount />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </Main>
      </div>
    </div>
  );
}

export default Layout;
