import { historyService } from "../../../api/History/HistoryService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGetHistory = createAsyncThunk(
  "history/fetchGetHistory",
  () => {
    return historyService.getData();
  }
);

export const fetchCreateHistory = createAsyncThunk(
  "history/fetchCreateHistory",
  (data: { method: string; url: string }) => {
    return historyService.createData(data);
  }
);
