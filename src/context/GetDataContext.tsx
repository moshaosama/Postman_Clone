import { sendRequestService } from "../api/SendRequest/SendRequestService";
import { createContext, ReactNode, useContext, useState } from "react";
import { useForm } from "react-hook-form";

interface GetDataContextData {
  Data: boolean;
  register: any;
  handleSubmit: any;
  handleSendrequest: (data: any) => void;
}

interface OpenSliderProps {
  children: ReactNode;
}

const GetDataContext = createContext<GetDataContextData | null>(null);

const GetDataProvider = ({ children }: OpenSliderProps) => {
  const [Data, setData] = useState<any>();
  const { register, handleSubmit } = useForm();
  const handleSendrequest = async (data: any) => {
    const result = await sendRequestService.getData(data.url as string);
    setData(result);
  };

  return (
    <GetDataContext value={{ Data, register, handleSubmit, handleSendrequest }}>
      {children}
    </GetDataContext>
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
