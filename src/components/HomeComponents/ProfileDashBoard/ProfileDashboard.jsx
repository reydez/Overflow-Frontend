import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Typography, Box, List, CardMedia, /* FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Switch*/ } from "@mui/material";

import Grid from "@mui/material/Grid";

import { IconButton } from "@mui/material";

import { img } from "../../../Controllers/styleUserProfile/styleUserProfile";
import { EditUserProfile } from "../UserProfile/EditUserProfile";

// import { PersonalInformation } from '../../../Controllers/styleUserProfile/informationProfile';
import TwitterIcon from "@mui/icons-material/Twitter";

import ContactPageIcon from '@mui/icons-material/ContactPage';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CircularStatic from './CircularWithLabel'
import { getUserProfile,/* finishedPost*/ } from "../../../redux/actions/user"
import PaginationProfile from './paginationOfProfileDashboard/PaginationProfile'


const ProfileDashboard = () => {
    const user = useSelector((state) => state.userReducer.user);
    const userDetail = useSelector((state) => state.userReducer.userDetail);


    const [questionsProfile, setQuestionsProfile] = useState([]);

    const [informationProfile, setInformationProfile] = useState({
        firstName: "",
        lastName: "",
        role: "",
        twitter: "",
        github: "",
        portfolio: "",
        linkedin: "",
    })


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserProfile(user.id));
    }, [dispatch, user.id]);



    const [editMode, setEditMode] = useState(false);

    const changeToFalse = () => {
        setEditMode(true);
    };

    return (
        <>

            {(editMode === true)
                ? (
                    <div>
                        <EditUserProfile
                            changeToFalse={changeToFalse}
                            setEditMode={setEditMode}
                            setInformationProfile={setInformationProfile}
                        />
                    </div>
                )
                : (
                    <Box
                        sx={{
                            width: '1100px',
                            height: '600px',
                            backgroundColor: 'background.profilePhotos'
                        }}
                    >
                        <Box sx={{ ml: 10, color: 'text.secondary' }}>
                            <Typography sx={{ position: "absolute", marginTop: '5px' }}>Perfil del Usuario</Typography>
                        </Box>
                        <Grid container sx={{ backgroundColor: 'background.fondoPerfil' }}> {/* CONTAINER GRAL */}

                            <Grid container sx={{ width: '96%', margin: '0 auto', marginTop: '30px' }}>
                                {/* CONTAINER FOTO + INFO USER */}
                                <Grid sx={{ width: '20%', height: '260px', backgroundColor: 'background.profilePhotos' }}>
                                    <Box sx={{ position: 'absolute', marginTop: 1, marginLeft: '5px', color: 'primary' }}>
                                        <Typography variant="caption" sx={{ position: 'relative', p: 1, m: 20, fontSize: "14px", color: 'text.btnEdit' }}>
                                            {/* Editar */}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ position: 'absolute', marginTop: "20px", }}>
                                        <Button
                                            onClick={changeToFalse}
                                            variant="caption"
                                            size="small"
                                            sx={{ position: 'relative', p: 0, ml: 20, fontSize: "10px", fontWeight: 1000, color: 'text.btnEdit', marginBottom: '5px' }}>...</Button>
                                    </Box>

                                    {img(user.image)}


                                    <Box sx={{ m: 6, marginTop: '200px', textAlign: 'center', color: 'text.secondary' }}>

                                        <Typography h1="h1">{userDetail?.role || 'Rellena los datos'}</Typography>
                                    </Box>


                                </Grid>
                                <Box sx={{ flexGrow: 1, bgcolor: 'background.profilePhotos', ml: 4 }}>
                                    <Grid container sx={{}}>
                                        <Box sx={{ position: 'absolute', fontFamily: 'Segoe UI Symbol', fontSize: '11px', p: 2, ml: 2, color: 'text.btnEdit', fontWeight: 500 }}>Portfolio</Box>
                                        <Grid item xs={3} sx={{ p: 1, ml: 4, marginTop: 4, backgroundColor: 'background.informationProfile', height: '45px' }}>
                                            <Box sx={{ height: '20px' }}>{!userDetail?.portfolio ? 'Rellena los datos' : 'Dato completado'}</Box>

                                            {/* {PersonalInformation(user)} */}


                                        </Grid>
                                        <Box sx={{ position: 'absolute', fontFamily: 'Segoe UI Symbol', fontSize: '11px', p: 2, ml: 34, color: 'text.btnEdit', fontWeight: 500 }}>GitHub</Box>
                                        <Grid item xs={3} sx={{ p: 1, ml: 4, marginTop: 4, backgroundColor: 'background.informationProfile', height: '45px' }}>
                                            <Box sx={{ height: '20px' }}>{!userDetail?.github ? 'Rellena los datos' : 'Dato completado'}</Box>

                                            {/* {PersonalInformation(user)} */}


                                        </Grid>

                                        {/* {aca esta la rueda de de datos cargados} */}
                                        <Box sx={{ position: 'absolute', marginLeft: '535px', marginTop: '40px' }}>
                                            <CircularStatic
                                                informationProfile={informationProfile}
                                                userDetail={userDetail}
                                            />
                                        </Box>
                                        <Grid sx={{ bgcolor: 'background.white' }}>








                                        </Grid>
                                    </Grid>

                                    <Grid container sx={{}}>
                                        <Box sx={{ position: 'absolute', fontFamily: 'Segoe UI Symbol', fontSize: '11px', p: 2, ml: 2, color: 'text.btnEdit', fontWeight: 500 }}>Nombre</Box>
                                        <Grid item xs={3} sx={{ p: 1, ml: 4, marginTop: 4, bgcolor: 'background.informationProfile', height: '45px' }}>
                                            <Box sx={{ height: '20px' }}>{userDetail?.first_name || 'Rellena los datos'}</Box>

                                            {/* {PersonalInformation(user)} */}


                                        </Grid>

                                        <Box sx={{ position: 'absolute', fontFamily: 'Segoe UI Symbol', fontSize: '11px', p: 2, ml: 34, color: 'text.btnEdit', fontWeight: 500 }}>Linkedin</Box>
                                        <Grid item xs={3} sx={{ p: 1, ml: 4, marginTop: 4, backgroundColor: 'background.informationProfile', height: '45px' }}>
                                            <Box sx={{ height: '20px' }}>{!userDetail?.linkedin ? 'Rellena los datos' : 'Dato completado'}</Box>

                                            {/* {PersonalInformation(user)} */}



                                        </Grid>


                                        <Grid sx={{ marginTop: 4, bgcolor: 'background.white' }}>

                                            <Typography sx={{ position: 'absolute', p: 1, ml: 8, marginTop: '15px', fontSize: '12px', color: 'text.btnEdit' }}></Typography>

                                            {/* {PersonalInformation(user)} */}



                                        </Grid>
                                    </Grid>

                                    <Grid container sx={{}}>
                                        <Box sx={{ position: 'absolute', fontFamily: 'Segoe UI Symbol', fontSize: '11px', p: 2, ml: 2, color: 'text.btnEdit', fontWeight: 500 }}>Apellido</Box>
                                        <Grid item xs={3} sx={{ p: 1, ml: 4, marginTop: 4, backgroundColor: 'background.informationProfile', height: '45px' }}>
                                            <Box sx={{ height: '20px' }}>{userDetail?.last_name || 'Rellena los datos'}</Box>

                                            {/* {PersonalInformation(user)} */}


                                        </Grid>
                                        <Box sx={{ position: 'absolute', fontFamily: 'Segoe UI Symbol', fontSize: '11px', p: 2, ml: 34, color: 'text.btnEdit', fontWeight: 500 }}>Twitter</Box>
                                        <Grid item xs={3} sx={{ p: 1, ml: 4, marginTop: 4, backgroundColor: 'background.informationProfile', height: '45px' }}>
                                            <Box sx={{ height: '20px' }}>{!userDetail?.twitter ? 'Rellena los datos' : 'Dato completado'}</Box>

                                            {/* {PersonalInformation(user)} */}


                                        </Grid>






                                        <Box sx={{ position: 'absolute' }}></Box>
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

                                            {/* {PersonalInformation(user)} */}


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
                                }}
                            >
                                {" "}
                                {/* BARRA CONTIENE SUB-MENU */}
                                <List sx={{ margin: '5px 0px', textAlign: "center" }}>
                                    {" "}
                                    {/* LISTA DEL SUB-MENU */}
                                    <Button sx={{ color: "text.btnEdit", backgroundColor: 'background.buttons', marginLeft: '15px', border: 'solid 1px ' }}>Preguntas Realizadas</Button>
                                    <Button sx={{ color: "text.btnEdit", backgroundColor: 'background.buttons', marginLeft: '15px', border: 'solid 1px ' }}>Respuestas Realizadas</Button>
                                    <Button sx={{ color: "text.btnEdit", backgroundColor: 'background.buttons', marginLeft: '15px', border: 'solid 1px ' }}>Preguntas Favoritas</Button>
                                    <Button sx={{ color: "text.btnEdit", backgroundColor: 'background.buttons', marginLeft: '15px', border: 'solid 1px ' }}>Likes</Button>
                                </List>
                            </Grid>


                            <Grid
                                container
                                sx={{
                                    padding: "10px",
                                    boder: '10px solid'
                                }}
                            >
                                {questionsProfile?.map((p) => {

                                    return (
                                        <Grid container
                                            key={p.id}
                                            sx={{
                                                width: '1133px',
                                                height: "55px",
                                                marginLeft: '10px',
                                                marginTop: '12px',
                                                padding: '14px 0px',
                                                borderRadius: '4px',
                                                backgroundColor: "background.mapeado",
                                                color: "text.btnEdit"
                                            }}
                                        >
                                            {" "}

                                            <Grid sx={{ width: "10%" }}>
                                            </Grid>

                                            <Grid
                                                sx={{ width: "10%" }}
                                            >
                                                <CardMedia
                                                    sx={{
                                                        position: "absolute",
                                                        width: "35px",
                                                        height: "35px",
                                                        borderRadius: "75px",
                                                        marginLeft: "4px",
                                                        marginRight: '20px',
                                                        border: "2px solid",
                                                        marginTop: "-6px",
                                                        color: "text.btnEdit"
                                                    }}
                                                    component="img"
                                                    // height="294"
                                                    image={user?.image}
                                                    alt="Paella dish"
                                                />
                                                {/* {user.image} */}
                                            </Grid>
                                            <Grid sx={{ width: "22%" }}> {p?.title.substring(0, 40)} </Grid>
                                            <Grid sx={{ width: "30%" }}> {p?.message.substring(0, 40)} </Grid>
                                            <Grid sx={{ width: "15%" }}> Respuestas </Grid>
                                            <Grid sx={{ width: "10%" }}> Likes/Views </Grid>
                                        </Grid>
                                    )
                                })}
                                <PaginationProfile
                                    posts={userDetail.posts}
                                    setQuestionsProfile={(q) => setQuestionsProfile(q)}
                                // questionsProfile={questionsProfile}
                                />




                            </Grid>
                        </Grid >
                    </Box >
                )
            }
        </>
    );
};

export default ProfileDashboard;
