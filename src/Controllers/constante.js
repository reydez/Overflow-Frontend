import React from "react";
import {
  Button,
  Divider,
  List,
  Toolbar,
  Typography,
  Box
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import logo from '../assets/bgLandingRocket.png'
import Letra from '../assets/logo.png'
const ButtonLogOut = () => {
  const { logout } = useAuth0();
  const user = useSelector((state) => state.userReducer.user);
  

  return (
    <>


      <WelcomeUserMsg>
        <h5>Bienvenido</h5>
        <h4>{user.full_name}</h4>
        <img src={logo} alt="User Badge" />
      </WelcomeUserMsg>
      <Divider />
      {user.isAdmin === true ? (
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <ButtonAdminPanel>
            <button className="ButtonAdminPanel"> <AdminPanelSettingsIcon sx={{ marginRight: "5px", fontSize: "18px" }} />PANEL DE ADMIN</button>
          </ButtonAdminPanel>
        </Link>
      ) : null}

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
            marginTop: '20px'
          }}
        >
          <FavoriteIcon sx={{ fontSize: "18px" }} />
          Danos Amor $$
          <FavoriteIcon sx={{ fontSize: "18px" }} />
        </Button>
      </Link>

      <ButtonLogOutDiv>
        <button className="ButtonLogOut" onClick={() => logout()}>
          <LogoutIcon sx={{ marginRight: "10px", fontSize: "19px" }} />
          Cerrar Sesión
        </button>
      </ButtonLogOutDiv>
    </>
  );
};

const WelcomeUserMsg = styled.div`
  h5{
    color: #A8A3B5;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-family: Segoe UI Symbol;
    margin-bottom: 0px;
    font-size: .7rem;
  } 
  h4{
    margin-top:0px;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: .8rem;
    font-family: Segoe UI Symbol;
  }
  img{

    display: flex;
    margin: 0 auto;
    width: 60px;
    margin-top: -10px;
    margin-bottom: 10px;
  }
`

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
margin-top: 10px;
  .ButtonAdminPanel {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    color: #D81B60;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-family: Segoe UI Symbol;
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
    {/* <Box sx={{ width: '100%', maxWidth: 500, textAlign: 'center', marginLeft: '10px', color: 'text.btnEdit', fontFamily:'cursive'  }}>
      <Typography variant="h5"  component="div" gutterBottom><span>Henry</span><span>Flow</span></Typography>
    </Box> */}
   

      <img src={Letra} style={{ padding:'1px', width:'180px',  marginLeft:'10px', bgcolor: 'white', }} />
      
      
      {/* <h3 style={{ display: 'flex', margin: '0 auto', letterSpacing: '1px' }}>Henry-Flow</h3> */}
    </Toolbar>
    <Divider />
    <List sx={{ bgcolor: "background.white" }}>
      <div style={{ marginTop: '20px' }}>
        <Link to="/questions" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark" ? "#A8A3B5" : "#7165A0",
              "&:hover": { color: "#F50057" },
              marginLeft: '22%'
            }}>
            <HomeIcon sx={{ marginRight: "10px", fontSize: "18px" }} />
            Home
          </Button>
        </Link>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Link to={`/user-profile`} style={{ textDecoration: "none" }}>
          <Button
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark" ? "#A8A3B5" : "#7165A0",
              "&:hover": { color: "#F50057" }, marginLeft: '22%'
            }}>
            <AccountBoxIcon sx={{ marginRight: "10px", fontSize: "18px" }} />
            Mi Perfil
          </Button>
        </Link>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Link to={`/favourites-user`} style={{ textDecoration: "none" }}>
          <Button
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark" ? "#A8A3B5" : "#7165A0",
              "&:hover": { color: "#F50057" }, marginLeft: '22%'
            }}>
            <FavoriteIcon sx={{ marginRight: "10px", fontSize: "18px" }} />
            Mis Favoritos
          </Button>
        </Link>
      </div>
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <Link to={`/all-users`} style={{ textDecoration: "none" }}>
          {/* <Button 
            sx={{ 
              color: (theme) =>
                theme.palette.mode === "dark" ? "#A8A3B5" : "#7165A0",
                "&:hover": { color: "#F50057"}, marginLeft: '22%'
            }}>  
            <PeopleAltIcon sx={{ marginRight: "10px", fontSize: "18px" }} />
            Usuarios
          </Button> */}
        </Link>
      </div>

    </List>
    <Divider />

    <List sx={{ bgcolor: "background.white" }}>
      <ButtonLogOut />
    </List>
  </div>
);

export default drawer;
