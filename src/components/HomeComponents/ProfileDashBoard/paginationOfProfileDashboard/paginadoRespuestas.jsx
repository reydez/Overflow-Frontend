import React from 'react';
import {Grid, CardMedia} from '@mui/material';
import { useSelector } from 'react-redux';
import PaginationProfile from './PaginationProfile';

const PaginadoRespuestas = ({ commentsProfile, comments, setCommentsProfile }) => {
    const user = useSelector((state) => state.userReducer.user);
    const question = useSelector((state) => state.userReducer.user);



    return (
        <div>
             {commentsProfile?.map((p) => {

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
        {/* <Grid sx={{ width: "22%" }}> {p?.title.substring(0, 40)} </Grid> */}
        <Grid sx={{ width: "30%" }}> {p?.message.substring(0, 40)} </Grid>
        <Grid sx={{ width: "15%" }}> Respuestas </Grid>
        <Grid sx={{ width: "10%" }}> Likes/Views </Grid>
    </Grid>
)
})}
      <PaginationProfile
                setQuestionsProfile={setCommentsProfile}
                posts={comments}
            />

        </div>
    )
}



export default PaginadoRespuestas;