import { FolderOpenDot } from "lucide-react";
import useGetCollections from "../../../features/Collections/Hooks/useGetCollections";
import useGetHistoryById from "../../../features/History/Hooks/useGetHistoryById";
import { Button } from "../../../components/ui/button";
import { useOpenSaveRequestContext } from "../../../context/SaveRequestContext";
import { useState } from "react";
import { useGetDataContext } from "../../../context/GetDataContext";

export const SaveRequestModel = () => {
  const { HistoryById } = useGetHistoryById();
  const { Collections } = useGetCollections();
  const { handleTriggerOpenSaveRequest } = useOpenSaveRequestContext();
  const [collection_id, setCollectionId] = useState<number>(0);
  const { handleSubmit, handleSaveHistory, register, setValue } =
    useGetDataContext();

  const onSave = () => {
    handleSubmit((data: any) => {
      handleSaveHistory({ ...data });
    })();
  };

  return (
    <>
      <div className="bg-black/60 z-50 absolute top-0 left-0 w-full h-[100vh] flex justify-center items-center">
        <div className="bg-white h-[48pc] w-[35pc] text-[#505050] p-2 rounded-sm">
          <div>
            <h1 className="text-md font-bold">Save Request</h1>
          </div>

          <form action="" className="my-4 flex flex-col gap-2">
            <label htmlFor="" className="font-bold text-sm">
              Request name
            </label>
            <input
              type="text"
              className="border-2 border-gray-200 rounded-sm bg-gray-100 py-1"
              defaultValue={HistoryById?.url}
            />
          </form>

          <div>
            <h1 className="font-bold text-sm">Save to</h1>

            <div className="bg-[#e7e7e7] h-[34pc]  p-3 rounded-lg">
              {Array.isArray(Collections) &&
                Collections?.map((collections) => (
                  <div
                    key={collections.id}
                    className="flex items-center gap-4 my-2 p-2 rounded-lg cursor-pointer hover:bg-[#cccccc]"
                    onClick={() => {
                      setCollectionId(collections.id);
                      setValue("collection_id", collections.id);
                    }}
                  >
                    <FolderOpenDot size={15} />
                    <h1>{collections.title}</h1>
                  </div>
                ))}
            </div>

            <input
              type="hidden"
              value={collection_id}
              {...register("collection_id", { required: true })}
            />
          </div>

          <div className="flex justify-end gap-4 my-2">
            <Button
              variant={"destructive"}
              className="bg-orange-400 hover:bg-orange-500 cursor-pointer  transition-all duration-200"
              onClick={onSave}
            >
              Save
            </Button>

            <Button
              variant={"destructive"}
              className="bg-gray-400 hover:bg-gray-500 cursor-pointer transition-all duration-200"
              onClick={handleTriggerOpenSaveRequest}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
