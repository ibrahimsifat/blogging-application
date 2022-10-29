import { Windmill } from "@windmill/react-ui";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemedSuspense from "./components/dashboard/ThemedSuspense";

import "./index.css";

import { SidebarProvider } from "./context/dashboard/SidebarContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SidebarProvider>
      <Suspense fallback={<ThemedSuspense />}>
        <Windmill usePreferences>
          <App />
        </Windmill>
      </Suspense>
    </SidebarProvider>
    ,
  </React.StrictMode>
);
