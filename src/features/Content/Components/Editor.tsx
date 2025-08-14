import { useState } from "react";
import AceEditor from "react-ace";
const Editor = () => {
  const [code, setCode] = useState("");
  return (
    <>
      <AceEditor
        mode="json"
        theme="github"
        name="my_editor"
        onChange={(newValue) => setCode(newValue)}
        fontSize={14}
        width="100%"
        height="350px"
        value={code}
        setOptions={{
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </>
  );
};

export default Editor;
