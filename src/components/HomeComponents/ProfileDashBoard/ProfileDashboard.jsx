import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Typography, Box, List, CardMedia, FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Switch } from "@mui/material";

import Grid from "@mui/material/Grid";



import { name, img } from "../../../Controllers/styleUserProfile/styleUserProfile";
import { EditUserProfile } from "../UserProfile/EditUserProfile";

import { PersonalInformation } from '../../../Controllers/styleUserProfile/informationProfile';
import TwitterIcon from "@mui/icons-material/Twitter";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CircularStatic from './CircularWithLabel'
import { getUserProfile, finishedPost } from "../../../redux/actions/user"
import PaginationProfile from './paginationOfProfileDashboard/PaginationProfile'


const ProfileDashboard = () => {
    const user = useSelector((state) => state.userReducer.user);
    const userDetail = useSelector((state) => state.userReducer.userDetail);

    // const [finishedC, setFinishedC] = useState({
    //     finished: false
    // })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserProfile(user.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);



    const [editMode, setEditMode] = useState(false);

    const changeToFalse = () => {
        setEditMode(true);
    };

    // const handleChange = (event, id) => {
    //     console.log('he sido clicado', !event.target.clicked)

    //     // setFinishedC({
    //     //     ...finishedC,
    //     //     [event.target.name]: event.target.checked
    //     // });

    //     dispatch(finishedPost(id, !event.target.clicked))

    // };


    // console.log('Yo soy el detalle: ', userDetail.posts)
    // console.log(finishedC.finished)
    return (
        <>

            {(editMode === true)
                ? (
                    <div>
                        <EditUserProfile
                            changeToFalse={changeToFalse}
                            setEditMode={setEditMode}
                        />
                    </div>
                )
                : (
                    <Box
                        sx={{
                            width: '1200px',
                            // border: 'solid 1px red'
                        }}
                    >
                        <Box sx={{ ml: 8, color: 'text.secondary' }}>
                            <Typography sx={{ position: "absolute", }}>Perfil del Usuario</Typography>
                        </Box>
                        <Grid container sx={{ backgroundColor: 'background.fondoPerfil' }}> {/* CONTAINER GRAL */}

                            <Grid container sx={{ width: '96%', margin: '0 auto', marginTop: '30px' }}>
                                {/* CONTAINER FOTO + INFO USER */}
                                <Grid sx={{ width: '20%', height: '260px', backgroundColor: 'background.profilePhotos' }}>
                                    <Box sx={{ position: 'absolute', marginTop: 1, marginLeft: '5px', color: 'primary' }}>
                                        <Typography variant="caption" sx={{ position: 'relative', p: 1, m: 18, fontSize: "14px", color: 'text.btnEdit' }}>
                                            Editar
                                        </Typography>
                                    </Box>
                                    <Box sx={{ position: 'absolute', marginTop: "20px", }}>
                                        <Button
                                            onClick={changeToFalse}
                                            variant="caption"
                                            size="small"
                                            sx={{ position: 'relative', p: 0, ml: 18, fontSize: "10px", fontWeight: 1000, color: 'text.btnEdit', marginBottom: '5px' }}>...</Button>
                                    </Box>

                                    {img(user.image)}


                                    {/* <Typography sx={{ padding: '10px', border: 'solid 1px red', color: 'text.secondary', display: 'flex', textAlign: 'center', alignItems: 'left' }}> */}
                                    {/* {user.full_name} */}
                                    {name(user.first_name)}

                                    {/* </Typography> */}
                                    {/* <p style={{ textAlign: 'center' }}></p> */}
                                    {/* {name(user.full_name)} */}
                                </Grid>
                                <Box sx={{ flexGrow: 1, bgcolor: 'background.profilePhotos', ml: 4 }}>
                                    <Grid container sx={{}}>
                                        <Box sx={{ position: 'absolute', fontFamily: 'Segoe UI Symbol', fontSize: '11px', p: 2, ml: 2, color: 'text.btnEdit', fontWeight: 500 }}>GitHub Usuario</Box>
                                        <Grid item xs={3} sx={{ p: 1, ml: 4, marginTop: 4, backgroundColor: 'background.informationProfile' }}>
                                            <Box>github</Box>

                                            {/* {PersonalInformation(user)} */}


                                        </Grid>
                                        <Box sx={{ position: 'absolute', fontFamily: 'Segoe UI Symbol', fontSize: '11px', p: 2, ml: 32, color: 'text.btnEdit', fontWeight: 500 }}>GitHub link</Box>
                                        <Grid item xs={3} sx={{ p: 1, ml: 4, marginTop: 4, backgroundColor: 'background.informationProfile' }}>
                                            <Box>aca va el Github</Box>

                                            {/* {PersonalInformation(user)} */}


                                        </Grid>
                                        
                                        {/* {aca esta la rueda de de datos cargados} */}
                                        <Box  sx={{ position: 'absolute', p: 2, ml: 71}}> <CircularStatic /></Box>
                                        <Grid  sx={{  bgcolor: 'background.white' }}>
                                            <Typography sx={{position: 'absolute', p:1, ml:9, marginTop:'100px', fontSize:'10px', color:'text.secondary'}}> Perfil de usuario</Typography>    
                                             
                                            

                                            
                                            


                                        </Grid> 
                                    </Grid>

                                    <Grid container sx={{}}>
                                        <Box sx={{ position: 'absolute', fontFamily: 'Segoe UI Symbol', fontSize: '11px', p: 2, ml: 2, color: 'text.btnEdit', fontWeight: 500 }}>Nombre</Box>
                                        <Grid item xs={3} sx={{ p: 1, ml: 4, marginTop: 4, bgcolor: 'background.informationProfile' }}>
                                            <Box>aca va el nombre</Box>

                                            {/* {PersonalInformation(user)} */}


                                        </Grid>

                                        <Box sx={{ position: 'absolute', fontFamily: 'Segoe UI Symbol', fontSize: '11px', p: 2, ml: 32, color: 'text.btnEdit', fontWeight: 500 }}>Linkedin</Box>
                                        <Grid item xs={3} sx={{ p: 1, ml: 4, marginTop: 4, backgroundColor: 'background.informationProfile' }}>
                                            <Box>aca va el Linkedin</Box>

                                            {/* {PersonalInformation(user)} */}
                                            


                                        </Grid>

                                       
                                        <Grid sx={{ marginTop: 4, bgcolor: 'background.white' }}>
                                            
                                            <Typography sx={{position: 'absolute', p:1, ml:8, marginTop:'15px', fontSize:'12px', color:'text.btnEdit'}}> 50% completado... </Typography>  

                                            {/* {PersonalInformation(user)} */}
                                            


                                        </Grid>
                                    </Grid>

                                    <Grid container sx={{}}>
                                        <Box sx={{ position: 'absolute', fontFamily: 'Segoe UI Symbol', fontSize: '11px', p: 2, ml: 2, color: 'text.btnEdit', fontWeight: 500 }}>Apellido</Box>
                                        <Grid item xs={3} sx={{ p: 1, ml: 4, marginTop: 4, backgroundColor: 'background.informationProfile' }}>
                                            <Box>aca va el apellido</Box>

                                            {/* {PersonalInformation(user)} */}


                                        </Grid>
                                        <Box sx={{ position: 'absolute', fontFamily: 'Segoe UI Symbol', fontSize: '11px', p: 2, ml: 32, color: 'text.btnEdit', fontWeight: 500 }}>Twitter</Box>
                                        <Grid item xs={3} sx={{ p: 1, ml: 4, marginTop: 4, backgroundColor: 'background.informationProfile' }}>
                                            <Box>aca va el Twitter</Box>

                                            {/* {PersonalInformation(user)} */}


                                        </Grid>

                                        



                                        
                                        <Box  sx={{ position: 'absolute'}}></Box>
                                        <Grid item xs={2} sx={{ p: 1, ml: 7, marginTop: 2  }}>
                                            
                                            <IconButton size="small"  sx = {{ color: 'text.secondary', "&:hover": { color: "text.btnEdit" }  }} >
                                                <TwitterIcon />
                                                 </IconButton>

                                                 <IconButton size="small"  sx = {{ color: 'text.secondary', "&:hover": { color: "text.btnEdit" } }}>
                                                <LinkedInIcon />
                                                 </IconButton>

                                                 <IconButton size="small"  sx = {{ color: 'text.secondary', "&:hover": { color: "text.btnEdit" } }}>
                                                <GitHubIcon/>
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
                                    {/* <Button sx={{ color: "text.primary" }}>Usuarios Favoritos</Button> */}
                                    <Button sx={{ color: "text.btnEdit", backgroundColor: 'background.buttons', marginLeft: '15px', border: 'solid 1px ' }}>Likes</Button>
                                </List>
                            </Grid>


                            <Grid
                                container
                                sx={{
                                    width: "96%",
                                    backgroundColor: "background.default",
                                    margin: "0 auto",
                                    marginTop: "10px",
                                    // boder: '1px solid red'
                                }}
                            >
                                {userDetail.posts?.map((p) => {

                                    return (
                                        <Grid container
                                            key={p.id}
                                            sx={{
                                                width: '1133px',
                                                height: "55px",
                                                marginLeft: '10px',
                                                marginTop: '12px',
                                                // marginBottom: '10px',
                                                padding: '14px 0px',
                                                // border: 'solid 1px ',
                                                borderRadius: '4px',
                                                backgroundColor: "background.mapeado",
                                                color: "text.btnEdit"
                                            }}
                                        >
                                            {" "}

                                            <Grid sx={{ width: "10%" }}>

                                                {
                                                    /* <FormControl component="fieldset" variant="standard">
    
                                                        <FormGroup>
                                                            <FormControlLabel
                                                                control={
                                                                    <Switch checked={finishedC.finished} onChange={(e) => handleChange(e, p.id)} name='finished' />
                                                                } />
                                                        </FormGroup>
                                                    </FormControl>
                                                     */
                                                }
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
                                                    image={user.image}
                                                    alt="Paella dish"
                                                />
                                                {/* {user.image} */}
                                            </Grid>
                                            <Grid sx={{ width: "30%" }}> {p.title} </Grid>
                                            <Grid sx={{ width: "30%" }}> {p.message} </Grid>
                                            <Grid sx={{ width: "10%" }}> Respuestas </Grid>
                                            <Grid sx={{ width: "10%" }}> Likes/Views </Grid>
                                        </Grid>
                                    )
                                })}
                                <PaginationProfile />



                            </Grid>
                        </Grid>
                    </Box>
                )
            }
        </>
    );
};

export default ProfileDashboard;
