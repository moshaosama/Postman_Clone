import { createSlice } from "@reduxjs/toolkit";
import { fetchCreateHistory, fetchGetHistory } from "../Actions/HistoryActions";

interface HistoryData {
  id: number;
  method: string;
  url: string;
}

const initialState: {
  data: HistoryData[];
  error: string;
  loading: boolean;
} = {
  data: [],
  error: "",
  loading: false,
};

const historySlice = createSlice({
  initialState,
  name: "history",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetHistory.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchGetHistory.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchGetHistory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    builder.addCase(fetchCreateHistory.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchCreateHistory.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchCreateHistory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default historySlice.reducer;
