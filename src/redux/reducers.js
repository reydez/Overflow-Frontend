const initialState = {
  questions: [],
  tempQuestions: [],
  question: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
        tempQuestions: action.payload,
      };

    case "GET_QUESTION_DETAILS":
      return {
        ...state,
        question: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
