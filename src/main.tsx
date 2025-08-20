import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import OpenSliderProvider from "./context/OpenSliderContext.tsx";
import GetDataProvider from "./context/GetDataContext.tsx";
import { store } from "./store/Store.ts";
import OpenSaveRequestProvider from "./context/SaveRequestContext.tsx";
import GetTabValueProvider from "./context/getTabValueContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OpenSliderProvider>
      <Provider store={store}>
        <GetDataProvider>
          <OpenSaveRequestProvider>
            <GetTabValueProvider>
                <App/>
            </GetTabValueProvider>
          </OpenSaveRequestProvider>
        </GetDataProvider>
      </Provider>
    </OpenSliderProvider>
  </StrictMode>
);
