import { App } from "./App";
import { createBrowserRouter } from "react-router";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
