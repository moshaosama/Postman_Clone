import usegetTabs from "../Hooks/usegetTabs";

const DefaultTabs = () => {
  const { Tabs } = usegetTabs();

  return (
    <>
      <div className="flex items-center justify-center">
        {Array.isArray(Tabs) &&
          Tabs.map((tabs) => (
            <div className="px-2 hover:bg-[#e2e2e2]  flex items-center group text-sm gap-2">
              <h1 className="text-green-500">{tabs.method}</h1>
              <p>{tabs.url}</p>
              <hr className="h-6 w-[1px] bg-[#d4d4d4]" />
            </div>
          ))}
      </div>
    </>
  );
};

export default DefaultTabs;
