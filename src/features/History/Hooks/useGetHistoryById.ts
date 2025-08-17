import { AppDispatch, RootState } from "@/store/Store";

import { useDispatch, useSelector } from "react-redux";
import { fetchGetHistoryById } from "../Actions/HistoryActions";
import { useEffect } from "react";

const useGetHistoryById = () => {
  const { data: HistoryById } = useSelector(
    (state: RootState) => state.historyById
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (HistoryById) {
    }
  }, [HistoryById]);

  const handleGetHistoryById = async (id: number) => {
    await dispatch(fetchGetHistoryById(id)).unwrap();
  };

  return { HistoryById, handleGetHistoryById };
};

export default useGetHistoryById;
