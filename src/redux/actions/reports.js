import axios from "axios";
import { report, URL } from "../action-types/index.js";

export function sendReport(formReport, idOf, idUser) {
    return (dispatch) => {
        axios.post(`${URL}/${idOf}/${idUser}`, formReport)
            .then(response => {dispatch({
                type: report.SEND_REPORT,
                payload: response.data
            })})
            .catch(error => {
                console.log(error)
            })
    }
};
