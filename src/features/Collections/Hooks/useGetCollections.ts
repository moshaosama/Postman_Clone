import { AppDispatch, RootState } from "../../../store/Store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetCollections } from "../Actions/CollectionsActions";

const useGetCollections = () => {
  const { data: Collections } = useSelector(
    (state: RootState) => state.collections
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGetCollections());
  }, []);

  return { Collections };
};

export default useGetCollections;
