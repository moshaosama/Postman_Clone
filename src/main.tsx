import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import OpenSliderProvider from "./context/OpenSliderContext.tsx";
import GetDataProvider from "./context/GetDataContext.tsx";
import { store } from "./store/Store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OpenSliderProvider>
      <Provider store={store}>
        <GetDataProvider>
          <App />
        </GetDataProvider>
      </Provider>
    </OpenSliderProvider>
  </StrictMode>
);
