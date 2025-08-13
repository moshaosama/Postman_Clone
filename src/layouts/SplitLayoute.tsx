import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { Slider } from "./Slider";

const SplitLayoute = () => {
  return (
    <>
      <Navbar />

      <div className="flex ">
        <Slider />
        <Outlet />
      </div>
    </>
  );
};

export default SplitLayoute;
