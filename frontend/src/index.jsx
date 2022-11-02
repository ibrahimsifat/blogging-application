import { Windmill } from "@windmill/react-ui";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";
import ThemedSuspense from "./components/dashboard/ThemedSuspense";
import { SidebarProvider } from "./context/dashboard/SidebarContext";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SidebarProvider>
      <Suspense fallback={<ThemedSuspense />}>
        <Provider store={store}>
          <Windmill usePreferences>
            <App />
          </Windmill>
        </Provider>
      </Suspense>
    </SidebarProvider>
    ,
  </React.StrictMode>
);
