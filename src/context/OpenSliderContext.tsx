import { createContext, ReactNode, useContext, useState } from "react";

interface OpenSliderContectData {
  isOpenSlider: boolean;
  handleTriggerOpenSlider: () => void;
}

interface OpenSliderProps {
  children: ReactNode;
}

const OpenSliderContext = createContext<OpenSliderContectData | null>(null);

const OpenSliderProvider = ({ children }: OpenSliderProps) => {
  const [isOpenSlider, setIsOpenSLider] = useState(false);

  const handleTriggerOpenSlider = () => {
    setIsOpenSLider(!isOpenSlider);
  };

  return (
    <OpenSliderContext value={{ isOpenSlider, handleTriggerOpenSlider }}>
      {children}
    </OpenSliderContext>
  );
};

export default OpenSliderProvider;

export const useOpenSliderContext = () => {
  const context = useContext(OpenSliderContext);
  if (!context) {
    throw new Error(
      "useOpenSliderContext must be used within an OpenSliderContext"
    );
  }
  return context;
};
