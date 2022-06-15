import { question } from "../action-types/index.js";

const initialState = {
  questions: [],
  tempQuestions: [],
  questionDetail: {},
  toggle: false,
  filter: "",
  order: ""
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case question.GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        tempQuestions: action.payload,
      };

    case question.GET_QUESTION_DETAILS:
      return {
        ...state,
        questionDetail: action.payload,
      };

    case question.GET_QUESTIONS_BY_NAME:
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

    case question.FILTER_BY_MODULE:
      const filtered = state.tempQuestions.filter(
        (question) => question.module.name === action.payload
      );
      return {
        ...state,
        questions: filtered,
        filter: "module"
      };

    case question.FILTER_BY_TAG:
      const copyOfQuestion = state.tempQuestions.slice();
      const filteredByTag = copyOfQuestion.filter(
        (question) => question.tags.indexOf(action.payload.toUpperCase()) >= 0
      );
      return {
        ...state,
        questions: filteredByTag,
        filter: "tag"
      };

    case question.ORDER_BY_COMMENTS:
      const copyTempQuestionsMasComentadas = state.tempQuestions.slice();
      var newState = Object.assign({}, state);
      if (newState.toggle) {
        copyTempQuestionsMasComentadas.sort(
          (a, b) => a.comments.length - b.comments.length
        );
        newState.toggle = !newState.toggle;
      } else {
        copyTempQuestionsMasComentadas.sort(
          (a, b) => b.comments.length - a.comments.length
        );
        newState.toggle = !newState.toggle;
      };
      return {
        ...state,
        toggle: newState.toggle,
        questions: copyTempQuestionsMasComentadas,
        order: "comments"
      };

    case question.ORDER_BY_LIKES:
      const copyTempQuestionsLikes = state.tempQuestions.slice();   
      copyTempQuestionsLikes.sort(
        (a, b) => b.likes.length - a.likes.length
      );
      return {
        ...state,
        toggle: false,
        questions: copyTempQuestionsLikes,
        order: "likes"
      };

    case question.DELETE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(
          (everyPost) => everyPost.id !== action.payload
        ),
      };

    case "DELETE_COMMENT":
      console.log("Comment en tempQuestions:", state.questionDetail.comments);
      return {
        ...state,
        questions: state.questions.filter(
          (everyComment) => everyComment.id !== action.payload
        ),
      };

    default: return { ...state };
  }
};

export default questionsReducer;
