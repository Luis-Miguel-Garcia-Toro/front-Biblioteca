import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface IPrivateRouteProps {
  redirectPath: string;
  isAuthenticated: boolean;
}
const PrivateRoutes: React.FC<IPrivateRouteProps> = ({
  redirectPath = "/login",
  isAuthenticated,
}) => {
  if (isAuthenticated) {
    return <Outlet />;
  } else {
    console.log("No tienes permisos vas para : " + redirectPath);
    return <Navigate to={redirectPath} />;
  }
};

export default PrivateRoutes;
