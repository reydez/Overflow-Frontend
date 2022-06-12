import * as React from "react";
import Badge from "@mui/material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ColorModeContext } from "../../../darkMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userInbox } from "../../../redux/actions/inboxes";
import { useAuth0 } from "@auth0/auth0-react";

export default function PerfilIcon() {
  const { mode, toggleMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
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
      <Badge
        sx={{
          bgcolor: "background.default",
          borderRadius: "30%",
          marginLeft: "50px",
        }}
      >
        <IconButton
          size="small"
          sx={{
            bgcolor: "background.default",
            borderRadius: "30%",
            position: "relative",
          }}
        >
          <Link to={"/inbox-user"}>
            <NotificationsIcon
              size="small"
              onClick={() => console.log("si se puede")}
              sx={{ cursor: "pointer", bgcolor: "background.default" }}
            />
            {pending ? (
              <p
                style={{
                  color: "red",
                  position: "absolute",
                  top: -30,
                  right: -7,
                  padding: "5px",
                  zIndex: "5",
                  background: "transparent",
                  borderRadius: "50px",
                }}
              >
                {pending}
              </p>
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
