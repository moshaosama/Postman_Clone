import { useOpenSliderContext } from "../../../context/OpenSliderContext";
import { Button } from "../../../components/ui/button";
import { Users } from "lucide-react";
import { cn } from "../../../lib/utils";

const HeaderSlider = () => {
  const { isOpenSlider } = useOpenSliderContext();
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className={cn(!isOpenSlider && "px-12 my-1")}>
            <Users size={20} />
          </div>
          {isOpenSlider && (
            <h1 className="text-sm font-semibold hover:text-blue-500 cursor-pointer">
              Team Workspace
            </h1>
          )}
        </div>

        {isOpenSlider && (
          <div>
            <Button
              variant={"outline"}
              className="bg-[#e2e2e2] transition-all duration-300 cursor-pointer"
              size={"sm"}
            >
              New
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderSlider;
