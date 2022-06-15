import axios from "axios";
import { question, URL } from "../action-types/index.js";

export function getQuestions() {
  return (dispatch) => {
    axios
      .get(`${URL}/posts`)
      .then((response) => {
        const copyTempQuestionsTags = response.data
          .map((question) => {
            return {
              ...question,
              tags: question.tags.map((tag) => tag.name.toUpperCase()),
            };
          })
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );

        dispatch({
          type: question.GET_QUESTIONS,
          payload: copyTempQuestionsTags,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getQuestionDetails(idPost) {
  return (dispatch) => {
    axios
      .get(`${URL}/posts/${idPost}`)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: question.GET_QUESTION_DETAILS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getQuestionsByName(name) {
  return (dispatch) => {
    axios
      .get(`${URL}/posts?title=${name}`)
      .then((response) => {
        dispatch({
          type: question.GET_QUESTIONS_BY_NAME,
          payload: response.data,
        });
      })
      .catch((error) => {
        alert("No existe esa pregunta!");
      });
  };
}

export function postQuestion(form, idUser) {
  return (dispatch) => {
    axios
      .post(`${URL}/posts/${idUser}`, form, {
        headers: {
          authorization: idUser,
        },
      })
      .then((response) => {
        dispatch({
          type: question.CREATE_QUESTION,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function deleteQuestion(idPost, idUser) {
  return (dispatch) => {
    axios
      .delete(`${URL}/posts/${idPost}/${idUser}`)
      .then((response) => {
        dispatch({
          type: question.DELETE_QUESTION,
          payload: idPost,
        });
        console.log(idPost);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function filterByModule(module) {
  return {
    type: question.FILTER_BY_MODULE,
    payload: module,
  };
}

export function filterByTag(tag) {
  return {
    type: question.FILTER_BY_TAG,
    payload: tag,
  };
}

export function filterByDate() {
  return {
    type: question.FILTER_BY_DATE,
  };
}

export function filterByResolved() {
  return {
    type: question.FILTER_BY_RESOLVED
  };
}

export function orderByComments() {
  return {
    type: question.ORDER_BY_COMMENTS,
  };
}

export function orderByLikes() {
  return {
    type: question.ORDER_BY_LIKES
  };
}

