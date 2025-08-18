import { ChevronRight } from "lucide-react";
import useGetCollections from "../Hooks/useGetCollections";
import useGetHistory from "../../../features/History/Hooks/useGetHistory";
import HistoryRender from "../../../features/History/Components/HistoryRender";
import { useState } from "react";

const CollectionRender = () => {
  const { Collections } = useGetCollections();
  const { handleGetHistory } = useGetHistory();
  const [isId, setIsID] = useState(0);
  return (
    <>
      <div>
        {Array?.isArray(Collections) &&
          Collections?.map((collection) => (
            <>
              <div
                key={collection.id}
                className="flex items-center gap-4 m-2 hover:bg-[#d1d1d1] cursor-pointer transition-all duration-200 w-56 rounded-md p-1"
                onClick={() => {
                  setIsID(collection.id);
                  handleGetHistory(collection.id);
                }}
              >
                <i>
                  <ChevronRight size={15} color="gray" />
                </i>
                <div>
                  <h1 className="text-sm">{collection.title}</h1>
                </div>
              </div>
              {isId === collection.id && (
                <div>
                  <HistoryRender />
                </div>
              )}
            </>
          ))}
      </div>
    </>
  );
};

export default CollectionRender;
