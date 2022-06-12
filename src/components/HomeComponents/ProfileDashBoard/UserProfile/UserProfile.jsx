import React, { useState } from "react";
import {
  CardActions,
  CardContent,
  Button,
  Typography,
  Card,
} from "@mui/material";
import {
  name,
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
  editButton,
  vipButton,
} from "../../../../Controllers/styleUserProfile/styleUserProfile";

import { EditUserProfile } from "./EditUserProfile";
import { useSelector } from "react-redux";

export const UserProfile = () => {
  const user = useSelector((state) => state.userReducer.user);

  const [editMode, setEditMode] = useState(false);

  const changeToFalse = () => {
    setEditMode(false);
  };

  return (
    <>
      <Card
        sx={{
          width: "365px",
          height: "354px",
          borderRadius: "35px",
          marginLeft: "30px",
          marginTop: "20px",
          color: "primary",
        }}
      >
        {editMode ? (
          <div>
            <EditUserProfile changeToFalse={changeToFalse} />
          </div>
        ) : (
          <CardContent>
            <Button sx={{ ml: 33, py: 0 }}>{botton}</Button>
            <Typography variant="h5" component="div">
              {name(user.full_name)}
            </Typography>
            <Typography variant="h5" component="div">
              {student(user.role)}
            </Typography>
            <Card alt="Remy Sharp" src="">
              {img(user.image)}
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

            <CardActions onClick={() => setEditMode(true)}>
              {editButton}
            </CardActions>
            <CardActions>{vipButton}</CardActions>
          </CardContent>
        )}
      </Card>
    </>
  );
};
