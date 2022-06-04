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
import { Link } from "react-router-dom";
import PerfilIcon from "../Perfil/PerfilIcon.jsx";


/* aqui va el componente de lisandro search  */

const drawerWidth = 240;

export default function BarLeft(props) {
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
          backgroundColor: "#301b70",
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
          <Link to={"/create-question"}>
            <Button /* disableRipple  */
              sx={{
                marginLeft: "30px",
                borderRadius: "20px",
                color: "#413a66",
                fontSize: "12px",
                padding: "5px 10px",
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                boxShadow: "0 3px 5px 2px rgba(255,105,135, .3)",
              }}
            >
              Hacer una pregunta
            </Button>
          </Link>
          <SearchBar />
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
              background: "rgba(57, 46, 87, 1)",
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
              background: "rgba(57, 46, 87, 1)",
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
