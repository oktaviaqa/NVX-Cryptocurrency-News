import App from "../App";
import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
