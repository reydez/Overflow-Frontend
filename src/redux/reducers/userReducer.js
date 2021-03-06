const initialState = {
  user: {},
  users:[],
  isLogin: 0,
  userDetail: {},
  dinamix: false,
  userDinamix: []
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
      
    case "USER_DINAMIX": 
      return {
        ...state,
        userDinamix: action.payload
      };

    case "SET_DINAMIX": 
      return {
        ...state,
        dinamix: action.payload
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
      
      case "GET_USERS_BY_NAME":
      return {
        ...state,
        users: action.payload
      }

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
