import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardActions, CardContent, Button, Typography, Box, Card, List } from '@mui/material';
import Grid from '@mui/material/Grid' 
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
    vipButton
} from '../../../Controllers/styleUserProfile/styleUserProfile';
import { EditUserProfile } from "../UserProfile/EditUserProfile";
import TwitterIcon from '@mui/icons-material/Twitter';

const ProfileDashboard = () => {

    const user = useSelector(state => state.userReducer.user);
    // console.log(user)
    const [editMode, setEditMode] = useState(false);

    const changeToFalse = () => {
        setEditMode(false);
    }


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
                <Grid container  sx={{  backgroundColor: 'background.fondoPerfil' }}> {/* CONTAINER GRAL */}
                  <Grid container sx={{  width: '96%', margin: '0 auto', marginTop: '20px'}}>   {/* CONTAINER FOTO + INFO USER */}
                    <Grid sx={{width: '20%', height: '260px', backgroundColor: '#423B67'}}> <p style={{textAlign: 'center'}}>Foto</p></Grid> 
                    <Grid item sx={{width: '78%', marginLeft: '2%', backgroundColor: '#423B67'}}>  <p style={{textAlign: 'center'}}>Info de Usuario</p> </Grid>
                  </Grid>

                  <Grid sx={{ width: '96%', height: '60px',margin: '0 auto', marginTop:'20px', backgroundColor:'#4B4171' }}>  {/* BARRA CONTIENE SUB-MENU */}
                    <List sx={{ textAlign:'center' }}>  {/* LISTA DEL SUB-MENU */}
                      <Button sx={{ color: '#D81B60' }}>Preguntas Realizadas</Button>
                      <Button sx={{ color: '#fff'}}>Respuestas Realizadas</Button>
                      <Button sx={{ color: '#fff'}}>Preguntas Favoritas</Button>
                      <Button sx={{ color: '#fff'}}>Usuarios Favoritos</Button>
                      <Button sx={{ color: '#fff'}}>Likes</Button>
                    </List>
                  </Grid> 

                  <Grid container sx={{width: '96%',backgroundColor: '#4B4171', margin: '0 auto', marginTop:'10px'}}> {/* CONTAINER RENGLONES DE ACTIVIDAD */}
                    <Grid container sx={{ height:'40px', border: '1px solid red' }}> {/* CADA RENGLON    -------- esto se deberia mapear*/}
                      <Grid sx={{ width:'10%' }}> Abierto </Grid>
                      <Grid sx={{ width:'10%' }}> Avatar </Grid>
                      <Grid sx={{ width:'30%' }}> Pregunta </Grid>
                      <Grid sx={{ width:'30%' }}> Mensaje </Grid>
                      <Grid sx={{ width:'10%' }}> Respuestas </Grid>
                      <Grid sx={{ width:'10%' }}> Likes/Views </Grid>
                    </Grid>

                    <Grid container sx={{ height:'40px', marginTop:'10px', backgroundColor:'#413A66' }}> {/* CADA RENGLON    -------- esto se deberia mapear*/}
                      <Grid sx={{ width:'10%' }}> Abierto </Grid>
                      <Grid sx={{ width:'10%' }}> Avatar </Grid>
                      <Grid sx={{ width:'30%' }}> Pregunta </Grid>
                      <Grid sx={{ width:'30%' }}> Mensaje </Grid>
                      <Grid sx={{ width:'10%' }}> Respuestas </Grid>
                      <Grid sx={{ width:'10%' }}> Likes/Views </Grid>
                    </Grid>

                    <Grid container sx={{ height:'40px', marginTop:'10px'}}> {/* CADA RENGLON    -------- esto se deberia mapear*/}
                      <Grid sx={{ width:'10%' }}> Abierto </Grid>
                      <Grid sx={{ width:'10%' }}> Avatar </Grid>
                      <Grid sx={{ width:'30%' }}> Pregunta </Grid>
                      <Grid sx={{ width:'30%' }}> Mensaje </Grid>
                      <Grid sx={{ width:'10%' }}> Respuestas </Grid>
                      <Grid sx={{ width:'10%' }}> Likes/Views </Grid>
                    </Grid>

                    <Grid container sx={{ height:'40px', marginTop:'10px',backgroundColor:'#413A66' }}> {/* CADA RENGLON    -------- esto se deberia mapear*/}
                      <Grid sx={{ width:'10%' }}> Abierto </Grid>
                      <Grid sx={{ width:'10%' }}> Avatar </Grid>
                      <Grid sx={{ width:'30%' }}> Pregunta </Grid>
                      <Grid sx={{ width:'30%' }}> Mensaje </Grid>
                      <Grid sx={{ width:'10%' }}> Respuestas </Grid>
                      <Grid sx={{ width:'10%' }}> Likes/Views </Grid>
                    </Grid>



                  </Grid>
                  

                </Grid>
                </Box>
              )
          }
      </>
    )
}

export default ProfileDashboard



// <Box
//                 sx={{
//                     width: '80%',
//                     backgroundColor: 'background.dark',
//                     padding: "50px",
//                     borderRadius: "5px",
//                     border: '1px solid red'
//                 }}
//               >
//                 <CardContent sx={{border: '1px solid green'}}>
//                   <Card alt="Remy Sharp" src="">
//                     {img(user.image)}
//                   </Card>
//                   <Typography>
//                       {name(user.full_name)}
//                   </Typography>

//                   <Typography
//                       sx={{
//                           fontWeight: 400,
//                           fontFamily: 'Segoe UI',
//                           marginLeft: "170px",
//                           marginTop: "80px",
//                       }}
//                   >
//                       GitHub username: {<br />}
//                       {user.nick}
//                   </Typography>
//                   <Typography
//                       sx={{
//                           fontWeight: 400,
//                           fontFamily: 'Segoe UI',
//                           marginLeft: "170px",
//                           marginTop: "40px",
//                       }}
//                   >
//                       Email: {<br />}
//                       {user.email}
//                   </Typography>

//                   <CardActions onClick={() => setEditMode(true)} >{editButton}</CardActions>
//                   <CardActions>{vipButton}</CardActions>
//                 </CardContent>

//               </Box>