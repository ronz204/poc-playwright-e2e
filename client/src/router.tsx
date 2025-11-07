import { App } from "./App";
import { createBrowserRouter } from "react-router";

// https://reactrouter.com/start/data/installation
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
