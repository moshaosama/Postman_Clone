import { sendRequestService } from "../../../api/SendRequest/SendRequestService";
import { useState } from "react";
import { useForm } from "react-hook-form";

const useSendRequest = () => {
  const [Data, setData] = useState<any>();
  const { register, handleSubmit } = useForm();
  const handleSendrequest = async (data: any) => {
    const result = await sendRequestService.getData(data.url as string);
    setData(result);
  };

  return { handleSendrequest, Data, register, handleSubmit };
};

export default useSendRequest;
