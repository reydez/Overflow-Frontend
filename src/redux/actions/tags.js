import axios from "axios";

export const getTags = () => {
  return async (dispatch) => {
    // console.log(dispatch)
    try {
      let tags = await axios.get(
        "https://henry-overflow-api.herokuapp.com/tags"
      );
      return dispatch({
        type: "GET_TAGS",
        payload: tags.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
