import { collectionService } from "../../../api/Collections/collectionService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCreateCollection = createAsyncThunk(
  "Collections/fetchCreateCollection",
  () => {
    return collectionService.createData({
      title: "New Collection",
    });
  }
);

export const fetchGetCollections = createAsyncThunk(
  "Collections/fetchGetCollections",
  () => {
    return collectionService.getData();
  }
);
