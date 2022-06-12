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
        console.log(error);
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

export function orderByModule(module) {
  return {
    type: question.ORDER_BY_MODULE,
    payload: module,
  };
}

export function orderByTag(tag) {
  return {
    type: question.ORDER_BY_TAG,
    payload: tag,
  };
}

export function orderByDate() {
  return {
    type: question.ORDER_BY_DATE,
  };
}
