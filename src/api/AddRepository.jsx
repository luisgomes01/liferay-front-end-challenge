import Api from "./index";

export const addRepository = () => {
  Api.get("/").then(({ response }) => {});
};
