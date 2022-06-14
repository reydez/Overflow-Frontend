import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Typography, Box, List } from "@mui/material";

import Grid from "@mui/material/Grid";

import { IconButton } from "@mui/material";

import { img } from "../../../Controllers/styleUserProfile/styleUserProfile";
import { EditUserProfile } from "./UserProfile/EditUserProfile";

import TwitterIcon from "@mui/icons-material/Twitter";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EditIcon from '@mui/icons-material/Edit';

import { getUserProfile } from "../../../redux/actions/user";
import PaginadoPreguntas from "./paginationOfProfileDashboard/PaginadoPreguntas";
import PaginadoRespuestas from "./paginationOfProfileDashboard/paginadoRespuestas";


const ProfileDashboard = () => {

    const dispatch = useDispatch()

    const user = useSelector((state) => state.userReducer.user);
    const userDetail = useSelector((state) => state.userReducer.userDetail);

    const [editMode, setEditMode] = useState(false);
    const [questionsProfile, setQuestionsProfile] = useState([]);

    const [commentsProfile, setCommentsProfile] = useState([]);



    const changeToFalse = () => {
        setEditMode(true);
    };

    useEffect(() => {
        dispatch(getUserProfile(user.id));
    }, [dispatch, user.id]);


    //! ------------------------- CheckBoxes-----------------------

    const [moduleSelected, setModuleSelected] = useState("selectModule");

    const [preguntas, setPreguntas] = useState(false);
    const [comentarios, setComentarios] = useState(false);
    const [favoritos, setFavoritos] = useState(false);

    const handleOnChange = (e) => {
        setModuleSelected(e.target.value);
    };


    useEffect(() => {
        moduleSelected === "preguntas"
            ? setPreguntas(true)
            : setPreguntas(false);
        moduleSelected === "respuestas"
            ? setComentarios(true)
            : setComentarios(false);
        moduleSelected === "likes"
            ? setFavoritos(true)
            : setFavoritos(false);
    }, [moduleSelected]);

    //! ------------------------- CheckBoxes-----------------------


    return (
        <>

            {(editMode === true)
                ? (
                    <EditUserProfile
                        changeToFalse={changeToFalse}
                        setEditMode={setEditMode}
                    />
                )
                : (
                    <Box
                        sx={{
                            width: '1100px',
                            // height: '800px',
                            backgroundColor: 'background.profilePhotos',
                            borderRadius: '12px'
                        }}
                    >
                        <Box sx={{ ml: 10, color: 'text.secondary' }}>
                            <Typography sx={{ position: "absolute", marginTop: '5px' }}></Typography>
                        </Box>
                        <Grid container sx={{ backgroundColor: 'background.fondoPerfil', borderRadius: '12px' }}> {/* CONTAINER GRAL */}

                            <Grid container sx={{ width: '96%', margin: '0 auto', marginTop: '30px' }}>

                                <Grid sx={{ width: '20%', height: '260px', backgroundColor: 'background.profilePhotos', borderRadius: '5px' }}>
                                    <Box sx={{ position: 'absolute', marginTop: 1, marginLeft: '6px', color: 'primary' }}>
                                        <Typography variant="caption" sx={{ position: 'relative', p: 1, m: 20, fontSize: "14px", color: 'text.btnEdit' }}>

                                        </Typography>
                                    </Box>
                                    <Box sx={{ position: 'absolute', marginTop: "5px" }}>
                                        <Button
                                            onClick={changeToFalse}
                                            variant="caption"
                                            size="small"
                                            sx={{ position: 'relative', p: 0, ml: 20, fontSize: "10px", fontWeight: 1000, color: 'text.btnEdit', marginBottom: '5px', marginLeft: '5px' }}><EditIcon /></Button>
                                    </Box>

                                    {img(user.image)}

                                    <Box sx={{ m: 6, marginTop: '200px', textAlign: 'center', color: 'text.secondary' }}>
                                        <Typography h1="h1">{userDetail?.role || 'Rellena los datos'}</Typography>
                                    </Box>
                                </Grid>


                                <Box sx={{ flexGrow: 1, bgcolor: 'background.profilePhotos', ml: 4, borderRadius: '6px' }}>
                                    <Grid container sx={{}}>
                                        <Box sx={{ position: 'absolute', fontFamily: 'Segoe UI Symbol', fontSize: '11px', p: 2, ml: 2, color: 'text.btnEdit', fontWeight: 500 }}>Portfolio</Box>
                                        <Grid item xs={3} sx={{ p: 1, ml: 4, marginTop: 4, backgroundColor: 'background.informationProfile', height: '45px', borderRadius: '3px' }}>
                                            <Box sx={{ height: '20px' }}>{!userDetail?.portfolio ? 'Rellena los datos' : 'Dato completado'}</Box>
                                        </Grid>

                                        <Box sx={{ position: 'absolute', fontFamily: 'Segoe UI Symbol', fontSize: '11px', p: 2, ml: 34, color: 'text.btnEdit', fontWeight: 500 }}>GitHub</Box>
                                        <Grid item xs={3} sx={{ p: 1, ml: 4, marginTop: 4, backgroundColor: 'background.informationProfile', height: '45px', borderRadius: '3px' }}>
                                            <Box sx={{ height: '20px' }}>{!userDetail?.github ? 'Rellena los datos' : 'Dato completado'}</Box>

                                            {/* {PersonalInformation(user)} */}


                                            {/* {aca esta la rueda de de datos cargados} */}
                                            {/* 
                                            </Grid>

                                                <Box sx={{ position: 'absolute', marginLeft: '535px', marginTop: '40px' }}>
                                                    <CircularStatic
                                                        informationProfile={informationProfile}
                                                        userDetail={userDetail}
                                                    />
                                                </Box>
                                            <Grid sx={{ bgcolor: 'background.white' }}> 
                                        */}
                                        </Grid>
                                    </Grid>

                                    <Grid container sx={{}}>
                                        <Box sx={{ position: 'absolute', fontFamily: 'Segoe UI Symbol', fontSize: '11px', p: 2, ml: 2, color: 'text.btnEdit', fontWeight: 500 }}>Nombre</Box>
                                        <Grid item xs={3} sx={{ p: 1, ml: 4, marginTop: 4, bgcolor: 'background.informationProfile', height: '45px', borderRadius: '3px' }}>
                                            <Box sx={{ height: '20px' }}>{userDetail?.first_name || 'Rellena los datos'}</Box>
                                        </Grid>

                                        <Box sx={{ position: 'absolute', fontFamily: 'Segoe UI Symbol', fontSize: '11px', p: 2, ml: 34, color: 'text.btnEdit', fontWeight: 500 }}>Linkedin</Box>
                                        <Grid item xs={3} sx={{ p: 1, ml: 4, marginTop: 4, backgroundColor: 'background.informationProfile', height: '45px', borderRadius: '3px' }}>
                                            <Box sx={{ height: '20px' }}>{!userDetail?.linkedin ? 'Rellena los datos' : 'Dato completado'}</Box>
                                        </Grid>
                                    </Grid>

                                    <Grid container sx={{}}>
                                        <Box sx={{ position: 'absolute', fontFamily: 'Segoe UI Symbol', fontSize: '11px', p: 2, ml: 2, color: 'text.btnEdit', fontWeight: 500 }}>Apellido</Box>
                                        <Grid item xs={3} sx={{ p: 1, ml: 4, marginTop: 4, backgroundColor: 'background.informationProfile', height: '45px', borderRadius: '3px' }}>
                                            <Box sx={{ height: '20px' }}>{userDetail?.last_name || 'Rellena los datoss'}</Box>
                                        </Grid>

                                        <Box sx={{ position: 'absolute', fontFamily: 'Segoe UI Symbol', fontSize: '11px', p: 2, ml: 34, color: 'text.btnEdit', fontWeight: 500 }}>Twitter</Box>
                                        <Grid item xs={3} sx={{ p: 1, ml: 4, marginTop: 4, backgroundColor: 'background.informationProfile', height: '45px', borderRadius: '3px' }}>
                                            <Box sx={{ height: '20px' }}>{!userDetail?.twitter ? 'Rellena los datos' : 'Dato completado'}</Box>
                                        </Grid>


                                        <Grid item xs={2} sx={{ p: 1, ml: 7, marginTop: 2 }}>
                                            <IconButton size="small" href={userDetail?.twitter} sx={{ color: 'text.secondary', "&:hover": { color: "text.btnEdit" } }} >
                                                <TwitterIcon />
                                            </IconButton>

                                            <IconButton size="small" href={userDetail?.linkedin} sx={{ color: 'text.secondary', "&:hover": { color: "text.btnEdit" } }}>
                                                <LinkedInIcon />
                                            </IconButton>

                                            <IconButton size="small" href={userDetail?.github} sx={{ color: 'text.secondary', "&:hover": { color: "text.btnEdit" } }}>
                                                <GitHubIcon />
                                            </IconButton>
                                            <IconButton size="small" href={userDetail?.portfolio} sx={{ marginLeft: '35px', color: 'text.secondary', "&:hover": { color: "text.btnEdit" } }}>
                                                <ContactPageIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            <Grid
                                sx={{
                                    width: "96%",
                                    height: "60px",
                                    margin: "0 auto",
                                    marginTop: "20px",
                                    backgroundColor: "background.profilePhotos",
                                    borderRadius: '6px'
                                }}
                            >
                                <List sx={{ margin: '5px 0px', textAlign: "center" }}>

                                    <Button
                                        onClick={handleOnChange}
                                        value={'preguntas'}
                                        sx={{ color: "text.btnEdit", backgroundColor: 'background.buttons', marginLeft: '15px', border: 'solid 1px ' }}>Preguntas</Button>
                                    <Button
                                        onClick={handleOnChange}
                                        value={'respuestas'}
                                        sx={{ color: "text.btnEdit", backgroundColor: 'background.buttons', marginLeft: '15px', border: 'solid 1px ' }}>Respuestas</Button>
                                    <Button
                                        onClick={handleOnChange}
                                        value={'likes'}
                                        sx={{ color: "text.btnEdit", backgroundColor: 'background.buttons', marginLeft: '15px', border: 'solid 1px ' }}>Likes</Button>
                                </List>
                            </Grid>


                            <Grid
                                container
                                sx={{
                                    padding: "10px"
                                }}
                            >
                                {preguntas && <PaginadoPreguntas
                                    questionsProfile={questionsProfile}
                                    posts={userDetail.posts}
                                    setQuestionsProfile={(q) => setQuestionsProfile(q)}
                                />}
                                {comentarios && <PaginadoRespuestas
                                    commentsProfile={commentsProfile}
                                    comments={userDetail.comments}
                                    setCommentsProfile={(q) => setCommentsProfile(q)}

                                />}


                            </Grid>
                        </Grid >
                    </Box >
                )
            }
        </>
    );
};

export default ProfileDashboard;