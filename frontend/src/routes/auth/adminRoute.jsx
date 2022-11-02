import { Navigate } from "react-router-dom";
import useAdminCheck from "../../hooks/auth/useAdminCheck";

export default function AdminRoute({ children }) {
  const isLoggedIn = useAdminCheck();
  return isLoggedIn ? children : <Navigate to="/" replace={true} />;
}
