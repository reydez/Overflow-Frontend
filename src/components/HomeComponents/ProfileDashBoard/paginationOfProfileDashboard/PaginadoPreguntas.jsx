import React from 'react'

import { useSelector } from 'react-redux'
import PaginationProfile from './PaginationProfile';
import CardPreguntas from '../cardsPerPagination/CardPreguntas';

const PaginadoPreguntas = ({ questionsProfile, posts, setQuestionsProfile }) => {
    const user = useSelector((state) => state.userReducer.user);

    return (
        <div>
            {questionsProfile?.map((p) => {
                console.log(p)
                return (
                    <CardPreguntas

                        p={p}
                        idPost={p.id}
                        user={user}
                    />
                )
            })}
            <PaginationProfile
                setQuestionsProfile={setQuestionsProfile}
                posts={posts}
            />
        </div>
    )
}

export default PaginadoPreguntas