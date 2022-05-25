import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';

const drawer= (
    <div>
    <Toolbar />
      <Divider />
      <List>
        {['Home', 'Categorías', 'Comunidad'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ color: 'rgba(168, 163, 181, 1)' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'rgba(168, 163, 181, 1)' }}>
                
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {/*  */}{['Mi Perfil', 'Mis Favoritos'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ color: 'rgba(168, 163, 181, 1)' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'rgba(168, 163, 181, 1)' }}>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} a */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
</div>
)

export default drawer