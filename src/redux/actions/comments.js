import axios from "axios";
import { comment, URL } from "../action-types/index.js";


export function addComment(message, idPost, idUser) {
  return (dispatch) => {
    axios.post(`${URL}/comments/${idPost}/${idUser}`, message, {
      headers: {
        authorization: idUser
      } 
    })
      .then(response => {dispatch({
        type: comment.ADD_COMMENT,
        payload: response.data
      })})
      .catch(error => {
        console.log(error)
      })
  }
};

export function updateComment(messageUpdate, idComment, idUser) {
  return (dispatch) => {
    axios.put(`${URL}/comments/${idComment}/${idUser}`, messageUpdate)
      .then(response => {dispatch({
        type: comment.UPDATE_COMMENT,
        payload: response.data
      })})
      .catch(error => {
        console.log(error)
      })
  }
};

export function deleteComment(idComment, idUser) {
  return (dispatch) => {
    axios.delete(`${URL}/comments/${idComment}/${idUser}`)
    .then(response => {dispatch({
      type: comment.DELETE_COMMENT,
      payload: idComment
      // payload: response.data
    })
    console.log(idComment)
    })
    .catch(error => {
      console.log(error)
    })
  }
};

export function orderByDate() {
  return {
    type: comment.ORDER_BY_DATE
  }
};