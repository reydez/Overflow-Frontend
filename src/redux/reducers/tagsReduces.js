const initialState = {
    tags: [],
    filteredTags: []
};

const tagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TAGS":
            return {
                ...state,
                tags: action.payload,
                filteredTags: action.payload
            };
        
        case "DELETE_TAG" :
          // console.log('reducer',action.payload)
          return {
            ...state,
            filteredTags: state.filteredTags.filter((tag) => tag.id !== action.payload)
        }

        default:
            return {
                ...state
            }

    }
};

export default tagsReducer;