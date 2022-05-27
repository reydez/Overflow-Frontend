import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Link from '@mui/material/Link';

const name = ['Damian Olmedo', 'Matias', 'Lissandro']
const emails = ['https://www.linkedin.com/in/damian-olmedo-fullstackdeveloper/', 'https://www.linkedin.com/in/lisandro-mansilla', 'https://www.linkedin.com/in/rodrigo-reyes-hernandez/', 'https://www.linkedin.com/in/matias-r-romero/'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
      
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Contactanos</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
            <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <Link href={email}>
            <ListItemText primary={email} />
            </Link>
          </ListItem>
        
        ))}
        
       
      </List>
    </Dialog>
  
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function ContactUs() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
        
      <Button onClick={handleClickOpen}>
        Contactanos
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

