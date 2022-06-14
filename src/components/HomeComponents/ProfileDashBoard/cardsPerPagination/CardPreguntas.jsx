import React, { useEffect, useState } from 'react';
import { Link, Grid, CardMedia, Button } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import { Link as RouterLink } from "react-router-dom";

const CardPreguntas = ({ p, user }) => {

    const [active, setActive] = useState(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const seeClose = () => {
        if (p.closed) setActive(true)
    }

    useEffect(() => {
        seeClose()
    }, [seeClose])


    return (
        <Grid
            container
            key={p.id}
            sx={{
                width: '1045px',
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
            <Grid sx={{ width: "15%" }}> {active ? 'Resuelto' : 'Abierto'} </Grid>
            <Grid sx={{ width: "20%", maginBottom: '20px' }}>
                <Link
                    to={`/visualize-question/${p.id}`}
                    component={RouterLink}
                    color="inherit"
                    underline="none"
                >
                    <Button size="small" variant="outlined" color="success" endIcon={<LinkIcon fontSize="small" />}
                    >   ir</Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default CardPreguntas