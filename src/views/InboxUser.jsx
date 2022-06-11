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
  styled
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteNotification, userInbox, cleanInbox, viewNotification } from "../redux/actions/inboxes";
import { Link } from "react-router-dom"

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
    const dispatch = useDispatch()
    const inbox = useSelector(state => state.inboxesReducer.inbox)
    const user = useSelector(state => state.userReducer.user)
    const pending = inbox.reduce((prev, curr) => curr.isActive? prev + 1 : prev, 0)
    const [change, setChange] = useState(false)

    // console.log(user)
    const clearNotification = (e) => {
        dispatch(deleteNotification(user.id, e.target.value));
        dispatch(userInbox(user.id))
        change ? setChange(false) : setChange(true)
    };

    const clearAll = () => {
        dispatch(cleanInbox(user.id));
        dispatch(userInbox(user.id))
        change ? setChange(false) : setChange(true)
    };

    const setStateNotification = (e) => {
        // console.log("ESTO ES LO QUE ESOTY BUSCANDO: ",e.target.attributes[1].nodeValue)
        dispatch(viewNotification(user.id, e.target.attributes[1].nodeValue))
    };

    React.useEffect(() => {
        dispatch(userInbox(user.id))
    }, [change, dispatch, user])

    // console.log("Este es mi buzon de entrada: ", inbox)
    // console.log(`Tienes ${inbox.length} mensajes en tu bandeja`)
    // console.log(`Notificaciones activas: ${pending}`)

    return (
        <div>
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
                <List sx={{  textAlign: "left" }}>
                {" "}
                {/* LISTA DEL SUB-MENU */}
                {/* <Button sx={{ color: '#D81B60' }}>Preguntas Realizadas</Button> */}
                {/* <Button sx={{ color: "#fff" }}>Respuestas Realizadas</Button>
                <Button sx={{ color: "#fff" }}>Preguntas Favoritas</Button> */}
                <Button sx={{ color: "#fff" }}><h1>BANDEJA DE ENTRADA</h1></Button>
                {/* <Button sx={{ color: '#fff'}}>Likes</Button> */}
                </List>
            </Grid>
                {
                    inbox.length ? 
                    <>
                    {pending ? <h3>Tienes {pending} notificaciones sin leer</h3> : null}
                    <button style={{marginLeft: "800px"}} onClick={clearAll}>Limiar bandeja</button>
                    </>
                    : null
                }
            <TableContainer component={TableRow}>
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
                    <TableRow sx={{ width: "170%", backgroundColor: "#413A66", }}>
                        <StyledTableCell align="center">Mensaje</StyledTableCell>
                        <StyledTableCell align="center">Post</StyledTableCell>
                        <StyledTableCell align="center">Estado</StyledTableCell>
                        <StyledTableCell align="center">Acciones</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {inbox.map((not) => {
                        let title;
                        let message;
                        let state;
                        let link;
                        if(!not.comment && !not.like.comment) {
                            message = `${not.like.user.full_name} le ha dado like a tu Pregunta!`;
                            title = not.like.post.title
                        } else if(!not.comment && !not.like.post) {
                            message = `${not.like.user.full_name} le ha dado like a tu Respuesta!`;
                            title = not.like.comment.post.title
                        } else if(!not.like) {
                            message = `${not.comment.user.full_name} ha respondido tu pregunta`;
                            title = not.comment.post.title
                        }
                        if(not.isActive) {
                            state = "Activa"
                        } else {
                            state = "Leída"
                        }
                        link = not.comment.post.id;
                        return (
                            <StyledTableRow>
                                    <StyledTableCell align="center">
                                        <Link 
                                        to={`/visualize-question/${link}`} 
                                        style={{ display: 'block' }} 
                                        value={not.id}
                                        onClick={(e) => setStateNotification(e)}
                                        >
                                            {message}
                                        </Link> 
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{title}</StyledTableCell>
                                    <StyledTableCell align="center">{state}</StyledTableCell>
                                    <button value={not.id} onClick={(e) => clearNotification(e)}>Limpiar</button>
                                </StyledTableRow>
                    )
                    })}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}