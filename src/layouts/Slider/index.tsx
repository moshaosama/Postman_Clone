import LinksSlider from "../../features/Slider/components/LinksSlider";
import HeaderSlider from "../../features/Slider/components/HeaderSlider";
import { cn } from "../../lib/utils";
import { useOpenSliderContext } from "../../context/OpenSliderContext";
export const Slider = () => {
  const { isOpenSlider } = useOpenSliderContext();
  return (
    <>
      <div
        className={cn(
          "bg-[#eeeeee] p-2 h-[94vh] border-r-[0.5px] transition-all duration-500 border-r-[#c5c5c5]",
          isOpenSlider ? "w-96" : "w-[9.4pc]"
        )}
      >
        <HeaderSlider />
        <LinksSlider />
      </div>
    </>
  );
};
