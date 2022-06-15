import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { userInbox } from "../../redux/actions/inboxes";
import { deleteComment } from "../../redux/actions/comments";
import { getQuestionDetails } from "../../redux/actions/questions";
import FlagIcon from "@mui/icons-material/Flag";
import { sendFormReport } from "../../Controllers/Helpers/formReport";
import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { finishedPost } from "../../redux/actions/user";
import { isCorrectAnswer } from "../../redux/actions/comments";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function DetailsComponent({
  question,
  loading,
  setComments,
  commentsARenderizar,
  dummy,
}) {
  const [comentarioText, setComentarioText] = useState("");
  const user = useSelector((state) => state.userReducer.user);
  const userDetail = useSelector((state) => state.userReducer.userDetail);
  const isTextareaDisabled = comentarioText.length === 0;
  const dispatch = useDispatch();
  const { questionId } = useParams();
  const [checked, setChecked] = useState({
    finished: "",
  });

  let history = useHistory();
  const Return = () => {
    history.goBack();
  };

  React.useEffect(() => {
    dispatch(userInbox(user.id));
    dispatch(getQuestionDetails(questionId));
  }, [checked, dispatch, user, questionId]);

  const onInputChange = (e) => {
    e.preventDefault();
    setComentarioText(e.target.value);
  };


  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);
  const [open4, setOpen4] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDobleClick = () => {
    setOpen2(!open2);
  };

  const handleTripleClick = () => {
    setOpen3(!open3);
  };

  const handleCuartoClick = () => {
    setOpen4(!open4);
  };

  const onSubmitHandler = () => {
    axios
      .post(
        `http://localhost:3001/comments/${question.id}/${user.id}`, // DESACTIVAR PARA DEPLOY
        // `https://henry-overflow-api.herokuapp.com/comments/${question.id}/${user.id}`, // ACTIVAR PARA DEPLOY
        {
          message: comentarioText.trim(),
        },
        {
          headers: {
            authorization: user.id,
          },
        }
      )
      .then((response) => {
        setComments([...commentsARenderizar, response.data]);
        setComentarioText("");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          Swal.fire(
            "Comentario repetido!",
            "Por favor ingrese un comentario que no se repita",
            "question"
          );
        }
      })
      .finally(() => {
        if (!dummy.current) return;
        setTimeout(() => {
          dummy.current.scrollIntoView({
            behavior: "smooth",
          });
        }, 50);
      });
    setTimeout(() => {
      checked ? setChecked(false) : setChecked(true);
    }, 500);
  };

  //todo ------------------------- DELETE COMMENT -----------------------

  const handleRemoveComment = (idComment, idUser) => {
    Swal.fire({
      title: "El comentario será eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmo",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteComment(idComment, idUser));
        Swal.fire("Borrado!", "Comentario eliminado correctamente", "success");
        setTimeout(() => {
          dispatch(getQuestionDetails(questionId));
        }, 500);
      }
    });
  };

  // ------------------------- REPORT COMMENT -----------------------

  const handleSendReport = (idComment) => {
    function matchReportId() {
      let found = userDetail.reports.find(
        (elem) => elem.commentId === idComment
      );
      if (found === undefined) found = 0;
      return found === 0 ? 0 : found.id;
    }

    const exist = user && userDetail && userDetail.reports && matchReportId();

    sendFormReport(dispatch, idComment, user.id, exist);
  };


  // ------------------------- IS CORRECT ANSWER -----------------------

  const isCorrect = (idComment, idUser) => {
    Swal.fire({
      title: "Esta respuesta ayudo a solucionar tu pregunta?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmo",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(isCorrectAnswer(idComment, idUser));
        Swal.fire("Respuesta seleccionada como correcta!", "", "success");
        setTimeout(() => {
          dispatch(getQuestionDetails(questionId));
        }, 500);
      }
    });
  };

  return (
    <div>
      <MainContainer>
        <Box
          sx={{
            p: 2,
            border: "1px solid black",
            width: "70%",
            background: "#dfdfdf",
            borderRadius: "10px",
            position: "relative",
            color: "#413a66",
          }}
        >
          <Typography
            sx={{ color: "#413a66", fontSize: "32px", paddingBottom: "10px" }}
          >
            {question.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              letterSpacing: 0.5,
              color: "#413a66",
              marginTop: "-15px",
            }}
          >
            <hr></hr>
            {question.message}
          </Typography>
          {commentsARenderizar?.length > 0 &&
          commentsARenderizar.find((a) => a.isCorrect)
            ? commentsARenderizar.map((comment, index) =>
                comment.isCorrect ? (
                  <>
                    <p
                      style={{
                        marginTop: "35px",
                        fontSize: "16px",
                        color: "#43a66",
                      }}
                    >
                      <b>Respuesta seleccionada por el usuario</b>
                    </p>
                    <div
                      key={index}
                      style={{
                        border: "1px solid black",
                        borderRadius: "10px",
                        padding: "1.5em 1em",
                        margin: "-0.5em 0em .5em 0",
                      }}
                    >
                      <CheckCircleIcon
                        sx={{
                          borderRadius: "10px",
                          float: "right",
                          marginTop: "-15px",
                          color: "#4caf50",
                          fontSize: 35,
                        }}
                      />
                      <p
                        style={{
                          margin: "0",
                          fontSize: "16px",
                          color: "#43a66",
                        }}
                      >
                        {`${comment.user.full_name}:`}
                      </p>
                      <span
                        style={{
                          fontSize: "14px",
                          width: "inhert",
                          overflowWrap: "break-word",
                          color: "#8c81a7",
                        }}
                      >
                        {comment.message}
                      </span>
                    </div>
                  </>
                ) : null
              )
            : null}
          <p
            style={{
              marginBottom: "1em",
              marginTop: "2.8em",
              padding: "0 10px",
              borderRadius: "10px",
              backgroundColor: "#413a66",
              color: "#dfdfdf",
              width: "max-content",
            }}
          >
            Comentarios:
          </p>
          <div
            style={{
              maxHeight: "500px",
              overflow: "auto",
              backgroundColor: "#dfdfdf",
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
            }}
          >
            {loading && <h3>Loading Question Details...</h3>}
            {commentsARenderizar?.length > 0 ? (
              commentsARenderizar.map((comment, index) =>
                !comment.isCorrect ? (
                  <div
                    key={index}
                    style={{
                      border: "1px solid black",
                      borderRadius: "10px",
                      padding: "1.2em 1em",
                      margin: ".5em 1em .5em 0",
                    }}
                  >
                    <p
                      style={{
                        margin: "0",
                        fontSize: "16px",
                        color: "#43a66",
                      }}
                    >
                      {`${comment.user.first_name} ${comment.user.last_name}:`}

                      {/* ----------------------- BORRAR COMENTARIO ---------------------- */}
                      {user.isAdmin || comment.user.id === user.id ? (
                        <Button
                          onClick={() =>
                            handleRemoveComment(comment.id, user.id)
                          }
                          sx={{
                            color: "#A8A3B5",
                            borderRadius: "10px",
                            float: "right",
                            cursor: "pointer",
                            ":hover": {
                              color: "red",
                            },
                          }}
                        >
                          <DeleteForeverIcon />
                        </Button>
                      ) : null}

                      {/* ----------------------- REPORTAR COMENTARIO ---------------------- */}
                      {comment.user.id !== user.id ? (
                        <Button
                          onClick={() => handleSendReport(comment.id)}
                          sx={{
                            borderRadius: "10px",
                            float: "right",
                          }}
                        >
                          <FlagIcon sx={{ color: "#A8A3B5" }} />
                        </Button>
                      ) : null}

                      {/* ----------------------- ELEGIR RESPUESTA CORRECTA ---------------------- */}
                      {!question.closed && comment.user.id === user.id || user.isAdmin ? (
                        <Button
                          onClick={() => isCorrect(comment.id, user.id)}
                          sx={{
                            borderRadius: "10px",
                            float: "right",
                          }}
                        >
                          <CheckIcon sx={{ color: "#A8A3B5" }} />
                        </Button>
                      ) : null}
                    </p>
                    <span
                      style={{
                        fontSize: "14px",
                        width: "inhert",
                        overflowWrap: "break-word",
                        color: "#8c81a7",
                      }}
                    >
                      {comment.message}
                    </span>

                    <div ref={dummy}></div>
                  </div>
                ) : null
              )
            ) : (
              <h3
                style={{ color: "grey", fontSize: "14px", paddingLeft: "10px" }}
              >
                Esta pregunta no tiene comentarios
              </h3>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            {question.closed ? (
              <>
                <br />
                <p
                  style={{
                    margin: "auto",
                    marginBottom: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  <b>PREGUNTA CERRADA!</b>
                </p>
                <br />
              </>
            ) : (
              <>
                <p
                  style={{ margin: 0, marginBottom: "1rem", marginTop: "1rem" }}
                >
                  Hacer un comentario
                </p>
                <textarea
                  value={comentarioText}
                  onChange={onInputChange}
                  style={{
                    resize: "none",
                    outline: "none",
                    width: "100%",
                    height: "150px",
                  }}
                  placeholder="Escribe su comentario..."
                />
              </>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "1em",
            }}
          >
            <ButtonsDetail lila blanco corto>
              <button onClick={Return} className="homeButton" size="small">
                Home
              </button>
            </ButtonsDetail>

            {!user.isBanned ? (
              <ButtonsDetail grey corto>
                <button
                  onClick={onSubmitHandler}
                  className="postCommentButton"
                  size="small"
                  disabled={isTextareaDisabled}
                >
                  Publica comentario
                </button>
              </ButtonsDetail>
            ) : null}
          </div>
        </Box>
        {/* -----------------------------sector de consejo de preguntas---------------------> */}
        <Box
          sx={{
            p: 2,
            border: "1px solid black",
            marginLeft: "30px",
            width: "35%",
            background: "#ecf0f3",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: '12px',
              color: "#413a66",
              marginTop: "30px",
              textAlign: "center",
            }}
          >
            CONSEJOS PARA RESPONDER SEGÚN LAS NORMAS
            {/* ---------------------------comienzan los consejos------------------ */}
            <hr />
            <List>
              <ListItemButton onClick={handleClick}>
                <ListItemText primary="Respeta las Normas" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {/* ---------------primer boton colapse---------------------------------------- */}
                  <ListItemButton>
                    <ListItemText>
                      <Typography sx={{ fontSize: '10px' }}>
                        Respetar las normas de convivencia de nuestro blog, como
                        a quienes formulan las preguntas siempre teniendo en
                        cuenta que los creadores de la pagina se reservan el
                        derecho de admisión para quienes inflinjan esas normas.
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </List>
              </Collapse>
              {/* --------------segundo boton colapse----------------------- */}
              <ListItemButton onClick={handleDobleClick}>
                <ListItemText primary="Se específico con las respuestas" />
                {open2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton>
                    <ListItemText>
                      <Typography sx={{ fontSize: '10px' }}>
                        Las respuestas tienen que ser relacionadas a lo que se
                        está preguntando, no puedes responder con cosas
                        relacionadas a otras preguntas o con otras preguntas sin
                        responder antes la primera.
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </List>
              </Collapse>
              {/* --------------------------tercero boton colapse-------------------------------------- */}
              <ListItemButton onClick={handleTripleClick}>
                <ListItemText primary="Como insertar tu codigo" />
                {open3 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton>
                 
                    <ListItemText>
                      <Typography sx={{ fontSize: '10px' }}>
                        El código que se puede utilizar en este blog es a través
                        de una imagen, puedes sacar un screenshot de tu Editor
                        de código, o si deseas existen extensiones diseñadas
                        para ese tipo de cosas mas específicas.
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </List>
              </Collapse>
              {/* ------------------------------cuarto boton colapse--------------------------------- */}
              <ListItemButton onClick={handleCuartoClick}>
                <ListItemText primary="Expresate con cordialidad" />
                {open4 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open4} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton>
                    <ListItemText>
                      <Typography sx={{ fontSize: '10px' }}>
                        Siempre se amable con las personas que preguntan, ya que
                        no sabes que nivel de programación tienen y por lo
                        tanto pueden estar aprendiendo desde lo básico, recuerda
                        de donde vienes tu y como llegaste a tu conoci- miento
                        actual, para responder con la mejor de las consideraciones.
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Typography>
        </Box>
      </MainContainer>
    </div>
  );
}

const ButtonsDetail = styled.div`
  justify-content: space-between;
  border: none;
  padding-left: 20px;
  display: ${(props) => (props.corto ? "inline-block" : "inline")};

  button {
    background: #ecf0f3;
    box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;
    border: none;
    border-radius: 5px;
    background-color: ${(props) =>
      props.lila
        ? "#e2e6f7"
        : props.rosa
        ? "#fadafa"
        : props.grey
        ? "#392e57"
        : "#aca9fa"};
    color: ${(props) => (props.blanco ? "#817094" : "#fafafa")};
    cursor: pointer;
    font-size: 17px;
    font-weight: 400;
    outline: none;
    padding: 12px 6px;
    position: relative;
    width: 100%;
    padding: 10px;
    z-index: 4;
  }

  button:disabled,
  button[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }

  button:hover:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    background: #ecf0f3;
    color: #392e57;
    color: ${(props) => (props.blanco ? "#817094" : "#817094")};
    box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;
    z-index: -1;
    border-radius: 5px;
  }
  .postCommentButton:hover {
    color: #392e57;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  .delCommentButton {
    color: red;
    border-radius: 10px;
    border: 1px solid;
    background-color: transparent;
    float: right;
    cursor: pointer;
    :hover {
      color: white;
      background-color: red;
    }
  }
`;
