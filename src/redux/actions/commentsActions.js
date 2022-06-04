import axios from "axios";

export const addComment =
  ({ message, idPost, idUser }) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        `https://henry-overflow-api.herokuapp.com/comments/${idPost}/${idUser}`,
        { message }
      );

      dispatch({ type: "ADD_COMMENT", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
