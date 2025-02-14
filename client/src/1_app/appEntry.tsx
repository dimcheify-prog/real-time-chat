import "@/6_shared/base.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { appRouter } from "@/1_app/appRouter.tsx";
import { Provider } from "react-redux";
import { appStore, persistedStore } from "./appStore";
import { PersistGate } from "redux-persist/integration/react";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <Provider store={appStore}>
      <PersistGate persistor={persistedStore}>
        <RouterProvider router={appRouter()} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
