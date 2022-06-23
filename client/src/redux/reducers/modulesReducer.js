const initialState = {
    modules: [],

};

const modulesReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case 'GET_MODULES':
            // console.log(payload)
            return {
                ...state,
                modules: payload,
            };

        default:
            return {
                ...state
            }
    }
};

export default modulesReducer;
