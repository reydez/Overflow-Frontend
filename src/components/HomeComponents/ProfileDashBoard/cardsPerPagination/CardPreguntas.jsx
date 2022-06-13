import React from 'react'
import { Link, Grid, CardMedia } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

const CardPreguntas = ({ p, user }) => {
    // console.log(p);
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
                color: "text.btnEdit",
                border: '2px solid',
            }}
        >



            <Grid
                sx={{ width: "10%" }}
            >
                <CardMedia
                    sx={{
                        position: "absolute",
                        width: "35px",
                        height: "35px",
                        borderRadius: "75px",
                        marginLeft: "20px",
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
            <Grid sx={{ width: "22%" }}>
                <Link
                    to={`/visualize-question/${p.id}`}
                    component={RouterLink}
                    color="inherit"
                    underline="none"
                >
                    {p?.title.substring(0, 20)}
                </Link>
            </Grid>
            <Grid sx={{ width: "30%" }}>
                <Link
                    to={`/visualize-question/${p.id}`}
                    component={RouterLink}
                    color="inherit"
                    underline="none"
                >

                    {p?.message.substring(0, 30)}
                </Link>
            </Grid>
            <Grid sx={{ width: "15%" }}> Respuestas </Grid>
            <Grid sx={{ width: "10%" }}> Likes/Views </Grid>
        </Grid>
    )
}

export default CardPreguntas