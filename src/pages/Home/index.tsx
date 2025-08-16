import SelectorRequest from "../../features/Content/Components/SelectorRequest";
import FormSend from "../../features/Content/Components/FormSend";
import { HeaderTabs } from "../../features/Tabs/components/HeaderTabs";
import RenderData from "../../features/Content/Components/RenderData";
import Editor from "../../features/Content/Components/Editor";
import HeaderContent from "../../features/Content/Components/HeaderContent";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <HeaderTabs />
        <HeaderContent />
        <FormSend />
        <SelectorRequest />
        <Editor />
        <RenderData />
      </div>
    </>
  );
};

export default Home;
