import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/1_app/appEntry";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
