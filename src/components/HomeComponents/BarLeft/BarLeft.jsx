import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import drawer from "../../../Controllers/constante.js";
import { Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link, useLocation } from "react-router-dom";
import PerfilIcon from "../Perfil/PerfilIcon.jsx";

/* aqui va el componente de lisandro search  */

const drawerWidth = 240;

export default function BarLeft(props) {
  const location = useLocation();

  const { window } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const container = window !== undefined ? window.document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "background.default",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            arial-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Avatar /> */}
          <Link to={"/create-question"} style={{ textDecoration: "none" }}>
            {location.pathname !== "/questions" &&
            location.pathname !== "/user-profile" &&
            location.pathname !== "/all-users" &&
            location.pathname !== "/donar" &&
            location.pathname !== "/favourites-user" ? null : (
              <Button
                variant="primary"
                size="large" /* disableRipple  */
                sx={{
                  width: "176px",
                  height: "36px",
                  marginLeft: "30px",
                  borderRadius: "25px",
                  border: "none",
                  color: "color.letters",
                  "&:hover": { color: "color.filters" },
                  cursor: "pointer",
                  fontSize: "12px",
                  padding: "5px 13px",

                  bgcolor: "color.filters",
                }}
              >
                Hacer una pregunta
              </Button>
            )}
          </Link>

          {location.pathname !== "/questions" ? null : <SearchBar />}
          <PerfilIcon />
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        arial-label="mailbox folder"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {drawer}
        </Drawer>
        
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#392E57" : "#EBEFFE",
            },
          }}
          open
        >
        {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}
