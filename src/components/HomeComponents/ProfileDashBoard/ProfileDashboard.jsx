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
import { EditUserProfile } from "../UserProfile/EditUserProfile"

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
                            width: '80%',
                            height: '700%',
                            // backgroundColor: 'secondary',
                            padding: "50px",
                            borderRadius: "5px",
                        }}
                    >
                        <CardContent>
                            <Card alt="Remy Sharp" src="">
                                {img(user.image)}
                            </Card>
                            <Typography>
                                {name(user.full_name)}
                            </Typography>

                            <Typography
                                sx={{
                                    marginLeft: "170px",
                                    marginTop: "80px",
                                }}
                            >
                                GitHub username: {<br />}
                                {user.nick}
                            </Typography>
                            <Typography
                                sx={{
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