import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography, CardMedia } from "@mui/material";
// import { color } from "@mui/system";

export const name = (name) => {
  return (

    <Box
      sx={{
        position: "absolute",
        // width: "150px",
        // height: "21px",
        fontFamily: "Segoe UI Symbol",
        // fontStyle: "normal",
        // fontWeight: "600",
        fontSize: "25px",
        lineHeight: "21px",
        fontWeight: 700,
        // webkitBackgroundClip: 'text',
        // webkitTextFillColor: 'transparent',
        // backgroundClip: 'text',
        // textFillColor: 'transparent',
        marginLeft: "170px",
        marginTop: "20px",
      }}
    >
      {name}
    </Box>
  )
};

export const botton = (
  <Typography
    sx={{
      position: "absolute",
      with: "24px",
      height: "36px",
      fontFamily: "Segoe UI Symbol",
      fontStyle: "regular",
      fontWeight: "900",
      lineHeight: "150%",
      color: "#9585D4",
    }}
  >
    ...
  </Typography>
);

export const student = (name) => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "58px",
        height: "16px",
        fontFamily: "Segoe UI Symbol",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "16px",
        color: "#A7A9BA",
        marginLeft: "172px",
        marginTop: "50px",
      }}
    >
      {name}
    </Box>
  )
}

export const quantityQuestions = (
  <Box
    sx={{
      position: "absolute",
      width: "82px",
      height: "9px",
      fontFamily: "Segoe UI Symbol",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "8px",
      lineHeight: "9px",
      color: "#A7A9BA",
      marginLeft: "200px",
      marginTop: "80px",
    }}
  >
    Cantidad de Preguntas
  </Box>
);

export const quantityAnswers = (
  <Box
    sx={{
      position: "absolute",
      width: "87px",
      height: "9px",
      fontFamily: "Segoe UI Symbol",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "8px",
      lineHeight: "9px",
      color: "#A7A9BA",
      marginLeft: "200px",
      marginTop: "100px",
    }}
  >
    Cantidad de Respuestas
  </Box>
);

export const img = (name) => {
  return (

    <CardMedia
      sx={{
        position: "absolute",
        width: "130px",
        height: "130px",
        borderRadius: "20px",
        marginLeft: "10px",
      }}
      component="img"
      height="194"
      image={name}
      alt="Paella dish"
    />
  )
}

export const btnOne = (
  <Button
    sx={{
      position: "absolute",
      width: "99px",
      height: "27px",
      background: "#F4F5F8",
      borderRadius: "10px",
      marginLeft: "10px",
      marginTop: "150px",
      textAlign: "center",
      color: "#A7A9BA",
      fontFamily: "Segoe UI Symbol",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "14px",
      '&:hover': {
        border: '1px solid',
        borderColor: '#0062cc',
        boxShadow: 'none',
      }
    }}
  >
    javaScript
  </Button>
);

export const btnTwo = (
  <Button
    sx={{
      position: "absolute",
      width: "99px",
      height: "27px",
      background: "#F4F5F8",
      borderRadius: "10px",
      marginLeft: "120px",
      marginTop: "150px",
      textAlign: "center",
      color: "#A7A9BA",
      fontFamily: "Segoe UI Symbol",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "14px",
      '&:hover': {
        border: '1px solid',
        borderColor: '#0062cc',
        boxShadow: 'none',
      }
    }}
  >
    React
  </Button>
);

export const btnThree = (
  <Button
    sx={{
      position: "absolute",
      width: "99px",
      height: "27px",
      background: "#F4F5F8",
      borderRadius: "10px",
      marginLeft: "230px",
      marginTop: "150px",
      textAlign: "center",
      color: "#A7A9BA",
      fontFamily: "body1",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "14px",
      '&:hover': {
        border: '1px solid',
        borderColor: '#0062cc',
        boxShadow: 'none',
      }
    }}
  >
    CSS
  </Button>
);

export const btnFour = (
  <Button
    sx={{
      position: "absolute",
      width: "99px",
      height: "27px",
      background: "#F4F5F8",
      borderRadius: "10px",
      marginLeft: "10px",
      marginTop: "190px",
      textAlign: "center",
      color: "#A7A9BA",
      fontFamily: "body1",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "14px",
      '&:hover': {
        border: '1px solid',
        borderColor: '#0062cc',
        boxShadow: 'none',
      }
    }}
  >
    Redux
  </Button>
);

export const btnFive = (
  <Button
    sx={{
      position: "absolute",
      width: "99px",
      height: "27px",
      background: "#F4F5F8",
      borderRadius: "10px",
      marginLeft: "120px",
      marginTop: "190px",
      textAlign: "center",
      color: "#A7A9BA",
      fontFamily: "body1",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "14px",
      '&:hover': {
        border: '1px solid',
        borderColor: '#0062cc',
        boxShadow: 'none',
      }
    }}
  >
    HTML
  </Button>
);

export const btnSix = (
  <Button
    sx={{
      position: "absolute",
      width: "99px",
      height: "27px",
      background: "#F4F5F8",
      borderRadius: "10px",
      marginLeft: "230px",
      marginTop: "190px",
      textAlign: "center",
      color: "#A7A9BA",
      fontFamily: "body1",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "14px",
      '&:hover': {
        border: '1px solid',
        borderColor: '',
        boxShadow: 'none',
      }
    }}
  >
    Express
  </Button>
);

export const editButton = (
  <Button
    variant="outlined"
    sx={{
      position: "absolute",
      width: "145px",
      height: "48px",
      background: "#7689FC",
      borderRadius: "15px",
      marginTop: "500px",
      marginLeft: "10px",
      color: "#D4DDFE",
      fontStyle: "normal",
      fontWeight: "500",
      fontFamily: "body1",
      fontSize: "15px",
    }}
  >
    Editar
  </Button>
);

export const vipButton = (
  <Button
    variant="outlined"
    sx={{
      position: "absolute",
      width: "144px",
      height: "48px",
      border: "2px solid",
      borderRadius: "15px",
      marginTop: "470px",
      marginLeft: "160px",
      color: "#9585D4",
      fontStyle: "normal",
      fontWeight: "500",
      fontFamily: "body1",
      fontSize: "15px",
    }}
  >
    Suscripción
  </Button>
);
