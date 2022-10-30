const routes = [
  {
    path: "/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Dashboard", // name that appear in Sidebar
  },
  {
    icon: "Articles",
    name: "Articles",
    routes: [
      // submenu
      {
        path: "/dashboard/articles",
        name: "All Articles",
      },
      {
        path: "/dashboard/article/add",
        name: "Add Articles",
      },
    ],
  },
  {
    icon: "CategoryIcon",
    name: "Category",
    routes: [
      // submenu
      {
        path: "/dashboard/category",
        name: "All Category",
      },
      {
        path: "/dashboard/category/add",
        name: "Add Category",
      },
    ],
  },
  {
    icon: "CardsIcon",
    name: "Tags",
    routes: [
      // submenu
      {
        path: "/dashboard/tags",
        name: "All Tags",
      },
      {
        path: "/dashboard/tag/add",
        name: "Add Tags",
      },
    ],
  },

  {
    icon: "ButtonsIcon",
    name: "Admins",
    routes: [
      // submenu
      {
        path: "/dashboard/admins",
        name: "All Admins",
      },
      {
        path: "/dashboard/admin/add",
        name: "Add Admin",
      },
    ],
  },
  {
    icon: "ButtonsIcon",
    name: "Users",
    routes: [
      // submenu
      {
        path: "/dashboard/users",
        name: "All Users",
      },
      {
        path: "/dashboard/user/add",
        name: "Add User",
      },
    ],
  },
  {
    path: "/dashboard/comments",
    icon: "ModalsIcon",
    name: "Comments",
  },
  {
    icon: "PagesIcon",
    name: "Pages",
    routes: [
      // submenu
      {
        path: "/dashboard/create-account",
        name: "Create account",
      },
      {
        path: "/dashboard/forgot-password",
        name: "Forgot password",
      },
      {
        path: "/dashboard/404",
        name: "404",
      },
      {
        path: "/dashboard/blank",
        name: "Blank",
      },
    ],
  },
];

export default routes;
