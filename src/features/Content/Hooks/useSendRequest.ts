import { sendRequestService } from "../../../api/SendRequest/SendRequestService";
import { useState } from "react";

const useSendRequest = () => {
  const [Data, setData] = useState<any>();
  const handleSendrequest = async () => {
    const result = await sendRequestService.getData(
      "https://fakestoreapi.com/products"
    );
    setData(result);
  };

  return { handleSendrequest, Data };
};

export default useSendRequest;
