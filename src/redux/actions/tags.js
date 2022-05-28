import axios from "axios";

export const getTags = () => {
    return async (dispatch) => {
        try {
            let tags = await axios.get('http://localhost:3001/tags');
            return dispatch({
                type: 'GET_TAGS',
                payload: tags.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}