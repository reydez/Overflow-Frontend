import axios from "axios";
import { tag, URL } from "../action-types/index.js";

export function getTags() {
  return (dispatch) => {
    axios.get(`${URL}/tags`)
      .then(response => {dispatch({
        type: tag.GET_TAGS,
        payload: response.data
      })})
  }
}
