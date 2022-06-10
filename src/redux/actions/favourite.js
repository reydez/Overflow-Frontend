import axios from "axios";
import { favorite, URL } from "../action-types/index.js";


export function getFavorite(idUser) {
  return (dispatch) => {
    axios.get(`${URL}/favorites/${idUser}`)
    
      .then(response => {dispatch({
        type: favorite.GET_FAVOURITE,
        payload: response.data
      })})
      .catch(error => {
        console.log(error)
      })
  }
};

export function setFavorite(idOf, idUser) {
  return (dispatch) => {
    axios.put(`${URL}/favorites/${idOf}/${idUser}`)
      .then(response => {dispatch({
        type: favorite.SET_FAVORITE,
        payload: response.data
      })})
      .catch(error => {
        console.log(error)
      })
  }
};

