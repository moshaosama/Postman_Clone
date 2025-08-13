import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import OpenSliderProvider from "./context/OpenSliderContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OpenSliderProvider>
      <App />
    </OpenSliderProvider>
  </StrictMode>
);
