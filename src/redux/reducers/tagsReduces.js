const initialState = {
    tags: [],
};

const tagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TAGS":
            return {
                ...state,
                tags: action.payload,
            };

        default:
            return {
                ...state
            }

    }
};

export default tagsReducer;