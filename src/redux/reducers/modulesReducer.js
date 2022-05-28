const initialState = {
    modules: [],
};

const modulesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MODULES":
            return {
                ...state,
                modules: action.payload,
            };

        default:
            return state;
    }
};

export default modulesReducer;
