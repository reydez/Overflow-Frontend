import axios from "axios";

export const getQuestions = () => async (dispatch) => {
  try {
    const response = await axios.get("/posts");
    dispatch({ type: "GET_QUESTIONS", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getQuestionDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/posts/${id}`);
    dispatch({ type: "GET_QUESTION_DETAILS", payload: response.data[0] });
  } catch (error) {
    console.log(error);
  }
};

export const getQuestionsByName = (name) => async (dispatch) => {
  try {
    const questionsByName = await axios.get(
      `/posts?title=${name}`
    );

    dispatch({ type: "GET_QUESTIONS_BY_NAME", payload: questionsByName.data });
  } catch (error) {
    console.log(error);
  }
};

export const orderByDate = () => {
  return {
    type: "ORDER_BY_DATE",
  };
};

export const postQuestion = (payload, id) => {
  return async function (dispatch) {
    let newPost = await axios.post(
      `/posts/${id}`,
      payload
    );

    return newPost;
  };
};

export const orderByModule = (module) => {
  return {
    type: "ORDER_BY_MODULE",
    payload: module,
  };
};

export const orderByTag = (tag) => {
  return {
    type: "ORDER_BY_TAG",
    payload: tag,
  };
};
