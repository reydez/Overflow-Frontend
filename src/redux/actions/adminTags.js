import axios from "axios";
import { admin, URL } from "../action-types/index.js";


export function addTag(tag, idModule, idAdmin) {
    return (dispatch) => {
        axios.post(`${URL}/admin/tags/${idModule}`, tag, {
            headers: {
                authorization: idAdmin
            }            
        })
        .then(response => {dispatch({
            type: admin.ADD_TAG,
            payload: response.data
        })})
        .catch(error => {
            console.log(error)
        })
    }
};

export function deleteTag(idTag, idAdmin) {
    return (dispatch) => {
        axios.delete(`${URL}/admin/tags/${idTag}`, {
            headers: {
                authorization: idAdmin
            }  
        })
        .then(response => {dispatch({
            type: admin.DELETE_TAG,
            payload: response.data
        })})
        .catch(error => {
            console.log(error)
        })
    }
};