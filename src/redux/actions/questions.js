import axios from "axios";
import { question, URL } from "../action-types/index.js";

export const getQuestions = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/posts");
    dispatch({ type: question.GET_QUESTIONS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getQuestionDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/posts/${id}`);
    dispatch({
      type: question.GET_QUESTION_DETAILS,
      payload: response.data[0],
    });
  } catch (error) {
    console.log(error);
  }
};

export const getQuestionsByName = (name) => async (dispatch) => {
  try {
    const questionsByName = await axios.get(
      `http://localhost:3001/posts?title=${name}`
    );

    dispatch({
      type: question.GET_QUESTIONS_BY_NAME,
      payload: questionsByName.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const orderByDate = () => {
  return {
    type: question.ORDER_BY_DATE,
  };
};

export const postQuestion = (payload, id) => {
  try {
    return async function (dispatch) {
      let newPost = await axios.post(
        `http://localhost:3001/posts/${id}`,
        payload,
        {
          headers: {
            authorization: id,
          },
        }
      );

      return newPost;
    };
  } catch (error) {
    console.log("no es posible");
  }
};

export const orderByModule = (module) => {
  return {
    type: question.ORDER_BY_MODULE,
    payload: module,
  };
};

export const orderByTag = (tag) => {
  return {
    type: question.ORDER_BY_TAG,
    payload: tag,
  };
};
