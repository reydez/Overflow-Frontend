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
  getTableSortLabelUtilityClass,
} from "@mui/material";
import { Box } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import Checkbox from "@mui/material/Checkbox";
import { pink, green, red } from "@mui/material/colors";
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
import { sendFormReport } from "../../../Controllers/Helpers/formReport"

export const QuestionCard = ({ question }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const userDetail = useSelector((state => state.userReducer.userDetail))
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [activeColor, setActiveColor] = useState({
    like: false,
    favorite: false,
    report: false
  });

  const d = new Date(question.createdAt);

  var date = d.toLocaleTimeString() + ", " + d.toLocaleDateString("ES");

  function matchReportId() {
    let found = userDetail.reports.find(elem => elem.postId === question.id)
    if(found === undefined) found = 0
    return found === 0 ? 0 : found.id
  }; 
  
  const exist = user && userDetail && userDetail.reports && matchReportId()

  // useEffect(() => {
  //   if(exist) {
  //     setTimeout(() => {setChan(!Boolean(exist))}, 3500)
  //   }
  // }, [exist])


  // console.log(Boolean(exist))

  const handleSendReport = () => {
    sendFormReport(dispatch, question.id, user.id);
    // setChan(!chan);
  };

  const extras = {
    vote: 1,
    views: 34,
  };
  // const linkStyle = {
  //   margin: "0",
  //   textDecoration: "none",
  // };

  // ----------------handleClick REMOVE QUESTION ---------------------------
  const handleRemoveQuestion = (idPost, idUser) => {
    // console.log('TODO QUESTION:', question)
    // console.log("Queres borrar la Pregunta con ID:", question.id);
    // console.log(
    //   "Queres borrar la Pregunta creada por:",
    //   question.user.full_name
    // );
    // console.log("Con el ID:", user.id);
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
        // setTimeout(()=> {
        //   dispatch(getQuestionDetails(questionId))
        // }, 500)
      }
    });
  };

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        marginTop: "4px",
        flexGrow: 1,
        bgcolor: "background.default",
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
            {question.comments.length > 0 ? (
              <>
                <CheckCircleIcon sx={{ color: "green" }} />
                <Typography sx={{ color: "green", fontSize: "18px" }}>
                  <span>{question.comments.length}</span>
                  <p
                    style={{
                      marginLeft: "-30px",
                      marginTop: 0,
                      fontSize: "9px",
                      color: "green",
                    }}
                  >
                    Respuestas
                  </p>
                </Typography>
              </>
            ) : (
              <>
                <DoDisturbOnIcon sx={{ color: "red" }} />
                <Typography sx={{ color: "red", fontSize: "18px" }}>
                  <span>{question.comments.length}</span>
                  <p
                    style={{
                      marginLeft: "-30px",
                      marginTop: 0,
                      fontSize: "9px",
                      color: "red",
                    }}
                  >
                    Respuestas
                  </p>
                </Typography>
              </>
            )}
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
                {/* <RouterLink
                  to={`/visualize-question/${question.id}`}
                  // style={linkStyle}
                  underline="none"
                  color="inherit"
                > lola</RouterLink> */}
                <Link
                  to={`/visualize-question/${question.id}`}
                  component={RouterLink}
                  // variant="button"
                  color="inherit"
                  underline="none"
                >
                  <Typography
                    // variant="body2"
                    sx={{
                      fontSize: "18px",
                      letterSpacing: 0.4,
                      margin: "4px 2px",
                      width: "75%",
                      color: (theme) =>
                        theme.palette.mode === "dark" ? "#fff" : "#7165A0",
                    }}
                  >
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
                {question.message}
              </Typography>
            </Grid>

            <Grid item>
              {" "}
              {/* TAGs de cada categoría*/}
              <Stack direction="row" spacing={1} sx={{ marginTop: "-35px" }}>
                {question.tags.map((tag) => {
                  // console.log(tag)
                  return (
                    <Chip
                      label={
                        <Box
                          Box
                          key={tag}
                          sx={{
                            bgcolor: "transparent",
                            color: getTagColor(tag),

                            // border: getTagColor(tag)
                            // border: `2px solid ${getTagColor(tag)}`,
                            // padding: '2px 15px',
                            // borderRadius: "15px"
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
            {/* check de corazon para clickear hacia favoritos */}
            <Checkbox
              {...label}
              icon={<ThumbUpIcon sx={{ color: "#A8A3B5" }} />}
              checkedIcon={<ThumbUpIcon sx={{ color: "#4caf50" }} />}
              sx={{
                color: green[800],
                "&.Mui-checked": {
                  color: green[600],
                },
                top: 10,
                left: -50,
              }}
            />
            <Checkbox
              {...label}
              icon={<Favorite sx={{ color: "#A8A3B5" }} />}
              checkedIcon={<Favorite sx={{ color: "#D81B60" }} />}
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
                top: 10,
                left: -50,
              }}
            />
            <Button
              {...label}
              // icon={<FlagIcon sx={true? { color: "#A8A3B5" } : { color: "#f44336" }} />}
              // checkedIcon={<FlagIcon sx={{ color: "#f44336" }} />}
              onClick={handleSendReport}
              sx={{
                color: red[800],
                "&.Mui-checked": {
                  color: red[600],
                },
                top: 10,
                left: -50,
              }}
            >
              <FlagIcon
                sx={activeColor.report ? { color: "#f44336" } : { color: "#A8A3B5" }}
              />
            </Button>
            {/* ----------------- ELIMINAR PREGUNTA -----------------------*/}
            {user.isAdmin || question.user.id === user.id ? (
              <Button
                // {...label}
                onClick={handleRemoveQuestion}
                sx={{ color: "#A8A3B5", top: 10, left: -50 }}
              >
                <DeleteForeverIcon />
              </Button>
            ) : null}
            {/* ----------------- ELIMINAR PREGUNTA -----------------------*/}
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div" color="pink">
              {/* Avatar perfil deberia venir desde back */}

              <Avatar
                alt="Foto"
                src={question.user?.image}
                style={{
                  marginLeft: "-20px",
                  marginTop: 10,
                  fontSize: "9px",
                  // position: "absolute",
                  // color: "#a8a3b5",
                }}
              />
              <p
                style={{
                  textAlign: "center",
                  marginLeft: "-30px",
                  marginTop: 10,
                  left: 50,
                  marginRight: "10px",
                  fontSize: "9px",
                  color: "#a8a3b5",
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
