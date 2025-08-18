import { createContext, ReactNode, useContext, useState } from "react";

interface OpenSaveRequestContectData {
  isOpenSaveRequest: boolean;
  handleTriggerOpenSaveRequest: () => void;
}

interface OpenSaveRequestProps {
  children: ReactNode;
}

const OpenSaveRequestContext = createContext<OpenSaveRequestContectData | null>(
  null
);

const OpenSaveRequestProvider = ({ children }: OpenSaveRequestProps) => {
  const [isOpenSaveRequest, setIsOpenSaveRequest] = useState(false);

  const handleTriggerOpenSaveRequest = () => {
    setIsOpenSaveRequest(!isOpenSaveRequest);
  };

  return (
    <OpenSaveRequestContext
      value={{ isOpenSaveRequest, handleTriggerOpenSaveRequest }}
    >
      {children}
    </OpenSaveRequestContext>
  );
};

export default OpenSaveRequestProvider;

export const useOpenSaveRequestContext = () => {
  const context = useContext(OpenSaveRequestContext);
  if (!context) {
    throw new Error(
      "useOpenSaveRequestContext must be used within an OpenSaveRequestContext"
    );
  }
  return context;
};
