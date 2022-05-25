import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { yellow, deepPurple, green, red, blue } from '@mui/material/colors';
import { Button, ButtonGroup } from '@mui/material';

export default function Avatars() {
  return (
    <Stack direction="row" spacing={2}>
    <ButtonGroup variant="container" arial-label="container button group" sx={{bgcolor: "transparent"}}>
      <Button size="large" ><Avatar size="small" sx={{ bgcolor: deepPurple[700], color: yellow[500] }}>M1</Avatar></Button>
      <Button><Avatar sx={{ bgcolor: deepPurple[700], color: green[500] }}>M2</Avatar></Button>
      <Button><Avatar sx={{ bgcolor: deepPurple[700], color: red[300] }}>M3</Avatar></Button>
      <Button><Avatar sx={{ bgcolor: deepPurple[700], color: blue[300] }}>M4</Avatar></Button>
      </ButtonGroup>
    </Stack>
  );
}
