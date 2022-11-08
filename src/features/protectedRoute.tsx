import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

function ProtectedRoute() {
  const isUserLoggedIn = useAppSelector(
    (state) => state.userReducer.isUserLoggedIn
  );
  return isUserLoggedIn ? <Outlet /> : <Navigate to="/signIn" />;
}
export default ProtectedRoute;
