import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useEffect, useState} from 'react';

function CircularProgressWithLabel(props) {
  return (
    <Box  sx={{ position: 'relative', display: 'inline-flex'}}>
      <CircularProgress  sx={{color: 'text.btnEdit',    }} variant="determinate" size='80px'  {...props} />
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

  const validarCircle = (informationProfile) => {
    let number = 0;

    if (informationProfile.firstName) {
        number = + 16.6;
    } else if (informationProfile.lastName) {
        number = + 16.6;
    } else if (informationProfile.role) {
        number = + 16.6;
    } else if (informationProfile.twitter) {
        number = + 16.6;
    } else if (informationProfile.github) {
        number = + 16.6;
    } else if (informationProfile.portfolio) {
        number = + 16.6;
    } else if (informationProfile.linkedin) {
        number = + 16.6;
    }

    return Math.ceil(number)
}

  

const [valueCircle, setValueCircle] = useState(0)


  useEffect(() => {

    setValueCircle(validarCircle(informationProfile))
    // console.log("Fase de Actualizar")
    // const perfilComplete = () => setInformationProfile('')
    
    
    
  }, [setValueCircle] );
  console.log(valueCircle)

// useEffect(() => {
//     const timer = setInterval(() => {
//       setInformationProfile((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   },[]);

  return <CircularProgressWithLabel value={valueCircle} />;
}
