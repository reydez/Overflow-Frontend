import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardActions, CardContent, Button, Typography, Box, Card } from '@mui/material';
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
                    <Box
                        sx={{
                            width: '90%',
                            height: '80vh',
                            backgroundColor: 'background.white',
                            borderRadius: "5px",
                            display: "flex",
                            flexDirection: 'column',
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: 'column',
                            }}
                        >
                            {img(user.image)}

                            <Typography>
                                {name(user.full_name)}
                            </Typography>
                        </CardContent>
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: 'column',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'Segoe UI',
                                    marginLeft: "170px",
                                    marginTop: "80px",
                                }}
                            >
                                GitHub username: {<br />}
                                {user.nick}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'Segoe UI',
                                    marginLeft: "170px",
                                    marginTop: "40px",
                                }}
                            >
                                Email: {<br />}
                                {user.email}
                            </Typography>

                            <CardActions onClick={() => setEditMode(true)} >{editButton}</CardActions>
                            <CardActions>{vipButton}</CardActions>
                        </CardContent>

                    </Box>
                )
            }
        </>
    )
}

export default ProfileDashboard