import React, {useEffect, useState} from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Grid, List } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {getFavorite} from "../redux/actions/favourite";

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

  const favorite = useSelector((state) => state.favouritesReducer.favourites);
  const user = useSelector((state) => state.userReducer.user)
  const idUser = useSelector((state) => state.userReducer.user.id);

  console.log(idUser)
  const dispatch = useDispatch()
 
  useEffect(() => {
      dispatch(getFavorite(idUser));
  }, [dispatch]);

  console.log(favorite);
 
 
 
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
        <List sx={{  textAlign: "center" }}>
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
            <TableRow sx={{ width: "170%", backgroundColor: "#413A66", }}>
              <StyledTableCell align="center">Posteos Favoritos</StyledTableCell>
              <StyledTableCell align="center">
                Nombre de Usuarios
              </StyledTableCell>
              <StyledTableCell align="center">Posteos Favoritos</StyledTableCell>
              <StyledTableCell align="center">Likes Totales</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                
              </StyledTableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default FavouritesUser;
