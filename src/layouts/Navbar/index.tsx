import { Search, Settings, Text } from "lucide-react";
const Navbar = () => {
  return (
    <>
      <div className="p-2 flex justify-between items-center">
        <div className="flex items-center gap-5">
          {/* // Parent */}
          <div>
            <Text size={20} />
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

        <div>
          <Settings size={20} color="#8f8f8f" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
