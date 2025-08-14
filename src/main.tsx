import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import OpenSliderProvider from "./context/OpenSliderContext.tsx";
import GetDataProvider from "./context/GetDataContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OpenSliderProvider>
      <GetDataProvider>
        <App />
      </GetDataProvider>
    </OpenSliderProvider>
  </StrictMode>
);
