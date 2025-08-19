import { AppDispatch, RootState } from "@/store/Store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetTabs } from "../Actions/TabsActions";

const usegetTabs = () => {
  const { data: Tabs } = useSelector((state: RootState) => state.tabs);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGetTabs());
  }, []);

  return { Tabs };
};

export default usegetTabs;
