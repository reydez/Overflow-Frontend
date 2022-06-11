import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

function CircularProgressWithLabel(props) {

  return (
    <Box sx={{ display: 'flex', }}>
      <CircularProgress sx={{ color: 'text.btnEdit', }} variant="determinate" size='100px'  {...props} />
      <Typography sx={{ position: 'absolute', p: 1, ml: 8, marginTop: '27px', fontSize: '18px', fontWeight: 700, color: 'text.btnEdit', marginLeft: '20px', }} variant="caption" component="div" color="text.secondary">
        {`${Math.round(props.value)}%`}
      </Typography>
    </Box>
  );
}
// 

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};


export default function CircularStatic({ userDetail, informationProfile }) {


  const [number, setNumber] = useState(0)

  const validarCircle = (obj) => {

    let count = 0;

    for (const properties in obj) {

      if (obj[properties]?.length >= 8) {
        count = count + 1
        setNumber(count)
      }
    }

    return validacionDos(count)
  }


  const validacionDos = (entero) => {
    if (entero === 7) {
      setNumber(51)
    } else if (entero === 8) {
      setNumber(58)
    } else if (entero === 9) {
      setNumber(66)
    } else if (entero === 10) {
      setNumber(75)
    } else if (entero === 11) {
      setNumber(83)
    } else if (entero === 12) {
      setNumber(90)
    } else if (entero === 13) {
      setNumber(100)
    }
  }

  useEffect(() => {
    validarCircle(userDetail);
    // validacionDos(number)
  }, [validarCircle])

  console.log('este es el number', number)

  return (
    <div>
      <CircularProgressWithLabel value={number} />
    </div>
  );

};



