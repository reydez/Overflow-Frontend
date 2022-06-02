import * as React from "react";
import {CardActions,CardContent, Button, Typography, Card, Box } from "@mui/material";
import {name,
  botton,
  student,
  quantityQuestions,
  quantityAnswers,
  img,
  btnOne,
  btnTwo,
  btnThree,
  btnFour,
  btnFive,
  btnSix,
  btnSend,
  btnFav} from '../../Controllers/styleCardUser/styleCardUser.js'

export default function CardUser() {
  return (
    <Card
      sx={{
        position: "absolute",
        width: "354px",
        height: "354px",
        borderRadius: "35px",
        marginLeft: "500px",
        marginTop: "150px",
      }}
      >
      <CardContent>
      <Button  sx={{ml: 33, py: 0}}>{botton}</Button>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h5" component="div">
          {student}
        </Typography>
        <Card alt="Remy Sharp" src="">
          {img}
        </Card>

        <Typography variant="h5" component="div">
          {quantityQuestions}
        </Typography>

        <Typography variant="h5" component="div">
          {quantityAnswers}
        </Typography>

        <Typography>{btnOne}</Typography>

        <Typography>{btnTwo}</Typography>

        <Typography>{btnThree}</Typography>

        <Typography>{btnFour}</Typography>

        <Typography>{btnFive}</Typography>

        <Typography>{btnSix}</Typography>
        <CardActions>{btnSend}</CardActions>
        <CardActions>{btnFav}</CardActions>
      </CardContent>
    </Card>
  );
}
