const initialState = {
    favorites: []

};
const favouritesReducer =
(state = initialState, action) => {
    switch (action.type) {
        
        case 'GET_FAVORITE':
           
            return {
                ...state,
                favorites: action.payload,
            };

        default:
            return {
                ...state
            }
    }
};

export default favouritesReducer;