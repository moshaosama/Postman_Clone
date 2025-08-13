import { useOpenSliderContext } from "../../../context/OpenSliderContext";
import { Search } from "lucide-react";

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
        </div>
      )}
    </>
  );
};

export default Collections;
