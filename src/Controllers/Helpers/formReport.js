import Swal from "sweetalert2";
import { sendReport } from "../../redux/actions/reports";
import "./stylesInputSweet.css";

export const sendFormReport = async (dispatch, idOf, idUser, exist) => {
    const formReport = {};
    if(exist) {
      Swal.fire({
        icon: 'info',
        title: 'Ya has enviado un reporte para esta misma publicacion!',
        text: 'Estamos procesando tu reporte, tan pronto como se evalue se tomaran las acciones necesarias...',
        html: 
        `
        <p>Estamos procesando tu reporte, tan pronto como se evalue se tomaran las acciones necesarias...</p>
        <h4>Muchas gracias por ayudar a mantener limpia la comunidad!</h4>
        `
      })
    } else {
      await Swal.fire({
        title: "Reportar publicacion",
        icon: "warning",
        input: "select",
        inputPlaceholder: "Motivo (obligatorio)",
        inputOptions: {
          spam: "Es spam",
          inadecuado: "Es inadecuado",
        },
        focusConfirm: false,
        confirmButtonText: "Enviar reporte",
        width: `40%`,
        html: `<h3>Cual es el problema con esta publicacion?</h3>
        <input style="width: 80%" placeholder="Mensaje opcional" id="swal-input1" class="swal2-input"> <br/>`,
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
        stopKeydownPropagation: true,
        showCancelButton: true,
        customClass: {
          input: "inputSweet",
        },
        inputValidator: (value) => {
          if (!value) {
            return "Tienes que elegir una opción!";
          }
        },
        preConfirm: (inputValue) => {
          formReport.reason = inputValue;
          formReport.message = document.getElementById("swal-input1").value;
          dispatch(sendReport(formReport, idOf, idUser));
        },
      });
    };
  };