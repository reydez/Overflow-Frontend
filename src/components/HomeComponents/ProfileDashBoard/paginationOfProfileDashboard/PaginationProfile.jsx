import React, { useState, useEffect } from 'react'
import { Box, Pagination } from '@mui/material'
// import { useSelector, useDispatch } from 'react-redux';
// import { getUserProfile } from '../../../../redux/actions/user';


const pageSize = 3;

const PaginationProfile = ({ posts, setQuestionsProfile }) => {
    // const dispatch = useDispatch()
    // const user = useSelector((state) => state.userReducer.user);
    // const profileDetail = useSelector(state => state.user.userDetail)


    const QuestionsPerProfile = posts


    // useEffect(() => {
    //     dispatch(getUserProfile(user.id))
    // }, [dispatch]);

    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: pageSize

    })
    const service = {
        getData: ({ from, to }) => {
            return new Promise((resolve, reject) => {
                const data = QuestionsPerProfile.slice(from, to)

                resolve({
                    count: QuestionsPerProfile.length,
                    data: data
                })
            })
        }
    }

    useEffect(() => {
        service.getData({ from: pagination.from, to: pagination.to })
            .then(response => {
                setPagination({ ...pagination, count: response.count })
                setQuestionsProfile(response.data)
            })
    }, [pagination.from, pagination.to])


    const handlePageChange = (event, page) => {
        const from = (page - 1) * pageSize;
        const to = (page - 1) * pageSize + pageSize;

        setPagination({ ...pagination, from: from, to: to })
    }
    // console.log(QuestionsPerProfile);
    return (
        <Box sx={{
            position: 'absolute',
            display: 'flex',
            marginTop: '230px',
            marginLeft: '450px',
            justifyContent: "center",
            // border: '1px solid red',
            alignItems: 'center'
        }}  >
            <Pagination
                count={Math.ceil(pagination.count / pageSize)}
                onChange={handlePageChange}
            />
        </Box>
    )
}

export default PaginationProfile