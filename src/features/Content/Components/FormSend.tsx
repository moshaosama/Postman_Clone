import useSendRequest from "../Hooks/useSendRequest";
import RenderData from "./RenderData";

const FormSend = () => {
  const { handleSendrequest, register, handleSubmit } = useSendRequest();

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSendrequest)}
        className="py-3 px-8 flex"
      >
        <select className="border-t-[#cfcfcf] focus:outline-0 w-30 border-l-[#cfcfcf] border-b-[#cfcfcf]  border-t-2 border-l-2 border-b-2 rounded-l-sm  rounded-tl-sm rounded-bl-sm">
          <option
            className="text-green-500 font-semibold"
            value="Get"
            defaultChecked
          >
            Get
          </option>
          <option className="text-orange-500 font-semibold" value="Post">
            Post
          </option>
          <option className="text-blue-500 font-semibold" value="Put">
            Put
          </option>
          <option className="text-purple-500 font-semibold" value="Delete">
            Patch
          </option>
          <option className="text-red-500 font-semibold" value="Delete">
            Delete
          </option>
          <option className="text-pink-500 font-semibold" value="Delete">
            Options
          </option>
        </select>
        <input
          type="text"
          {...register("url", { required: true })}
          className="border-r-[#cfcfcf] focus:outline-0 border-t-[#cfcfcf] border-b-[#cfcfcf] border-b-2 border-t-2 border-r-2 w-full p-2 rounded-r-sm rounded-tr-sm rounded-br-sm"
        />

        <p>
          <button className="bg-blue-500 text-white font-bold w-32 h-10 mx-2 rounded-sm hover:bg-blue-600 transition-all duration-300 cursor-pointer">
            Send
          </button>
        </p>
      </form>
      <RenderData />
    </>
  );
};

export default FormSend;
