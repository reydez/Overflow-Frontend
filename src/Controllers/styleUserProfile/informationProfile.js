import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography, CardMedia, Card, Grid, Chip } from "@mui/material";


export const PersonalInformation = (info) => {
    return (
        <Grid
            sx={{
                // position: "absolute",
                // width: "58px",
                // height: "16px",
                // fontFamily: "Segoe UI Symbol",
                // fontStyle: "normal",
                // fontWeight: "500",
                // fontSize: "14px",
                // lineHeight: "16px",
                // color: "#A7A9BA",
                // marginLeft: "172px",
                // marginTop: "50px",
                // width: '78%',
                // marginLeft: '2%',
                // backgroundColor: 'background.profilePhotos', borderRadius: '16px'
                width: '96%',
                margin: '0 auto',
                marginTop: '20px',

            }}
        >
            <Grid
                sx={{
                    width: '20%', height: '260px', backgroundColor: 'background.profilePhotos'
                }}
            >
                <Typography sx={{ fontFamily: 'Segoe UI Symbol', fontSize: '18px', fontWeight: 700 }}>GitHub User:</Typography>
                <Typography>{info?.github}</Typography>


                <Typography sx={{ fontFamily: 'Segoe UI Symbol', fontSize: '18px', fontWeight: 700 }}>Nombre:</Typography>
                {/* <Chip> */}
                {/* {info?.first_name} */}
                <Typography>{info?.first_name}</Typography>
                {/* </Chip> */}


                <Typography sx={{ fontFamily: 'Segoe UI Symbol', fontSize: '18px', fontWeight: 700 }}>Apellido:</Typography>
                <Typography>{info?.last_name}</Typography>
            </Grid>

            <Grid
                sx={{
                    width: '28%', marginLeft: '2%', backgroundColor: 'background.profilePhotos', borderRadius: '16px'
                }}
            >
                <Typography sx={{ fontFamily: 'Segoe UI Symbol', fontSize: '18px', fontWeight: 700 }}>Portfolio:</Typography>
                <Typography>{info?.portfolio}</Typography>


                <Typography sx={{ fontFamily: 'Segoe UI Symbol', fontSize: '18px', fontWeight: 700 }}>Github link:</Typography>
                {/* <Chip> */}
                {/* {info?.first_name} */}
                <Typography>{info?.github}</Typography>
                {/* </Chip> */}


                <Typography sx={{ fontFamily: 'Segoe UI Symbol', fontSize: '18px', fontWeight: 700 }}>Twitter:</Typography>
                <Typography>{info?.twitter}</Typography>
            </Grid>



        </Grid>
    )
}