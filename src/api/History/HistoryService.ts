import axios from "axios";
import { ParentService } from "../ParentService";

class HistoryService extends ParentService {
  async createData(data: { method: string; url: string }, thunkApi?: any) {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/history`,
        data
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
  async getData(_?: any, thunkApi?: any) {
    try {
      const response = await axios.get(`${this.url}history`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const historyService = new HistoryService();
