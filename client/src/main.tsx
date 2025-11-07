import "./index.css"
import { Router } from "./router";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

const root = document.getElementById("root")!;
createRoot(root).render(<RouterProvider router={Router} />);
