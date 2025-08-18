import axios from "axios";
import { ParentService } from "../ParentService";

class CollectionService extends ParentService {
  async createData(data?: { title: string }, thunkApi?: any) {
    try {
      const response = await axios.post(`${this.url}collections`, data);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
  async getData(_?: any, thunkApi?: any) {
    try {
      const response = await axios.get(`${this.url}collections`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const collectionService = new CollectionService();
