const initialState = {
    favourites: [],

};

const favouritesReducer =
 (state = initialState, { payload, type }) => {
    switch (type) {
        case 'GET_FAVOURITE':
           
            return {
                ...state,
                favourites: payload,
            };

        default:
            return {
                ...state
            }
    }
};

export default favouritesReducer;