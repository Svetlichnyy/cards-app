import { Navigate, Outlet } from "react-router-dom";
import { getLastUser } from "./userFeatures";

function ProtectedRoute() {
  const isUserLoggedIn = getLastUser();
  return isUserLoggedIn ? <Outlet /> : <Navigate to="/signIn" />;
}
export default ProtectedRoute;
