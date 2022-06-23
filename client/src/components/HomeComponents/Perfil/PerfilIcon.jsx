import * as React from "react";
import Badge from "@mui/material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ColorModeContext } from "../../../darkMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userInbox } from "../../../redux/actions/inboxes";
import { useAuth0 } from "@auth0/auth0-react";
import Box from "@mui/material/Box"
import { Button } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function PerfilIcon() {
  const { mode, toggleMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const location = useLocation();
  const userlogin = useSelector((state) => state.userReducer.user);
  const isLogin = useSelector((state) => state.userReducer.isLogin);
  const inbox = useSelector((state) => state.inboxesReducer.inbox);
  const pending = inbox.reduce(
    (prev, curr) => (curr.isActive ? prev + 1 : prev),
    0
  );

  React.useEffect(() => {
    const getInboxFromUser = () => {
      if (!!isLogin) {
        dispatch(userInbox(userlogin.id));
      }
    };
    getInboxFromUser();
  }, [userlogin, isLogin, dispatch]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "end",
        alignItems: "center",
      }}
    >
  
  <Link  style={{ textDecoration: "none" }}>
            {location.pathname !== "/questions" &&
            location.pathname !== "/user-profile" &&
            location.pathname !== "/all-users" &&
            location.pathname !== "/donar" &&
            location.pathname !== "/favourites-user" ? null : (
              <Box
               
                
                sx={{
               
                }}
              >
                
              </Box>
            )}
          </Link>
      <Badge
        sx={{
          bgcolor: "background.default",
          borderRadius: "30%",
          marginLeft: "50px",
          fontSize: "6px",
          
        }}
      >
        <IconButton
          size="small"
          sx={{
            
            borderRadius: "30%",
            position: "relative",
            fontSize: "10px",
            
          }}
        >
          <Link to={"/inbox-user"}>
            <NotificationsIcon size="small"
              sx={{ cursor: "pointer", color: "text.btnEdit" }}
              
              onClick={() => console.log("si se puede")}
            />
            {pending ? (
              <Box size="small" sx={{ color: "#F50057;",
              position: "absolute",
              top: -18,
              right: -9,
              padding: "5px",
              zIndex: "5",
              borderRadius: "50px",
              fontSize: "19px",
              fontWeight: "900"
            
            }}
              
              >
                {pending}
              </Box>
            ) : null}
          </Link>
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
          sx={{ color:"text.btnEdit", bgcolor: "background.default", borderRadius: "30%", }}
          onClick={toggleMode}
        >
          { mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
       
        {/* <IconButton
          size="small"
          sx={{ bgcolor: "background.default", borderRadius: "30%" }}
        >
          <PersonIcon size="small" sx={{ cursor: "pointer" }} />
        </IconButton> */}
      </Badge>
    </div>
  );
}
