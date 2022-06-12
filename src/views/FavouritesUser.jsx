import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Grid, List } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getFavorite } from "../redux/actions/favourite";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.mode === "dark" ? "#413A66" : "#A8A3B5",
    color: theme.palette.mode === "dark" ? "#EBEFFE" : "#413A66",
    textAlign: "center",
    paddingleft: "300px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.mode === "dark" ? "#413A66" : "#A8A3B5",
    color: theme.palette.mode === "dark" ? "#A8A3B5" : "#413A66",
  },

  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function FavouritesUser() {
  const favorite = useSelector((state) => state.favouritesReducer.favorites);


  const user = useSelector((state) => state.userReducer.user);
  
/* console.log(user) */


  /* const [favouriteUser, setFavoriteUser]= useState(); */

  const dispatch = useDispatch();
  
  useEffect(() => {
    /*  e.preventDefault(); */
    dispatch(getFavorite(user.id));
  }, [dispatch]);
  

 /*  console.log(favorite) */
 /* console.log(favorite.Favorites) */
/*   console.log(Object.keys(favorite).map(item => item.favorite)); */
  return (
    <div>
      <Grid
        sx={{
          width: "96%",
          height: "60px",
          margin: "0 auto",
          marginTop: "20px",
          backgroundColor: "#4B4171",
          color: "#FFFFFF",
        }}
      >
        {" "}
        {/* BARRA CONTIENE SUB-MENU */}
        <List sx={{ textAlign: "center" }}>
          {" "}
          {/* LISTA DEL SUB-MENU */}
          {/* <Button sx={{ color: '#D81B60' }}>Preguntas Realizadas</Button> */}
          <Button sx={{ color: "#fff" }}>Respuestas Realizadas</Button>
          <Button sx={{ color: "#fff" }}>Preguntas Favoritas</Button>
          <Button sx={{ color: "#fff" }}>Usuarios Favoritos</Button>
          {/* <Button sx={{ color: '#fff'}}>Likes</Button> */}
        </List>
      </Grid>
      <TableContainer component={TableRow}>
        <Table
          sx={{
            width: "170%",
            height: "60px",
            margin: "0 auto",
            marginTop: "20px",
            backgroundColor: "#4B4171",
          }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow sx={{ width: "170%", backgroundColor: "#413A66" }}>
              <StyledTableCell align="center">
                Posteos Favoritos
              </StyledTableCell>
              <StyledTableCell align="center">
                Nombre de Usuarios
              </StyledTableCell>
              <StyledTableCell align="center">
                Posteos Favoritos
              </StyledTableCell>
              <StyledTableCell align="center">Likes Totales</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           {/*  {favorite.Favorites.map((el, index) => (
              <StyledTableRow key={el.id}>
                <StyledTableCell align="center">
               {el.commentOrPost}
                </StyledTableCell>
                 <StyledTableCell align="center">{el.user.full_name}</StyledTableCell>
                <StyledTableCell align="center">{el.user.full_name}</StyledTableCell>
                <StyledTableCell align="center">{el.user.length}</StyledTableCell>
               
              </StyledTableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default FavouritesUser;
