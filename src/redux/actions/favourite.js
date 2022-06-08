import axios from "axios";
import { favorite, URL } from "../action-types/index.js";


export function getFavorite(idUser) {
  return (dispatch) => {
    axios.get(`${URL}/favorites/${idUser}`)
      .then(response => {dispatch({
        type: favorite.GET_FAVORITE
      })})
  }
};


