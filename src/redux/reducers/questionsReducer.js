import { loadstate } from "../localstorage/localstorage";

const initialState = {
  questions: loadstate() === undefined ? [] : loadstate().questions,
  tempQuestions: loadstate() === undefined ? [] : loadstate().questions,
  question: {},
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_QUESTIONS":
      return {
        ...state,
        questions:
          loadstate() === undefined ? action.payload : loadstate().questions,
        tempQuestions: action.payload,
      };

    case "GET_QUESTION_DETAILS":
      return {
        ...state,
        question: action.payload,
      };

    case "GET_QUESTIONS_BY_NAME":
      const copyTempQuestionsNames = action.payload
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
        questions: copyTempQuestionsNames,
      };

    case "ORDER_BY_MODULE":
      const copyTempQuestions = state.tempQuestions.map((question) => {
        return {
          ...question,
          module: question.module,
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
        (question) => question.tags.indexOf(action.payload.toUpperCase()) >= 0
      );

      return {
        ...state,
        questions: filteredByTag,
      };


      case "DELETE_COMMENT":
        console.log('Comment en tempQuestions:',state.question.comments)
        return {
          ...state,
          questions: state.questions.filter((everyComment) => everyComment.id !== action.payload)
        }


    default:
      return {
        ...state,
      };
  }
};

export default questionsReducer;
