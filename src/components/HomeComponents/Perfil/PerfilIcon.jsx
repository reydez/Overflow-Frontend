import * as React from "react";
import Badge from "@mui/material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function PerfilIcon() {
  return (
    <>
    <Badge sx={{ bgcolor:"background.default", borderRadius: '30%', marginLeft: '50px'}}>
      <NotificationsIcon  size="small" sx={{bgcolor: '#3C315E'}} />
    </Badge>
    <Badge sx={{bgcolor: 'background.default', borderRadius: '30%', marginLeft: '30px' }}>
      <PersonIcon size="small" sx={{bgcolor: '#3C315E'}} />
    </Badge>
    </>
  );
}