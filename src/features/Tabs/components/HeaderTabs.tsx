import { Plus } from "lucide-react";
import DefaultTabs from "./DefaultTabs";
import useCreateTabs from "../Hooks/useCreateTabs";

export const HeaderTabs = () => {
  const { handleCreateTab } = useCreateTabs();
  return (
    <>
      <div className="flex items-center  border-b-2 p-2 border-b-[#ececec] ">
        <DefaultTabs />
        <div>
          <Plus
            onClick={handleCreateTab}
            color="gray"
            size={30}
            className="hover:bg-[#d6d6d6] p-1 rounded-lg cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};
