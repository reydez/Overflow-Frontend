import React from 'react';
import { Grid } from "@mui/material";
import { useSelector } from 'react-redux'
import PaginationProfile from './PaginationProfile';
import CardPreguntas from '../cardsPerPagination/CardPreguntas';


const PaginadoPreguntas = ({ questionsProfile, posts, setQuestionsProfile }) => {
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
                setQuestionsProfile={setQuestionsProfile}
                posts={posts}
            />
            {questionsProfile?.map((p) => {
                return (
                    <CardPreguntas
                        key={p.id}
                        p={p}
                        idPost={p.id}
                        user={user}
                    />
                )
            })}

        </Grid>
    )
}

export default PaginadoPreguntas