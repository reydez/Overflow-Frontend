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
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const ButtonLogOut = () => {
  const { logout } = useAuth0();
  const user = useSelector((state) => state.userReducer.user);

  return (
    <>
      {user.isAdmin === true ? (
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <ButtonAdminPanel>
            <button className="ButtonAdminPanel"> <AdminPanelSettingsIcon sx={{ marginRight: "5px", fontSize: "18px" }} />PANEL DE ADMIN</button>
          </ButtonAdminPanel>
        </Link>
      ) : null}

      <ButtonLogOutDiv>
        <button className="ButtonLogOut" onClick={() => logout()}>
          <LogoutIcon sx={{ marginRight: "10px", fontSize: "19px" }} />
          Cerrar Sesión
        </button>
      </ButtonLogOutDiv>
      
      <Link
        to="/donar"
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            color: "#7165A0;",
            "&:hover": { color: "#F50057", background: "white" },
            border: "1px solid grey",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FavoriteIcon sx={{ fontSize: "18px" }} />
          Danos Amor $$
          <FavoriteIcon sx={{ fontSize: "18px" }} />
        </Button>
      </Link>
      ,
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

const ButtonAdminPanel = styled.div`
  .ButtonAdminPanel {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    color: #D81B60;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-family: Roboto;
    font-size: 15px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 5px 10px;
    :hover {
      border-radius: 15px;
      color: #fafafa;
      background-color: #D81B60;
    }
  }
`

const drawer = (
  <div>
    <Toolbar sx={{ bgcolor: "background.white" }}>
      <h3 style={{ display: 'flex', margin:'0 auto', letterSpacing: '1px' }}>Henry-Flow</h3>
    </Toolbar>
    <Divider />
    <List sx={{ bgcolor: "background.white", /* border: '2px solid orange', */ margin:'auto' }}>
      {[
        <Link to="/questions" style={{ textDecoration: "none" }}>
          <Button sx={{ color: "#7165A0;", "&:hover": { color: "#F50057" } }}>
            <HomeIcon sx={{ marginRight: "10px", fontSize: "18px" }} />
            Home
          </Button>
        </Link>,
        <Divider />,

        <Link to={`/user-profile`} style={{ textDecoration: "none" }}>
          <Button sx={{ color: "#7165A0;", "&:hover": { color: "#F50057" }, margin: 'auto' }}>
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
