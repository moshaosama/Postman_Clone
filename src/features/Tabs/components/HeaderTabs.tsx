import { Plus } from "lucide-react";
import DefaultTabs from "./DefaultTabs";

export const HeaderTabs = () => {
  return (
    <>
      <div className="flex items-center  border-b-2 p-2 border-b-[#ececec]">
        <DefaultTabs />
        <div>
          <Plus
            color="gray"
            size={30}
            className="hover:bg-[#d6d6d6] p-1 rounded-lg cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};
