import FormSend from "../../features/Content/Components/FormSend";
import { HeaderTabs } from "../../features/Tabs/components/HeaderTabs";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <HeaderTabs />
        <FormSend />
      </div>
    </>
  );
};

export default Home;
