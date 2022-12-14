import React from "react";
import useAuthCheck from "./hooks/auth/useAuthCheck";

import Routers from "./routes";
const App = () => {
  const authChecked = useAuthCheck();
  return !authChecked ? <div>Checking authentication....</div> : <Routers />;
};
export default App;
