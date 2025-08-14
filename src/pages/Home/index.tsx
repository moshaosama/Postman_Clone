import SelectorRequest from "../../features/Content/Components/SelectorRequest";
import FormSend from "../../features/Content/Components/FormSend";
import { HeaderTabs } from "../../features/Tabs/components/HeaderTabs";
import RenderData from "../../features/Content/Components/RenderData";
import Editor from "../../features/Content/Components/Editor";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <HeaderTabs />
        <FormSend />
        <SelectorRequest />
        <Editor />
        <RenderData />
      </div>
    </>
  );
};

export default Home;
