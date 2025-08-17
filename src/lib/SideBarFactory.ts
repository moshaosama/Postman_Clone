import { useOpenSliderContext } from "../context/OpenSliderContext";
import useGetHistory from "../features/History/Hooks/useGetHistory";

const SidebarFactory = () => {
  const { isOpenSlider } = useOpenSliderContext();
  const { History } = useGetHistory();

  if (isOpenSlider || History) {
    return true;
  }
};

export default SidebarFactory;
