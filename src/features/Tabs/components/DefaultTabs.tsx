import usegetTabs from "../Hooks/usegetTabs";
import {X} from "lucide-react";
import {useDeleteTabs} from "../Hooks/useDeleteTabs.ts";
import {useGetTabByid} from "../../../features/Tabs/Hooks/useGetTabByid.ts";
import {useState} from "react";
import {cn} from "../../../lib/utils.ts";
import {useGetTabValueContext} from "../../../context/getTabValueContext.tsx";
const DefaultTabs = () => {
  const { Tabs } = usegetTabs();
  const {handleDeleteTabs} = useDeleteTabs();
  const {handleGetTabByid} = useGetTabByid();
  const [tabId , setTabId] = useState<number>(0);
  const {tabValueState}= useGetTabValueContext();
    return (
    <>
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: `repeat(${Tabs.length}, 1fr)` }}
      >
        {Array.isArray(Tabs) &&
          Tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => {
                  handleGetTabByid(tab.id);
                  setTabId(tab.id)
              }}
              className={cn("px-2 group hover:bg-[#e2e2e2] transition-all duration-500 py-1 cursor-pointer flex items-center gap-1 text-[14px] rounded-lg w-48 overflow-hidden truncate whitespace-nowrap", tabId === tab.id && "bg-[#e2e2e2]")}
            >
              <h1 className="text-green-500">{tab.method}</h1>
              <p>{tab.id === tabId ? tabValueState :tab.url}</p>
                <X onClick={() => handleDeleteTabs(tab.id)} size={25} className="mx-2 rounded-xl opacity-0 group-hover:opacity-100 hover:bg-[#ddd] p-1"/>
            </div>
          ))}
      </div>
    </>
  );
};

export default DefaultTabs;
