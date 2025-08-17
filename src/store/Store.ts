import { configureStore } from "@reduxjs/toolkit";
import historyReducer from "../features/History/Reducers/HistoryReducer";
import historyByIdReducer from "../features/History/Reducers/HistoryByIdReducer";
export const store = configureStore({
  reducer: {
    history: historyReducer,
    historyById: historyByIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
