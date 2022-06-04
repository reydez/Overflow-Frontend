import axios from "axios";
export const createUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3001/users", user);
    dispatch({ type: "CREATE_USER", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
