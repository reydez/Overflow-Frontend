import React from "react";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import MailIcon from "@mui/icons-material/Mail";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Link } from "react-router-dom";
// import { PlayDisabled } from "@mui/icons-material";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";
import LogoutIcon from "@mui/icons-material/Logout";

const ButtonLogOut = () => {
  const { logout } = useAuth0();
  return (
    <ButtonLogOutDiv>
      <button className="ButtonLogOut" onClick={() => logout()}>
        <LogoutIcon sx={{ marginRight: "10px", fontSize: "19px" }} />
        Cerrar Sesión
      </button>
    </ButtonLogOutDiv>
  );
};

const ButtonLogOutDiv = styled.div`

  .ButtonLogOut {
    display: flex;
    border: 1px solid #a8a3b5;
    border-radius: 10px;
    background-color: transparent;
    color: #7165A0;
    cursor: pointer;
    margin:  auto;
    margin-top: 100px;
    padding: 5px 20px;
    font-style: normal;
    font-weight: 500;
    font-family: Roboto;
    font-size: 15px;
    
  }
`;

const drawer = (
  <div>
    <Toolbar sx={{bgcolor:'background.white'}}/>
    <Divider />
    <List sx={{ bgcolor:'background.white'}}>
      {/* , "Comunidad" */}
      {[
        <Link to="/questions" style={{textDecoration:'none'}}>
          <Button sx={{ color: "#7165A0;", "&:hover": { color: "#F50057" } }}>
            <HomeIcon sx={{ marginRight: "10px", fontSize: "18px" }} />
            Home
          </Button>
        </Link>,
        <Button sx={{ color: "#7165A0;", "&:hover": { color: "#F50057" } }}>
          <ListAltIcon sx={{ marginRight: "10px", fontSize: "18px" }} />{" "}
          Categorías
        </Button>,
        <Divider />,

        <Link to={`/user-profile`} style={{textDecoration:'none'}}>
          <Button sx={{ color: "#7165A0;", "&:hover": { color: "#F50057" } }}>
            <AccountBoxIcon sx={{ marginRight: "10px", fontSize: "18px" }} />
            Mi Perfil
          </Button>
        </Link>,

        <Link to={`/favourites-user`} style={{textDecoration:'none'}}>
        <Button sx={{ color: "#7165A0;", "&:hover": { color: "#F50057" } }}>
          <FavoriteIcon sx={{ marginRight: "10px", fontSize: "18px" }} />
          Mis Favoritos
        </Button>
        </Link>,

        <Link to={`/all-users`} style={{textDecoration:'none'}}>
          <Button sx={{ color: "#7165A0;", "&:hover": { color: "#F50057" } }}>
            <PeopleAltIcon sx={{ marginRight: "10px", fontSize: "18px" }} />
            Usuarios
          </Button>
        </Link>,
      ].map((text, index) => (
        <ListItem
          key={text}
          disablePadding
          sx={{ color: "rgba(168, 163, 181, 1)" }}
        >
          <ListItemButton>
            <ListItemIcon
              sx={{ color: "rgba(168, 163, 181, 1)" }}
            ></ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List >
    <Divider />
    {/* <List> */}
    {/*  */}
    {/*    {["Mi Perfil", "Mis Favoritos"].map((text, index) => (
        <ListItem
          key={text}
          disablePadding
          sx={{ color: "rgba(168, 163, 181, 1)" }}
        > */}
    {/*    <ListItemButton>
            <ListItemIcon sx={{ color: "rgba(168, 163, 181, 1)" }}>
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} a */}
    {/*  </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>  */}
    <List sx={{bgcolor:'background.white'}}>

    <ButtonLogOut />
    </List>
  </div>
);

export default drawer;
