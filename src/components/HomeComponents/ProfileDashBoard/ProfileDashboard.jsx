import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
    CardActions,
    CardContent,
    Button,
    Typography,
    Box,
    Card,
    List,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import {
    name,
    botton,
    student,
    quantityQuestions,
    quantityAnswers,
    img,
    btnOne,
    btnTwo,
    btnThree,
    btnFour,
    btnFive,
    btnSix,
    editButton,
    vipButton,
} from "../../../Controllers/styleUserProfile/styleUserProfile";
import { EditUserProfile } from "../UserProfile/EditUserProfile";
import TwitterIcon from "@mui/icons-material/Twitter";
import { PersonalInformation } from '../../../Controllers/styleUserProfile/informationProfile'


const ProfileDashboard = () => {
    const user = useSelector((state) => state.userReducer.user);

    const [editMode, setEditMode] = useState(false);

    const changeToFalse = () => {
        setEditMode(false);
    };

    return (
        <>

            {editMode
                ? (
                    <div>
                        <EditUserProfile changeToFalse={changeToFalse} />
                    </div>
                )
                : (
                    <Box>
                        <Box sx={{ml:8, color: 'text.secondary'}}>
                        <Typography sx={{position: "absolute",}}>Perfil del Usuario</Typography>
                        </Box>
                        <Grid container sx={{ backgroundColor: 'background.fondoPerfil' }}> {/* CONTAINER GRAL */}
                        
                            <Grid container sx={{ width: '96%', margin: '0 auto', marginTop: '20px' }}>   {/* CONTAINER FOTO + INFO USER */}
                                <Grid sx={{ width: '20%', height: '260px', backgroundColor: 'background.profilePhotos' }}>
                                    <Box sx={{position: 'absolute', marginTop: 1, marginLeft: '5px', color: 'primary'}}>
                                    <Typography variant="caption" sx={{position: 'relative',p:1, m:18, fontSize: "14px", color: 'text.btnEdit'}}>Editar</Typography>
                                    </Box>
                                    <Box sx={{position: 'absolute', marginTop: "20px",}}>
                                    <Button variant="caption" size="small" sx={{position: 'relative', p:0, ml:18, fontSize: "10px", fontWeight: 1000, color: 'text.btnEdit'}}> . . .</Button>
                                    </Box>
                                    
                                    {img(user.image )}
                                    <Typography sx={{color: 'text.secondary'}}>{name(user.full_name)}</Typography>
                                    {/* <p style={{ textAlign: 'center' }}></p> */}
                                    {/* {name(user.full_name)} */}
                                </Grid>
                                <Grid item sx={{ width: '78%', marginLeft: '2%', backgroundColor: 'background.profilePhotos' }}>  <p style={{ textAlign: 'center' }}>Info de Usuario</p> </Grid>

                            </Grid>
                            <Grid
                                item
                                sx={{
                                    width: "78%",
                                    marginLeft: "2%",
                                    backgroundColor: "background.profilePhotos",
                                }}
                            >
                                {" "}
                                <p style={{ textAlign: "center" }}>Info de Usuario</p>{" "}
                            </Grid>
                        </Grid>
                        <Grid
                            sx={{
                                width: "96%",
                                height: "60px",
                                margin: "0 auto",
                                marginTop: "20px",
                                backgroundColor: "profileGrid",
                            }}
                        >
                            {" "}
                            {/* BARRA CONTIENE SUB-MENU */}
                            <List sx={{ textAlign: "center" }}>
                                {" "}
                                {/* LISTA DEL SUB-MENU */}
                                <Button sx={{ color: "#D81B60" }}>Preguntas Realizadas</Button>
                                <Button sx={{ color: "#fff" }}>Respuestas Realizadas</Button>
                                <Button sx={{ color: "#fff" }}>Preguntas Favoritas</Button>
                                <Button sx={{ color: "#fff" }}>Usuarios Favoritos</Button>
                                <Button sx={{ color: "#fff" }}>Likes</Button>
                            </List>
                        </Grid>
                        <Grid
                            container
                            sx={{
                                width: "96%",
                                backgroundColor: "#4B4171",
                                margin: "0 auto",
                                marginTop: "10px",
                            }}
                        >
                            {" "}
                            {/* CONTAINER RENGLONES DE ACTIVIDAD */}
                            <Grid container sx={{ height: "40px", border: "1px solid red" }}>
                                {" "}
                                {/* CADA RENGLON    -------- esto se deberia mapear*/}
                                <Grid sx={{ width: "10%" }}> Abierto </Grid>
                                <Grid sx={{ width: "10%" }}> Avatar </Grid>
                                <Grid sx={{ width: "30%" }}> Pregunta </Grid>
                                <Grid sx={{ width: "30%" }}> Mensaje </Grid>
                                <Grid sx={{ width: "10%" }}> Respuestas </Grid>
                                <Grid sx={{ width: "10%" }}> Likes/Views </Grid>
                            </Grid>
                            <Grid
                                container
                                sx={{
                                    height: "40px",
                                    marginTop: "10px",
                                    backgroundColor: "#413A66",
                                }}
                            >
                                {" "}
                                {/* CADA RENGLON    -------- esto se deberia mapear*/}
                                <Grid sx={{ width: "10%" }}> Abierto </Grid>
                                <Grid sx={{ width: "10%" }}> Avatar </Grid>
                                <Grid sx={{ width: "30%" }}> Pregunta </Grid>
                                <Grid sx={{ width: "30%" }}> Mensaje </Grid>
                                <Grid sx={{ width: "10%" }}> Respuestas </Grid>
                                <Grid sx={{ width: "10%" }}> Likes/Views </Grid>
                            </Grid>
                            <Grid container sx={{ height: "40px", marginTop: "10px" }}>
                                {" "}
                                {/* CADA RENGLON    -------- esto se deberia mapear*/}
                                <Grid sx={{ width: "10%" }}> Abierto </Grid>
                                <Grid sx={{ width: "10%" }}> Avatar </Grid>
                                <Grid sx={{ width: "30%" }}> Pregunta </Grid>
                                <Grid sx={{ width: "30%" }}> Mensaje </Grid>
                                <Grid sx={{ width: "10%" }}> Respuestas </Grid>
                                <Grid sx={{ width: "10%" }}> Likes/Views </Grid>
                            </Grid>
                            <Grid
                                container
                                sx={{
                                    height: "40px",
                                    marginTop: "10px",
                                    backgroundColor: "#413A66",
                                }}
                            >
                                {" "}
                                {/* CADA RENGLON    -------- esto se deberia mapear*/}
                                <Grid sx={{ width: "10%" }}> Abierto </Grid>
                                <Grid sx={{ width: "10%" }}> Avatar </Grid>
                                <Grid sx={{ width: "30%" }}> Pregunta </Grid>
                                <Grid sx={{ width: "30%" }}> Mensaje </Grid>
                                <Grid sx={{ width: "10%" }}> Respuestas </Grid>
                                <Grid sx={{ width: "10%" }}> Likes/Views </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </>
    );
};

export default ProfileDashboard;
