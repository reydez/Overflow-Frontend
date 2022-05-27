import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import { Link } from "react-router-dom";

export const QuestionCard = ({ question }) => {
  /* var year = question.date.getUTCFullYear();
  var month = question.date.getUTCMonth() + 1;
  var day = question.date.getUTCDate(); */
<
  
  // const getAvatarBgColor = ({ category }) =>
  //   ({
  //     M1: "#FBC02D",
  //     M2: "#43A047",
  //     M3: "#D81B60",
  //   }[category] || "#42A5F5");



  const handleClick = () => {
    console.info("Msg por consola tag clickeado (para filtrar)");
  };

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
            {/* {question.rating} */}
            {"M1"}
          </Avatar>
          <Stack direction="row" spacing={0.5}>
            {question.comments.length > 0
              ? <><CheckCircleIcon sx={{ color: "green" }} />
                  <Typography sx={{ color: "green", fontSize: "18px" }}>
                    <span>{question.comments.length}</span>
                    <p style={{ marginLeft: "-30px", marginTop: 0, fontSize: '9px', color:'green' }}>Respuestas</p>
                  </Typography>
                </>
              : <><DoDisturbOnIcon sx={{ color: "red" }} />
                  <Typography sx={{ color: "red", fontSize: "18px" }}>
                    <span>{question.comments.length}</span>
                    <p style={{ marginLeft: "-30px", marginTop: 0, fontSize: '9px', color:'red' }}>Respuestas</p>
                  </Typography>
                </>
            }
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

                <h6 style={{ marginTop: "0", fontSize: '10px', color:'#A8A3B5' }}>{`${question.createdAt}`}</h6>

              </Typography>
              <Typography variant="body2" sx={{ fontSize: "14px", letterSpacing: 0.5, width: "75%", color:"#A8A3B5", marginTop:'-15px' }} >
                {question.message}
              </Typography>
            </Grid>

            <Grid item>
              {" "}
              {/* TAGs de cada categoría*/}
              <Stack direction="row" spacing={1}>
                {question.tags.map((tag) => (
                  <Chip
                    label={<Box sx={{ color: "white" }}>{tag.name}</Box>}
                    key={tag.id}
                    variant="outlined"
                    size="small"
                    onClick={handleClick}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>

          <Grid item>
            <Typography variant="subtitle1" component="div" color="pink">
              Carita Feliz :)
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
