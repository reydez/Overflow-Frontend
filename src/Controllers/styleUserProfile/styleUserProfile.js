import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography, CardMedia, Card } from "@mui/material";
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
        fontWeight: 200,
        // webkitBackgroundClip: 'text',
        // webkitTextFillColor: 'transparent',
        // backgroundClip: 'text',
        // textFillColor: 'transparent',
        marginLeft: "60px",
        marginTop: "200px",
      }}
    >
      {name}
    </Box>
  )
};

export const botton = (
  <Typography
    sx={{

      with: "200px",
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

        // width: "58px",
        // height: "16px",
        // fontFamily: "Segoe UI Symbol",
        // fontStyle: "normal",
        // fontWeight: "500",
        // fontSize: "14px",
        // lineHeight: "16px",
        // color: "#A7A9BA",
        // marginLeft: "172px",
        // marginTop: "50px",
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

export const img = (image) => {
  return (
    <Card>
      <CardMedia
        sx={{
          position: "absolute",
          width: "150px",
          height: "150px",
          borderRadius: "75px",
          marginLeft: "30px",
          border: "3px solid",
          p:0,
          marginTop: "40px",
          color: "text.btnEdit"
        }}
        component="img"
        // height="294"
        image={image}
        alt="Paella dish"
      />
      {/* <Box sx={{ textAlign: "center",  fontFamily: "Segoe UI Symbol",

      fontWeight: "700",
      fontSize: "20px",
      backgroundColor: 'background.profilePhotos'
      }}>
        {username}
      </Box> */}
    </Card>
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
