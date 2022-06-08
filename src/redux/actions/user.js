import axios from "axios";
import { user, URL } from "../action-types/index.js";

export const createUser = (payload) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3001/users", payload);
    dispatch({ type: user.CREATE_USER, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
