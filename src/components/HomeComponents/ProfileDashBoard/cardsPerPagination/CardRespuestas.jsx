import React from 'react'
import { Link, Grid, CardMedia, Button } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import { Link as RouterLink } from "react-router-dom";

const CardRespuestas = ({ p, user }) => {
    // console.log(p);
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
                    image={user?.image}
                    alt={user?.name}
                />
            </Grid>
            <Grid sx={{ width: "30%" }}>
                {p?.message.substring(0, 30)}
            </Grid>
            <Grid sx={{ width: "20%", maginBottom: '20px' }}>
                <Link
                    to={`/visualize-question/${p.postId}`}
                    component={RouterLink}
                    color="inherit"
                    underline="none"
                // color="text.btnEdit"
                >
                    <Button size="small" variant="outlined" color="success" endIcon={<LinkIcon fontSize="small" />}
                    >   ir</Button>
                </Link>
            </Grid>


        </Grid >
    )
}

export default CardRespuestas