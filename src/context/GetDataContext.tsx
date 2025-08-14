import { sendRequestService } from "../api/SendRequest/SendRequestService";
import { createContext, ReactNode, useContext, useState } from "react";
import { useForm } from "react-hook-form";

interface GetDataContextData {
  Data: boolean;
  Status: string;
  register: any;
  handleSubmit: any;
  handleSendrequest: (data: any) => void;
  code: any;
  setCode: any;
}

interface OpenSliderProps {
  children: ReactNode;
}

const GetDataContext = createContext<GetDataContextData | null>(null);

const GetDataProvider = ({ children }: OpenSliderProps) => {
  const [Data, setData] = useState<{
    data: any;
    statusbar: any;
  }>();
  const [code, setCode] = useState("");
  const { register, handleSubmit } = useForm();
  const handleSendrequest = async (data: any) => {
    const result = await sendRequestService.getData({
      ...data,
      body: JSON.parse(code || "{}"),
    });

    setData(result);
  };

  return (
    <GetDataContext
      value={{
        Data: Data?.data,
        Status: Data?.statusbar as string,
        register,
        handleSubmit,
        handleSendrequest,
        code,
        setCode,
      }}
    >
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
