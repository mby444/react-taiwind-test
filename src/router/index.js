import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/product",
    element: <Product />,
    errorElement: <NotFound />,
  },
]);
