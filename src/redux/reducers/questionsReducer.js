const initialState = {
  questions: [],
  tempQuestions: [],
  question: {},
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_QUESTIONS":
      const copyTempQuestionsTags = action.payload
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

      return {
        ...state,
        questions: copyTempQuestionsTags,
        tempQuestions: copyTempQuestionsTags,
      };

    case "GET_QUESTION_DETAILS":
      return {
        ...state,
        question: action.payload,
      };

    case "GET_QUESTIONS_BY_NAME":
      const copyTempQuestionsNames = action.payload.map((question) => {
        return {
          ...question,
          tags: question.tags.map((tag) => tag.name.toUpperCase()),
        };
      });

      return {
        ...state,
        questions: copyTempQuestionsNames,
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

    case "ORDER_BY_MODULE":
      const copyTempQuestions = state.tempQuestions.map((question) => {
        return {
          ...question,
          module: question.module === null ? { name: "M1" } : question.module,
        };
      });

      const filtered = copyTempQuestions.filter(
        (question) => question.module.name === action.payload
      );

      return {
        ...state,
        questions: filtered,
      };

    case "ORDER_BY_TAG":
      const copyOfQuestion = state.questions.slice();

      const filteredByTag = copyOfQuestion.filter(
        (question) => question.tags.indexOf(action.payload) >= 0
      );

      return {
        ...state,
        questions: filteredByTag,
      };

    default:
      return {
        ...state,
      };
  }
};

export default questionsReducer;
