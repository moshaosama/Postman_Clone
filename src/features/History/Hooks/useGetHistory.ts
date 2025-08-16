import { RootState, AppDispatch } from "@/store/Store";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetHistory } from "../Actions/HistoryActions";

const useGetHistory = () => {
  const { data: History } = useSelector((state: RootState) => state.history);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchGetHistory());
  }, []);

  return { History };
};

export default useGetHistory;
