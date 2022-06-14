import React from 'react';
import { Grid, CardMedia } from '@mui/material';
import { useSelector } from 'react-redux';
import PaginationProfile from './PaginationProfile';
// import CardRespuestas from '../cardsPerPagination/CardRespuestas';
import CardLikes from '../cardsPerPagination/CardLikes';

const PaginadoLikes = ({ likesProfile, likes, setLikes }) => {
    const user = useSelector((state) => state.userReducer.user);

    return (
        <Grid
            sx={{
                height: '230px',
                width: '1060px',
                marginLeft: '5px',
                borderRadius: '4px',
                marginBottom: '5px',
                backgroundColor: "background.map",
            }}
        >
            <PaginationProfile
                setQuestionsProfile={setLikes}
                posts={likes}
            />
            {likesProfile?.map((p) => {

                return (
                    <CardLikes
                        key={p.id}
                        p={p}
                        user={user}
                    />
                )
            })}


        </Grid>
    )
}

export default PaginadoLikes