import { inbox } from "../action-types/index.js"

const initialState = {
    inbox: [],

};

const inboxesReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case inbox.USER_INBOX:
            return {
                ...state,
                inbox: payload
            };
        default: return { ...state };
    }
};

export default inboxesReducer;
