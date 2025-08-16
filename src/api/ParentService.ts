export abstract class ParentService {
  url = "http://localhost:3000/api/";
  abstract getData(_?: any, thunkApi?: any): void;
  abstract createData(data?: any, thunkApi?: any): void;
}
