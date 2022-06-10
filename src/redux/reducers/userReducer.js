const initialState = {
  user: {},
  isLogin: 0
  userDetail: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        user: action.payload.user,
        isLogin: 1
      };
    case "GET_USER_PROFILE":
      return {
        ...state,
        userDetail: action.payload
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
