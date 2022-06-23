import axios from "axios";
import { admin, URL } from "../action-types/index.js";


export function banUser(idUser, idAdmin) {
    return (dispatch) => {
        axios.put(`${URL}/admin/users/ban/${idUser}`, null, {
            headers: {
                authorization: idAdmin
            }            
        })
        .then(response => {dispatch({
            type: admin.BAN_USER,
            payload: idUser
        })})
        .catch(error => {
            console.log(error)
        })
    }
};