import { createSlice } from "@reduxjs/toolkit";
import { fetchGetHistoryById } from "../Actions/HistoryActions";

interface HistoryData {
  id: number;
  method: string;
  url: string;
}

interface InitialStateData {
  data: HistoryData | null;
  loading: boolean;
  error: string;
}

const initialState: InitialStateData = {
  data: null,
  loading: false,
  error: "",
};
const historyByIdSlice = createSlice({
  initialState,
  name: "historyById",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetHistoryById.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchGetHistoryById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchGetHistoryById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default historyByIdSlice.reducer;
