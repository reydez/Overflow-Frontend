import * as React from "react";
import Badge from "@mui/material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function PerfilIcon() {
  return (
    <>
    <Badge sx={{color: 'black', background: '#3C315E', borderRadius: '30%', marginLeft: '50px'}}>
      <NotificationsIcon  size="small" sx={{color: 'white'}} />
    </Badge>
    <Badge sx={{color: 'black', background: '#3C315E', borderRadius: '30%', marginLeft: '30px' }}>
      <PersonIcon size="small" sx={{color: 'white'}} />
    </Badge>
    </>
  );
}