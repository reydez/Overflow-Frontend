import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../../../../redux/actions/user';

const Service = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userReducer.user);
    const profileDetail = useSelector(state => state.user.userDetail)


    const QuestionsPerProfile = profileDetail.posts


    useEffect(() => {
        dispatch(getUserProfile(user.id))
    });

    const service = {
        getData: () => {
            return new Promise((resolve, reject) => {
                resolve({
                    count: QuestionsPerProfile.length,
                    data: QuestionsPerProfile
                })
            })
        }
    }

    return (
        <div>

        </div>
    )
}

export default Service