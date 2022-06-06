import axios from "axios";

export const addComment =
  ({ message, idPost, idUser }) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/comments/${idPost}/${idUser}`,
        { message }
      );

      dispatch({ type: "ADD_COMMENT", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
