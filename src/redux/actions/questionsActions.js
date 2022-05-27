import axios from "axios";

export const getQuestions = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/posts");
    dispatch({ type: "GET_QUESTIONS", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getQuestionDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/posts/${id}`);
    dispatch({ type: "GET_QUESTION_DETAILS", payload: response.data[0] });
  } catch (error) {
    console.log(error);
  }
};

export const getQuestionsByName = (name) => async (dispatch) => {
  try {
    const questionsByName = await axios.get(
      `http://localhost:3001/posts?title=${name}`
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
