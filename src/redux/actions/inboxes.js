import axios from "axios";
import { inbox, URL } from "../action-types/index.js";


export function userInbox(idUser) {
    return (dispatch) => {
        axios.get(`${URL}/inboxes/${idUser}`)
            .then(response => {dispatch({
                type: inbox.USER_INBOX,
                payload: response.data
            })})
            .catch(error => {
                console.log(error)
            })
    }
};

export function viewNotification(idUser, idNotification) {
    return (dispatch) => {
        axios.put(`${URL}/inboxes/${idUser}/${idNotification}`, null)
            .then(response => {dispatch({
                type: inbox.VIEW_NOTIFICATION,
                payload: response.data
            })})
            .catch(error => {
                console.log(error)
            })
    }
};

export function deleteNotification(idUser, idNotification) {
    return (dispatch) => {
        axios.put(`${URL}/inboxes/${idUser}/${idNotification}?clean=true`, null)
            .then(response => {dispatch({
                type: inbox.DELETE_NOTIFICATION,
                payload: response.data
            })})
            .catch(error => {
                console.log(error)
            })
    }
};

export function cleanInbox(idUser) {
    return (dispatch) => {
        axios.delete(`${URL}/inboxes/clean/${idUser}`)
            .then(response => {dispatch({
                type: inbox.CLEAN_INBOX,
                payload: response.data
            })})
            .catch(error => {
                console.log(error)
            })
    }
};
