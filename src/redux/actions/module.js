import axios from "axios";
import { module, URL } from "../action-types/index.js";

export const getModules = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get("http://localhost:3001/modules");
      // console.log(modules.data)
      return dispatch({
        type: module.GET_MODULES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
