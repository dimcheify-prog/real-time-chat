import { createBrowserRouter } from "react-router";
import {baseLayout} from "@/1_app/layouts/baseLayout.tsx";
import {LoginPage} from "@/2_pages/login/ui/LoginPage.tsx";

export const appRouter = () =>
  createBrowserRouter([
    {
        path: '/',
        element: baseLayout,
        children: [{
            path: '/login',
            element: <LoginPage/>,
        }]
    }
  ]);
