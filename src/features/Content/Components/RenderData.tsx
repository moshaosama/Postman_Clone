import useSendRequest from "../Hooks/useSendRequest";

const RenderData = () => {
  const { Data } = useSendRequest(); // Context Or Redux
  return (
    <>
      <div className="mt-4 w-[105pc] truncate whitespace-pre-wrap break-words">
        <pre className=" text-sm p-4 rounded truncate whitespace-pre-wrap break-words">
          {Data ? (
            Array.isArray(Data) ? (
              Data.map((item: any, index: number) => {
                let jsonStr = JSON.stringify(item, null, 2);

                jsonStr = jsonStr.replace(
                  /"(\w+)"\s*:/g,
                  '<span style="color:#8d3737;">"$1"</span>:'
                );

                return (
                  <pre
                    key={index}
                    dangerouslySetInnerHTML={{ __html: jsonStr }}
                  ></pre>
                );
              })
            ) : (
              <pre
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(Data, null, 2).replace(
                    /"(\w+)"\s*:/g,
                    '<span style="color:#8d3737;">"$1"</span>:'
                  ),
                }}
              ></pre>
            )
          ) : (
            "Data is notfound"
          )}
        </pre>
      </div>
    </>
  );
};

export default RenderData;
