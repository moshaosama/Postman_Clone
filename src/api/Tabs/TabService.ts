import axios, {AxiosResponse} from "axios";
import { ParentService } from "../ParentService";

export class TabService extends ParentService {
  async createData(_?: unknown, thunkApi?: any) {
    try {
      const response: AxiosResponse = await axios.post(`${this.url}tabs`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
  async getData(_?: unknown, thunkApi?: any) {
    try {
      const response: AxiosResponse = await axios.get(`${this.url}tabs`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async DeleteData(id:number, thunkApi?: any) {
      try {
          const response: AxiosResponse =  await axios.delete(`http://localhost:3000/api/tabs/${id}`);
          return  response.data;
      }
      catch (err) {
          return thunkApi.rejectWithValue(err);
      }
  }
  
}

export const tabsService = new TabService();
