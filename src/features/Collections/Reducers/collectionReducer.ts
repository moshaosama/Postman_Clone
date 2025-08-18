import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCreateCollection,
  fetchGetCollections,
} from "../Actions/CollectionsActions";

interface initialStateData {
  data: {
    id: number;
    title: string;
  }[];
  loading: boolean;
  error: string;
}

const initialState: initialStateData = {
  data: [],
  loading: false,
  error: "",
};

const collectionSlice = createSlice({
  initialState,
  name: "Collections",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCreateCollection.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchCreateCollection.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchCreateCollection.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    builder.addCase(fetchGetCollections.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchGetCollections.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchGetCollections.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default collectionSlice.reducer;
