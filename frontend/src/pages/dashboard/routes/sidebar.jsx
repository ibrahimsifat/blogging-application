/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: "/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Dashboard", // name that appear in Sidebar
  },
  {
    path: "/dashboard/forms",
    icon: "FormsIcon",
    name: "Forms",
  },
  {
    path: "/dashboard/cards",
    icon: "CardsIcon",
    name: "Cards",
  },

  {
    path: "/dashboard/buttons",
    icon: "ButtonsIcon",
    name: "Buttons",
  },
  {
    path: "/dashboard/modals",
    icon: "ModalsIcon",
    name: "Modals",
  },
  {
    path: "/dashboard/tables",
    icon: "TablesIcon",
    name: "Tables",
  },
  {
    icon: "PagesIcon",
    name: "Pages",
    routes: [
      // submenu
      {
        path: "/login",
        name: "Login",
      },
      {
        path: "/create-account",
        name: "Create account",
      },
      {
        path: "/forgot-password",
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
