import React, { useState } from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function DetailsComponent({
  question,
  loading,
  comments,
  setComments,
  commentsARenderizar,
  dummy,
}) {
  const [comentarioText, setComentarioText] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const isTextareaDisabled = comentarioText.length === 0;

  console.log(user);

  let history = useHistory();
  const Return = () => {
    history.goBack();
  };

  const onInputChange = (e) => {
    e.preventDefault();
    setComentarioText(e.target.value);
  };

  const onSubmitHandler = () => {
    axios
      .post(`http://localhost:3001/comments/${question.id}/${user.id}`, {
        message: comentarioText,
      })
      .then((response) => {
        setComments([response.data, ...comments]);
        setComentarioText("");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        if (!dummy.current) return;
        setTimeout(() => {
          dummy.current.scrollIntoView({
            behavior: "smooth",
          });
        }, 50);
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
            background: "#ecf0f3",
            borderRadius: "10px",

            /* margin: "0 auto", */
          }}
        >
          <h1 style={{ color: "#413a66", fontSize: "22px" }}>
            {question.title}
          </h1>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              letterSpacing: 0.5,
              // width: "75%",
              color: "#413a66",
              marginTop: "-15px",
            }}
          >
            {question.message}
          </Typography>
          <hr />
          <p
            style={{
              margin: "0",
              padding: "0 10px",
              borderRadius: "10px",
              backgroundColor: "#413a66",
              color: "#fafafa",
              width: "max-content",
            }}
          >
            Comentarios:
          </p>
          <div
            style={{
              maxHeight: "340px",
              overflow: "auto",
              backgroundColor: "#fafafa",
              marginTop: "10px",
              borderRadius: "20px",
            }}
          >
            {loading && <h3>Loading Question Details...</h3>}
            {commentsARenderizar?.length > 0 ? (
              commentsARenderizar.map((comment, index) => (
                <div
                  key={index}
                  style={{
                    // border: "1px solid black",
                    borderRadius: "20px",
                    padding: ".2em 1em",
                    margin: ".5em 0 .5em 0",
                  }}
                >
                  <p
                    style={{ margin: "0", fontSize: "16px", color: "#413a66" }}
                  >{`${comment.user.first_name} ${comment.user.last_name}:`}</p>
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
              ))
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
    </div>
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
`;
