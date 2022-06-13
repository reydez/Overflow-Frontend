import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Grid,
  List,
  styled,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNotification,
  userInbox,
  cleanInbox,
  viewNotification,
} from "../redux/actions/inboxes";
import { Link } from "react-router-dom";

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

export default function InboxUser() {
  const dispatch = useDispatch();
  const inbox = useSelector((state) => state.inboxesReducer.inbox);
  const user = useSelector((state) => state.userReducer.user);
  const pending = inbox.reduce(
    (prev, curr) => (curr.isActive ? prev + 1 : prev),
    0
  );
  const [change, setChange] = useState(false);

  // console.log(inbox)
  const clearNotification = (e) => {
    dispatch(deleteNotification(user.id, e.target.value));
    dispatch(userInbox(user.id));
    change ? setChange(false) : setChange(true);
  };

  const clearAll = () => {
    dispatch(cleanInbox(user.id));
    dispatch(userInbox(user.id));
    change ? setChange(false) : setChange(true);
  };

  const setStateNotification = (e) => {
    // console.log("ESTO ES LO QUE ESOTY BUSCANDO: ",e.target.attributes[1].nodeValue)
    dispatch(viewNotification(user.id, e.target.attributes[1].nodeValue));
  };

  React.useEffect(() => {
    const existUser = () => {
      if(user.id) {
        dispatch(userInbox(user.id));
      }
    };
    existUser()
  }, [change, dispatch, user]);

  // console.log("Este es mi buzon de entrada: ", inbox)
  // console.log(`Tienes ${inbox.length} mensajes en tu bandeja`)
  // console.log(`Notificaciones activas: ${pending}`)

  return (
    <div
      style={{
        width: "inheret",
        height: "85vh",
      }}
    >
      <Grid
        sx={{
          width: "96%",
          height: "100px",
          margin: "0 auto",
          marginTop: "20px",
          backgroundColor: "#4B4171",
          color: "#FFFFFF",
        }}
      >
        {" "}
        {/* BARRA CONTIENE SUB-MENU */}
        <List sx={{ textAlign: "left" }}>
          {" "}
          {/* LISTA DEL SUB-MENU */}
          {/* <Button sx={{ color: '#D81B60' }}>Preguntas Realizadas</Button> */}
          {/* <Button sx={{ color: "#fff" }}>Respuestas Realizadas</Button>
                <Button sx={{ color: "#fff" }}>Preguntas Favoritas</Button> */}
          <Button sx={{ color: "#fff" }}>
            <h1>BANDEJA DE ENTRADA</h1>
          </Button>
          {/* <Button sx={{ color: '#fff'}}>Likes</Button> */}
        </List>
      </Grid>
      {inbox.length ? (
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          {pending ? (
            <h3 style={{ marginRight: ".5em" }}>
              Tienes {pending} notificaciones sin leer
            </h3>
          ) : null}
          <button
            style={{
              border: "1px solid grey",
              marginRight: ".5em",
              padding: ".5em",
              borderRadius: "10px",
              cursor: "pointer",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
            onClick={clearAll}
          >
            Limpiar bandeja
          </button>
        </div>
      ) : null}
      <TableContainer
        component={TableRow}
        sx={{ display: "flex", paddingTop: "0" }}
      >
        <Table
          sx={{
            width: "170%",
            height: "auto",
            margin: "0 auto",
            marginTop: "20px",
            backgroundColor: "#4B4171",
          }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow sx={{ width: "170%", backgroundColor: "#413A66" }}>
              <StyledTableCell align="center">Mensaje</StyledTableCell>
              <StyledTableCell align="center">Post</StyledTableCell>
              <StyledTableCell align="center">Estado</StyledTableCell>
              <StyledTableCell align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.id && inbox.length ? inbox.map((not) => {
              let title;
              let message;
              let state;
              let link;
              if (!not.comment && !not.like.comment) {
                message = `${not.like.user.full_name} le ha dado like a tu Pregunta!`;
                title = not.like.post.title;
              } else if (!not.comment && !not.like.post) {
                message = `${not.like.user.full_name} le ha dado like a tu Respuesta!`;
                title = not.like.comment.post.title;
              } else if (!not.like) {
                message = `${not.comment.user.full_name} ha respondido tu pregunta`;
                title = not.comment.post ? not.comment.post.title : "ELIMINADO";
              }
              if (not.isActive) {
                state = "Activa";
              } else {
                state = "Leída";
              }
              // console.log(not.comment)
              link = not.comment ? not.comment.post ? not.comment.post.id : null : not.like.post ? not.like.post.id : not.like.comment.id;
              return (
                <StyledTableRow>
                  <StyledTableCell align="center">
                    <Link
                      to={link === null ? `/questions` : `/visualize-question/${link}`}
                      style={{ display: "block", color: "white" }}
                      value={not.id}
                      onClick={(e) => setStateNotification(e)}
                    >
                      {message}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="center">{title}</StyledTableCell>
                  <StyledTableCell align="center">{state}</StyledTableCell>
                  <StyledTableCell align="center">
                    <button
                      style={{
                        border: "1px solid grey",
                        marginRight: ".5em",
                        padding: ".5em",
                        borderRadius: "10px",
                        cursor: "pointer",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                      }}
                      value={not.id}
                      onClick={(e) => clearNotification(e)}
                    >
                      Limpiar
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              );
            }) : null}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
