import { useOpenSliderContext } from "../../../context/OpenSliderContext";
import { useGetDataContext } from "../../../context/GetDataContext";
import { cn } from "../../../lib/utils";
import NotFound from "../../../components/shared/NotFound";

const RenderData = () => {
  const { Data, Status } = useGetDataContext();
  const { isOpenSlider } = useOpenSliderContext();
  return (
    <>
      <div
        className={cn(
          "mt-2 truncate whitespace-pre-wrap break-words",
          isOpenSlider ? "w-[92pc]" : "w-[109.5pc]"
        )}
      >
        <pre className=" text-sm p-4 rounded truncate whitespace-pre-wrap break-words overflow-y-scroll h-72 border border-gray-400">
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
            ) : Status === "404 Not Found" ? (
              <pre>Post no</pre>
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
            <NotFound />
          )}
        </pre>
      </div>
    </>
  );
};

export default RenderData;
