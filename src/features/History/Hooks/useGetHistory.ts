import { RootState, AppDispatch } from "@/store/Store";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetHistory } from "../Actions/HistoryActions";

const useGetHistory = () => {
  const { data: History } = useSelector((state: RootState) => state.history);
  const dispatch = useDispatch<AppDispatch>();
  const handleGetHistory = (collection_id: number) => {
    dispatch(fetchGetHistory(collection_id));
  };
  return { History, handleGetHistory };
};

export default useGetHistory;
