import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function FormUser() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const containerStyles = {
    width: "inheret",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const containerDetailsStyles = {
    width: "30%",
    height: "30%",
    display: "flex",
    background: "white",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };

  const buttonStyles = {
    background: "transparent",
    padding: "5px",
    borderRadius: "10px",
    "&:hover": {
      color: "red",
    },
  };

  return (
    <div style={containerStyles}>
      <div style={containerDetailsStyles}>
        <GitHubIcon />
        <button style={buttonStyles} onClick={() => loginWithRedirect()}>
          Ingresar con github.
        </button>
        {/* <button
          style={buttonStyles}
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout.
        </button> */}
      </div>
    </div>
  );
}
