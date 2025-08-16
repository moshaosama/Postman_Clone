import useGetHistory from "../../../features/History/Hooks/useGetHistory";
import { useOpenSliderContext } from "../../../context/OpenSliderContext";
import { Search } from "lucide-react";
import { cn } from "../../../lib/utils";
import { MethodFactory } from "../../../lib/MethodFactory";

const Collections = () => {
  const { isOpenSlider } = useOpenSliderContext();
  const { History } = useGetHistory();
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
            {Array.isArray(History) &&
              History.map((history) => (
                <div
                  key={history.id}
                  className="text-[15px] flex items-center gap-1 p-1 cursor-pointer hover:bg-[#cccccc] rounded-lg"
                >
                  <h1
                    className={cn(
                      MethodFactory(history.method),
                      "font-semibold"
                    )}
                  >
                    {history.method}
                  </h1>
                  <p className="truncate w-52">{history.url}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Collections;
