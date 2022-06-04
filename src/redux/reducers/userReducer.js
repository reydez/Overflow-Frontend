const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        user: action.payload.user,
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
