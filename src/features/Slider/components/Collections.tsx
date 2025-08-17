import { useOpenSliderContext } from "../../../context/OpenSliderContext";
import { Search } from "lucide-react";
import HistoryRender from "../../../features/History/Components/HistoryRender";

const Collections = () => {
  const { isOpenSlider } = useOpenSliderContext();

  return (
    <>
      {isOpenSlider && (
        <div className="m-1">
          <form className="relative">
            <Search
              size={16}
              color="#cecece"
              className="absolute left-1 top-[7.5px]"
            />
            <input
              type="text"
              className="w-60 border rounded-lg text-sm py-1 px-6 border-[#cecece]"
              placeholder="Search collections"
            />
          </form>

          <div className="my-4 flex flex-col gap-2">
            <HistoryRender />
          </div>
        </div>
      )}
    </>
  );
};

export default Collections;
