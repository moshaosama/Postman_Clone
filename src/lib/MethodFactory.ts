export const MethodFactory = (method: string) => {
  const cleanMethod = method.trim().toUpperCase();

  switch (cleanMethod) {
    case "GET":
      return "text-green-500";
    case "POST":
      return "text-orange-500";
    case "PUT":
      return "text-blue-500";
    case "DELETE":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};
