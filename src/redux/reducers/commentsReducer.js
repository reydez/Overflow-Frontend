const initialState = {
  comment: {},
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        comment: action.payload,
      };

    default:
      return { ...state };
  }
};

export default commentsReducer;
