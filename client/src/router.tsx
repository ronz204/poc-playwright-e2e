import { RootPage } from "@Modules/Root/RootPage";
import { createBrowserRouter } from "react-router";

// https://reactrouter.com/start/data/installation
export const Router = createBrowserRouter([
  { path: "/", Component: RootPage },
]);
