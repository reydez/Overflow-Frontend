import axios from "axios";

export const getModules = () => {
  return async (dispatch) => {
    try {
      let modules = await axios.get("/modules");
      // console.log(modules.data)
      return dispatch({
        type: "GET_MODULES",
        payload: modules.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
