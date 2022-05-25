import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function SearchBar() {
  const [palabraBuscada, setPalabraBuscada] = React.useState('')
  
  const onInputChange = (e) => {
    e.preventDefault()
    setPalabraBuscada(e.target.value)
    console.log(e.target.value)
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    (!palabraBuscada) 
      ? Swal.fire(
        '¿Búsqueda vacía?',
        'Por favor decinos que estás buscando...',
        'question'
      )
      : setPalabraBuscada(e.target.value)
        setPalabraBuscada('')
  }

  const onKeyPress = (e) => {        
    if (e.charCode === 13) {
      (!palabraBuscada) 
      ? Swal.fire(
        '¿Búsqueda vacía?',
        'Por favor decinos que estás buscando...',
        'question'
      )
      : setPalabraBuscada(e.target.value)
        setPalabraBuscada('')
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar…"
              inputProps={{ 'aria-label': 'search' }}
              onChange = { onInputChange }
              onKeyPress={ onKeyPress }
            />
            <Button type="submit" onClick={ onSubmit }>Buscar</Button>
          </Search>
        </Toolbar>
    </Box>
  );
}


