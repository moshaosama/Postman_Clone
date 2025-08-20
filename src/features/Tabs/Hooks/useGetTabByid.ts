import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store/Store.ts";
import {fetchGetTabByid} from "../../../features/Tabs/Actions/TabsActions.ts";

export const useGetTabByid = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {data: tabByid} = useSelector((state: RootState) => state.tabsByid);

    const handleGetTabByid = (id: number) => {
        dispatch(fetchGetTabByid(id))
    }
    return {tabByid, handleGetTabByid}
}