import { configureStore } from "@reduxjs/toolkit";
import historyReducer from "../features/History/Reducers/HistoryReducer";
import historyByIdReducer from "../features/History/Reducers/HistoryByIdReducer";
import collectionReducer from "../features/Collections/Reducers/collectionReducer";
export const store = configureStore({
  reducer: {
    history: historyReducer,
    historyById: historyByIdReducer,
    collections: collectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
