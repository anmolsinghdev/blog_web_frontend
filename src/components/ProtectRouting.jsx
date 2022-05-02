import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    return isAuthenticated ? <Outlet /> : <Navigate to="/Login" />;
}

export default PrivateRoute;