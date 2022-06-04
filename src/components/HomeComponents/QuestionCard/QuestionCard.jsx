
import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { pink } from '@mui/material/colors';
import Favorite from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import fotoPerfil from "../../../imagen/perfilIcono.png"

export const QuestionCard = ({ question }) => {
  /* var year = question.date.getUTCFullYear();
  var month = question.date.getUTCMonth() + 1;
  var day = question.date.getUTCDate(); */

  // const getAvatarBgColor = ({ category }) =>
  //   ({
  //     M1: "#FBC02D",
  //     M2: "#43A047",
  //     M3: "#D81B60",
  //   }[category] || "#42A5F5");

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const extras= {
    vote: 1,
    views:34
  }
  const linkStyle = {
    margin: "0",
    color: "#fafafa",
    textDecoration: "none",
  };

  return (
    <Paper
    sx={{
      p: 2,
      margin: "auto",
      flexGrow: 1,
      backgroundColor: (theme) =>
      theme.palette.mode === "dark" ? "#1A2027" : "transparent",
    }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Avatar
            sx={{
              // bgcolor: getAvatarBgColor(question),
              bgcolor: "#FBC02D",
              fontSize: "1rem",
              color: "#392e57",
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
                  <p
                    style={{
                      marginLeft: "-30px",
                      marginTop: 0,
                      fontSize: "9px",
                      color: "#a8a3b5",
                    }}
                  >
                  {/* VOTOS HACER CONEXION CON BACK */}
                  <ThumbUpAltIcon sx={{ fontSize: 9 }}/> {extras.vote} Votos
                  </p>
                  <p
                    style={{
                      marginLeft: "-30px",
                      marginTop: 0,
                      fontSize: "9px",
                      color: "#a8a3b5",
                    }}
                  >
                  {/* VISITAS HACER CONEXION CON BACK */}
                  <VisibilityIcon sx={{ fontSize: 9 }}/> {extras.views} Visitas
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
                <Link
                  to={`/visualize-question/${question.id}`}
                  style={linkStyle}
                >
                  {question.title}
                </Link>

                <h6
                  style={{ marginTop: "0", fontSize: "10px", color: "#A8A3B5" }}
                >{`${question.createdAt}`}</h6>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",
                  letterSpacing: 0.5,
                  width: "75%",
                  color: "#A8A3B5",
                  marginTop: "-15px",
                }}
              >
                {question.message}
              </Typography>
            </Grid>

            <Grid item>
              {" "}
              {/* TAGs de cada categoría*/}
              <Stack direction="row" spacing={1}>
                {question.tags.map((tag, index) => (
                  <Chip
                  label={<Box sx={{ color: "white" }}>{tag}</Box>}
                  key={index}
                  variant="outlined"
                  size="small"
                  />
                  ))}
              </Stack>
            </Grid>
          </Grid>
                <Grid>
                {/* check de corazon para clickear hacia favoritos */}
                  <Checkbox {...label}
                     icon={<FavoriteBorder />}
                     checkedIcon={<Favorite />}
                     sx={{
                       color: pink[800],
                       '&.Mui-checked': {
                        color: pink[600],
                      },
                        top: 10,
                        left: -50,
                      }}
                     />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div" color="pink">
             
             
             {/* Avatar perfil deberia venir desde back */}
              
              
              <Avatar alt="Foto" src={fotoPerfil} style={{
                      marginLeft: "-20px",
                      marginTop: 10,
                      fontSize: "9px",
                      color: "#a8a3b5",
                    }} />
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
                  > Nombre Perfil
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


