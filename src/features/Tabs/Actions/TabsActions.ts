import { tabsService } from "../../../api/Tabs/TabService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCreateTabs = createAsyncThunk(
  "Tabs/fetchCreateTabs",
  async () => {
    return await tabsService.createData();
  }
);

export const fetchGetTabs = createAsyncThunk("Tabs/fetchGetTabs", async () => {
  return await tabsService.getData();
});
