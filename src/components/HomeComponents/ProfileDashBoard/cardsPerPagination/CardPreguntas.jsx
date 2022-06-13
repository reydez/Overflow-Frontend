import React, { useState } from 'react'
import { Grid, CardMedia, Switch } from "@mui/material";
import { useDispatch } from 'react-redux';
import { finishedPost } from '../../../../redux/actions/user';

const CardPreguntas = ({ p, idPost, user }) => {
    const dispatch = useDispatch()

    const [checked, setChecked] = useState(true);
    const [disable, setDisable] = useState(false);


    const handleChange = (event) => {
        setDisable(true)
        setChecked(event.target.checked);
        // console.log('Hola he sido seteado', checked);
        dispatch(finishedPost(
            idPost,
            {
                finished: checked
            },
            user.id
        ))
    };

    // console.log(`Hola soy: ${checked}`)
    return (
        <Grid
            container
            key={p.id}
            sx={{
                width: '1060px',
                height: "55px",
                marginLeft: '10px',
                marginTop: '12px',
                padding: '14px 0px',
                borderRadius: '4px',
                backgroundColor: "background.mapeado",
                color: "text.btnEdit"
            }}
        >

            <Grid sx={{ width: "10%" }}>
                <Switch
                    disabled={disable}
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
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
                    image={user?.image}
                    alt={user?.name}
                />
            </Grid>
            <Grid sx={{ width: "22%" }}> {p?.title.substring(0, 20)} </Grid>
            <Grid sx={{ width: "30%" }}> {p?.message.substring(0, 30)} </Grid>
            <Grid sx={{ width: "15%" }}> Respuestas </Grid>
            <Grid sx={{ width: "10%" }}> Likes/Views </Grid>
        </Grid>
    )
}

export default CardPreguntas