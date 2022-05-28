import axios from "axios";

export const getModules = () => {
    return async (dispatch) => {
        try {
            let modules = await axios.get('http://localhost:3001/modules');
            return dispatch({
                type: 'GET_MODULES',
                payload: modules.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}