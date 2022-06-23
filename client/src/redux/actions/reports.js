import axios from "axios";
import { report, URL } from "../action-types/index.js";
import Swal from "sweetalert2"

export function sendReport(formReport, idOf, idUser) {
    return (dispatch) => {
        axios.post(`${URL}/reports/${idOf}/${idUser}`, formReport)
            .then(response => {dispatch({
                type: report.SEND_REPORT,
                payload: response.data
            })})
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Reporte enviado con exito!',
                })
            })
            .catch(error => {
                let errorMessage
                if(error.request.status === 400) {
                    errorMessage = {
                        icon: 'error',
                        title: 'No puedes reportar tu propia publicacion!',
                        text: 'Si crees que existe algun error en tu post prueba editando tu mismo el comentario o eliminarlo definitivamente.',
                    };
                };
                if(error.request.status === 401) {
                    errorMessage = {
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Error inesperado, vuelva a intentar.',
                    };
                };
                if(error.request.status === 409) {
                    errorMessage = {
                        icon: 'info',
                        title: 'Ya has enviado un reporte para esta misma publicacion!',
                        text: 'Estamos procesando tu reporte, tan pronto como se evalue se tomaran las acciones necesarias...',
                    };
                };
                Swal.fire(errorMessage)
            })
    }
};
