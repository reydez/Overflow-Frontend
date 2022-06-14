import React, { useState } from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { userInbox } from "../../redux/actions/inboxes";
import { deleteComment } from "../../redux/actions/comments";
import { getQuestionDetails } from "../../redux/actions/questions";
import FlagIcon from "@mui/icons-material/Flag";
import { sendFormReport } from "../../Controllers/Helpers/formReport";
import { Button } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { finishedPost } from "../../redux/actions/user";
import { isCorrectAnswer } from "../../redux/actions/comments";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function DetailsComponent({
  questionDetail,
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
    finished: ""
  });

  // console.log('Hola soy un user', user);
  // console.log('Hola soy una question', question);  
  // console.log(user.id === question.user.id ? console.log('hola') : console.log('puto'))

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


  //! ----------- Resolve -------------- 
  // const handleChange = (event) => {
  //   // setChecked(event.target.checked);
  //   console.log('hola soy el switch', checked)
  //   dispatch(finishedPost(question.user.id, checked))
  // };

  //! ----------- Resolve -------------- 

  const onSubmitHandler = () => {
    axios
      .post(
        `http://localhost:3001/comments/${questionDetail.id}/${user.id}`,
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
      let found = userDetail.reports.find(elem => elem.commentId === idComment)
      if(found === undefined) found = 0
      return found === 0 ? 0 : found.id
    }; 
    
    const exist = user && userDetail && userDetail.reports && matchReportId()

    sendFormReport(dispatch, idComment, user.id, exist);
  };

  // console.log(commentsARenderizar);

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
            background: "#fafafa",
            borderRadius: "10px",
            position: "relative",
            color: '#413a66'
          }}
        >
          {/* {
            (user.id === question.user.id)
              ? (
                <div style={{ position: "absolute", top: "-0px", right: "-0px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}  >
                  <h6 style={{ margin: 0, paddingTop: ".5em" }}>Resuelto</h6>

                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    // inputProps={{ "aria-label": "controlled" }}
                    sx={{
                      background: "transparent",
                      color: "white",
                    }}
                  />
                </div>
              ) : (
                null
              )
          } */}
          <Typography sx={{ color: "#413a66", fontSize: "32px", paddingBottom: '10px' }}>
            {questionDetail.title}
          </Typography>
          {/*  {switchComponent} */}
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              letterSpacing: 0.5,
              color: "#413a66",
              marginTop: "-15px",
              overflowWrap: "break-word"
            }}
            >
            <hr></hr>
            {questionDetail.message}
          </Typography>
          {commentsARenderizar?.length > 0 && commentsARenderizar.find((a) => a.isCorrect) ? 
           (commentsARenderizar.map((comment, index) => comment.isCorrect ? (
             <>
                <p
                  style={{
                    marginTop: "35px",
                    fontSize: "16px",
                    color: "#43a66",
                  }}
                >
                  <b>
                    Respuesta seleccionada por el usuario
                  </b>
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
                    fontSize: 35
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
            ) : null)) : null}
          <p
            style={{
              // margin: "0",
              marginBottom: "1em",
              marginTop: "2.8em",
              padding: "0 10px",
              borderRadius: "10px",
              backgroundColor: "#413a66",
              color: "#fafafa",
              width: "max-content",
            }}
          >
            Comentarios:
          </p>
          {/* <hr /> */}
          <div
            style={{
              maxHeight: "500px",
              overflow: "auto",
              backgroundColor: "#fafafa",
              // marginTop: "0.9em",
              // borderRadius: "20px",
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
            }}
          >
            {loading && <h3>Loading Question Details...</h3>}
            {commentsARenderizar?.length > 0 ? (
              commentsARenderizar.map((comment, index) => !comment.isCorrect? (
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
                      onClick={() => handleRemoveComment(comment.id, user.id)}
                      sx={{
                       color: "#A8A3B5",
                       borderRadius: "10px",
                       float: "right",
                       cursor: "pointer",
                       ":hover": {
                         color: "red"
                       }}
                      }
                     >
                       <DeleteForeverIcon />
                     </Button>
                    ) : null}

                    {/* ----------------------- REPORTAR COMENTARIO ---------------------- */}
                    {comment.user.id !== user.id ? (
                    <Button
                    onClick={() => handleSendReport(comment.id)}
                    sx={{
                    // top: 10,
                    // left: 650,
                    // paddingBottom: 10
                    borderRadius: "10px",
                    float: "right",
                    }}
                    >
                      <FlagIcon
                      sx={{ color: "#A8A3B5"}}
                      />
                    </Button>
                    ) : null}

                    {/* ----------------------- ELEGIR RESPUESTA CORRECTA ---------------------- */}
                    {!questionDetail.closed ? (
                    <Button
                    onClick={() => isCorrect(comment.id, user.id)}
                    sx={{
                    // top: 10,
                    // left: 650,
                    // paddingBottom: 10
                    borderRadius: "10px",
                    float: "right",
                    }}
                    >
                      <CheckIcon
                      sx={{ color: "#A8A3B5" }}
                      />
                    </Button>
                    ) : null
                    }
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
                  {/* <hr 
                    style={{
                      marginTop: "20px"
                    }}
                  /> */}
                </div>
              ) : null)
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
            {questionDetail.closed ? 
             <>
             <br />
              <p style={{ margin: "auto", marginBottom: "1rem", marginTop: "1rem" }}>
               <b>
                PREGUNTA CERRADA!
               </b>
             </p>
             <br />
             </>
             :
             <>
             <p style={{ margin: 0, marginBottom: "1rem", marginTop: "1rem" }}>
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
            }
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
        <Box
          sx={{
            p: 2,
            border: "1px solid black",
            marginLeft: "30px",
            width: "20%",
            background: "#ecf0f3",
            borderRadius: "10px",

            /* margin: "0 auto", */
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: "12px",
              letterSpacing: 0.5,
              // width: "75%",
              color: "#413a66",
              marginTop: "30px",
              textAlign: "center",
            }}
          >
            CONSEJOS PARA RESPONDER SEGÚN LAS NORMAS
          </Typography>
        </Box>
      </MainContainer>
    </div >
  );
}

const ButtonsDetail = styled.div`
  /* width: 10.5rem; */
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
{/* <Button
onClick={() => handleRemoveComment(comment.id, user.id)}
sx={{
   color: "#A8A3B5",
   float: "right",
   cursor: "pointer",
   ":hover": {
     color: "red"
   } 
   }}
>
 <DeleteForeverIcon />
</Button> */}
