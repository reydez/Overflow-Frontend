import axios from "axios";
import { tag, URL } from "../action-types/index.js";

export const getTags = () => {
  return async (dispatch) => {
    // console.log(dispatch)
    try {
      let tags = await axios.get("http://localhost:3001/tags");
      return dispatch({
        type: tag.GET_TAGS,
        payload: tags.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
