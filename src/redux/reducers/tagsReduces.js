const initialState = {
  tags: [],
  filteredTags: [],
};

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TAGS":
      const copyTempTags = action.payload.sort((a, b) => {
        const valueA = a.name;
        const valueB = b.name;
        return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
      });

      return {
        ...state,
        tags: copyTempTags,
        filteredTags: action.payload,
      };

    case "DELETE_TAG":
      // console.log('reducer',action.payload)
      return {
        ...state,
        filteredTags: state.filteredTags.filter(
          (tag) => tag.id !== action.payload
        ),
      };

    default:
      return {
        ...state,
      };
  }
};

export default tagsReducer;
