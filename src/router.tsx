import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/home/Home";
import NotFoundError from "./routes/NotFoundError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundError />,
  },
]);

export default router;
