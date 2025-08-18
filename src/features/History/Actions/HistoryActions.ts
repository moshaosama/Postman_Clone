import { historyService } from "../../../api/History/HistoryService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGetHistory = createAsyncThunk(
  "history/fetchGetHistory",
  (collection_id: number) => {
    return historyService.getData(collection_id);
  }
);

export const fetchCreateHistory = createAsyncThunk(
  "history/fetchCreateHistory",
  (data: { method: string; url: string; collection_id: number }) => {
    return historyService.createData(data);
  }
);

export const fetchGetHistoryById = createAsyncThunk(
  "historyById/fetchGetHistoryById",
  (id: number) => {
    return historyService.GetDataByid(id as number);
  }
);
