// import { useGetDataContext } from "../../../context/GetDataContext";
import { useOpenSliderContext } from "../../../context/OpenSliderContext";
import { cn } from "../../../lib/utils";
import { Save } from "lucide-react";
import { SaveRequestModel } from "./SaveRequestModel";
import { useOpenSaveRequestContext } from "../../../context/SaveRequestContext";

const HeaderContent = () => {
  const { isOpenSlider } = useOpenSliderContext();
  // const { handleSaveHistory, handleSubmit } = useGetDataContext();
  const { isOpenSaveRequest, handleTriggerOpenSaveRequest } =
    useOpenSaveRequestContext();
  return (
    <>
      <div
        className={cn(
          "flex justify-between w-[105pc] items-center",
          isOpenSlider ? "w-[89pc]" : "w-[105pc]"
        )}
      >
        <div className="px-6 my-2 flex items-center gap-5">
          <img
            src="/images-removebg-preview (1).png"
            alt="Http.png"
            className="w-6"
          />

          <div className="text-sm">
            <p>New Collection</p>
          </div>
        </div>

        <div
          onClick={handleTriggerOpenSaveRequest}
          className="flex items-center gap-2 cursor-pointer p-1 rounded-sm hover:bg-[#dadada]"
          id="saveBtn"
        >
          <Save size={20} />
          <p>Save</p>
        </div>
      </div>

      {isOpenSaveRequest && <SaveRequestModel />}
    </>
  );
};

export default HeaderContent;
