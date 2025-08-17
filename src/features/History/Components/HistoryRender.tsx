import { MethodFactory } from "../../../lib/MethodFactory";
import { cn } from "../../../lib/utils";
import useGetHistory from "../Hooks/useGetHistory";
import useGetHistoryById from "../Hooks/useGetHistoryById";

const HistoryRender = () => {
  const { History } = useGetHistory();
  const { handleGetHistoryById } = useGetHistoryById();
  return (
    <>
      {Array.isArray(History) &&
        History.map((history) => (
          <div
            key={history.id}
            className="text-[15px] flex items-center gap-1 p-1 w-60 cursor-pointer hover:bg-[#cccccc] rounded-lg"
            onClick={() => handleGetHistoryById(history.id as number)}
          >
            <h1 className={cn(MethodFactory(history.method), "font-semibold")}>
              {history.method}
            </h1>
            <p className="truncate w-52">{history.url}</p>
          </div>
        ))}
    </>
  );
};

export default HistoryRender;
