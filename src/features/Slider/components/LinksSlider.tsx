import { cn } from "../../../lib/utils";
import { SliderData } from "../../../constants/SLiderData";
import Collections from "./Collections";

const LinksSlider = () => {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col h-[89vh] rounded-sm border-r-[0.5px] border-r-[#c5c5c5]  w-fit">
          {SliderData?.map((links, index: number) => (
            <div
              key={index}
              className={cn(
                " rounded-xl cursor-pointer p-5",
                links.title === "Collections" && "bg-[#d6d6d6]"
              )}
            >
              <h1 className="text-sm">{links.title}</h1>
            </div>
          ))}
        </div>

        <div>
          <Collections />
        </div>
      </div>
    </>
  );
};

export default LinksSlider;
