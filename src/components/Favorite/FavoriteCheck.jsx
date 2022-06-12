import { Favorite } from "@mui/icons-material";
import { Button, Checkbox, Grid } from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { setFavorite } from "../../redux/actions/favourite";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

function FavoriteCheck({ idPost }) {
  const user = useSelector((state) => state.userReducer.user);
  const [color, setColor] = useState(false);
   const dispatch = useDispatch();

  function handleClick() {
    dispatch(setColor(!color))
 
    axios
      .put(`http://localhost:3001/favorites/${idPost}/${user.id}`)
      .then((response) => {
        if (response.data === "Added post to favorites") {
          Swal.fire("publicacion agregada a favoritos");
        } else if (response.data === "Removed post from favorites") {
          Swal.fire("publicacion eliminada de favoritos");
        }
      })
      .catch((error) => {
        if (error.response.status === 500) {
          Swal.fire("Algo salio mal :(");
        }
      });
  }

  /*  dispatch(setFavorite(user.id, idPost));
  }
  console.log(user.id, idPost); */
  console.log(color)
  /* const label = { inputProps: { "aria-label": "Checkbox demo" } }; */
  
  return (
    <Grid>
      {/* check de corazon para clickear hacia favoritos */}
   <Button  sx={{
          top: 10,
          left: -50,
        }}>{color === true ? <Favorite onClick={()=> handleClick(!color)} sx={{color:'red'}}/> : <Favorite sx={{color: "#A8A3B5"}}/>}</Button>
    </Grid>
  );
}

export default FavoriteCheck;
