import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";

export default function PublicRoute({ children }) {
  const isLoggedIn = useAuth();

  return !isLoggedIn ? children : <Navigate to="/" />;
}
