import { ParentService } from "../ParentService";
import axios from "axios";

class SendRequestService extends ParentService {
  createData(): void {}
  async getData(
    data: { url: string; method: string; body?: any },
    thunkApi?: any
  ) {
    try {
      const response = await axios({
        method: data.method,
        url: data.url,
        data: data.body,
      });
      return {
        data: response.data,
        statusbar: response.status,
      };
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const sendRequestService = new SendRequestService();
