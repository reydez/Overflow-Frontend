import React from 'react'
import { Box, Pagination } from '@mui/material'

const PaginationProfile = () => {
    return (
        <Box sx={{
            position: 'absolute',
            display: 'flex',
            marginTop: '350px',
            marginLeft: '450px',
            justifyContent: "center",
            // border: '1px solid red',
            alignItems: 'center'
        }}  >
            <Pagination
                count={4}
            />
        </Box>
    )
}

export default PaginationProfile