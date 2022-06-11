import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useEffect, useState} from 'react';

function CircularProgressWithLabel(props) {
  return (
    <Box  sx={{ position: 'relative', display: 'inline-flex'}}>
      <CircularProgress  sx={{color: 'text.btnEdit',    }} variant="buffer" size='80px'  {...props} />
      {/* <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          
        }}
      >
        <Typography variant="caption" component="div" color="text.primary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box> */}
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};


export default function CircularStatic({informationProfile, setInformationProfile}) {
 let complete;
  
  // useEffect(() => {
  //   console.log("Fase de Montaje")

  //   const completePerfil = setInterval(() => {
  //     setInformationProfile((prevProgress) => (prevProgress >= 10 ? 0 : prevProgress + 10));
  //   },setInformationProfile);
  //     completePerfil()
  // })

  useEffect(() => {
    console.log("Fase de Actualizar")
    const perfilComplete = () => setInformationProfile('')
    
   
    
  }, [informationProfile] );

// useEffect(() => {
//     const timer = setInterval(() => {
//       setInformationProfile((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   },[]);

  return <CircularProgressWithLabel value={informationProfile} />;
}
