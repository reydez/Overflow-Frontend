import axios from "axios";
import { like, URL } from "../action-types/index.js";

export function getLikes(idOf) {
    return (dispatch) => {
        axios.get(`${URL}/likes/${idOf}`)
            .then(response => {dispatch({
                type: like.GET_LIKES,
                payload: response.data
            })})
            .catch(error => {
                console.log(error)
            })
    }
};

export function setLikesByUser(idOf, idUser) {
    return (dispatch) => {
        axios.put(`${URL}/likes/${idOf}/${idUser}`, null)
            .then(response => {dispatch({
                type: like.SET_LIKES_BY_USER,
                payload: response.data
            })})
            .catch(error => {
                console.log(error)
            })
    }
};
  