import React from 'react';
import { Grid, CardMedia } from '@mui/material';
import { useSelector } from 'react-redux';
import PaginationProfile from './PaginationProfile';
import CardRespuestas from '../cardsPerPagination/CardRespuestas';

const PaginadoRespuestas = ({ commentsProfile, comments, setCommentsProfile }) => {
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
                setQuestionsProfile={setCommentsProfile}
                posts={comments}
            />
            {commentsProfile?.map((p) => {

                return (
                    <CardRespuestas
                        key={p.id}
                        p={p}
                        user={user}
                    />
                )
            })}


        </Grid>
    )
}



export default PaginadoRespuestas;