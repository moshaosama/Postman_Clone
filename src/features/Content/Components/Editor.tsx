import { useGetDataContext } from "../../../context/GetDataContext";
import { useOpenSliderContext } from "../../../context/OpenSliderContext";
import { cn } from "../../../lib/utils";
import AceEditor from "react-ace";
const Editor = () => {
  const { isOpenSlider } = useOpenSliderContext();
  const { code, setCode } = useGetDataContext();
  return (
    <>
      <div>
        <AceEditor
          mode="json"
          theme="github"
          name="my_editor"
          onChange={(newValue) => setCode(newValue)}
          fontSize={14}
          width={cn(isOpenSlider ? "100%" : "100%")}
          height="350px"
          value={code}
          setOptions={{
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
      </div>
    </>
  );
};

export default Editor;
