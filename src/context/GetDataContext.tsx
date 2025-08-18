import { AppDispatch } from "../store/Store";
import { sendRequestService } from "../api/SendRequest/SendRequestService";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchCreateHistory } from "../features/History/Actions/HistoryActions";
import useGetHistoryById from "../features/History/Hooks/useGetHistoryById";

interface GetDataContextData {
  Data: boolean;
  Status: string;
  register: any;
  handleSubmit: any;
  handleSendrequest: (data: any) => void;
  handleSaveHistory: (data: any) => void;
  code: any;
  setCode: any;
  setValue: any;
  getValues: any;
}

interface OpenSliderProps {
  children: ReactNode;
}

const GetDataContext = createContext<GetDataContextData | null>(null);

const GetDataProvider = ({ children }: OpenSliderProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { HistoryById } = useGetHistoryById();
  const [Data, setData] = useState<{
    data: any;
    statusbar: any;
  }>();
  const [code, setCode] = useState("");
  const { register, handleSubmit, setValue, getValues } = useForm();

  useEffect(() => {
    if (HistoryById) {
      setValue("method", HistoryById.method);
      setValue("url", HistoryById.url);
    }
  }, [HistoryById, setValue]);

  const handleSendrequest = async (data: any) => {
    const result = await sendRequestService.getData({
      ...data,
      body: JSON.parse(code || "{}"),
    });
    setData(result);
  };
  const handleSaveHistory = async (data: any) => {
    dispatch(fetchCreateHistory(data));
  };

  return (
    <GetDataContext.Provider
      value={{
        Data: Data?.data,
        Status: Data?.statusbar as string,
        register,
        handleSubmit,
        handleSendrequest,
        handleSaveHistory,
        code,
        setCode,
        setValue,
        getValues,
      }}
    >
      {children}
    </GetDataContext.Provider>
  );
};

export default GetDataProvider;

export const useGetDataContext = () => {
  const context = useContext(GetDataContext);
  if (!context) {
    throw new Error("useGetDataContext must be used within an GetDataContext");
  }
  return context;
};
