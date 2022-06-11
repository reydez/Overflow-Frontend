const initialState = {
  user: {},
  users:[]
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        user: action.payload.user,
      };

    case "GET_USERS":
      return {
        ...state,
        users: action.payload
      };

    case "BAN_USER" :
      return {
        ...state,
        users: state.users.map((user) => {
          if(user.id === action.payload) {
            if(user.isBanned === true) {
              return {
                ...user,
                isBanned: false
              }
            } else {

              return {
                ...user,
                isBanned: true
              }
            }
          } else {
            return user
          }
        })
      }
  
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
