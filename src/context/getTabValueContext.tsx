import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {useGetTabByid} from "../features/Tabs/Hooks/useGetTabByid.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store/Store.ts";
import {fetchGetTabs, fetchUpdateTabByid} from "../features/Tabs/Actions/TabsActions.ts";

interface getTabValueData {
    tabValueState: string;
    setTabValueState: unknown;
    handleUpdateTab: () => void
}

interface getTabValueProps {
    children: ReactNode;
}

const getTabValueContext = createContext<getTabValueData | null>(null);

const GetTabValueProvider = ({ children }: getTabValueProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const {tabByid} = useGetTabByid();
    const [tabValueState, setTabValueState] = useState("")

    useEffect(() => {
        if(tabByid){
            setTabValueState(tabByid?.[0]?.url)
        }
    }, [tabByid]);

    const handleUpdateTab = async () => {
        if (!tabByid?.[0]?.id) return;

        await dispatch(
            fetchUpdateTabByid({
                id: tabByid[0].id,
                updateTabDTO: {
                    method: "GET",
                    url: tabValueState,
                },
            })
        );
        await dispatch(fetchGetTabs())
    };


    return (
        <getTabValueContext.Provider value={{ tabValueState, setTabValueState, handleUpdateTab }}>
            {children}
        </getTabValueContext.Provider>
    );
};

export default GetTabValueProvider;

export const useGetTabValueContext = () => {
    const context = useContext(getTabValueContext);
    if (!context) {
        throw new Error(
            "useOpenSliderContext must be used within an OpenSliderContext"
        );
    }
    return context;
};
