import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Admin = lazy(() => import("../pages/Admin"));
const Forms = lazy(() => import("../pages/Categories"));
const Cards = lazy(() => import("../pages/Tags"));

const Buttons = lazy(() => import("../pages/Users"));
const Modals = lazy(() => import("../pages/Comments"));
const Articles = lazy(() => import("../pages/Articles"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));

const routes = [
  {
    path: "/admin", // the url
    component: Admin, // view rendered
  },
  {
    path: "/articles",
    component: Articles,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/cards",
    component: Cards,
  },

  {
    path: "/buttons",
    component: Buttons,
  },
  {
    path: "/modals",
    component: Modals,
  },
  {
    path: "/404",
    component: Page404,
  },
];

export default routes;
