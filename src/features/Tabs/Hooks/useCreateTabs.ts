import { AppDispatch } from "@/store/Store";
import { useDispatch } from "react-redux";
import { fetchCreateTabs, fetchGetTabs } from "../Actions/TabsActions";

const useCreateTabs = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleCreateTab = async () => {
    await dispatch(fetchCreateTabs());
    await dispatch(fetchGetTabs());
  };

  return { handleCreateTab };
};

export default useCreateTabs;
