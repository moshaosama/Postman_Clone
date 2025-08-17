import { useOpenSliderContext } from "../../context/OpenSliderContext";
import { Button } from "../../components/ui/button";
import { Search, Settings, Text } from "lucide-react";
const Navbar = () => {
  const { handleTriggerOpenSlider } = useOpenSliderContext();
  return (
    <>
      <div className="p-2 flex justify-between items-center bg-[#eeeeee] border-b-[0.5px] border-[#c5c5c5]">
        <div className="flex items-center gap-5">
          {/* // Parent */}
          <div onClick={handleTriggerOpenSlider}>
            <Text
              size={30}
              id="TestIcon"
              className="hover:bg-[#e7e7e7] p-1 rounded-sm cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-3">
            <img
              src="public\images-removebg-preview.png"
              alt="imageBrand.png"
              className="w-7 inline"
            />
            <p className="inline font-bold">MoshAPI</p>
          </div>
        </div>
        {/* //////////////////// */}

        <form className="relative">
          <Search
            className="absolute left-2 top-[9px]"
            size={18}
            color="#8f8f8f"
          />
          <input
            type="text"
            className="border-[#cacaca] border-2 rounded-lg w-60 px-8 text-sm py-1"
            placeholder="search MoshAPI"
          />
        </form>

        {/* //////////////////////////// */}

        <div className="flex items-center gap-3">
          <Settings
            size={30}
            color="#8f8f8f"
            className="hover:bg-[#e9e9e9] p-1 rounded-sm cursor-pointer"
          />

          <div className="flex gap-5">
            <Button variant={"outline"} className="cursor-pointer">
              Sign in
            </Button>
            <Button
              variant={"destructive"}
              className="bg-orange-500 hover:bg-orange-800 transition-all duration-500 cursor-pointer"
            >
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
