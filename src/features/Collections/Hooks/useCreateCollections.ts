import { AppDispatch } from "../../../store/Store";
import { useDispatch } from "react-redux";
import {
  fetchCreateCollection,
  fetchGetCollections,
} from "../Actions/CollectionsActions";

const useCreateCollections = () => {
  const dispatch = useDispatch<AppDispatch>();
  //   const { data } = useSelector((state: RootState) => state.collections);

  const handleCreateCollections = () => {
    dispatch(fetchCreateCollection());
    dispatch(fetchGetCollections());
  };

  return { handleCreateCollections };
};

export default useCreateCollections;
