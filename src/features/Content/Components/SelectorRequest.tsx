import {
  SelectorInputRequest,
  SelectorRequestData,
} from "../../../constants/SelectorRequestData";

const SelectorRequest = () => {
  return (
    <>
      <div className="px-8 flex items-center gap-7">
        {SelectorRequestData?.map(({ select }, index: number) => (
          <h1 className="text-[13px] cursor-pointer" key={index}>
            {select}
          </h1>
        ))}
      </div>

      <div className="flex items-center gap-5 px-8 my-4">
        {SelectorInputRequest?.map(({ inputTitle }, index: number) => (
          <div key={index} className="flex gap-1 items-center">
            <input
              name="selectorGroup"
              id={`input-${index}`}
              type="radio"
              value={inputTitle}
            />
            <label htmlFor={`input-${index}`} className="text-sm">
              {inputTitle}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectorRequest;
