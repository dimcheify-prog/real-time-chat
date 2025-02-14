import { createBrowserRouter } from "react-router";
import { baseLayout } from "@/1_app/layouts/baseLayout.tsx";
import { LoginPage, RegistrationPage } from "@/2_pages/auth";
import { ProfilePage } from "@/2_pages/profile";
import { ReactNode } from "react";
import { useAppSelector } from "./appStore";
import { Navigate } from "react-router";
import { selectIsAuthorized } from "@/4_features/auth";
import { layoutWithSidebar } from "./layouts/layoutWithSidebar";
import { ChatsPage } from "@/2_pages/chats/ui/ChatsPage";

function AuthGuard({ children }: { children: ReactNode }) {
  const isAuthorized = useAppSelector(selectIsAuthorized);

  if (isAuthorized) {
    return <Navigate to="/" />;
  }

  return children;
}

function GuestGuard({ children }: { children: ReactNode }) {
  const isAuthorized = useAppSelector(selectIsAuthorized);

  if (!isAuthorized) {
    return <Navigate to="/auth/login" />;
  }

  return children;
}

export const appRouter = () =>
  createBrowserRouter([
    {
      element: baseLayout,
      children: [
        {
          path: "/auth/login",
          element: (
            <AuthGuard>
              <LoginPage />
            </AuthGuard>
          ),
        },
        {
          path: "/auth/register",
          element: (
            <AuthGuard>
              <RegistrationPage />
            </AuthGuard>
          ),
        },
      ],
    },
    {
      element: <GuestGuard>{layoutWithSidebar}</GuestGuard>,
      children: [
        {
          path: "/",
          element: (
            <GuestGuard>
              <ChatsPage />
            </GuestGuard>
          ),
        },
        {
          path: "/profile",
          element: (
            <GuestGuard>
              <ProfilePage />
            </GuestGuard>
          ),
        },
      ],
    },
  ]);
