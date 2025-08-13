import Home from "../pages/Home";
import SplitLayoute from "../layouts/SplitLayoute";
import { createBrowserRouter, RouterProvider } from "react-router";

const routerPages = createBrowserRouter([
  {
    path: "/",
    element: <SplitLayoute />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={routerPages} />;
};

export default Router;
