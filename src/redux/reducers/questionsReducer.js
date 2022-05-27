const initialState = {
  questions: [],
  tempQuestions: [],
  question: {},
};

const questionsReducer = (state = initialState, action) => {
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

    case "GET_QUESTIONS_BY_NAME":
      return {
        ...state,
        questions: action.payload,
      };

    case "ORDER_BY_DATE":
      const sortByDate = state.questions.slice();

      sortByDate.sort((a, b) => {
        const date1 = new Date(a.createdAt.split("T")[0]);
        const date2 = new Date(b.createdAt.split("T")[0]);

        return date2 - date1;
      });

      return {
        ...state,
        questions: sortByDate,
      };
    default:
      return state;
  }
};

export default questionsReducer;
