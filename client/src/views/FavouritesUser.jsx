import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Grid, List, Typography, Box, Button, CardMedia } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getFavorite } from "../redux/actions/favourite";
import { Link } from "react-router-dom";
import { Favorite } from "@mui/icons-material";
import LinkIcon from '@mui/icons-material/Link';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  /* esto lo que manipula es la cabeza de la tabla*/

  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.mode === "dark" ? "#392E57" : "#EBEFFE",
    color: theme.palette.mode === "dark" ? "#EBEFFE" : "#7165A0",
    textAlign: "center",
  },
  /* esto lo que manipula es el cuerpo de la tabla  */

  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.mode === "dark" ? "#EBEFFE" : "#4B4171",
  },
}));

/* entorno a la tabla */

const ContainerBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#392E57" : "#EBEFFE",
  color: theme.palette.mode === "dark" ? "#EBEFFE" : "#392E57",
  paddingBottom:"50px",
  borderRadius: "12px",
}));

/* alterna la seleccion de tabla uno si uno no  */

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.mode === "dark" ? "#4B4171" : "#EBEFFE",
    color: theme.palette.mode === "dark" ? "yellow" : "black",
    border:
      theme.palette.mode === "dark" ? "3px solid #BDD96C" : "3px solid #4B4171",
  },

  // hide last border controla el espacio de los td y th
  "&:last-child td, &:last-child th": {
    border: 0,

   /*  borderColor: theme.palette.mode === "dark" ? "#FFFFFF" : "#FFFFFF", */
  },
}));

/* contorno de texto Favoritos */

const StyleTypography = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#4B4171" : "#fff",
  color: theme.palette.mode === "dark" ? "#fff" : "black",
  padding: theme.palette.mode === "dark" ? "10px" : "10px",
  margin:
    theme.palette.mode === "dark" ? "10px 30px 0 30px" : "10px 30px 0 30px",
  /* margin: "20px", */
  borderRadius: "12px",
}));

const StyleTableContainer = styled(TableContainer)(({ theme }) => ({
  margin:
    theme.palette.mode === "dark" ? "10px auto" : "10px auto",
  /* margin: "20px", */
  padding: theme.palette.mode === "dark" ? "40px" : "40px",
  borderRadius: "12px",
}));

function FavouritesUser() {
  const favorite = useSelector((state) => state.favouritesReducer.favorites);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorite(user.id));
  }, []);

  return (
    <ContainerBox sx={{}}>
      <Grid
        sx={{
          width: "96%",
          height: "60px",
          margin: "0 auto",
          marginTop: "20px",
        }}
      >
        {" "}
        {/* BARRA CONTIENE SUB-MENU */}
        <List sx={{ textAlign: "center" }}>
          {" "}
          {/* LISTA DEL SUB-MENU */}
          <StyleTypography variant="h4" a component="div" gutterBottom sx={{}}>
            Mis Favoritos <Favorite size="large" sx={{ color: "red" }} />
          </StyleTypography>
        </List>
      </Grid>
      <StyleTableContainer
        component={TableRow}
        sx={{ display: "flex",  }}
      >
        <Table
          sx={{
            width: "170%",
            height: "60px",
            margin: "0 auto",
            marginTop: "20px",
          }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow >
              <StyledTableCell align="center">Titulo de Post</StyledTableCell>
              <StyledTableCell align="center">Creador</StyledTableCell>
              <StyledTableCell align="center">Fecha de posteo</StyledTableCell>
              <StyledTableCell align="center">Resuelto</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {favorite.Favorites?.map((el, index) => {
              const d = new Date(el.post.createdAt);
              var date = d.toLocaleDateString("ES");
              let state;
              if (el.post.closed) {
                state = "si";
              } else {
                state = "no";
              }
              return (
                <StyledTableRow key={el.id}>
                  <StyledTableCell align="center">

                    {/* renderizar el boton para redirigir a comentarios */}

                    {el.post.title}
                    <Link style={{ textDecoration: "none", color: "white" }}
                      to={`/visualize-question/${el.post.id}`}
                    >   <Button size="small" variant="outlined" color="success" endIcon={<LinkIcon fontSize="small" />}
                    >   ir</Button>
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                 <CardMedia
                    sx={{
                        position: "absolute",
                        width: "35px",
                        height: "35px",
                        borderRadius: "75px",
                        marginLeft: "40px",
                        marginRight: '60px',
                        border: "2px solid",
                        marginTop: "-16px",
                        color: "text.btnEdit"
                    }}
                    component="img"
                    image={user?.image} 
                    alt={user?.name}
                />
                {/* ACA QUISE PONER QUE LA IMAGEN LLEVE AL PERFIL DEL USUARIO PERO ME DIO CONFLICTOS EL CARDMEDIA */}


                {/* <Link style={{ textDecoration: "none", color: "white" }}
                      to={`/visualize-question/${el.post.id}`}
                    >   <Button size="small" variant="outlined" color="success" endIcon={<LinkIcon fontSize="small" />}
                    >   ir</Button>
                    </Link> */}
              {/*   <Button>
                  <Link to={this}>
                </Link>
                </Button> */}
               
                  </StyledTableCell>
                  <StyledTableCell align="center">{date}</StyledTableCell>
                  <StyledTableCell align="center">{state}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </StyleTableContainer>
    </ContainerBox>
  );
}

export default FavouritesUser;
