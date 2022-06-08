import * as React from "react";
import Badge from "@mui/material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ColorModeContext } from "../../../darkMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import IconButton from "@mui/material/IconButton";

export default function PerfilIcon() {
  const { mode, toggleMode } = useContext(ColorModeContext);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "end",
        alignItems: "center",
      }}
    >
      <Badge
        sx={{
          bgcolor: "background.default",
          borderRadius: "30%",
          marginLeft: "50px",
        }}
      >
        <IconButton
          size="small"
          sx={{ bgcolor: "background.default", borderRadius: "30%" }}
        >
          <NotificationsIcon
            size="small"
            onClick={() => console.log("si se puede")}
            sx={{ cursor: "pointer" }}
          />
        </IconButton>
      </Badge>
      <Badge
        sx={{
          bgcolor: "background.default",
          borderRadius: "30%",
          marginLeft: "30px",
        }}
      >
        <IconButton
          size="small"
          sx={{ bgcolor: "background.default", borderRadius: "30%" }}
        >
          <PersonIcon size="small" sx={{ cursor: "pointer" }} />
        </IconButton>
      </Badge>
      <Badge
        sx={{
          bgcolor: "background.default",
          borderRadius: "30%",
          marginLeft: "30px",
        }}
      >
        <IconButton
          size="small"
          sx={{ bgcolor: "background.default", borderRadius: "30%" }}
          onClick={toggleMode}
        >
          <DarkModeIcon />
        </IconButton>
      </Badge>
    </div>
  );
}
