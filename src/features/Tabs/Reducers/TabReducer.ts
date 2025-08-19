import { createSlice } from "@reduxjs/toolkit";
import { fetchCreateTabs, fetchGetTabs } from "../Actions/TabsActions";

interface initialStateData {
  data: {
    id: number;
    method: string;
    url: string;
  }[];
  loading: boolean;
  error: string;
}

const initialState: initialStateData = {
  data: [],
  loading: false,
  error: "",
};

const tabsSlices = createSlice({
  initialState,
  name: "Tabs",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetTabs.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchGetTabs.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchGetTabs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    builder.addCase(fetchCreateTabs.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchCreateTabs.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchCreateTabs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default tabsSlices.reducer;
