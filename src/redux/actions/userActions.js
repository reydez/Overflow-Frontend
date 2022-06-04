import axios from "axios";
export const createUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://henry-overflow-api.herokuapp.com/users",
      user
    );
    dispatch({ type: "CREATE_USER", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
