import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Container, Grid, List, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getFavorite } from "../redux/actions/favourite";
import { Link } from "react-router-dom";
import { Favorite } from "@mui/icons-material";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorite(user.id));
  }, []);
  


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

          {/* <Button sx={{ color: "#fff" }}>A DEFINIR</Button> */}
          <Typography variant="h4" component="div" gutterBottom>
            Mis Favoritos <Favorite size="large" sx={{ color: "#D81B60" }} />
          </Typography>

        </List>
      </Grid>
      <TableContainer
        component={TableRow}
        sx={{ display: "flex", paddingTop: 0 }}
      >
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
                    <Link
                      to={`/visualize-question/${el.post.id}`}
                      style={{ display: "block", color: "white" }}
                    >
                      {el.post.title}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {el.post.user.nick}
                  </StyledTableCell>
                  <StyledTableCell align="center">{date}</StyledTableCell>
                  <StyledTableCell align="center">{state}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default FavouritesUser;
