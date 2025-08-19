import axios from "axios";
import { ParentService } from "../ParentService";

export class TabService extends ParentService {
  async createData(_?: any, thunkApi?: any) {
    try {
      const response = await axios.post(`${this.url}tabs`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
  async getData(_?: any, thunkApi?: any) {
    try {
      const response = await axios.get(`${this.url}tabs`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const tabsService = new TabService();
