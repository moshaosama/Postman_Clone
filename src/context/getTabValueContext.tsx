import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {useGetTabByid} from "../features/Tabs/Hooks/useGetTabByid.ts";

interface getTabValueData {
    tabValueState: string;
    setTabValueState: unknown;
}

interface getTabValueProps {
    children: ReactNode;
}

const getTabValueContext = createContext<getTabValueData | null>(null);

const GetTabValueProvider = ({ children }: getTabValueProps) => {

    const {tabByid} = useGetTabByid();
    const [tabValueState, setTabValueState] = useState("")

    useEffect(() => {
        if(tabByid){
            setTabValueState(tabByid?.[0]?.url)
        }
    }, [tabByid]);

    return (
        <getTabValueContext.Provider value={{ tabValueState, setTabValueState }}>
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
