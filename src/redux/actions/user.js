import axios from "axios";
import { user, URL } from "../action-types/index.js";


export function createUser(loginWithAuth0) {
  return (dispatch) => {
    axios.post(`${URL}/users`, loginWithAuth0)
      .then(response => {dispatch({
        type: user.CREATE_USER,
        payload: response.data
      })})
      .catch(error => {
        console.log(error)
      })
  }
};

