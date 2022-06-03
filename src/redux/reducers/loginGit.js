const initialState = {
    user: {},
  };
  
  const loginGitReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case 'LOGIN_GIT':
            // console.log(payload)
            return {
                ...state,
                user: payload,
            };

        default:
            return {
                ...state
            }
    }
  };
  
  export default loginGitReducer;
  