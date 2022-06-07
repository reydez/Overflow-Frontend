import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SvgIcon from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";
import Swal from "sweetalert2";
import { getQuestionsByName } from "../../../redux/actions/questionsActions";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { ColorModeContext } from "../../../darkMode/index";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SearchBar() {
  const [palabraBuscada, setPalabraBuscada] = React.useState("");
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    e.preventDefault();
    setPalabraBuscada(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    /* !palabraBuscada
      ? Swal.fire(
          "¿Búsqueda vacía?",
          "Por favor decinos que estás buscando...",
          "question"
        )
      :  */ dispatch(getQuestionsByName(palabraBuscada));

    setPalabraBuscada("");
  };

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      /* !palabraBuscada
        ? Swal.fire(
            "¿Búsqueda vacía?",
            "Por favor decinos que estás buscando...",
            "question"
          )
        : */
      dispatch(getQuestionsByName(palabraBuscada));
      /* setPalabraBuscada(e.target.value); */
      setPalabraBuscada("");
    }
  };

  const {mode, toggleMode} = useContext(ColorModeContext);

  return (
    <Box >
          {/* <SearchIconWrapper >
            <SearchIcon  sx={{color:'#A8A3B5', marginLeft: '100px', position:'absolute'}}/>
          </SearchIconWrapper> */}
      <Toolbar > 
        <Search sx={{bgcolor:'#7165A0', borderRadius:3}}> 
          <StyledInputBase sx={{bgcolor: '#7165A0', borderRadius: '10px'}}
            placeholder="Buscar…"
            inputProps={{ "aria-label": "search" }}
            onChange={onInputChange}
            onKeyPress={onKeyPress}
            value={palabraBuscada}
          />
          <Button variant="text" size="small" sx={{ color: "#A8A3B5",  bgcolor: '#7165A0', borderRadius:3, "&:hover": { color: "#BDD96C" } }} type="submit" onClick={onSubmit} >
            Buscar
          </Button>
        </Search>
          <SearchIcon sx={{position:'absolute', color:'#A8A3B5', marginLeft:'35px'}}/>
        <Box sx={{
        marginLeft: 30,
        
        
       
      }}>
        <IconButton size="small" sx={{ bgcolor:'background.default', borderRadius: '30%' }}  onClick={toggleMode} >
          <DarkModeIcon  />
        </IconButton>
      </Box>
      </Toolbar>
    </Box>
  );
}
