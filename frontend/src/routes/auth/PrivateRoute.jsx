import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";

export default function PrivateRoute({ children }) {
  const isLoggedIn = useAuth();
  return isLoggedIn ? children : <Navigate to="/" replace={true} />;
}
