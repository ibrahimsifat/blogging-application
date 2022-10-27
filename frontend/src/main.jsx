import { Windmill } from "@windmill/react-ui";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ThemedSuspense from "./pages/dashboard/components/ThemedSuspense";
import { SidebarProvider } from "./pages/dashboard/context/SidebarContext";
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
