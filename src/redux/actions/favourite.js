import axios from "axios";

export const getFavourite = (idOf) => {
    return async (dispatch) => {
      try {
        let modules = await axios.get(`http://localhost:3001/likes/${idOf}`);
        return dispatch({
          type: "GET_FAVOURITE",
          payload: modules.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };


