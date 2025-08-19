import usegetTabs from "../Hooks/usegetTabs";

const DefaultTabs = () => {
  const { Tabs } = usegetTabs();

  return (
    <>
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${Tabs.length}, 1fr)` }}
      >
        {Array.isArray(Tabs) &&
          Tabs.map((tab) => (
            <div
              key={tab.id}
              className="px-2 hover:bg-[#e2e2e2] py-1 cursor-pointer flex items-center gap-2 text-sm"
            >
              <h1 className="text-green-500">{tab.method}</h1>
              <p>{tab.url}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default DefaultTabs;
