import { tabsService } from "../../../api/Tabs/TabService";
import { createAsyncThunk} from "@reduxjs/toolkit";

export const fetchCreateTabs = createAsyncThunk(
  "Tabs/fetchCreateTabs",
  async () => {
    return await tabsService.createData();
  }
);

export const fetchGetTabs = createAsyncThunk("Tabs/fetchGetTabs", async () => {
  return await tabsService.getData();
});



export const fetchDeleteTab = createAsyncThunk("Tabs/fetchDeleteTab", async (id: number) => {
    return await tabsService.DeleteData((id as number))
})


export const fetchGetTabByid = createAsyncThunk("TabByid/fetchGetTabByid", async (id: number) => {
    return await tabsService.getTabById(id)
})


export const fetchUpdateTabByid = createAsyncThunk(
    "TabByid/fetchUpdateTabByid",
    async function ({ id, updateTabDTO }: { id: number; updateTabDTO: { url: string; method: string } }) {
        return await tabsService.updateTabById({ id, updateTabDTO });
    }
);