import { createBrowserRouter } from "react-router";
import { RootRoutes } from "@Modules/Root/RootRoutes";

// https://reactrouter.com/start/data/installation
export const Router = createBrowserRouter([
  ...RootRoutes,
]);
