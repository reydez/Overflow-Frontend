import axios from "axios";
import { admin, URL } from "../action-types/index.js";


export function banUser(idUser, idAdmin) {
    return (dispatch) => {
        axios.put(`${URL}/admin/users/${idUser}`, null, {
            headers: {
                authorization: idAdmin
            }            
        })
        .then(response => {dispatch({
            type: admin.BAN_USER,
            payload: response.data
        })})
        .catch(error => {
            console.log(error)
        })
    }
};