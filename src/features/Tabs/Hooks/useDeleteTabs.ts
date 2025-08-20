import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store/Store.ts";
import {fetchDeleteTab, fetchGetTabs} from "../../../features/Tabs/Actions/TabsActions.ts";

export const useDeleteTabs = () => {
    const dispatch = useDispatch<AppDispatch>();


    const handleDeleteTabs = async (id: number) => {
        await dispatch(fetchDeleteTab(id))
        await dispatch(fetchGetTabs())
    }


    return {handleDeleteTabs}
}