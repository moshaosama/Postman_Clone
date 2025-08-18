import { useOpenSliderContext } from "../../../context/OpenSliderContext";
import { Plus, Search } from "lucide-react";
import HistoryRender from "../../../features/History/Components/HistoryRender";
import useCreateCollections from "../../../features/Collections/Hooks/useCreateCollections";
import CollectionRender from "../../../features/Collections/Components/CollectionRender";

const Collections = () => {
  const { isOpenSlider } = useOpenSliderContext();
  const { handleCreateCollections } = useCreateCollections();

  return (
    <>
      {isOpenSlider && (
        <>
          <div className="m-1 my-2 flex items-center gap-2">
            <Plus
              size={20}
              color="gray"
              className="hover:bg-[#c5c5c5] cursor-pointer transition-all duration-100 rounded-sm "
              onClick={handleCreateCollections}
            />
            <form className="relative">
              <Search
                size={16}
                color="#cecece"
                className="absolute left-1 top-[7.5px]"
              />
              <input
                type="text"
                className="w-52 border rounded-lg text-sm py-1 px-6 border-[#cecece]"
                placeholder="Search collections"
              />
            </form>
          </div>
          <div>
            <CollectionRender />
          </div>
        </>
      )}
    </>
  );
};

export default Collections;
