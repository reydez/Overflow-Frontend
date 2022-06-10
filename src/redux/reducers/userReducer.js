const initialState = {
  user: {},
  isLogin: 0
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        user: action.payload.user,
        isLogin: 1
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
