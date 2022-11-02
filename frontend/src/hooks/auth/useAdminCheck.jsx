import { useSelector } from "react-redux";

export default function useAdminCheck() {
  const auth = useSelector((state) => state.auth);

  if (
    auth?.accessToken &&
    (auth?.user?.role === "admin" || auth?.user?.role === "sub_admin")
  ) {
    return true;
  } else {
    return false;
  }
}
