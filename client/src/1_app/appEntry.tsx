import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {RouterProvider} from "react-router";
import {appRouter} from "@/1_app/appRouter.tsx";
import "@/6_shared/base.css";

const root = document.getElementById("root");

createRoot(root).render(
    <StrictMode>
        <RouterProvider router={appRouter()}/>
    </StrictMode>
);
