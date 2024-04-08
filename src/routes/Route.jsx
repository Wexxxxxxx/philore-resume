import { createBrowserRouter, Outlet } from "react-router-dom";
import React from "react";
import Error404 from "../components/Error404";
import Me from "../pages/Me";

const pages = [
  {
    path: "/",
    element: <Me />,
  },
];

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <Error404 />,
    children: pages,
  },
]);

export default Route;
