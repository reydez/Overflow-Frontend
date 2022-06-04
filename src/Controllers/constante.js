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
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Link } from "react-router-dom";
import { PlayDisabled } from "@mui/icons-material";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const ButtonLogOut = () => {
  const { logout } = useAuth0();
  return <button onClick={() => logout()}>Cerrar session.</button>;
};

const drawer = (
  <div>
    <Toolbar />
    <Divider />
    <List>
      {/* , "Comunidad" */}
      {[
        <Link to="/questions">
          <Button sx={{ color: "#a8a3b5", "&:hover": { color: "red" } }}>
            Home
          </Button>
        </Link>,
        <Button sx={{ color: "#a8a3b5", "&:hover": { color: "red" } }}>
          Categorías
        </Button>,
        <Divider />,
        <Button sx={{ color: "#a8a3b5", "&:hover": { color: "red" } }}>
          Mi Perfil
        </Button>,
        <Button sx={{ color: "#a8a3b5", "&:hover": { color: "red" } }}>
          Mis Favoritos
        </Button>,
        <Button sx={{ color: "#a8a3b5", "&:hover": { color: "red" } }}>
          Usuarios
        </Button>,
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
    <ButtonLogOut />
  </div>
);

export default drawer;
