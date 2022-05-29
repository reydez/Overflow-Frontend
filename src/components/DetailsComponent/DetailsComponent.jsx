import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function DetailsComponent({ question, loading }) {
  const [comentarioText, setComentarioText] = useState("");

  const onInputChange = (e) => {
    e.preventDefault();
    setComentarioText(e.target.value);
  };

  const onSubmitHandler = () => {
    console.log(comentarioText);
  };

  return (
    <div>
      <Box
        sx={{
          p: 2,
          border: "1px solid black",
          maxWidth: "800px",
          background: "white",
          borderRadius: "10px",
          boxShadow: 1,
          /* margin: "0 auto", */
        }}
      >
        <h1>{question.title}</h1>
        <h4>{question.message}</h4>
        <p style={{ margin: "0" }}>Comentarios.</p>
        <div style={{ maxHeight: "340px", overflow: "auto" }}>
          {loading && <h3>Loading Question Details...</h3>}
          {question.comments?.length > 0 ? (
            question.comments.map((comment, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid black",
                  borderRadius: "10px",
                  padding: ".2em 1em",
                  margin: "0 0 .5em 0",
                }}
              >
                <p
                  style={{ margin: "0" }}
                >{`${comment.user.first_name} ${comment.user.last_name}:`}</p>
                <span style={{ width: "inhert", overflowWrap: "break-word" }}>
                  {comment.message}
                </span>
              </div>
            ))
          ) : (
            <h3>esta pregunta no tiene comentarios</h3>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <p style={{ margin: 0 }}>hacer un comentatio.</p>
          <textarea
            value={comentarioText}
            onChange={onInputChange}
            style={{ resize: "none", outline: "none", width: "100%" }}
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
          <Button onClick={onSubmitHandler} variant="contained" size="small">
            Publica comentario.
          </Button>
        </div>
      </Box>
    </div>
  );
}
