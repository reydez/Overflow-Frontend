import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Paper,
  Typography,
  Chip,
  Stack,
  Avatar,
  Link,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { pink, red } from "@mui/material/colors";
import Favorite from "@mui/icons-material/Favorite";
import FlagIcon from "@mui/icons-material/Flag";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { Link as RouterLink } from "react-router-dom";
import {
  getModuleColor,
  getTagColor,
} from "../../../Controllers/Helpers/colorsQuestion";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteQuestion } from "../../../redux/actions/questions";
import Swal from "sweetalert2";
import { sendFormReport } from "../../../Controllers/Helpers/formReport";
import { setLikesByUser } from "../../../redux/actions/likes";
import { setFavorite } from "../../../redux/actions/favourite";
import { setDinamix } from "../../../redux/actions/user";
import LockIcon from "@mui/icons-material/Lock";

const QuestionCardPremium = ({ question }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const userDetail = useSelector((state) => state.userReducer.userDetail);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const dinamix = useSelector((state) => state.userReducer.dinamix);
  const [activeColor, setActiveColor] = useState({
    like: false,
    favorite: false,
  });

  function matchReportId() {
    let found = userDetail.reports.find((elem) => elem.postId === question.id);
    if (found === undefined) found = 0;
    return found === 0 ? 0 : found.id;
  }

  function matchLikeId() {
    let found = userDetail.likes.find((elem) => elem.postId === question.id);
    if (found === undefined) found = 0;
    return found === 0 ? 0 : found.id;
  }

  function matchFavoriteId() {
    let found = userDetail.favorites.find(
      (elem) => elem.postId === question.id
    );
    if (found === undefined) found = 0;
    return found === 0 ? 0 : found.id;
  }

  const existReport =
    user && userDetail && userDetail.reports && Boolean(matchReportId());
  const existLike =
    user && userDetail && userDetail.likes && Boolean(matchLikeId());
  const existFavorite =
    user && userDetail && userDetail.favorites && Boolean(matchFavoriteId());

  const handleLike = () => {
    dispatch(setLikesByUser(question.id, user.id));
    dispatch(setDinamix(!dinamix));
  };

  const handleFavorites = () => {
    dispatch(setFavorite(question.id, user.id));
    dispatch(setDinamix(!dinamix));
  };

  const handleSendReport = async () => {
    await sendFormReport(dispatch, question.id, user.id, existReport);
    dispatch(setDinamix(!dinamix));
  };

  useEffect(() => {
    setActiveColor({
      like: existLike,
      favorite: existFavorite,
    });
  }, [user, existLike, existFavorite]);

  const d = new Date(question.createdAt);
  const date = d.toLocaleTimeString() + ", " + d.toLocaleDateString("ES");

  const handleRemoveQuestion = () => {
    Swal.fire({
      title: "La pregunta será eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmo",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteQuestion(question.id, user.id));
        Swal.fire("Borrada!", "Pregunta eliminada correctamente", "success");
      }
    });
  };

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        marginTop: "6px",
        flexGrow: 1,
        borderRadius: "6px",
        border: "2px solid YellowGreen",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2C284A" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Avatar
            sx={{
              bgcolor: getModuleColor(question),
              fontSize: "1rem",
              marginBottom: "10px",
            }}
            aria-label="recipe"
          >
            {question.module?.name}
          </Avatar>
          <Stack direction="row" spacing={0.5}>
            <CheckCircleIcon
              sx={{ color: question.comments.length ? "green" : "red" }}
            />
            <Typography
              sx={{
                color: question.comments.length ? "green" : "red",
                fontSize: "18px",
              }}
            >
              <span>{question.comments.length}</span>
              <p
                style={{
                  marginLeft: "-30px",
                  marginTop: 0,
                  fontSize: "9px",
                  color: question.comments.length ? "green" : "red",
                }}
              >
                Respuestas
              </p>
            </Typography>
            <p
              style={{
                marginLeft: "-40px",
                marginTop: "55px",
                fontSize: "15px",
                color: "#a8a3b5",
              }}
            >
              {/* VOTOS HACER CONEXION CON BACK */}
              <ThumbUpAltIcon sx={{ fontSize: 17 }} /> {question.likes.length}
            </p>
          </Stack>
        </Grid>

        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
                sx={{ fontSize: "20px" }}
              >
                <Link
                  to={`/visualize-question/${question.id}`}
                  component={RouterLink}
                  color="inherit"
                  underline="none"
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      letterSpacing: 0.4,
                      margin: "4px 2px",
                      width: "75%",
                      color: (theme) =>
                        theme.palette.mode === "dark" ? "#fff" : "#7165A0",
                    }}
                  >
                    {question.closed ? (
                      <>
                        <LockIcon />
                        <b>Cerrada</b> <br />
                      </>
                    ) : null}
                    {question.title}
                  </Typography>
                </Link>
                <h6
                  style={{ marginTop: "0", fontSize: "10px", color: "#A8A3B5" }}
                >{`${date}`}</h6>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",
                  letterSpacing: 0.5,
                  width: "75%",
                  color: "#A8A3B5",
                  marginTop: "-15px",
                  fontStyle: "normal",
                  fontWeight: "400",
                }}
              >
                {question.message.slice(0, 30) + "..."}
              </Typography>
            </Grid>

            <Grid item>
              <br />
              {/* TAGs de cada categoría*/}
              <Stack direction="row" spacing={1} sx={{ marginTop: "-30px" }}>
                {question.tags.map((tag) => {
                  return (
                    <Chip
                      label={
                        <Box
                          Box
                          key={tag}
                          sx={{
                            bgcolor: "transparent",
                            color: getTagColor(tag),
                          }}
                        >
                          {tag}
                        </Box>
                      }
                      variant="outlined"
                      size="small"
                    />
                  );
                })}
              </Stack>
            </Grid>
          </Grid>

          <Grid>
            <Button
              {...label}
              onClick={handleLike}
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
                top: 10,
                left: -50,
              }}
            >
              <ThumbUpIcon
                sx={
                  activeColor.like ? { color: "#4caf50" } : { color: "#A8A3B5" }
                }
              />
            </Button>
            <Button
              {...label}
              onClick={handleFavorites}
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
                top: 10,
                left: -50,
              }}
            >
              <Favorite
                sx={
                  activeColor.favorite
                    ? { color: "#D81B60" }
                    : { color: "#A8A3B5" }
                }
              />
            </Button>
            <br />
            {/* ----------------- ELIMINAR PREGUNTA -----------------------*/}
            {user.isAdmin || question.user?.id === user?.id ? (
              <Button
                // {...label}
                onClick={handleRemoveQuestion}
                sx={{ color: "#A8A3B5", top: 15, left: 15 }}
              >
                <DeleteForeverIcon />
              </Button>
            ) : null}
            {/* ----------------- REPORTAR PREGUNTA -----------------------*/}
            <br />
            {question.user?.id !== user?.id ? (
              <Button
                {...label}
                onClick={handleSendReport}
                sx={{
                  color: red[800],
                  "&.Mui-checked": {
                    color: red[600],
                  },
                  top: 10,
                  left: 95,
                }}
              >
                <FlagIcon
                  sx={false ? { color: "#f44336" } : { color: "#A8A3B5" }}
                />
              </Button>
            ) : null}
          </Grid>

          <Grid item>
            <Avatar
              alt="Foto"
              src={question.user?.image}
              style={{
                marginLeft: "-20px",
                marginTop: 10,
                fontSize: "9px",
                border: "2px solid YellowGreen",
              }}
            />

            <Typography variant="subtitle1" component="div">
              <p
                style={{
                  textAlign: "center",
                  marginLeft: "-30px",
                  marginTop: 10,
                  left: 50,
                  marginRight: "10px",
                  fontSize: "9px",
                }}
              >
                {question.user && question.user.full_name}
              </p>
            </Typography>

            <Typography variant="body2" color="white">
              {question.id_user}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default QuestionCardPremium;
