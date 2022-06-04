import React from "react";
import { Link } from "react-router-dom";

export default function Component404() {
  const containerStyles = {
    width: "inheret",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const containerDetailsStyles = {
    width: "30%",
    height: "30%",
    display: "flex",
    background: "white",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };

  return (
    <div style={containerStyles}>
      <div style={containerDetailsStyles}>
        <h1>Error 404, No existe la pagina.</h1>
        <Link to="/questions">Regresar a pagina de preguntas.</Link>
      </div>
    </div>
  );
}
