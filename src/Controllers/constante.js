import React, { useState } from "react";
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
import { useSelector } from "react-redux";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

import PaypalC from '../components/Paypal/PaypalC'

import Plan1 from "./Paypal/Plan1";
import Plan2 from "./Paypal/Plan2";
import Plan3 from "./Paypal/Plan3"

const ButtonLogOut = () => {
  const { logout } = useAuth0();
  const user = useSelector((state) => state.userReducer.user);

  return (
    <>
      {user.isAdmin === true ? (
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              color: "red;",
              "&:hover": { color: "#F50057" },
              margin: "30px",
            }}
          >
            <AdminPanelSettingsIcon sx={{ fontSize: "18px" }} />
            Panel de Admin
          </Button>
        </Link>
      ) : null}
      <ButtonLogOutDiv>
        <button className="ButtonLogOut" onClick={() => logout()}>
          <LogoutIcon sx={{ marginRight: "10px", fontSize: "19px" }} />
          Cerrar Sesión
        </button>
      </ButtonLogOutDiv>
      
      <Link to='/donar'><button className='volver'>Donar</button></Link>
    </>
  );
};

const ButtonLogOutDiv = styled.div`
  .ButtonLogOut {
    display: flex;
    border: 1px solid #a8a3b5;
    border-radius: 10px;
    background-color: transparent;
    color: #7165a0;
    cursor: pointer;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 20px;
    padding: 5px 20px;
    font-style: normal;
    font-weight: 500;
    font-family: Roboto;
    font-size: 15px;
  }
`;

const drawer = (
  <div>
    <Toolbar sx={{ bgcolor: "background.white" }} />
    <Divider />
    <List sx={{ bgcolor: "background.white" }}>
      {/* , "Comunidad" */}
      {[
        <Link to="/questions" style={{ textDecoration: "none" }}>
          <Button sx={{ color: "#7165A0;", "&:hover": { color: "#F50057" } }}>
            <HomeIcon sx={{ marginRight: "10px", fontSize: "18px" }} />
            Home
          </Button>
        </Link>,

        <Divider />,

        <Link to={`/user-profile`} style={{ textDecoration: "none" }}>
          <Button sx={{ color: "#7165A0;", "&:hover": { color: "#F50057" } }}>
            <AccountBoxIcon sx={{ marginRight: "10px", fontSize: "18px" }} />
            Mi Perfil
          </Button>
        </Link>,

        <Link to={`/favourites-user`} style={{ textDecoration: "none" }}>
          <Button sx={{ color: "#7165A0;", "&:hover": { color: "#F50057" } }}>
            <FavoriteIcon sx={{ marginRight: "10px", fontSize: "18px" }} />
            Mis Favoritos
          </Button>
        </Link>,

        <Link to={`/all-users`} style={{ textDecoration: "none" }}>
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
    </List>
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
    <List sx={{ bgcolor: "background.white" }}>
      <ButtonLogOut />
    </List>
  </div>
);

export default drawer;
