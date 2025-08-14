import { ParentService } from "../ParentService";
import axios from "axios";

class SendRequestService extends ParentService {
  createData(): void {}
  async getData(url?: string, thunkApi?: any) {
    try {
      const response = await axios.get(url as string);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const sendRequestService = new SendRequestService();
